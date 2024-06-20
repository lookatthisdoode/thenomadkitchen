const data = [
  {
    type: "summer-dinner",
    name: "Buffalo",
    description:
      "140g Grilled Buffalo Tenderloin. Double portion of Tenderloin 85K",
    price: 175,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "summer-dinner",
    name: "Chicken",
    description: "230g Roasted Chicken Breast. Double portion of Chicken 85K",
    price: 165,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "summer-dinner",
    name: "Fish n Chips",
    description:
      "130g Grilled Red Tilapia. Choose between grilled and battered fish, Double portion of Fish",
    price: 165,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "summer-dinner",
    name: "Vegan sausages",
    description: "Two Sausages with Walnuts, Bell Peppers and Mushrooms",
    price: 135,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "dinner",
    name: "Buffalo",
    description:
      "140g Grilled Buffalo Tenderloin. Double portion of Tenderloin 85K",
    price: 175,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "dinner",
    name: "Chicken",
    description: "230g Roasted Chicken Breast. Double portion of Chicken 85K",
    price: 165,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "dinner",
    name: "Fish",
    description: "130g Grilled Red Tilapia. Double portion of Fish 90K",
    price: 165,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "dinner",
    name: "Vegan Sausages",
    description: "Two Sausages with Walnuts, Bell Peppers and Mushrooms",
    price: 135,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "salad",
    name: "Shrimp Salad",
    description: "Sauce Recommendation: Sesame. Extra shrimp 85K",
    price: 195,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "salad",
    name: "Falafel Salad",
    description:
      "Feta Cheese. Sauce Recommendation: Tzatziki. Extra falafel 100K",
    price: 105,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "salad",
    name: "Chicken Breast Salad",
    description: "Sauce Recommendation: Sesame. Extra chicken 85K",
    price: 140,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "salad",
    name: "Buffalo Steak Salad",
    description: "Sauce Recommendation: Balsamic. Extra buffalo steak 85K",
    price: 140,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "salad",
    name: "Green Salad",
    description:
      "Mix lettuce, bell pepper, carrot, avocado, sundried tomatoes and fresh tomatoes, sesame and sunflower seeds, sauce of choice",
    price: 85,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "salad",
    name: "Fried or Grilled Fish Salad",
    description: "Sauce Recommendation: Tar-Tar. Extra fish fillet 90K",
    price: 135,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "sandwich",
    name: "Chicken Burger",
    description:
      "230g deep-fried chicken breast, mozzarella, lettuce, tomato and caramelized onion topped with aioli sauce, served on a fresh home-made bun",
    price: 155,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "sandwich",
    name: "Classic Buffalo",
    description:
      "140g buffalo steak, cheddar cheese, caramelized onion, tomato and rocket salad topped with Dijon mayo, served on a fresh home-made focaccia bread",
    price: 160,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "sandwich",
    name: "Mediterranean Buffalo",
    description:
      "140g buffalo steak, feta cheese, cucumber, lettuce, tomato and red onion topped with yogurt and aioli sauce, served on a fresh home-made focaccia bread",
    price: 160,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "sandwich",
    name: "Chorizo Nomad Burger",
    description:
      "150g pork shoulder patty with Spanish paprika, topped with jalapeño peppers, mozzarella cheese, aioli sauce and chimichurri sauce, served on a fresh home-made bun",
    price: 150,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "sandwich",
    name: "Chicken Pesto Sandwich",
    description:
      "230g chicken breast, basil pesto sauce, sundried tomato, olives, mozzarella cheese, served on a fresh home-made focaccia bread",
    price: 160,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "sandwich",
    name: "Falafel Sandwich",
    description:
      "3 homemade falafels, olives, red onion, feta cheese, lettuce and cucumber, topped with a yogurt sauce, served on a home-made focaccia bread",
    price: 115,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "sandwich",
    name: "Wagyu Beef Burger",
    description: "not yet",
    price: 999,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "tapas",
    name: "Gambas al Ajillo",
    description:
      "Traditional Spanish Garlic Prawns with extra virgin olive oil and paprika",
    price: 195,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "tapas",
    name: "Grandma's Fried Calamari",
    description: "Served with Tar-Tar sauce",
    price: 120,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "tapas",
    name: "Bacon Chicken Croquettes",
    description:
      "3 Deep-fried Bacon and chicken béchamel balls. Add one for 30K",
    price: 75,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "tapas",
    name: "Chorizo Croquettes",
    description: "3 Deep-fried chorizo béchamel balls. Add one for 30K",
    price: 85,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "tapas",
    name: "Marinated Olives",
    description: "Choose to have it with bread or chips",
    price: 999,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "tapas",
    name: "Mussels in White Sauce",
    description: "add later",
    price: 999,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "tapas",
    name: "Boquerones en Vinagre",
    description: "Comes with bread",
    price: 999,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "tapas",
    name: "Fish and Chips",
    description: "That's right! The `ole",
    price: 999,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "pasta",
    name: "Pesto Linguine",
    description:
      "90g linguine, pesto sauce, parmesan cheese, fresh and sun-dried tomatoes. Add extra chicken for 65K",
    price: 120,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "pasta",
    name: "Seafood Linguine",
    description:
      "Creamy white wine sauce with paprika, parmesan cheese, topped with tiger prawns and mussels",
    price: 235,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "pasta",
    name: "Chorizo Linguine",
    description:
      "Home-made Spanish ibérico chorizo bolognese with ground pork, topped with gratin mozzarella and parmesan cheese",
    price: 185,
    image_url: "https://i.imgur.com/6YbAxG8.gif",
  },
  {
    type: "side",
    name: "Feta Cheese",
    description: "",
    price: 20,
    image_url: null,
  },
  {
    type: "side",
    name: "Mozzarella Cheese",
    description: "",
    price: 20,
    image_url: null,
  },
  {
    type: "side",
    name: "Chips or Fries",
    description: "",
    price: 55,
    image_url: null,
  },
  {
    type: "side",
    name: "Mashed Potatoes",
    description: "",
    price: 55,
  },
  {
    type: "side",
    name: "Jalapeño Peppers",
    description: "",
    price: 15,
    image_url: null,
  },
  {
    type: "side",
    name: "Extra Grilled Veggies",
    description: "",
    price: 45,
    image_url: null,
  },
  {
    type: "side",
    name: "Fish Fillet (Grilled or Fried)",
    description: "",
    price: 90,
    image_url: null,
  },
  {
    type: "side",
    name: "230g Grilled Chicken Breast",
    description: "",
    price: 85,
    image_url: null,
  },
  {
    type: "side",
    name: "140g Buffalo Steak",
    description: "",
    price: 85,
    image_url: null,
  },
  {
    type: "side",
    name: "3 Falafel Balls",
    description: "",
    price: 55,
    image_url: null,
  },
  {
    type: "side",
    name: "2 Vegan Sausages",
    description: "",
    price: 65,
    image_url: null,
  },
];

module.exports = { data };