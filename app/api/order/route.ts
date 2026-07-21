import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, telegram, project } = body;

    if (!name || !telegram || !project) {
      return NextResponse.json(
        { error: "Заполните все поля" },
        { status: 400 }
      );
    }

    // Пока просто выводим заявку в лог сервера.
    // На следующем шаге здесь будет отправка в Telegram.

    console.log({
      name,
      telegram,
      project,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      { error: "Ошибка сервера" },
      { status: 500 }
    );
  }
}
