import Image from "next/image";
import { Barcode, BrainCircuit, Cable, Code2, Cpu, FileSpreadsheet, Network, QrCode, Radio, SquarePen } from "lucide-react";

const logos: Record<string, { icon: string; monochrome?: boolean }> = {
  react: { icon: "react" },
  "react three fiber": { icon: "react" },
  "next.js": { icon: "nextjs" },
  "next.js (app router)": { icon: "nextjs" },
  typescript: { icon: "typescript" },
  javascript: { icon: "javascript" },
  html: { icon: "html5" },
  html5: { icon: "html5" },
  css: { icon: "css3" },
  css3: { icon: "css3" },
  "tailwind css": { icon: "tailwindcss" },
  tailwindcss: { icon: "tailwindcss" },
  "node.js": { icon: "nodejs" },
  postgresql: { icon: "postgresql" },
  prisma: { icon: "prisma", monochrome: true },
  "three.js": { icon: "threejs", monochrome: true },
  vite: { icon: "vitejs" },
  "vite.js": { icon: "vitejs" },
  python: { icon: "python" },
  "c++": { icon: "cplusplus" },
  "react router": { icon: "reactrouter" },
  remix: { icon: "remix", monochrome: true },
  wordpress: { icon: "wordpress", monochrome: true },
  php: { icon: "php" },
  graphql: { icon: "graphql" },
  elasticsearch: { icon: "elasticsearch" },
  "google cloud vision": { icon: "googlecloud" },
  "puppeteer-core": { icon: "puppeteer" },
  "@sparticuz/chromium": { icon: "chromium" },
  fastapi: { icon: "fastapi" },
  figma: { icon: "figma" },
  blender: { icon: "blender" },
  vercel: { icon: "vercel", monochrome: true },
  "vercel-compatible deployment": { icon: "vercel", monochrome: true },
  "socket.io": { icon: "socketio", monochrome: true },
  "framer motion": { icon: "framermotion", monochrome: true },
  stripe: { icon: "stripe" },
  resend: { icon: "resend" },
  pusher: { icon: "pusher" },
  "drizzle orm": { icon: "drizzle" },
  "headless ui": { icon: "headlessui" },
  "react-hook-form": { icon: "reacthookform" },
  zod: { icon: "zod" },
  i18next: { icon: "i18next" },
  brevo: { icon: "brevo" },
  mdx: { icon: "mdx" },
  webgl: { icon: "webgl" },
  "zalo api integration": { icon: "zalo" },
  "openai api": { icon: "openai" },
  typesense: { icon: "typesense", monochrome: true },
};

const symbols: Record<string, typeof Code2> = {
  "ai tools": BrainCircuit,
  "large language models": BrainCircuit,
  "machine learning": Network,
  "osc protocol": Radio,
  iot: Cpu,
  "hardware integration": Cable,
  exceljs: FileSpreadsheet,
  tiptap: SquarePen,
  qrcode: QrCode,
  "bwip-js (code128)": Barcode,
};

export default function TechnologyLogo({ name, size = 40 }: { name: string; size?: number }) {
  const key = name.toLowerCase().trim();

  if (key === "prisma + postgresql") {
    return (
      <span className="technology-logo-pair" aria-hidden="true">
        <TechnologyLogo name="Prisma" size={size} />
        <TechnologyLogo name="PostgreSQL" size={size} />
      </span>
    );
  }

  const logo = logos[key];
  if (logo) {
    return (
      <Image
        src={`/technologies/${logo.icon}.svg`}
        alt=""
        width={size}
        height={size}
        className={`technology-logo${logo.monochrome ? " technology-logo--monochrome" : ""}`}
      />
    );
  }

  const Symbol = symbols[key] ?? Code2;
  return <Symbol size={size} className="technology-logo technology-logo--symbol" aria-hidden="true" strokeWidth={1.5} />;
}
