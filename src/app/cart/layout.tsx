import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корзина",
  description:
    "Оформление заказа в кафе Горошек. Проверьте ваш выбор и оформите доставку или самовывоз.",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
