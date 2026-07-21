"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: Props) {
  return (
    <Link href={href}>
      <motion.div
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,

          padding: 20,

          borderRadius: 24,

          background: "rgba(255,255,255,.05)",

          border: "1px solid rgba(255,255,255,.08)",

          backdropFilter: "blur(20px)",
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
          }}
        >
          {icon}
        </div>

        <div style={{ flex: 1 }}>
          <h3>{title}</h3>

          <p
            style={{
              color: "#A1A1AA",
              marginTop: 6,
            }}
          >
            {description}
          </p>
        </div>

        <ChevronRight />
      </motion.div>
    </Link>
  );
}
