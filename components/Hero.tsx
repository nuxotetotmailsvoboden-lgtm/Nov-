"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .45 }}
      style={{
        marginBottom: 24,
        borderRadius: 30,
        padding: 28,
        overflow: "hidden",
        position: "relative",
        background:
          "linear-gradient(160deg,#6D28D9 0%,#4C1D95 45%,#1E1B4B 100%)",
        boxShadow:
          "0 25px 60px rgba(76,29,149,.45)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          right: -70,
          top: -70,
          borderRadius: "50%",
          background: "rgba(255,255,255,.08)",
          filter: "blur(25px)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: "#DDD6FE",
            marginBottom: 12,
          }}
        >
          🚀 Telegram Development Studio
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 38,
            fontWeight: 900,
            lineHeight: 1.15,
          }}
        >
          NOVA
        </h1>

        <p
          style={{
            marginTop: 18,
            marginBottom: 28,
            color: "#E9D5FF",
            lineHeight: 1.7,
            fontSize: 16,
          }}
        >
          Создаем Telegram-ботов,
          Mini Apps, автоматизацию,
          AI-сервисы и цифровые продукты.
        </p>

        <Button>
          Создать проект
        </Button>
      </div>
    </motion.div>
  );
}
