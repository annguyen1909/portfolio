"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Component, useEffect, useMemo, useRef, type ReactNode, type RefObject } from "react";
import { CurvePath, Group, LineCurve3, MathUtils, Mesh, Vector3 } from "three";

export type ArchitectureInput = { x: number; y: number; scroll: number };

type ArchitectureProps = {
  input: RefObject<ArchitectureInput>;
  active: boolean;
  onReady: () => void;
  onError: () => void;
};

type Point = [number, number, number];

const layers = [
  { y: 1, width: 3.4, depth: 2.6, color: "#222933" },
  { y: 0, width: 3.7, depth: 2.9, color: "#1c242e" },
  { y: -1, width: 4, depth: 3.2, color: "#17202a" },
];

const routes: Point[][] = [
  [[-1.5, 1.07, .8], [-.55, 1.07, .8], [-.55, 1.07, -.4], [.6, 1.07, -.4], [.6, 1.07, -1.1]],
  [[1.7, .07, .95], [.65, .07, .95], [.65, .07, .25], [-.6, .07, .25], [-.6, .07, -1.2]],
  [[-1.3, -.93, -1.3], [-1.3, -.93, -.4], [.25, -.93, -.4], [.25, -.93, 1.2], [1.7, -.93, 1.2]],
];

function Segments({ positions, color, opacity = 1 }: { positions: Float32Array; color: string; opacity?: number }) {
  return (
    <lineSegments>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </lineSegments>
  );
}

