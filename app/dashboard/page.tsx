import {
  Bot,
  Smartphone,
  Brain,
  Palette,
} from "lucide-react";

import ServiceCard from "@/components/ServiceCard";
import BottomNav from "@/components/BottomNav";

export default function Dashboard() {
  return (
    <main
      style={{
        paddingBottom: 100,
      }}
    >
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
          icon={<Bot size={28} />}
          title="Telegram Боты"
          description="Автоматизация бизнеса"
        />

        <ServiceCard
          icon={<Smartphone size={28} />}
          title="Mini Apps"
          description="Современные Web Apps"
        />

        <ServiceCard
          icon={<Brain size={28} />}
          title="AI Интеграции"
          description="GPT, Claude, Gemini"
        />

        <ServiceCard
          icon={<Palette size={28} />}
          title="UI / UX"
          description="Современный дизайн"
        />
      </div>

      <BottomNav />
    </main>
  );
}
