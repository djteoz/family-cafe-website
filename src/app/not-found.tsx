import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-vanilla flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-extrabold text-berry">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-900">
        Страница не найдена
      </h2>
      <p className="mt-2 text-lg text-gray-600 max-w-md mx-auto">
        Похоже, вы забрели не туда. Но не расстраивайтесь, у нас есть вкусные
        сырники!
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-mint hover:bg-mint-dark transition-colors"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
