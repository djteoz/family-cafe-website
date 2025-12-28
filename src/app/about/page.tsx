import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7]">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#2c1810] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">О Нас</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            История нашего семейного кафе, где каждый гость становится частью большой семьи.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Интерьер кафе" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-[#2c1810]">Наша История</h2>
              <p className="text-gray-700 leading-relaxed">
                Мы открыли двери нашего кафе в 2010 году с простой мечтой: создать место, где семьи могли бы собираться вместе, наслаждаться вкусной едой и забывать о суете будней.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Начав с небольшого помещения и бабушкиных рецептов, мы выросли в любимое место для многих горожан. Но наши ценности остались прежними: только свежие продукты, искреннее гостеприимство и любовь к своему делу.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#e6d5b8] bg-opacity-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-[#2c1810] mb-12">Наши Ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#2c1810] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                ❤️
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2c1810]">Семья</h3>
              <p className="text-gray-600">
                Мы создаем атмосферу, в которой комфортно и детям, и взрослым. У нас есть игровая зона и специальное детское меню.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#2c1810] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                🌿
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2c1810]">Качество</h3>
              <p className="text-gray-600">
                Используем только натуральные ингредиенты от проверенных фермеров. Никаких полуфабрикатов — готовим всё сами.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#2c1810] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                ☕
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2c1810]">Уют</h3>
              <p className="text-gray-600">
                Каждая деталь интерьера подобрана с любовью, чтобы вы чувствовали себя как дома.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-[#2c1810] mb-12">Атмосфера</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative group overflow-hidden rounded-lg h-64">
              <img 
                src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Десерты" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg h-64">
              <img 
                src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Уютный столик" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg h-64">
              <img 
                src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=800" 
                alt="Меню" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg h-64">
              <img 
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Счастливые гости" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg h-64">
              <img 
                src="https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Кофе" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative group overflow-hidden rounded-lg h-64">
              <img 
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Интерьер" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
