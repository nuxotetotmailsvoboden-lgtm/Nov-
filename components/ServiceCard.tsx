"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import GlassCard from "./GlassCard";

interface Props {
  emoji: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export default function ServiceCard({
  emoji,
  title,
  subtitle,
  onClick,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.99,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <GlassCard>
        <div
          style={{
            padding: 22,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 18,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 28,
              background:
                "linear-gradient(135deg,#7C3AED,#9333EA)",
              flexShrink: 0,
            }}
          >
            {emoji}
          </div>

          <div
            style={{
              marginLeft: 18,
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              {title}
            </div>

            <div
              style={{
                marginTop: 6,
                color: "#A1A1AA",
                fontSize: 14,
              }}
            >
              {subtitle}
            </div>
          </div>

          <ChevronRight
            size={22}
            color="#A78BFA"
          />
        </div>
      </GlassCard>
    </motion.div>
  );
}
