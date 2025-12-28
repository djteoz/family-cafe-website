import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-vanilla min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-mint-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Наша История
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            Как маленькая мечта превратилась в любимое место для сотен семей.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-berry mb-6">
              С чего всё началось
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Кафе "Горошек" открылось в 2020 году, когда мы, молодая семья,
              поняли, что в нашем районе не хватает места, где было бы одинаково
              хорошо и взрослым, и детям.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Мы хотели создать пространство без громкой музыки и сложных блюд,
              но с душой, домашним уютом и, конечно же, самой вкусной выпечкой.
            </p>
            <p className="text-lg text-gray-700">
              Название "Горошек" родилось случайно — так мы ласково называли
              нашего сына, когда он был совсем маленьким. Теперь это имя
              объединяет всех наших гостей.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80"
              alt="Семья основателей"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Interior Gallery */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Интерьер, созданный с любовью
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                alt="Основной зал"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg">
                  Уютные диванчики
                </p>
              </div>
            </div>
            {/* Gallery Item 2 */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80"
                alt="Игровая зона"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg">
                  Для малышей
                </p>
              </div>
            </div>
            {/* Gallery Item 3 */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=800&q=80"
                alt="Летняя веранда"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg">
                  Свежий воздух
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-berry mb-12">Наши ценности</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-bold mb-2">Семья на первом месте</h3>
            <p className="text-gray-600">
              Мы делаем всё, чтобы вам было комфортно с детьми любого возраста.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="text-4xl mb-4">🥦</div>
            <h3 className="text-xl font-bold mb-2">Натуральные продукты</h3>
            <p className="text-gray-600">
              Никаких полуфабрикатов. Готовим "из-под ножа" каждое утро.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="text-4xl mb-4">🎈</div>
            <h3 className="text-xl font-bold mb-2">Праздник каждый день</h3>
            <p className="text-gray-600">
              Дарим улыбки и хорошее настроение просто так, без повода.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
