"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Bot, User } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const items = [
    {
      href: "/dashboard",
      title: "Главная",
      icon: Home,
    },
    {
      href: "/services",
      title: "Услуги",
      icon: Bot,
    },
    {
      href: "/profile",
      title: "Профиль",
      icon: User,
    },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        left: "50%",
        bottom: 16,
        transform: "translateX(-50%)",

        width: "calc(100% - 24px)",
        maxWidth: 420,

        display: "flex",
        justifyContent: "space-around",

        padding: "12px",

        borderRadius: 24,

        background: "rgba(20,20,24,.85)",
        backdropFilter: "blur(20px)",

        border: "1px solid rgba(255,255,255,.08)",
      }}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,

              color: active ? "#8B5CF6" : "#888",
              fontSize: 12,
            }}
          >
            <Icon size={22} />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
