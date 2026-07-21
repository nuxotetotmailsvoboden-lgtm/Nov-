import {
  Bot,
  Smartphone,
  Brain,
  Palette,
} from "lucide-react";

import ServiceCard from "@/components/ServiceCard";

export default function Dashboard() {
  return (
    <main>
      <h1
        style={{
          fontSize: 36,
          fontWeight: 900,
        }}
      >
        NOVA
      </h1>

      <p
        style={{
          marginTop: 8,
          marginBottom: 30,
          color: "#9CA3AF",
        }}
      >
        Выберите направление
      </p>

      <div
        style={{
          display: "grid",
          gap: 18,
        }}
      >
        <ServiceCard
          icon={<Bot />}
          title="Telegram Боты"
          description="Автоматизация бизнеса"
        />

        <ServiceCard
          icon={<Smartphone />}
          title="Mini Apps"
          description="Современные Web Apps"
        />

        <ServiceCard
          icon={<Brain />}
          title="AI Интеграции"
          description="GPT, Claude, Gemini"
        />

        <ServiceCard
          icon={<Palette />}
          title="UI / UX"
          description="Современный дизайн"
        />
      </div>
    </main>
  );
}
