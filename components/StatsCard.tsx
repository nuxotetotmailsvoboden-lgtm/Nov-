import GlassCard from "./GlassCard";

interface Props {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <GlassCard>
      <div
        style={{
          padding: 20,
        }}
      >
        <div
          style={{
            color: "#9d9db1",
            fontSize: 13,
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: 8,
            fontSize: 28,
            fontWeight: 800,
          }}
        >
          {value}
        </div>
      </div>
    </GlassCard>
  );
}
