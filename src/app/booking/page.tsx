"use client";

import { useState, FormEvent } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    comments: "",
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setError(
        "Пожалуйста, подтвердите согласие на обработку персональных данных"
      );
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке заявки");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        "Произошла ошибка. Пожалуйста, попробуйте позже или позвоните нам."
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-vanilla flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Спасибо за заявку!
          </h2>
          <p className="text-gray-600 mb-6">
            Мы свяжемся с вами в ближайшее время для подтверждения бронирования.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                date: "",
                time: "",
                guests: 2,
                comments: "",
                consent: false,
              });
            }}
            className="w-full bg-mint text-white py-2 px-4 rounded-lg font-medium hover:bg-mint-dark transition-colors duration-200"
          >
            Забронировать еще
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vanilla py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-berry mb-4">
            Забронировать столик
          </h1>
          <p className="text-lg text-gray-600">
            Проведите время с семьей в уютной атмосфере нашего кафе.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-mint-dark py-6 px-8">
            <h2 className="text-xl font-semibold text-white">
              Детали бронирования
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ваше имя
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-mint focus:border-mint block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Телефон
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-mint focus:border-mint block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Дата
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-mint focus:border-mint block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Время
                </label>
                <div className="mt-1">
                  <input
                    type="time"
                    name="time"
                    id="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-mint focus:border-mint block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-gray-700"
                >
                  Количество гостей
                </label>
                <div className="mt-1">
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-mint focus:border-mint block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "человек" : "человека"}
                      </option>
                    ))}
                    <option value="more">
                      Более 10 (свяжемся для уточнения)
                    </option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium text-gray-700"
                >
                  Пожелания
                </label>
                <div className="mt-1">
                  <textarea
                    id="comments"
                    name="comments"
                    rows={3}
                    value={formData.comments}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-mint focus:border-mint block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                    placeholder="Нужен детский стульчик, аллергия на орехи и т.д."
                  />
                </div>
              </div>

              <div className="sm:col-span-2 flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="focus:ring-mint h-4 w-4 text-mint border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="consent"
                    className="font-medium text-gray-700"
                  >
                    Согласие на обработку персональных данных
                  </label>
                  <p className="text-gray-500">
                    Нажимая кнопку, вы даете согласие на обработку своих
                    персональных данных.
                  </p>
                </div>
              </div>
            </div>

            {error && <div className="text-red-600 text-sm mt-2">{error}</div>}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-berry ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-berry hover:bg-berry-light"
                }`}
              >
                {isLoading ? "Отправка..." : "Забронировать"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
