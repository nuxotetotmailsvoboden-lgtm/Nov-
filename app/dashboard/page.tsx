import Link from "next/link";

export default function DashboardPage() {
  const services = [
    {
      title: "Telegram Боты",
      description: "Разработка ботов любой сложности",
      emoji: "🤖",
    },
    {
      title: "Mini Apps",
      description: "Telegram Web Apps",
      emoji: "📱",
    },
    {
      title: "AI Интеграции",
      description: "ChatGPT, Claude, Gemini",
      emoji: "🧠",
    },
    {
      title: "Автоматизация",
      description: "CRM, API, платежи",
      emoji: "⚙️",
    },
  ];

  return (
    <main>
      <h1
        style={{
          fontSize: 34,
          fontWeight: 800,
          marginBottom: 10,
        }}
      >
        NOVA
      </h1>

      <p
        style={{
          color: "#A1A1AA",
          marginBottom: 30,
        }}
      >
        Выберите интересующую услугу
      </p>

      <div
        style={{
          display: "grid",
          gap: 16,
        }}
      >
        {services.map((item) => (
          <div
            key={item.title}
            style={{
              padding: 22,
              borderRadius: 22,
              background: "#18181B",
              border: "1px solid #2A2A2A",
            }}
          >
            <div
              style={{
                fontSize: 38,
              }}
            >
              {item.emoji}
            </div>

            <h2
              style={{
                marginTop: 14,
                fontSize: 22,
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                color: "#A1A1AA",
                marginTop: 8,
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/"
        style={{
          display: "block",
          marginTop: 35,
          textAlign: "center",
          color: "#8B5CF6",
        }}
      >
        ← Назад
      </Link>
    </main>
  );
}
