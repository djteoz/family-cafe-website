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
      "https://images.pexels.com/photos/5737254/pexels-photo-5737254.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["vegetarian", "kids"],
  },
  {
    id: 2,
    name: "Овсяная каша с ягодами",
    description: "На молоке или воде, с сезонными ягодами и медом.",
    price: 250,
    category: "breakfast",
    image:
      "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["vegetarian", "gluten-free", "kids"],
  },
  {
    id: 3,
    name: "Куриный суп с лапшой",
    description: "Наваристый бульон, домашняя лапша, перепелиное яйцо.",
    price: 320,
    category: "main",
    image:
      "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["kids"],
  },
  {
    id: 4,
    name: "Паста с томатами и базиликом",
    description: "Итальянская паста, свежие томаты, базилик, пармезан.",
    price: 450,
    category: "main",
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["vegetarian"],
  },
  {
    id: 5,
    name: "Котлетки из индейки с пюре",
    description: "Нежные котлеты, воздушное картофельное пюре.",
    price: 420,
    category: "main",
    image:
      "https://images.pexels.com/photos/6941027/pexels-photo-6941027.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["kids", "gluten-free"],
  },
  {
    id: 6,
    name: "Медовик",
    description: "Классический рецепт с медовыми коржами и сметанным кремом.",
    price: 280,
    category: "dessert",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["vegetarian", "kids"],
  },
  {
    id: 7,
    name: "Фруктовый салат",
    description: "Сезонные фрукты с йогуртовой заправкой.",
    price: 300,
    category: "dessert",
    image:
      "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["vegetarian", "gluten-free", "kids"],
  },
  {
    id: 8,
    name: "Домашний лимонад",
    description: "Лимон, мята, немного сахара и газированная вода.",
    price: 200,
    category: "drink",
    image:
      "https://images.pexels.com/photos/210906/pexels-photo-210906.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["vegetarian", "gluten-free", "kids"],
  },
  {
    id: 9,
    name: "Капучино",
    description: "Классический кофейный напиток.",
    price: 220,
    category: "drink",
    image:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["vegetarian", "gluten-free"],
  },
];
