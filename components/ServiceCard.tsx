"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,

        padding: 20,

        borderRadius: 24,

        background: "rgba(255,255,255,.05)",

        backdropFilter: "blur(18px)",

        border: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        style={{
          width: 58,
          height: 58,

          borderRadius: 18,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          background:
            "linear-gradient(135deg,#7C3AED,#9333EA)",

          fontSize: 28,
        }}
      >
        {icon}
      </div>

      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            marginTop: 6,
            color: "#9CA3AF",
          }}
        >
          {description}
        </p>
      </div>

      <ChevronRight
        size={22}
        color="#777"
      />
    </motion.div>
  );
}
