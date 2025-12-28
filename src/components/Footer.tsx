export default function Footer() {
  return (
    <footer className="bg-mint-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Кафе "Горошек"</h3>
            <p className="text-white/90 text-sm">
              Мы создаем атмосферу уюта и тепла для вас и ваших детей.
              Натуральные продукты, вкусные десерты и веселые праздники.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                ул. Цветочная, д. 12
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Пн-Вс: 09:00 - 22:00
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              {/* Mock Social Icons */}
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <span className="sr-only">VK</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.684 0h-7.368c-4.586 0-8.316 3.73-8.316 8.316v7.368c0 4.586 3.73 8.316 8.316 8.316h7.368c4.586 0 8.316-3.73 8.316-8.316v-7.368c0-4.586-3.73-8.316-8.316-8.316zm3.615 16.973c-.66.96-2.52 2.01-3.31 2.01-1.19 0-1.63-.56-2.35-1.55-.62-.86-1.35-1.61-1.83-1.61-.39 0-.53.17-.53.96v1.6c0 .56-.18.85-1.58.85-2.34 0-4.85-1.42-6.64-3.99-2.68-3.75-3.37-6.58-3.37-7.15 0-.31.12-.59.76-.59h2.42c.55 0 .76.25.97.82 1.06 3.08 2.84 5.79 3.58 5.79.27 0 .4-.12.4-.78v-2.8c-.08-1.24-.73-1.35-.73-1.8 0-.21.18-.43.47-.43h2.63c.36 0 .49.19.49.62v3.35c0 .36.16.48.27.48.22 0 .4-.12.81-.53 1.26-1.41 2.16-3.92 2.16-3.92.11-.48.42-.62.98-.62h2.42c.72 0 .87.36.71.86-.56 1.74-2.01 4.45-2.84 5.35-.25.25-.36.37 0 .85.44.59 1.98 1.91 2.17 2.5.13.42-.09.64-.66.64z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} Семейное кафе "Горошек". Все права
          защищены.
        </div>
      </div>
    </footer>
  );
}
