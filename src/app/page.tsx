import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-vanilla min-h-screen font-sans">
      {/* Hero Section with Modern Gradient/Image */}
      <div className="relative bg-gradient-to-r from-mint-dark to-mint overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Decorative pattern or image placeholder */}
          <div className="w-full h-full bg-[url('/cubes-pattern.png')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              Вкусно,
              <br /> как дома
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 font-medium">
              Семейное кафе "Горошек" — это место, где дети играют, а родители
              отдыхают. Натуральные продукты, уютная атмосфера и любовь в каждой
              тарелке.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/menu"
                className="px-8 py-4 bg-white text-mint-dark font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
              >
                Посмотреть меню
              </Link>
              <Link
                href="/booking"
                className="px-8 py-4 bg-berry text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-berry-light transition-all transform hover:-translate-y-1"
              >
                Забронировать столик
              </Link>
            </div>
          </div>

          {/* Hero Image / Illustration */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative z-10">
            <div className="relative w-full max-w-lg mx-auto aspect-square bg-white/30 backdrop-blur-sm rounded-full p-8 shadow-2xl animate-pulse-slow">
              <div className="w-full h-full bg-gray-100 rounded-full overflow-hidden flex items-center justify-center relative">
                <img
                  src="/hero-syrniki.jpg"
                  alt="Вкусные сырники"
                  className="w-full h-full object-cover"
                />
                {/* Placeholder for a delicious food image */}
                <div className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-lg transform rotate-6">
                  <p className="text-berry font-bold text-lg">Хит сезона!</p>
                  <p className="text-gray-600 text-sm">Сырники с ягодами</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 w-full leading-none text-vanilla">
          <svg
            className="relative block w-full h-[50px] sm:h-[100px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      {/* Promotions Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-mint-dark font-bold tracking-wide uppercase">
            Специальные предложения
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Акции этой недели
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Promo Card 1 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transform transition hover:scale-[1.02]">
            <div className="md:w-1/2 bg-berry-light h-64 md:h-auto flex items-center justify-center text-white text-6xl">
              🎂
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="uppercase tracking-wide text-sm text-berry font-semibold">
                День Рождения
              </div>
              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                Скидка 20% именинникам
              </h3>
              <p className="mt-2 text-gray-500">
                Празднуйте с нами! Дарим скидку на всё меню и десерт в подарок.
              </p>
              <Link
                href="/booking"
                className="mt-4 text-mint-dark font-bold hover:text-mint transition-colors"
              >
                Забронировать праздник &rarr;
              </Link>
            </div>
          </div>

          {/* Promo Card 2 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transform transition hover:scale-[1.02]">
            <div className="md:w-1/2 bg-mint h-64 md:h-auto flex items-center justify-center text-white text-6xl">
              ☕
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="uppercase tracking-wide text-sm text-mint-dark font-semibold">
                Утро доброе
              </div>
              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                Кофе в подарок
              </h3>
              <p className="mt-2 text-gray-500">
                При заказе любого завтрака до 11:00 — капучино или американо
                бесплатно.
              </p>
              <Link
                href="/menu"
                className="mt-4 text-berry font-bold hover:text-berry-light transition-colors"
              >
                Смотреть завтраки &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Modern Cards */}
      <div className="py-16 bg-white rounded-t-[3rem] shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Почему нас выбирают
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 rounded-2xl hover:bg-vanilla transition-colors duration-300">
              <div className="w-16 h-16 bg-mint/20 text-mint-dark rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🌿
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Эко-продукты
              </h3>
              <p className="text-gray-500">
                Мы сотрудничаем с местными фермерами, чтобы на вашем столе было
                только самое свежее.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-vanilla transition-colors duration-300">
              <div className="w-16 h-16 bg-berry/20 text-berry rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🧸
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Детская комната
              </h3>
              <p className="text-gray-500">
                Безопасная игровая зона с няней, чтобы родители могли спокойно
                насладиться ужином.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-vanilla transition-colors duration-300">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎉
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Мастер-классы
              </h3>
              <p className="text-gray-500">
                Каждые выходные мы проводим кулинарные уроки для маленьких
                поварят.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
