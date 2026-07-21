interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div
      style={{
        marginBottom: 18,
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: 24,
          fontWeight: 800,
          color: "#fff",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            marginTop: 6,
            color: "#9CA3AF",
            fontSize: 15,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
