import GlassCard from "./GlassCard";

interface Props {
  emoji: string;
  title: string;
  subtitle: string;
}

export default function ServiceCard({
  emoji,
  title,
  subtitle,
}: Props) {
  return (
    <GlassCard className="service-card">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          padding: 20,
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 18,
            background:
              "linear-gradient(135deg,#7c3aed,#9333ea)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 30,
          }}
        >
          {emoji}
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            {title}
          </div>

          <div
            style={{
              color: "#9f9fb5",
              marginTop: 4,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            fontSize: 24,
            opacity: .5,
          }}
        >
          →
        </div>
      </div>
    </GlassCard>
  );
}
