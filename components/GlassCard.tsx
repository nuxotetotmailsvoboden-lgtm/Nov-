interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={className}
      style={{
        background: "rgba(255,255,255,.06)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 24,
        boxShadow:
          "0 10px 40px rgba(0,0,0,.35), inset 0 1px rgba(255,255,255,.08)",
      }}
    >
      {children}
    </div>
  );
}
