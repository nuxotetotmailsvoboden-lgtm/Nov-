"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getTelegramUser } from "@/lib/telegram";

export default function OrderPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [project, setProject] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = getTelegramUser();

    if (user) {
      setName(user.first_name || "");

      if (user.username) {
        setTelegram(`@${user.username}`);
      }
    }
  }, []);

  const sendOrder = async () => {
    if (!name.trim() || !telegram.trim() || !project.trim()) {
      alert("Заполните все поля");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          telegram,
          project,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ошибка");
      }

      alert("✅ Заявка успешно отправлена!");

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("❌ Не удалось отправить заявку");
    } finally {
      setLoading(false);
    }
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
        Опишите ваш проект — остальное мы заполним автоматически.
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
          placeholder="Опишите ваш проект..."
          value={project}
          onChange={(e) => setProject(e.target.value)}
          style={{
            ...inputStyle,
            resize: "vertical",
            minHeight: 150,
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
