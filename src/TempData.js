//Temporary storage of food item data
import menudo from "./assets/foodimages/Menudo and Rice.png";
import sisig from "./assets/foodimages/Sisig and Rice.png";
import adobo from "./assets/foodimages/Adobo and Rice.png";
import friedchicken from "./assets/foodimages/Fried Chicken and Rice.png";
import karekare from "./assets/foodimages/Karekare and Rice.png";
import frenchfries from "./assets/foodimages/French Fries.png";
import pancitcanton from "./assets/foodimages/Pancit Canton.png";
import tokneneng from "./assets/foodimages/Tokneneng.png";
import cheesestick from "./assets/foodimages/Cheese Stick.png";
import dynamite from "./assets/foodimages/Dynamite.png";

const menuItems = [
  {
    key: 1,
    name: "Menudo and Rice",
    description:
      "Classic pork menudo served with warm steamed rice, cooked in a rich tomato sauce with potatoes, carrots, and spices for a hearty and flavorful meal.",
    price: 999,
    category: "Meal",
    image: menudo,
  },
  {
    key: 2,
    name: "Sisig and Rice",
    description:
      "Sizzling pork sisig served with warm steamed rice, mixed with onions, spices, and a savory tangy flavor that makes every bite rich, tasty, and satisfying.",
    price: 999,
    category: "Meal",
    image: sisig,
  },
  {
    key: 3,
    name: "Adobo and Rice",
    description:
      "Tender chicken adobo served with warm steamed rice, cooked in a rich savory sauce with garlic, soy sauce, and spices for a delicious and satisfying meal.",
    price: 999,
    category: "Meal",
    image: adobo,
  },
  {
    key: 4,
    name: "Fried Chicken and Rice",
    description:
      "Crispy fried chicken served with warm steamed rice, seasoned with flavorful spices and fried to golden perfection for a crunchy and satisfying meal.",
    price: 999,
    category: "Meal",
    image: friedchicken,
  },
  {
    key: 5,
    name: "Karekare and Rice",
    description:
      "Traditional kare kare served with bagoong and warm steamed rice, cooked in a rich peanut sauce with tender meat and vegetables for a savory and satisfying meal.",
    price: 999,
    category: "Meal",
    image: karekare,
  },
  {
    key: 6,
    name: "French Fries",
    description:
      "Golden french fries served with rich tomato ketchup, cooked until crispy on the outside and soft inside for a simple yet satisfying snack.",
    price: 999,
    category: "Snack",
    image: frenchfries,
  },
  {
    key: 7,
    name: "Pancit Canton",
    description:
      "A flavorful noodle dish stir-fried with savory sauces, mixed vegetables, and delicious seasonings, creating a rich and satisfying meal in every bite.",
    price: 999,
    category: "Snack",
    image: pancitcanton,
  },
  {
    key: 8,
    name: "Tokneneng",
    description:
      "Crispy kwek kwek served with flavorful vinegar dip, coated in a crunchy orange batter and fried to perfection for a tasty and satisfying snack.",
    price: 999,
    category: "Snack",
    image: tokneneng,
  },
  {
    key: 9,
    name: "Cheese Stick",
    description:
      "A crispy and cheesy snack made with golden-fried wrappers, filled with melted cheese for a rich, savory, and satisfying bite.",
    price: 999,
    category: "Snack",
    image: cheesestick,
  },
  {
    key: 10,
    name: "Dynamite",
    description:
      "A spicy and crispy Filipino snack made with chili peppers stuffed with flavorful filling, wrapped in a crunchy lumpia wrapper, and fried to golden perfection.",
    price: 999,
    category: "Snack",
    image: dynamite,
  },
];

export default menuItems;