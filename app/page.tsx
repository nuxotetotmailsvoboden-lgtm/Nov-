import AppContainer from "@/components/layout/AppContainer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import StatsCard from "@/components/StatsCard";
import BottomNav from "@/components/navigation/BottomNav";

export default function Home() {
  return (
    <>
      <AppContainer>

        <Hero />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <StatsCard
            title="Проектов"
            value="120+"
          />

          <StatsCard
            title="Клиентов"
            value="85+"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <ServiceCard
            emoji="🤖"
            title="Telegram-боты"
            subtitle="Автоматизация бизнеса"
          />

          <ServiceCard
            emoji="🌐"
            title="Mini Apps"
            subtitle="Telegram Web Apps"
          />

          <ServiceCard
            emoji="🎨"
            title="UI / UX"
            subtitle="Современный дизайн"
          />

          <ServiceCard
            emoji="📢"
            title="Продвижение"
            subtitle="Маркетинг и реклама"
          />
        </div>

      </AppContainer>

      <BottomNav />
    </>
  );
}
