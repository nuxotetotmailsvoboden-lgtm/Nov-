import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 20,
        background:
          "radial-gradient(circle at top,#6d28d9 0%,#1a1035 35%,#09090f 100%)",
        color: "#fff",
      }}
    >
      <GlassCard
        className="hero"
      >
        <div
          style={{
            padding: 24,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 56,
              marginBottom: 16,
            }}
          >
            👑
          </div>

          <h1
            style={{
              fontSize: 34,
              margin: 0,
              fontWeight: 800,
            }}
          >
            TOMIRIS MARKET
          </h1>

          <p
            style={{
              opacity: 0.7,
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            Premium Telegram Mini App
          </p>

          <Button>
            Начать
          </Button>
        </div>
      </GlassCard>

      <div
        style={{
          height: 25,
        }}
      />

      <GlassCard>
        <div
          style={{
            padding: 20,
          }}
        >
          <h2
            style={{
              marginTop: 0,
            }}
          >
            🔥 Акция
          </h2>

          <p
            style={{
              opacity: 0.8,
              lineHeight: 1.7,
            }}
          >
            Цена может отличаться в зависимости от выбранных
            услуг.
          </p>

          <p
            style={{
              color: "#b388ff",
              fontWeight: 700,
            }}
          >
            🎁 Скидка 10% в течение первых 24 часов после оформления заказа.
          </p>
        </div>
      </GlassCard>
    </main>
  );
}
