"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } =
    useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
    consent: false,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setError(
        "Пожалуйста, подтвердите согласие на обработку персональных данных"
      );
      return;
    }
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          items: cartItems,
          total: cartTotal,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit order");

      setStatus("success");
      clearCart();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-vanilla flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
            <svg
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Заказ успешно оформлен!
          </h2>
          <p className="mt-2 text-gray-600">
            Мы свяжемся с вами в ближайшее время для подтверждения.
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-mint hover:bg-mint-dark"
          >
            Вернуться в меню
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-vanilla flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <svg
            className="mx-auto h-24 w-24 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Ваша корзина пуста
          </h2>
          <p className="mt-2 text-gray-600">
            Похоже, вы еще ничего не добавили в заказ.
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-mint hover:bg-mint-dark"
          >
            Перейти в меню
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vanilla py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-berry mb-8">Корзина</h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md overflow-hidden relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">{item.price * item.quantity} ₽</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.price} ₽ / шт.
                        </p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-gray-900 font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-berry hover:text-berry-light"
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-5">
            <div className="bg-white shadow-lg rounded-2xl px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="text-lg font-medium text-gray-900">
                Сумма заказа
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="text-base font-medium text-gray-900">
                    Итого
                  </div>
                  <div className="text-base font-medium text-gray-900">
                    {cartTotal} ₽
                  </div>
                </div>
              </div>

              <div className="mt-6">
                {!isCheckoutOpen ? (
                  <button
                    type="button"
                    className="w-full bg-berry border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-berry-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-berry"
                    onClick={() => setIsCheckoutOpen(true)}
                  >
                    Оформить заказ
                  </button>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Имя
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-berry focus:border-berry sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Телефон
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-berry focus:border-berry sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Адрес доставки
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-berry focus:border-berry sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="comment"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Комментарий
                      </label>
                      <textarea
                        name="comment"
                        id="comment"
                        rows={3}
                        value={formData.comment}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-berry focus:border-berry sm:text-sm"
                      />
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          className="focus:ring-berry h-4 w-4 text-berry border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="consent"
                          className="font-medium text-gray-700"
                        >
                          Согласие на обработку персональных данных
                        </label>
                      </div>
                    </div>

                    {error && (
                      <div className="text-red-600 text-sm">{error}</div>
                    )}

                    {status === "error" && (
                      <div className="text-red-600 text-sm">
                        Произошла ошибка при отправке заказа. Попробуйте снова.
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <button
                        type="button"
                        onClick={() => setIsCheckoutOpen(false)}
                        className="flex-1 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-berry"
                      >
                        Отмена
                      </button>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="flex-1 bg-berry border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-berry-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-berry disabled:opacity-50"
                      >
                        {status === "loading" ? "Отправка..." : "Подтвердить"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
              <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                <p>
                  или{" "}
                  <Link
                    href="/menu"
                    className="text-mint font-medium hover:text-mint-dark"
                  >
                    Продолжить покупки<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
