import Hero from "@/components/Hero";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 480,
        margin: "0 auto",
        padding: "24px",
        minHeight: "100vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Hero />
      </div>

      <div
        style={{
          marginBottom: 40,
        }}
      >
        <Button>
          Начать
        </Button>
      </div>
    </main>
  );
}
