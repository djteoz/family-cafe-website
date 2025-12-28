import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-mint-dark">
                Горошек
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/menu"
                className="border-transparent text-gray-600 hover:border-berry hover:text-berry inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Меню
              </Link>
              <Link
                href="/about"
                className="border-transparent text-gray-600 hover:border-berry hover:text-berry inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                О нас
              </Link>
              <Link
                href="/booking"
                className="border-transparent text-gray-600 hover:border-berry hover:text-berry inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Бронирование
              </Link>
              <Link
                href="/cart"
                className="border-transparent text-gray-600 hover:border-berry hover:text-berry inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Корзина
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
