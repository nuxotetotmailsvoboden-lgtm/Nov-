"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Globe,
  Palette,
  Megaphone,
} from "lucide-react";

const actions = [
  {
    icon: Bot,
    title: "Telegram-бот",
    subtitle: "Разработка",
  },
  {
    icon: Globe,
    title: "Mini App",
    subtitle: "Web Application",
  },
  {
    icon: Palette,
    title: "UI / UX",
    subtitle: "Дизайн",
  },
  {
    icon: Megaphone,
    title: "Маркетинг",
    subtitle: "Продвижение",
  },
];

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .15 }}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: 16,
        marginBottom: 26,
      }}
    >
      {actions.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: .98,
            }}
            key={item.title}
            style={{
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.06)",
              backdropFilter: "blur(20px)",
              borderRadius: 24,
              padding: 20,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                background:
                  "linear-gradient(135deg,#7C3AED,#9333EA)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Icon size={26} color="white" />
            </div>

            <div
              style={{
                fontWeight: 700,
                fontSize: 17,
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                marginTop: 6,
                color: "#9d9db1",
                fontSize: 14,
              }}
            >
              {item.subtitle}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
