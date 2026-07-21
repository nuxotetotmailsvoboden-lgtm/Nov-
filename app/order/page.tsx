"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OrderPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    telegram: "",
    project: "",
  });

  return (
    <main>
      <h1
        style={{
          fontSize: 34,
          fontWeight: 900,
        }}
      >
        Заявка
      </h1>

      <p
        style={{
          marginTop: 10,
          color: "#A1A1AA",
        }}
      >
        Расскажите о своем проекте
      </p>

      <div
        style={{
          display: "grid",
          gap: 18,
          marginTop: 30,
        }}
      >
        <input
          placeholder="Ваше имя"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          style={inputStyle}
        />

        <input
          placeholder="@telegram"
          value={form.telegram}
          onChange={(e) =>
            setForm({
              ...form,
              telegram: e.target.value,
            })
          }
          style={inputStyle}
        />

        <textarea
          placeholder="Опишите проект..."
          rows={6}
          value={form.project}
          onChange={(e) =>
            setForm({
              ...form,
              project: e.target.value,
            })
          }
          style={{
            ...inputStyle,
            resize: "none",
          }}
        />

        <button
          style={buttonStyle}
          onClick={() => {
            alert("Следующим шагом подключим Telegram-бота 🚀");
          }}
        >
          Отправить заявку
        </button>

        <button
          onClick={() => router.back()}
          style={{
            background: "transparent",
            color: "#8B5CF6",
            border: "none",
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

const inputStyle = {
  width: "100%",
  padding: "18px",
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,.08)",
  background: "rgba(255,255,255,.05)",
  color: "#fff",
  fontSize: 16,
};

const buttonStyle = {
  padding: "18px",
  borderRadius: 18,
  border: "none",
  cursor: "pointer",
  color: "#fff",
  fontWeight: 700,
  fontSize: 17,
  background:
    "linear-gradient(135deg,#7C3AED,#9333EA)",
};
