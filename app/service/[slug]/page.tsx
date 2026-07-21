interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const data = {
  bots: {
    title: "Telegram Боты",
    text: "Разработка Telegram-ботов любой сложности: продажи, CRM, автоматизация, AI.",
  },
  miniapps: {
    title: "Mini Apps",
    text: "Современные Telegram Mini Apps с React и Next.js.",
  },
  ai: {
    title: "AI Интеграции",
    text: "Интеграция ChatGPT, Claude, Gemini и других моделей.",
  },
  design: {
    title: "UI / UX",
    text: "Создание современного интерфейса и пользовательского опыта.",
  },
} as const;

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service =
    data[slug as keyof typeof data];

  if (!service) {
    return (
      <main>
        <h1>Услуга не найдена</h1>
      </main>
    );
  }

  return (
    <main>
      <h1
        style={{
          fontSize: 34,
          fontWeight: 900,
        }}
      >
        {service.title}
      </h1>

      <p
        style={{
          marginTop: 20,
          color: "#A1A1AA",
          lineHeight: 1.7,
        }}
      >
        {service.text}
      </p>
    </main>
  );
}
