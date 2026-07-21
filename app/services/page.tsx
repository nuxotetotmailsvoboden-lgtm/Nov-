import AppContainer from "@/components/layout/AppContainer";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <AppContainer>
      <Header />

      <h2
        style={{
          marginTop: 10,
          marginBottom: 22,
          fontSize: 28,
        }}
      >
        Каталог услуг
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            emoji={service.emoji}
            title={service.title}
            subtitle={service.price}
          />
        ))}
      </div>
    </AppContainer>
  );
}
