import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        background:
          "radial-gradient(circle at top,#4c1d95 0%,#140b25 35%,#07070b 100%)",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
        }}
      >
        <GlassCard>
          <div
            style={{
              padding: 34,
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 84,
                height: 84,
                margin: "0 auto 26px",
                borderRadius: 26,
                background:
                  "linear-gradient(135deg,#7c3aed,#9333ea)",
                boxShadow:
                  "0 0 45px rgba(124,58,237,.45)",
              }}
            />

            <h1
              style={{
                margin: 0,
                fontSize: 52,
                fontWeight: 900,
                letterSpacing: 2,
              }}
            >
              NOVA
            </h1>

            <p
              style={{
                marginTop: 18,
                opacity: .8,
                fontSize: 24,
                lineHeight: 1.6,
              }}
            >
              Создавайте Telegram-ботов
              <br />
              без лишних сложностей
            </p>

            <div
              style={{
                marginTop: 40,
              }}
            >
              <Button>Начать</Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
