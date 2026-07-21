"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/dashboard")}
      style={{
        width: "100%",
        padding: "18px",
        border: "none",
        borderRadius: 18,
        cursor: "pointer",
        fontSize: 17,
        fontWeight: 700,
        color: "#fff",
        background:
          "linear-gradient(135deg,#7C3AED,#9333EA)",
        boxShadow:
          "0 0 25px rgba(124,58,237,.45)",
      }}
    >
      {children}
    </button>
  );
}
