import Button from "@/components/Button";

export default function HomePage() {
  return (
    <main>
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: 20,
          margin: "40px auto 24px",
          background:
            "linear-gradient(135deg,#7c3aed,#5b21b6)",
          boxShadow:
            "0 0 40px rgba(124,58,237,.55)",
        }}
      />

      <h1
        style={{
          textAlign: "center",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: 1,
        }}
      >
        NOVA
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          marginTop: 10,
          marginBottom: 40,
          lineHeight: 1.6,
        }}
      >
        Создавайте Telegram-ботов
        <br />
        без лишних сложностей
      </p>

      <Button>
        Начать
      </Button>
    </main>
  );
}