function Plate({ width, depth, color, index }: { width: number; depth: number; color: string; index: number }) {
  const { outline, traces } = useMemo(() => {
    const x = width / 2;
    const z = depth / 2;
    const edges = [-x, .055, -z, x, .055, -z, x, .055, -z, x, .055, z, x, .055, z, -x, .055, z, -x, .055, z, -x, .055, -z];
    const lines: number[] = [];
    for (let lane = 0; lane < 5; lane++) {
      const offset = -.85 + lane * .38;
      lines.push(-x + .12, .063, offset, -.9, .063, offset, -.9, .063, offset, -.9, .063, -z + .18);
      lines.push(.85, .063, offset + .15, x - .12, .063, offset + .15);
    }
    const route = routes[index];
    for (let point = 0; point < route.length - 1; point++) {
      lines.push(route[point][0], .064, route[point][2], route[point + 1][0], .064, route[point + 1][2]);
    }
    return { outline: new Float32Array(edges), traces: new Float32Array(lines) };
  }, [width, depth, index]);

  return (
    <>
      <mesh>
        <boxGeometry args={[width, .1, depth]} />
        <meshStandardMaterial color={color} roughness={.48} metalness={.35} />
      </mesh>
      <Segments positions={outline} color="#559bed" opacity={.75} />
      <Segments positions={traces} color="#3974af" opacity={.6} />
      {index === 0 && [-.52, .52].map((x, panel) => (
        <group key={x} position={[x, .1, 0]}>
          <mesh><boxGeometry args={[.9, .08, 1.05]} /><meshStandardMaterial color="#334352" roughness={.4} metalness={.5} /></mesh>
          {[0, 1, 2].map(line => (
            <mesh key={line} position={[-.08, .045, -.25 + line * .2]}>
              <boxGeometry args={[line === 0 ? .52 : .35, .006, .026]} /><meshBasicMaterial color={panel === 0 ? "#619ccc" : "#466480"} />
            </mesh>
          ))}
        </group>
      ))}
      {index === 1 && (
        <>
          <mesh position={[0, .15, 0]}><boxGeometry args={[1.15, .2, .8]} /><meshStandardMaterial color="#283b50" roughness={.4} metalness={.5} /></mesh>
          <mesh position={[0, .255, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[.78, .48]} /><meshBasicMaterial color="#2589ff" toneMapped={false} /></mesh>
        </>
      )}
      {index === 2 && Array.from({ length: 5 }, (_, bank) => (
        <group key={bank} position={[-.56 + bank * .28, .17, 0]}>
          <mesh><boxGeometry args={[.17, .24, 1.3]} /><meshStandardMaterial color="#3a4857" roughness={.45} metalness={.5} /></mesh>
          <mesh position={[0, .125, .42]}><boxGeometry args={[.1, .006, .18]} /><meshBasicMaterial color="#518bc1" /></mesh>
        </group>
      ))}
      {[-1, 1].flatMap(side => [-1, 1].map(end => (
        <group key={`${side}-${end}`} position={[side * (width / 2 - .42), .12, end * (depth / 2 - .35)]}>
          <mesh><boxGeometry args={[.35, .13, .23]} /><meshStandardMaterial color="#283a50" roughness={.55} metalness={.6} /></mesh>
          <mesh position={[0, .07, 0]}><boxGeometry args={[.16, .012, .11]} /><meshBasicMaterial color="#599fe8" /></mesh>
        </group>
      )))}
      {index === 1 && Array.from({ length: 7 }, (_, pin) => (
        <mesh key={pin} position={[-.42 + pin * .14, .12, .5]}>
          <boxGeometry args={[.04, .04, .16]} /><meshStandardMaterial color="#74879c" metalness={.7} roughness={.45} />
        </mesh>
      ))}
    </>
  );
}

function SystemModel({ input, onReady, onError }: Omit<ArchitectureProps, "active">) {
  const root = useRef<Group>(null);
  const plates = useRef<(Group | null)[]>([]);
  const links = useRef<Group>(null);
  const packets = useRef<(Mesh | null)[]>([]);
  const time = useRef(0);
  const ready = useRef(false);
  const { gl, size } = useThree();
  const paths = useMemo(() => routes.map(route => {
    const path = new CurvePath<Vector3>();
    for (let i = 0; i < route.length - 1; i++) path.add(new LineCurve3(new Vector3(...route[i]), new Vector3(...route[i + 1])));
    return path;
  }), []);
  const connectors = useMemo(() => new Float32Array(
    [-1, 1].flatMap(x => [-1, 1].flatMap(z => [x * 1.3, -1, z * .95, x * 1.3, 1, z * .95])),
  ), []);

  useEffect(() => {
    const canvas = gl.domElement;
    const handleLoss = (event: Event) => { event.preventDefault(); onError(); };
    canvas.addEventListener("webglcontextlost", handleLoss);
    return () => canvas.removeEventListener("webglcontextlost", handleLoss);
  }, [gl, onError]);

  useFrame((_, delta) => {
    if (!root.current) return;
    if (!ready.current) { ready.current = true; onReady(); }
    // Accumulate only visible time, so returning to the hero never jumps ahead.
    time.current += Math.min(delta, .05);
    const dt = Math.min(delta, .05);
    const spread = 1 + input.current.scroll * .35 + Math.exp(-time.current * 2) * .28;
    root.current.rotation.y = MathUtils.damp(root.current.rotation.y, -.16 + input.current.x * .16, 4, dt);
    root.current.rotation.x = MathUtils.damp(root.current.rotation.x, input.current.y * .08, 4, dt);
    root.current.position.y = Math.sin(time.current * .65) * .025 - input.current.scroll * .12;
    plates.current.forEach((plate, i) => {
      if (plate) plate.position.y = MathUtils.damp(plate.position.y, layers[i].y * spread, 5, dt);
    });
    if (links.current) links.current.scale.y = spread;
    packets.current.forEach((packet, i) => {
      if (!packet) return;
      packet.position.copy(paths[i].getPoint((time.current * .12 + i / 3) % 1));
      packet.position.y = (plates.current[i]?.position.y ?? layers[i].y) + .07;
    });
  });

  return (
    <group ref={root} rotation={[0, -.16, 0]} scale={Math.min(size.width / 640, size.height / 650, 1.25)}>
      {layers.map((layer, i) => (
        <group key={i} ref={node => { plates.current[i] = node; }} position={[0, layer.y * 1.28, 0]}>
          <Plate {...layer} index={i} />
        </group>
      ))}
      <group ref={links}><Segments positions={connectors} color="#4587c8" opacity={.35} /></group>
      {paths.map((_, i) => (
        <mesh key={i} ref={node => { packets.current[i] = node; }}>
          <sphereGeometry args={[.035, 8, 6]} /><meshBasicMaterial color="#a4d2ff" toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function HeroArchitecture({ active, ...props }: ArchitectureProps) {
  return (
    <SceneBoundary onError={props.onError}>
      <Canvas
        orthographic
        camera={{ position: [6, 5.2, 8], zoom: 105, near: .1, far: 50 }}
        dpr={[1, 1.5]}
        frameloop={active ? "always" : "never"}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        fallback={null}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 6, 4]} intensity={3} color="#dce8f5" />
        <directionalLight position={[-4, 2, -3]} intensity={.7} color="#2589ff" />
        <SystemModel {...props} />
      </Canvas>
    </SceneBoundary>
  );
}
