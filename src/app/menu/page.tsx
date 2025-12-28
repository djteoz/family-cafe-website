"use client";

import { useState } from "react";
import { menuItems, MenuItem } from "../../data/menu";
import { useCart } from "@/context/CartContext";

const categories = [
  { id: "all", name: "Все" },
  { id: "breakfast", name: "Завтраки" },
  { id: "main", name: "Основное" },
  { id: "dessert", name: "Десерты" },
  { id: "drink", name: "Напитки" },
];

const filters = [
  { id: "vegetarian", name: "Вегетарианское" },
  { id: "gluten-free", name: "Без глютена" },
  { id: "kids", name: "Детское меню" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch =
      activeCategory === "all" || item.category === activeCategory;
    const filterMatch = activeFilters.every((filter) =>
      item.tags.includes(filter as any)
    );
    return categoryMatch && filterMatch;
  });

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  return (
    <div className="bg-vanilla min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-berry mb-8 text-center">
          Наше Меню
        </h1>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? "bg-berry text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {filters.map((filter) => (
            <label
              key={filter.id}
              className="inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-mint rounded border-gray-300 focus:ring-mint"
                checked={activeFilters.includes(filter.id)}
                onChange={() => toggleFilter(filter.id)}
              />
              <span className="ml-2 text-gray-700">{filter.name}</span>
            </label>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="h-48 bg-gray-200 relative shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {quantity > 0 && (
                    <div className="absolute top-4 right-4 bg-berry text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                      В корзине: {quantity}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-berry">
                      {item.price} ₽
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm h-10 overflow-hidden">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-vanilla text-xs text-gray-600 rounded-md"
                      >
                        {tag === "vegetarian"
                          ? "🌱 Вег"
                          : tag === "gluten-free"
                          ? "🌾 Без глютена"
                          : "👶 Детское"}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {quantity > 0 ? (
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1 border border-gray-200">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm rounded-md transition-all font-bold text-lg"
                        >
                          -
                        </button>
                        <span className="font-bold text-gray-900">
                          {quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="w-10 h-10 flex items-center justify-center text-mint-dark hover:bg-white hover:shadow-sm rounded-md transition-all font-bold text-lg"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        className="w-full bg-mint text-white py-2 px-4 rounded-lg font-medium hover:bg-mint-dark transition-colors duration-200 flex items-center justify-center gap-2"
                        onClick={() => addToCart(item)}
                      >
                        <span>В корзину</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Ничего не найдено по выбранным фильтрам.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
