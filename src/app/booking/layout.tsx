import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бронирование столика",
  description:
    "Забронируйте столик в семейном кафе Горошек онлайн. Укажите дату, время и количество гостей.",
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
