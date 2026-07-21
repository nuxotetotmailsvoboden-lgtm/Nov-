"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OrderPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOrder = async () => {
    if (!name || !telegram || !service) {
      alert("Заполните все поля.");
      return;
    }

    setLoading(true);

    // Пока только проверка.
    // Следующим шагом сюда подключим Telegram-бота.

    setTimeout(() => {
      setLoading(false);

      alert("Заявка успешно создана!");

      router.push("/dashboard");
    }, 1200);
  };

  return (
    <main>
      <h1
        style={{
          fontSize: 34,
          fontWeight: 900,
        }}
      >
        Заказать разработку
      </h1>

      <p
        style={{
          color: "#A1A1AA",
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        Заполните форму и мы свяжемся с вами.
      </p>

      <div
        style={{
          display: "grid",
          gap: 18,
        }}
      >
        <input
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="@username"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          style={inputStyle}
        />

        <textarea
          rows={6}
          placeholder="Опишите проект..."
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={{
            ...inputStyle,
            resize: "vertical",
          }}
        />

        <button
          onClick={sendOrder}
          disabled={loading}
          style={{
            ...buttonStyle,
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Отправка..." : "Отправить заявку"}
        </button>

        <button
          onClick={() => router.back()}
          style={{
            background: "transparent",
            border: "none",
            color: "#8B5CF6",
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          ← Назад
        </button>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "18px",
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,.08)",
  background: "rgba(255,255,255,.05)",
  color: "#fff",
  fontSize: 16,
  outline: "none",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "18px",
  borderRadius: 18,
  border: "none",
  cursor: "pointer",
  color: "#fff",
  fontWeight: 700,
  fontSize: 17,
  background: "linear-gradient(135deg,#7C3AED,#9333EA)",
};
