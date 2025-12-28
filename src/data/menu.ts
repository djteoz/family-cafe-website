export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "breakfast" | "main" | "dessert" | "drink";
  image: string;
  tags: ("vegetarian" | "gluten-free" | "kids")[];
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Сырники из фермерского творога",
    description: "Подаются со сметаной и домашним вареньем.",
    price: 350,
    category: "breakfast",
    image:
      "https://boncake.cafe/wp-content/uploads/2025/12/Bazaart_33C8A056-9B3C-410B-A58A-6084EC1A28CE.jpeg",
    tags: ["vegetarian", "kids"],
  },
  {
    id: 2,
    name: "Овсяная каша с ягодами",
    description: "На молоке или воде, с сезонными ягодами и медом.",
    price: 250,
    category: "breakfast",
    image:
      "https://images.gastronom.ru/YZNj8OojvamFNnLZiJGNLZLoB1Eypy9vnLmC6DhSd6U/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzhjYmY0ZjMxLWVmMTctNDk3MS1hMWI2LTQwMjA2NThkMGJhOS5qcGc.webp",
    tags: ["vegetarian", "gluten-free", "kids"],
  },
  {
    id: 3,
    name: "Куриный суп с лапшой",
    description: "Наваристый бульон, домашняя лапша, перепелиное яйцо.",
    price: 320,
    category: "main",
    image:
      "https://avatars.mds.yandex.net/get-vertis-journal/4220003/aa8236b9-0c38-4333-a909-bb2a3b631519.jpg/1600x1600",
    tags: ["kids"],
  },
  {
    id: 4,
    name: "Паста с томатами и базиликом",
    description: "Итальянская паста, свежие томаты, базилик, пармезан.",
    price: 450,
    category: "main",
    image:
      "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=800&q=80&v=2",
    tags: ["vegetarian"],
  },
  {
    id: 5,
    name: "Котлетки из индейки с пюре",
    description: "Нежные котлеты, воздушное картофельное пюре.",
    price: 420,
    category: "main",
    image:
      "https://images.gastronom.ru/G7FPpyRKaVQktHjXS9vN1Q7GsZ_4Rc2iTee7kgA3IJE/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzk2NGUzZTZjLTg5N2EtNDUzMS1iNjdmLTNlNmFjZTc4NzJjMS5qcGc.webp",
    tags: ["kids", "gluten-free"],
  },
  {
    id: 6,
    name: "Медовик",
    description: "Классический рецепт с медовыми коржами и сметанным кремом.",
    price: 280,
    category: "dessert",
    image:
      "https://lifehacker.ru/wp-content/uploads/2022/11/shutterstock_2154067297_1668017816-scaled.jpg",
    tags: ["vegetarian", "kids"],
  },
  {
    id: 7,
    name: "Фруктовый салат",
    description: "Сезонные фрукты с йогуртовой заправкой.",
    price: 300,
    category: "dessert",
    image:
      "https://images.gastronom.ru/xx8vnPTumPBABpaMkQIQrO_75nZ0fxSuDQcvJj3gGdE/pr:article-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzVmYWM5ZmZlLTJmZjEtNDJlOS05NDc2LTE4OWFhYjNkNmZmNy5qcGc.webp",
    tags: ["vegetarian", "gluten-free", "kids"],
  },
  {
    id: 8,
    name: "Домашний лимонад",
    description: "Лимон, мята, немного сахара и газированная вода.",
    price: 200,
    category: "drink",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "gluten-free", "kids"],
  },
  {
    id: 9,
    name: "Капучино",
    description: "Классический кофейный напиток.",
    price: 220,
    category: "drink",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "gluten-free"],
  },
];
