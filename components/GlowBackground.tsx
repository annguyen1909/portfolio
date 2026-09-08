type GlowBackgroundProps = {
  variant?: "hero" | "section";
};

const GlowBackground = ({ variant = "hero" }: GlowBackgroundProps) => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`glow-orb glow-orb-blue ${variant === "section" ? "glow-orb-sm" : ""}`} />
      <div className={`glow-orb glow-orb-blue glow-orb-offset glow-orb-subtle ${variant === "section" ? "glow-orb-sm" : ""}`} />
      <div className={`dot-grid ${variant === "section" ? "dot-grid-faint" : ""}`} />
    </div>
  );
};

export default GlowBackground;
