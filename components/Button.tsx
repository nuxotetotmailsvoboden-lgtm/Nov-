"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  onClick,
  disabled = false,
  fullWidth = true,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.18,
      }}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: fullWidth ? "100%" : "auto",
        height: 58,
        border: "none",
        borderRadius: 18,
        cursor: disabled ? "not-allowed" : "pointer",

        background:
          "linear-gradient(135deg,#7C3AED 0%,#9333EA 45%,#A855F7 100%)",

        color: "#fff",

        fontWeight: 700,
        fontSize: 16,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: "0 24px",

        boxShadow:
          "0 12px 30px rgba(124,58,237,.35), inset 0 1px rgba(255,255,255,.15)",

        transition: ".25s",

        opacity: disabled ? 0.5 : 1,

        userSelect: "none",
      }}
    >
      {children}
    </motion.button>
  );
}
