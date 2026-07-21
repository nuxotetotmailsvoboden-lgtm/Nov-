import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, telegram, project } = await req.json();

    if (!name || !telegram || !project) {
      return NextResponse.json(
        { error: "Заполните все поля" },
        { status: 400 }
      );
    }

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { error: "Не настроен BOT_TOKEN или CHAT_ID" },
        { status: 500 }
      );
    }

    const text = `
📥 Новая заявка

👤 Имя: ${name}

📱 Telegram: ${telegram}

💬 Проект:
${project}
`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      }
    );

    if (!telegramResponse.ok) {
      throw new Error("Ошибка Telegram API");
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Ошибка сервера" },
      { status: 500 }
    );
  }
}
