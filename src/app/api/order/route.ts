import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: Request) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return NextResponse.json(
      { error: "Telegram configuration is missing" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, phone, address, comment, items, total } = body;

    const itemsList = items
      .map(
        (item: any) =>
          `- ${item.name} x${item.quantity} (${item.price * item.quantity} ₽)`
      )
      .join("\n");

    const message = `
🛒 *Новый заказ!*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📍 *Адрес:* ${address || "Не указан"}
💬 *Комментарий:* ${comment || "Нет"}

📋 *Заказ:*
${itemsList}

💰 *Итого:* ${total} ₽
    `;

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message to Telegram");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending order:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
