import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Меню",
  description:
    "Меню кафе Горошек: завтраки, основные блюда, десерты и напитки. Есть детское и вегетарианское меню.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
