"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main>
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: 20,
          margin: "40px auto 24px",
          background:
            "linear-gradient(135deg,#7c3aed,#5b21b6)",
          boxShadow: "0 0 40px rgba(124,58,237,.55)",
        }}
      />

      <h1
        style={{
          textAlign: "center",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: 1,
        }}
      >
        TOMIRIS
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          marginTop: 10,
          lineHeight: 1.6,
        }}
      >
        Создавайте Telegram-ботов
        <br />
        без лишних сложностей
      </p>

      <button
        onClick={() => router.push("/dashboard")}
        style={{
          width: "100%",
          marginTop: 40,
          padding: "18px",
          borderRadius: 18,
          border: "none",
          color: "#fff",
          fontWeight: 700,
          fontSize: 17,
          cursor: "pointer",
          background:
            "linear-gradient(135deg,#7c3aed,#9333ea)",
          boxShadow:
            "0 0 30px rgba(124,58,237,.45)",
        }}
      >
        Начать
      </button>
    </main>
  );
}
