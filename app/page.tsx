import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 20,
        background:
          "radial-gradient(circle at top,#4c1d95 0%,#140b25 35%,#07070b 100%)",
        color: "#fff",
      }}
    >
      <Header />

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
          subtitle="Современные Web Apps"
        />

        <ServiceCard
          emoji="🎨"
          title="UI / UX"
          subtitle="Дизайн интерфейсов"
        />

        <ServiceCard
          emoji="📢"
          title="Продвижение"
          subtitle="Маркетинг и реклама"
        />
      </div>
    </main>
  );
}
