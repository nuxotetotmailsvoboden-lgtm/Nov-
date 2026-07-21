"use client";

import {
  Home,
  ShoppingBag,
  FolderOpen,
  User,
} from "lucide-react";

export default function BottomNav() {
  const items = [
    {
      icon: <Home size={22} />,
      title: "Главная",
      active: true,
    },
    {
      icon: <ShoppingBag size={22} />,
      title: "Услуги",
    },
    {
      icon: <FolderOpen size={22} />,
      title: "Проекты",
    },
    {
      icon: <User size={22} />,
      title: "Профиль",
    },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 30px)",
        maxWidth: 430,
        height: 72,
        borderRadius: 24,
        backdropFilter: "blur(25px)",
        background: "rgba(20,20,35,.82)",
        border: "1px solid rgba(255,255,255,.06)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 12px 40px rgba(0,0,0,.45)",
        zIndex: 999,
      }}
    >
      {items.map((item) => (
        <div
          key={item.title}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
            color: item.active ? "#9D4DFF" : "#9d9db1",
            fontSize: 11,
            cursor: "pointer",
            transition: ".25s",
          }}
        >
          {item.icon}
          {item.title}
        </div>
      ))}
    </nav>
  );
}
