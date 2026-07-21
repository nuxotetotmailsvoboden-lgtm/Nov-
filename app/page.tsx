import AppContainer from "@/components/layout/AppContainer";
import Hero from "@/components/Hero";
import QuickActions from "@/components/home/QuickActions";
import StatsCard from "@/components/StatsCard";
import BottomNav from "@/components/navigation/BottomNav";
import ServiceCard from "@/components/ServiceCard";

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
          <StatsCard title="Проектов" value="120+" />
          <StatsCard title="Клиентов" value="85+" />
        </div>

        <QuickActions />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            marginBottom: 32,
          }}
        >
          <ServiceCard
            emoji="🤖"
            title="Telegram-боты"
            subtitle="Автоматизация бизнеса"
          />

          <ServiceCard
            emoji="🌐"
            title="Telegram Mini Apps"
            subtitle="Современные Web Apps"
          />

          <ServiceCard
            emoji="🎨"
            title="UI / UX Дизайн"
            subtitle="Интерфейсы нового поколения"
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
