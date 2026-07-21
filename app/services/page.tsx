import AppContainer from "@/components/layout/AppContainer";
import BottomNav from "@/components/navigation/BottomNav";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <>
      <AppContainer>
        <SectionTitle
          title="Все услуги"
          subtitle="Выберите интересующее направление"
        />

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
