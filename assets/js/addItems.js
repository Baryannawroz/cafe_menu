
let lag='en'
const hotDrinks = [
    

  { name: { en: 'Ice Coffee', kr: 'ئایس کۆفی' }, menuId: 'menu-ice-coffee', type: 'ice-coffee' },
  { name: { en: 'Milk Shakes', kr: 'میلک شەیک' }, menuId: 'menu-milk-shakes', type: 'milk-shakes' },
  { name: { en: 'Desserts', kr: 'شیرینی' }, menuId: 'menu-desserts', type: 'desserts' },
  { name: { en: 'Fresh Juices', kr: 'ئاوی میوەی فرێش' }, menuId: 'menu-fresh-juices', type: 'fresh-juices' },
  { name: { en: 'Mojito', kr: 'مۆهیتۆ' }, menuId: 'menu-mojito', type: 'mojito' },
  { name: { en: 'Soft Drinks', kr: 'خواردەنوەکان' }, menuId: 'menu-soft-drinks', type: 'soft-drinks' },
  { name: { en: 'Frappes', kr: 'فراپێ' }, menuId: 'menu-frappes', type: 'frappes' },
  { name: { en: 'Mocktail', kr: 'مۆکتێل' }, menuId: 'menu-mocktail', type: 'mocktail' },
  { name: { en: 'Ice Tea', kr: 'چای یخ' }, menuId: 'menu-ice-tea', type: 'ice-tea' },
  { name: { en: 'Coffee', kr: 'قاوە' }, menuId: 'menu-coffee', type: 'coffee' },
  { name: { en: 'Main Dishes', kr: 'ژەمی سەرەکی' }, menuId: 'menu-main-dishes', type: 'main-dishes' },
  { name: { en: 'Sandwiches', kr: 'ساندویجەکان' }, menuId: 'menu-sandwiches', type: 'sandwiches' },
  { name: { en: 'Burgers', kr: 'بەرگر' }, menuId: 'menu-burgers', type: 'burgers' },
  { name: { en: 'Salads', kr: 'زەڵاتە' }, menuId: 'menu-salads', type: 'salads' }
];




const categories = [


  { name: { en: 'Ice Coffee', kr: 'ئایس کۆفی' }, target: 'menu-ice-coffee' },
  { name: { en: 'Milk Shakes', kr: 'میلک شەیک' }, target: 'menu-milk-shakes' },
  { name: { en: 'Desserts', kr: 'شیرینی' }, target: 'menu-desserts' },
  { name: { en: 'Fresh Juices', kr: 'ئاوی میوەی فرێش' }, target: 'menu-fresh-juices' },
  { name: { en: 'Mojito', kr: 'مۆهیتۆ' }, target: 'menu-mojito' },
  { name: { en: 'Soft Drinks', kr: 'خواردنەوەکان' }, target: 'menu-soft-drinks' },
  { name: { en: 'Frappes', kr: 'فراپێ' }, target: 'menu-frappes' },
  { name: { en: 'Mocktail', kr: 'مۆکتێل' }, target: 'menu-mocktail' },
  { name: { en: 'Coffee', kr: 'قاوە' }, target: 'menu-coffee' },
  { name: { en: 'Main Dishes', kr: 'ژەمی سەرەکی' }, target: 'menu-main-dishes' },
  { name: { en: 'Sandwiches', kr: 'ساندویجەکان' }, target: 'menu-sandwiches' },
  { name: { en: 'Burgers', kr: 'بەرگەرەکان' }, target: 'menu-burgers' },
  { name: { en: 'Salads', kr: 'زەڵاتە' }, target: 'menu-salads' }


  // { name: 'Ice Tea', target: 'menu-ice-tea' },
];


