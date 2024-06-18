const users = [
  {
    name: "Danny",
    email: "danny@thenomadkitchen.com",
    password: "123456",
  },
];

const mains = [
  {
    name: "Chicken Burger",
    description:
      "230g deep-fried chicken breast, mozzarella, lettuce, tomato and caramelised onion topped with aioli sauce served on a fresh home-made bun",
    price: 155,
    url: "/assets/food/1.jpg",
  },
  {
    name: "Classic Buffalo",
    description:
      "140g buffalo steak, cheddar cheese, caramelised onion, tomato and lettuce topped with a dijon mayo and served on a fresh home-made foccacia bread",
    price: 160,
    url: "/assets/food/2.jpg",
  },
  {
    name: "Mediterranean Buffalo",
    description:
      "140g buffalo steak, feta cheese, cucumber, lettuce, tomato and red onion topped with a yogurt and aioli sauce served on a fresh home-made foccacia bread",
    price: 160,
    url: "/assets/food/3.jpg",
  },
  {
    name: "Fried or Grilled Fish Salad",
    description:
      "Served with lettuce, avocado, sundried-tomatoes, bell peppers, red onion, sunflower seeds, cucumber and tomatoes topped with one of our home-made salad dressings or sauces. Sauce Recommendation: Tar-Tar",
    price: 135,
    url: "/assets/food/4.jpg",
  },
  {
    name: "Green Salad",
    description:
      "Mix lettuce, bell pepper, carrot, avocado, sundried tomatoes and fresh tomatoes, sesame and sunflower seeds, sauce of choice",
    price: 85,
    url: "/assets/food/5.jpg",
  },
  {
    name: "Buffalo Steak Salad",
    description:
      "Served with lettuce, avocado, sundried-tomatoes, bell peppers, red onion, sunflower seeds, cucumber and tomatoes topped with one of our home-made salad dressings or sauces. Sauce Recommendation: Balsamic",
    price: 140,
    url: "/assets/food/6.jpg",
  },
];

const sides = [
  {
    name: "Feta cheese",
    price: 20,
  },
  {
    name: "Mozzarella cheese",
    price: 20,
  },
  {
    name: "Chips or Fries",
    price: 55,
  },
  {
    name: "Mashed potatoes",
    price: 55,
  },
  {
    name: "Jalapeno peppers",
    price: 15,
  },
  {
    name: "Extra grilled veggies",
    price: 45,
  },
  {
    name: "Fish fillet (grilled or fried)",
    price: 90,
  },
  {
    name: "230g Grilled chicken breast",
    price: 85,
  },
  {
    name: "140g Buffalo steak",
    price: 85,
  },
  {
    name: "3 Falafel balls",
    price: 55,
  },
  {
    name: "2 vegan sausages",
    price: 65,
  },
];

const cocktails = [
  {
    name: "Vietnam meets west",
    description: "Infused Lemongrass Gin, Rosemary and thyme Syrup, Lime",
    price: 115,
  },
  {
    name: "Japones amagat",
    description: "Sake, Vietnamese tea syrup, Lychee juice, Lime",
    price: 125,
  },
  {
    name: "Pol el Diablo",
    description:
      "Jalapeno infused tequila, Homemade Mango pure, Homemade ginger beer, Lime, Sal Tajin",
    price: 130,
  },
  {
    name: "Bitter Negroni Sampere",
    description:
      "Strawberry infused gin, Kumquat infused vermuth, Basil infused campari, Toped sparkling wine",
    price: 145,
  },
  {
    name: "Brandy de la yaya",
    description:
      "Caramalized apple infused Brandy, Dry vermouth, Spanish Jerez fino",
    price: 145,
  },
  {
    name: "Strawberry Gin infused Gin and tonic",
    description: "Homemade infused gin with a twist",
    price: 115,
  },
  {
    name: "Strawberry frozen margarita",
    description: "Tequila, Cointreau, Home made Strawberry pure, Lime",
    price: 120,
  },
  {
    name: "Rebujito",
    description: "Spanish Jerez fino, Sprite, Mint",
    price: 145,
  },
];

const hotdrinks = [
  {
    name: "Late cold/hot",
    price: 45,
  },
  {
    name: "Matcha cold/hot",
    price: 55,
  },
  {
    name: "Espresso",
    price: 30,
  },
  {
    name: "Moca cold/hot",
    price: 55,
  },
  {
    name: "American cold/hot",
    price: 45,
  },
  {
    name: "Salted caramel cold",
    price: 50,
  },
  {
    name: "Coldbrew",
    price: 50,
  },
];

const feedbackMessages = [
  {
    name: "Michael Johnson",
    contact: "michael.johnson@hotmail.com",
    customerMessage:
      "I wanted to share my feedback about the food quality. The dishes were delicious, and the presentation was outstanding.",
  },
  {
    name: "Sarah Brown",
    contact: "sarah.brown@yahoo.com",
    customerMessage:
      "I had a great experience at your restaurant. The ambiance was lovely, and the staff were friendly and attentive.",
  },
  {
    name: "David Lee",
    contact: "david.lee@example.com",
    customerMessage:
      "Thank you for the wonderful dining experience. The food was amazing, and your team made our evening special.",
  },
];

module.exports = {
  users,
  mains,
  sides,
  cocktails,
  hotdrinks,
  feedbackMessages,
};
