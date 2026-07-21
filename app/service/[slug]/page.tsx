import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const services = {
  bots: {
    title: "Telegram Боты",
    price: "от 150 000 ₸",
    description:
      "Создаем Telegram-ботов любой сложности: CRM, магазины, AI, автоматизация бизнеса, прием платежей и интеграции.",
  },

  miniapps: {
    title: "Mini Apps",
    price: "от 300 000 ₸",
    description:
      "Разработка современных Telegram Mini Apps на Next.js + React с красивым интерфейсом и высокой скоростью.",
  },

  ai: {
    title: "AI Интеграции",
    price: "от 200 000 ₸",
    description:
      "Интеграция ChatGPT, Claude, Gemini и других моделей в ваши продукты.",
  },

  design: {
    title: "UI / UX",
    price: "от 100 000 ₸",
    description:
      "Проектирование интерфейсов мобильных приложений, сайтов и Telegram Mini Apps.",
  },
} as const;

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service =
    services[slug as keyof typeof services];

  if (!service) {
    return (
      <main>
        <h1>404</h1>
      </main>
    );
  }

  return (
    <main>
      <Link
        href="/dashboard"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          color: "#8B5CF6",
          marginBottom: 30,
        }}
      >
        <ArrowLeft size={18} />
        Назад
      </Link>

      <div
        style={{
          background: "rgba(255,255,255,.05)",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 28,
          padding: 28,
          backdropFilter: "blur(20px)",
        }}
      >
        <Sparkles
          size={42}
          color="#8B5CF6"
        />

        <h1
          style={{
            marginTop: 18,
            fontSize: 34,
            fontWeight: 900,
          }}
        >
          {service.title}
        </h1>

        <div
          style={{
            marginTop: 14,
            color: "#8B5CF6",
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          {service.price}
        </div>

        <p
          style={{
            marginTop: 22,
            color: "#A1A1AA",
            lineHeight: 1.8,
          }}
        >
          {service.description}
        </p>

        <button
          style={{
            width: "100%",
            marginTop: 30,
            padding: 18,
            border: "none",
            borderRadius: 18,
            color: "#fff",
            fontWeight: 700,
            fontSize: 17,
            cursor: "pointer",
            background:
              "linear-gradient(135deg,#7C3AED,#9333EA)",
          }}
        >
          Заказать разработку
        </button>
      </div>
    </main>
  );
}