const menuItems = [
   
  // ICE COFFEE

  { name: { en: "Iced Latte", kr: "ئایس لاتێ" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/1.png", category: "ice-coffee" },
  { name: { en: "Iced Capuccino", kr: "ئایس کەپەچینۆ" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/2.png", category: "ice-coffee" },
  { name: { en: "Iced Mokachino", kr: "ئایس مۆکچینۆ" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/3.png", category: "ice-coffee" },
  { name: { en: "Iced Crema Milk", kr: "ئایس کرێما مێڵک" }, ingredients: "", price: "6000", imageUrl: "assets/img/menu/4.png", category: "ice-coffee" },
  { name: { en: "Iced Chocolate", kr: "ئایس چۆکلێت" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/5.png", category: "ice-coffee" },
  { name: { en: "Iced Americano", kr: "ئایس ئەمریکانۆ" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/6.png", category: "ice-coffee" },
  { name: { en: "Frappuccino", kr: "فراپەچینۆ" }, ingredients: "", price: "6000", imageUrl: "assets/img/menu/7.png", category: "ice-coffee" },

  // milk shake

  { name: { en: "Vanilla", kr: "ڤانێلا" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/21.png", category: "milk-shakes" },
{ name: { en: "Chocolate", kr: "چۆکۆلێت" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/22.png", category: "milk-shakes" },
{ name: { en: "Pistachio", kr: "فستق" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/23.png", category: "milk-shakes" },
{ name: { en: "Strawberry", kr: "شلیک" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/24.png", category: "milk-shakes" },
{ name: { en: "Kinder", kr: "کیندەر" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/25.png", category: "milk-shakes" },
{ name: { en: "Cherry", kr: "گێلاس" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/26.png", category: "milk-shakes" },
{ name: { en: "Chocolate Mint", kr: "چۆکلێت بە نەعناع" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/27.png", category: "milk-shakes" },
{ name: { en: "Coffee Shake", kr: "کۆفی شەیک" }, ingredients: "", price: "6000", imageUrl: "assets/img/menu/28.png", category: "milk-shakes" },
  { name: { en: "Blue Special", kr: "بلوو تایبەت" }, ingredients: "", price: "7000", imageUrl: "assets/img/menu/212.png", category: "milk-shakes" },

  // desserts
{ name: { en: "Chocolate Cake", kr: "چۆکۆلێت کەیک" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/31.png", category: "desserts" },
{ name: { en: "Raspberry Cheesecake", kr: "ڕاسبێری چیزکەیک" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/32.png", category: "desserts" },
{ name: { en: "Fondant", kr: "فاوندانت" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/33.png", category: "desserts" },
{ name: { en: "Brownie", kr: "براونی" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/34.png", category: "desserts" },
{ name: { en: "Lotus Milk Cake", kr: "لۆتوس میڵک کەیک" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/35.png", category: "desserts" },
{ name: { en: "Tiramisu", kr: "ترامیسۆ" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/36.png", category: "desserts" },
{ name: { en: "Latte Cake", kr: "لاتێ کەیک" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/37.png", category: "desserts" },
{ name: { en: "Red Velvet", kr: "ڕێد ڤالڤێت" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/38.png", category: "desserts" },
{ name: { en: "Crepe", kr: "کڕێپ" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/39.png", category: "desserts" },
{ name: { en: "Fruit Pancakes", kr: "فرووت پانکەیک" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/310.png", category: "desserts" },
{ name: { en: "Croissant", kr: "کراوسۆن" }, ingredients: "", price: "3000", imageUrl: "assets/img/menu/311.png", category: "desserts" },
{ name: { en: "Cinnamon Roll", kr: "سینمۆن ڕۆڵ" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/312.png", category: "desserts" },


// fresh juices
 { name: { en: "Orange", kr: "پرتەقاڵ" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/41.png", category: "fresh-juices" },
{ name: { en: "Pineapple", kr: "ئەناناس" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/42.png", category: "fresh-juices" },
{ name: { en: "Banana Strawberry", kr: "شلیک و مۆز" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/43.png", category: "fresh-juices" },
{ name: { en: "Banana Milk", kr: "شیرمۆز" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/44.png", category: "fresh-juices" },
{ name: { en: "Lemon", kr: "لەیمۆ" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/45.png", category: "fresh-juices" },
{ name: { en: "Lemon Mint", kr: "لەیمۆ و نەعناع" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/46.png", category: "fresh-juices" },
{ name: { en: "Green Apple", kr: "سێوەی سەوز" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/47.png", category: "fresh-juices" },
{ name: { en: "Melon", kr: "کاڵەک" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/48.png", category: "fresh-juices" },
  { name: { en: "Pomegranate", kr: "هەنار" }, ingredients: "", price: "4000", imageUrl: "assets/img/menu/49.png", category: "fresh-juices" },

  // soft drink
{ name: { en: "Water", kr: "ئاوی" }, ingredients: "", price: "500", imageUrl: "", category: "soft-drinks" },
{ name: { en: "Fresh Soda", kr: "سۆدا" }, ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
{ name: { en: "Tonic Soda", kr: "سۆدا تۆنیک" }, ingredients: "", price: "2000", imageUrl: "", category: "soft-drinks" },
{ name: { en: "Fresh Pepsi", kr: "پێپسی فرێش" }, ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
{ name: { en: "Pepsi", kr: "پەپسی" }, ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
{ name: { en: "Sprite", kr: "سپرايت" }, ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
{ name: { en: "Dew", kr: "دیو" }, ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
{ name: { en: "Miranda", kr: "میراندە" }, ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
{ name: { en: "Redbull", kr: "ڕێدبۆڵ" }, ingredients: "", price: "3000", imageUrl: "", category: "soft-drinks" },
{ name: { en: "Mexican Red Bull", kr: "رێدبەڵی مەکسیك" }, ingredients: "", price: "5000", imageUrl: "", category: "soft-drinks" },

  // FRAPPES
{ name: { en: "Greek Frappe", kr: "فراپەی یۆنانی" }, ingredients: "", price: "5000", imageUrl: "", category: "frappes" },
{ name: { en: "Matcha Frappe", kr: "فراپەی ماچا" }, ingredients: "", price: "6000", imageUrl: "", category: "frappes" },
  { name: { en: "Pistachio Frappe", kr: "فراپێ پیستاشیۆ" }, ingredients: "", price: "6000", imageUrl: "", category: "frappes" },
// mocktail
{ name: { en: "Pineapple Ginger", kr: "پایناپڵ جینجەر" }, ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },
{ name: { en: "Mixed Berries", kr: "میکسد بێریس" }, ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },
{ name: { en: "Mango Mule", kr: "مانگۆ مۆڵ" }, ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },
{ name: { en: "Lavender Lemonade", kr: "لاڤندەر لیمۆنەید " }, ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },
{ name: { en: "Coconut Lime Fizz", kr: "کۆکۆنەت  لایم ڤز" }, ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },
  { name: { en: "Your Choice", kr: "خواستی تۆ" }, ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },
// mojito
{ name: { en: "Classic Mojito", kr: "کلاسیک مۆهیتۆ" }, ingredients: "", price: "4000", imageUrl: "", category: "mojito" },
{ name: { en: "Strawberry Mojito", kr: "سترۆبێری مۆهیتۆ" }, ingredients: "", price: "5000", imageUrl: "", category: "mojito" },
{ name: { en: "Kiwi Mojito", kr: "موهیتۆ کیوی" }, ingredients: "", price: "5000", imageUrl: "", category: "mojito" },
{ name: { en: "Peach Ice Tea", kr: "ئایس تی قۆخ" }, ingredients: "", price: "5000", imageUrl: "", category: "mojito" },
  { name: { en: "Lemon Ice Tea", kr: "ئایس یی لیمۆ" }, ingredients: "", price: "5000", imageUrl: "", category: "mojito" },



  // Coffee

  { name: { en: "Espresso", kr: "ئەسپریسۆ" }, ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: { en: "Double Espresso", kr: "  دەبڵ ئەسپریسۆ" }, ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: { en: "Espresso Machiato", kr: "ئەسپریسۆ ماکیاتۆ " }, ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: { en: "Espresso Conppana", kr: "ئەسپریسۆ کۆن پاننا" }, ingredients: "", price: "3500", imageUrl: "", category: "coffee" },
  { name: { en: "Resttreto", kr: "رەستتڕێتۆ" }, ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: { en: "Lungo", kr: "لونگۆ" }, ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: { en: "Turkish Coffee", kr: "قاوەی تورکی" }, ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: { en: "Arabic Coffee", kr: "قاوەی عەرەبی" }, ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: { en: "Chocolate Coffee", kr: "قاوەی چۆکلێتی" }, ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: { en: "Menengic", kr: "مێنێجیک" }, ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: { en: "(French Press) Filtered Coffee", kr: "فلتەر کۆفێ (فرێنچ پرێس)" }, ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: { en: "Cortado", kr: "کۆرتادۆ" }, ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: { en: "Cappuccino", kr: "کاپۆچینو" }, ingredients: "", price: "5000", imageUrl: "", category: "coffee" },
  { name: { en: "Flat White", kr: "فلات وەیت" }, ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: { en: "(V60) Filtered Coffee 1P", kr: "(V60) فلتەر کۆفێ   1 کەی" }, ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: { en: "(V60) Filtered Coffee 2P", kr: "(V60) فلتەر کۆفێ   2 کەی" }, ingredients: "", price: "7000", imageUrl: "", category: "coffee" },
 
  { name: { en: "Cafe Latte", kr: "کافە لاته" }, ingredients: "", price: "5000", imageUrl: "", category: "coffee" },
  { name: { en: "Latte Machiato", kr: "لاتە ماکیاتۆ" }, ingredients: "", price: "5000", imageUrl: "", category: "coffee" },
  { name: { en: "Spanish Latte", kr: "لاتەی ئیسپانی" }, ingredients: "", price: "6000", imageUrl: "", category: "coffee" },
  { name: { en: "Pumpkin Spice Latte", kr: "لاتەی کولەکەی شیرین" }, ingredients: "", price: "7000", imageUrl: "", category: "coffee" },
  { name: { en: "Japanese Matcha", kr: "ماچای یابانی" }, ingredients: "", price: "6000", imageUrl: "", category: "coffee" },
  { name: { en: "Affogato", kr: "ئەفۆگاتۆ" }, ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: { en: "Long Black", kr: "لۆنگ بلاک" }, ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: { en: "Americano", kr: "ئەمریکانۆ" }, ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: { en: "Mochaccino", kr: "مۆکەچینو" }, ingredients: "", price: "5000", imageUrl: "", category: "coffee" },
  { name: { en: "Nescafe", kr: "نێسکافێ" }, ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: { en: "Hot Chocolate", kr: "چۆکلێتی گەرم" }, ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: { en: "Hot Milk", kr: "شیرەی گەرما" }, ingredients: "", price: "2000", imageUrl: "", category: "coffee" },
  { name: { en: "Black Tea", kr: "چای " }, ingredients: "", price: "1000", imageUrl: "", category: "coffee" },
  { name: { en: "Caramel Tea", kr: "چای کەرامێل" }, ingredients: "", price: "2000", imageUrl: "", category: "coffee" },
  { name: { en: "Green Tea", kr: "چای سەوز" }, ingredients: "", price: "2000", imageUrl: "", category: "coffee" },
  { name: { en: "Karak Chai ", kr: "چای کاراک " }, ingredients: "", price: "3000", imageUrl: "", category: "coffee" }
,
  // Main Dishes

  { name: { en: "Chicken Biryani", kr: "بریانی  مریشک" }, ingredients: "", price: "7000", imageUrl: "", category: "main-dishes" },
  { name: { en: "Meat Biryani", kr: "بریانی گوشت" }, ingredients: "", price: "9000", imageUrl: "", category: "main-dishes" },
  { name: { en: "Chicken Steak", kr: "ستەیکی مریشک" }, ingredients: "", price: "6000", imageUrl: "", category: "main-dishes" },
  { name: { en: "Dite Meal", kr: "خواردنی دایت" }, ingredients: "", price: "6000", imageUrl: "", category: "main-dishes" },
  { name: { en: "Chicken Chilly Fry", kr: " چلفرای مریشک" }, ingredients: "", price: "7000", imageUrl: "", category: "main-dishes" },
  { name: { en: "Meat Chilly Fry", kr: "چلفرای گوشت " }, ingredients: "", price: "9000", imageUrl: "", category: "main-dishes" },
  { name: { en: "Alfredo Pasta", kr: "پاستای ئەلفریدو" }, ingredients: "", price: "7000", imageUrl: "", category: "main-dishes" },
  { name: { en: "Fries", kr: "فڕایس" }, ingredients: "", price: "3000", imageUrl: "", category: "main-dishes" },
  { name: { en: "Cheese Fries", kr: "چیز فڕایس" }, ingredients: "", price: "4500", imageUrl: "", category: "main-dishes" }
,

  // Sandwiches

  { name: { en: "Chicken Sandwich", kr: "ساندویچی مریشک" }, ingredients: "", price: "5000", imageUrl: "", category: "sandwiches" },
  { name: { en: "Chicken Cheese Sandwich", kr: "ساندویچی مریشک بە پەنیر" }, ingredients: "", price: "6000", imageUrl: "", category: "sandwiches" },
  { name: { en: "Beef Sandwich", kr: "ساندویچی گوشت" }, ingredients: "", price: "7000", imageUrl: "", category: "sandwiches" },
  { name: { en: "Beef Cheese Sandwich", kr: "ساندویچی گوشت و پەنیری" }, ingredients: "", price: "8000", imageUrl: "", category: "sandwiches" },
  { name: { en: "Chicken Steak Sandwich", kr: "ساندویچی ستەیکی  مریشک" }, ingredients: "", price: "6000", imageUrl: "", category: "sandwiches" },
  { name: { en: "Chicken Bread Sandwich", kr: "ساندویچی  مریشک بە نان" }, ingredients: "", price: "6000", imageUrl: "", category: "sandwiches" },
  { name: { en: "Beef Bread Sandwich", kr: "ساندویچی گوشت بە نان" }, ingredients: "", price: "8000", imageUrl: "", category: "sandwiches" },
  { name: { en: "Blue Chicken Sandwich", kr: "ساندویچی مریشکی بلو" }, ingredients: "", price: "9000", imageUrl: "", category: "sandwiches" },
  { name: { en: "Blue Beef Sandwich", kr: "ساندویچی گۆشتی بلو" }, ingredients: "", price: "10000", imageUrl: "", category: "sandwiches" }
,

  // Burgers

  { name: { en: "Beef Burger", kr: "بەرگەری گۆشت" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/burger/1.png", category: "burgers" },
  { name: { en: "Cheese Burger", kr: "بەرگری گۆشت بە پەنیر" }, ingredients: "", price: "6000", imageUrl: "", category: "burgers" },
  { name: { en: "Swiss Mushroom Burger", kr: "بەرگری گۆشت بە قارچک" }, ingredients: "", price: "7000", imageUrl: "", category: "burgers" },
  { name: { en: "Blue Burger", kr: "بەرگری بلو" }, ingredients: "", price: "9000", imageUrl: "", category: "burgers" },
  { name: { en: "Chicken Burger", kr: "بەرگری مریشک" }, ingredients: "", price: "5000", imageUrl: "", category: "burgers" },

  // Salads
  { name: { en: "Chicken Salad", kr: "زەڵاتەی مریشک" }, ingredients: "", price: "6000", imageUrl: "assets/img/menu/salads/1.png", category: "salads" },
  { name: { en: "Beef Salad", kr: "زەڵاتەی گۆشت" }, ingredients: "", price: "8000", imageUrl: "assets/img/menu/salads/2.png", category: "salads" },
  { name: { en: "Caesar Salad", kr: "زەڵاتەی سێزەر" }, ingredients: "", price: "7000", imageUrl: "assets/img/menu/salads/3.png", category: "salads" },
  { name: { en: "Steak Salad", kr: "زەڵاتەی ستەیکی مریشک" }, ingredients: "", price: "6000", imageUrl: "assets/img/menu/salads/4.png", category: "salads" },
  { name: { en: "Tuna Salad", kr: "زەڵاتەی تونا" }, ingredients: "", price: "6000", imageUrl: "assets/img/menu/salads/5.png", category: "salads" },
  { name: { en: "Greek Salad", kr: "زەڵاتەی یۆنانی" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/salads/6.png", category: "salads" },
  { name: { en: "Fattoush Salad", kr: "زەڵاتەی فەتووش" }, ingredients: "", price: "5000", imageUrl: "assets/img/menu/salads/7.png", category: "salads" },
  { name: { en: "Blue Special Salad", kr: "زەڵاتەی تایبەتی بلو" }, ingredients: "", price: "6000", imageUrl: "assets/img/menu/salads/8.png", category: "salads" }
];



  // Function to add a food item card
  // Array of categories


// Function to add a category
function addCategory(categoryName, targetId) {
  const categoryList = document.getElementById('category_list');

  const li = document.createElement('li');
  li.className = 'nav-item';

  li.innerHTML = `
    <a class="nav-link" data-bs-toggle="tab" data-bs-target="#${targetId}">
      <h4>${categoryName[lag]}</h4>
    </a>
  `;

  categoryList.appendChild(li);
}

// Loop through the array and add each category
categories.forEach(category => {
  addCategory(category.name, category.target);
});



function addCategoryContent(categoryName, targetId, contentId) {
  const tabContentList = document.getElementById('menu_list');

  const div = document.createElement('div');
  div.className = 'tab-pane fade';
  div.id = targetId;

  div.innerHTML = `
    <div class="tab-header text-center">
      <p>${lag=='en'? 'Menu' :'مێنیو'}</p>
      <h3>${categoryName[lag]}</h3>
    </div>
    <div class="row gy-5" id="${contentId}">
      <!-- Food cards will be added here -->
    </div>
  `;

  tabContentList.appendChild(div);
}



// Loop through the array and call the function for each drink
hotDrinks.forEach(drink => {
    addCategoryContent(drink.name, drink.menuId, drink.type);
});




function addMenuItem(name, ingredients, price, imageUrl, category) {
      
    const menuContainer = document.getElementById(category);
    
    const menuItem = document.createElement('div');
    menuItem.classList.add('col-lg-4', 'menu-item',);
    
    menuItem.innerHTML = `
      <a href="${imageUrl}" class="glightbox">
        <img src="${imageUrl}" class="menu-img img-fluid" alt="">
      </a>
      <h4>${name[lag]}</h4>
      <p class="ingredients">${ingredients}</p>
      <p class="price">${price}</p>
    `;
    
    menuContainer.appendChild(menuItem);
  }

  // Loop through each item and add it to the page
  menuItems.forEach(item => {
    addMenuItem(item.name, item.ingredients, item.price, item.imageUrl,item.category);
  });

    function languageChanged() {
       lag = document.getElementById('language').value;
       document.getElementById('category_list').innerHTML = ''
       document.getElementById('menu_list').innerHTML = ''
      

      
     // Loop through categories and add each category
categories.forEach(category => {
  addCategory(category.name, category.target);
});

// Loop through hot drinks and add each category content
hotDrinks.forEach(drink => {
  addCategoryContent(drink.name, drink.menuId, drink.type);
});

// Loop through menu items and add each menu item
menuItems.forEach(item => {
  addMenuItem(item.name, item.ingredients, item.price, item.imageUrl, item.category);
});


      

  }