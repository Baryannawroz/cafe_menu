
const hotDrinks = [
    
  { name: 'Ice Coffee', menuId: 'menu-ice-coffee', type: 'ice-coffee' },
  { name: 'Milk Shakes', menuId: 'menu-milk-shakes', type: 'milk-shakes' },
  { name: 'Desserts', menuId: 'menu-desserts', type: 'desserts' },
  { name: 'Fresh Juices', menuId: 'menu-fresh-juices', type: 'fresh-juices' },
  { name: 'Mojito', menuId: 'menu-mojito', type: 'mojito' },
  { name: 'Mocktail', menuId: 'menu-mocktail', type: 'mocktail' },
  { name: 'Soft Drinks', menuId: 'menu-soft-drinks', type: 'soft-drinks' },
  { name: 'Frappes', menuId: 'menu-frappes', type: 'frappes' },
  { name: 'Ice Tea', menuId: 'menu-ice-tea', type: 'ice-tea' },
   { name: 'Coffee', menuId: 'menu-coffee', type: 'coffee' },
  { name: 'Main Dishes', menuId: 'menu-main-dishes', type: 'main-dishes' },
  { name: 'Sandwiches', menuId: 'menu-sandwiches', type: 'sandwiches' },
  { name: 'Burgers', menuId: 'menu-burgers', type: 'burgers' },
  { name: 'Salads', menuId: 'menu-salads', type: 'salads' }


];

const categories = [

  { name: 'Ice Coffee', target: 'menu-ice-coffee' },
  { name: 'Milk Shakes', target: 'menu-milk-shakes' },
  { name: 'Desserts', target: 'menu-desserts' },
  { name: 'Fresh Juices', target: 'menu-fresh-juices' },
  { name: 'Mojito', target: 'menu-mojito' },
  { name: 'Soft Drinks', target: 'menu-soft-drinks' },
  { name: 'Frappes', target: 'menu-frappes' },
  { name: 'Mocktail', target: 'menu-mocktail' },
  // { name: 'Ice Tea', target: 'menu-ice-tea' },
  { name: 'coffee', target: 'menu-coffee' },
  { name: 'main dishes', target: 'menu-main-dishes' },
  { name: 'sandwiches', target: 'menu-sandwiches' },
  { name: 'burgers', target: 'menu-burgers' },
  { name: 'salads', target: 'menu-salads' }
];

const menuItems = [
   
  // ICE COFFEE
  { name: "Iced Latte", ingredients: "", price: "5000", imageUrl: "assets/img/menu/1.png", category: "ice-coffee" },
  { name: "Iced Capucino", ingredients: "", price: "5000", imageUrl: "assets/img/menu/2.png", category: "ice-coffee" },
  { name: "Iced Mokachino", ingredients: "", price: "5000", imageUrl: "assets/img/menu/3.png", category: "ice-coffee" },
  { name: "Iced Crema Milk", ingredients: "", price: "6000", imageUrl: "assets/img/menu/4.png", category: "ice-coffee" },
  { name: "Iced Chocolate", ingredients: "", price: "4000", imageUrl: "assets/img/menu/5.png", category: "ice-coffee" },
  { name: "Iced Americano", ingredients: "", price: "4000", imageUrl: "assets/img/menu/6.png", category: "ice-coffee" },
  { name: "Frappuccino", ingredients: "", price: "6000", imageUrl: "assets/img/menu/7.png", category: "ice-coffee" },

  // FRESH JUICES
  { name: "Orange", ingredients: "", price: "4000", imageUrl: "", category: "fresh-juices" },
  { name: "Pineapple", ingredients: "", price: "4000", imageUrl: "", category: "fresh-juices" },
  { name: "Banana Milk", ingredients: "", price: "4000", imageUrl: "", category: "fresh-juices" },
  { name: "Banana Strawberry", ingredients: "", price: "5000", imageUrl: "", category: "fresh-juices" },
  { name: "Lemon", ingredients: "", price: "4000", imageUrl: "", category: "fresh-juices" },
  { name: "Lemon Mint", ingredients: "", price: "4000", imageUrl: "", category: "fresh-juices" },
  { name: "Green Apple", ingredients: "", price: "4000", imageUrl: "", category: "fresh-juices" },
  { name: "Pomegranate", ingredients: "", price: "4000", imageUrl: "", category: "fresh-juices" },
  { name: "Melon", ingredients: "", price: "4000", imageUrl: "", category: "fresh-juices" },

  // MILK SHAKES
  { name: "Vanilla", ingredients: "", price: "5000", imageUrl: "", category: "milk-shakes" },
  { name: "Chocolate", ingredients: "", price: "5000", imageUrl: "", category: "milk-shakes" },
  { name: "Pistachio", ingredients: "", price: "5000", imageUrl: "", category: "milk-shakes" },
  { name: "Strawberry", ingredients: "", price: "5000", imageUrl: "", category: "milk-shakes" },
  { name: "Kinder", ingredients: "", price: "5000", imageUrl: "", category: "milk-shakes" },
  { name: "Cherry", ingredients: "", price: "5000", imageUrl: "", category: "milk-shakes" },
  { name: "Chocolate Mint", ingredients: "", price: "5000", imageUrl: "", category: "milk-shakes" },
  { name: "Coffee Shake", ingredients: "", price: "6000", imageUrl: "", category: "milk-shakes" },
  { name: "Blue Special", ingredients: "", price: "7000", imageUrl: "", category: "milk-shakes" },

  // SOFT DRINKS
  { name: "Water", ingredients: "", price: "500", imageUrl: "", category: "soft-drinks" },
  { name: "Fresh Soda", ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
  { name: "Tonic Soda", ingredients: "", price: "2000", imageUrl: "", category: "soft-drinks" },
  { name: "Fresh Pepsi", ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
  { name: "Pepsi", ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
  { name: "Sprite", ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
  { name: "Dew", ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
  { name: "Miranda", ingredients: "", price: "1000", imageUrl: "", category: "soft-drinks" },
  { name: "Redbull", ingredients: "", price: "3000", imageUrl: "", category: "soft-drinks" },
  { name: "Mexican Red Bull", ingredients: "", price: "5000", imageUrl: "", category: "soft-drinks" },

  // FRAPPES
  { name: "Greek Frappe", ingredients: "", price: "5000", imageUrl: "", category: "frappes" },
  { name: "Matcha Frappe", ingredients: "", price: "6000", imageUrl: "", category: "frappes" },
  { name: "Pistachio Frappe", ingredients: "", price: "6000", imageUrl: "", category: "frappes" },

  // MOCKTAIL
  { name: "Pineapple Ginger", ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },
  { name: "Mixed Berries", ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },
  { name: "Mango Mule", ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },
  { name: "Lavender Lemonade", ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },
  { name: "Coconut Lime Fizz", ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },
  { name: "Your Choice", ingredients: "", price: "5000", imageUrl: "", category: "mocktail" },

  // MOJITO
  { name: "Classic Mojito", ingredients: "", price: "4000", imageUrl: "", category: "mojito" },
  { name: "Strawberry Mojito", ingredients: "", price: "5000", imageUrl: "", category: "mojito" },
  { name: "Kiwi Mojito", ingredients: "", price: "5000", imageUrl: "", category: "mojito" },

  // ICE TEA
  { name: "Peach Ice Tea", ingredients: "", price: "5000", imageUrl: "", category: "mojito" },
  { name: "Lemon Ice Tea", ingredients: "", price: "5000", imageUrl: "", category: "mojito" },

  // DESSERTS
  { name: "Chocolate Cake", ingredients: "", price: "4000", imageUrl: "", category: "desserts" },
  { name: "Raspberry Cheesecake", ingredients: "", price: "4000", imageUrl: "", category: "desserts" },
  { name: "Fondant", ingredients: "", price: "4000", imageUrl: "", category: "desserts" },
  { name: "Brownie", ingredients: "", price: "4000", imageUrl: "", category: "desserts" },
  { name: "Lotus Milk Cake", ingredients: "", price: "4000", imageUrl: "", category: "desserts" },
  { name: "Tiramisu", ingredients: "", price: "5000", imageUrl: "", category: "desserts" },
  { name: "Latte Cake", ingredients: "", price: "4000", imageUrl: "", category: "desserts" },
  { name: "Red Velvet", ingredients: "", price: "4000", imageUrl: "", category: "desserts" },
  { name: "Crepe", ingredients: "", price: "4000", imageUrl: "", category: "desserts" },
  { name: "Fruit Pancakes", ingredients: "", price: "5000", imageUrl: "", category: "desserts" },
  { name: "Croissant", ingredients: "", price: "3000", imageUrl: "", category: "desserts" },
  { name: "Cinnamon Roll", ingredients: "", price: "4000", imageUrl: "", category: "desserts" },


  // Coffee
  { name: "Espresso", ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: "Double Espresso", ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: "Espresso Machiato", ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: "Espresso Conppana", ingredients: "", price: "3500", imageUrl: "", category: "coffee" },
  { name: "Resttreto", ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: "Lungo", ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: "Turkish Coffee", ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: "Arabic Coffee", ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: "Choccolate Coffee", ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: "Menengic", ingredients: "", price: "3000", imageUrl: "", category: "coffee" },
  { name: "(V60) Filtered Coffee 1P", ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: "(V60) Filtered Coffee 2P", ingredients: "", price: "7000", imageUrl: "", category: "coffee" },
  { name: "(French Press) Filtered Coffee", ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: "Cortado", ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: "Cappucino", ingredients: "", price: "5000", imageUrl: "", category: "coffee" },
  { name: "Flat White", ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: "Cafe Latte", ingredients: "", price: "5000", imageUrl: "", category: "coffee" },
  { name: "Latte Machiato", ingredients: "", price: "5000", imageUrl: "", category: "coffee" },
  { name: "Spanish Latte", ingredients: "", price: "6000", imageUrl: "", category: "coffee" },
  { name: "Pumpkin Spiece Latte", ingredients: "", price: "7000", imageUrl: "", category: "coffee" },
  { name: "Japanese Matcha", ingredients: "", price: "6000", imageUrl: "", category: "coffee" },
  { name: "Affogato", ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: "Long Black", ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: "Americano", ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: "Mochaccino", ingredients: "", price: "5000", imageUrl: "", category: "coffee" },
  { name: "Nescafe", ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: "Hot Chocolate", ingredients: "", price: "4000", imageUrl: "", category: "coffee" },
  { name: "Hot Milk", ingredients: "", price: "2000", imageUrl: "", category: "coffee" },
  { name: "Black Tea", ingredients: "", price: "1000", imageUrl: "", category: "coffee" },
  { name: "Caramel Tea", ingredients: "", price: "2000", imageUrl: "", category: "coffee" },
  { name: "Green Tea", ingredients: "", price: "2000", imageUrl: "", category: "coffee" },
  { name: "Karak Chai (Pakistani Tea)", ingredients: "", price: "3000", imageUrl: "", category: "coffee" },

  // Main Dishes
  { name: "Chicken Biryani", ingredients: "", price: "7000", imageUrl: "", category: "main-dishes" },
  { name: "Meat Biryani", ingredients: "", price: "9000", imageUrl: "", category: "main-dishes" },
  { name: "Chicken Steak", ingredients: "", price: "6000", imageUrl: "", category: "main-dishes" },
  { name: "Chicken Chilly Fry", ingredients: "", price: "7000", imageUrl: "", category: "main-dishes" },
  { name: "Meat Chilly Fry", ingredients: "", price: "9000", imageUrl: "", category: "main-dishes" },
  { name: "Alfredo Pasta", ingredients: "", price: "7000", imageUrl: "", category: "main-dishes" },
  { name: "Fries", ingredients: "", price: "3000", imageUrl: "", category: "main-dishes" },
  { name: "Cheese Fries", ingredients: "", price: "4500", imageUrl: "", category: "main-dishes" },

  // Sandwiches
  { name: "Chicken Sandwich", ingredients: "", price: "5000", imageUrl: "", category: "sandwiches" },
  { name: "Chicken Cheese Sandwich", ingredients: "", price: "6000", imageUrl: "", category: "sandwiches" },
  { name: "Beef Sandwich", ingredients: "", price: "7000", imageUrl: "", category: "sandwiches" },
  { name: "Beef Cheese Sandwich", ingredients: "", price: "8000", imageUrl: "", category: "sandwiches" },
  { name: "Chicken Steak Sandwich", ingredients: "", price: "6000", imageUrl: "", category: "sandwiches" },
  { name: "Chicken Bread Sandwich", ingredients: "", price: "6000", imageUrl: "", category: "sandwiches" },
  { name: "Beef Bread Sandwich", ingredients: "", price: "8000", imageUrl: "", category: "sandwiches" },
  { name: "Blue Chicken Sandwich", ingredients: "", price: "9000", imageUrl: "", category: "sandwiches" },
  { name: "Blue Beef Sandwich", ingredients: "", price: "10000", imageUrl: "", category: "sandwiches" },

  // Burgers
  { name: "Beef Burger", ingredients: "", price: "5000", imageUrl: "", category: "burgers" },
  { name: "Cheese Burger", ingredients: "", price: "6000", imageUrl: "", category: "burgers" },
  { name: "Swiss Mushroom Burger", ingredients: "", price: "7000", imageUrl: "", category: "burgers" },
  { name: "Blue Burger", ingredients: "", price: "9000", imageUrl: "", category: "burgers" },
  { name: "Chicken Burger", ingredients: "", price: "5000", imageUrl: "", category: "burgers" },

  // Salads
  { name: "Chicken Salad", ingredients: "", price: "6000", imageUrl: "", category: "salads" },
  { name: "Beef Salad", ingredients: "", price: "8000", imageUrl: "", category: "salads" },
  { name: "Caesar Salad", ingredients: "", price: "7000", imageUrl: "", category: "salads" },
  { name: "Steak Salad", ingredients: "", price: "6000", imageUrl: "", category: "salads" },
  { name: "Tuna Salad", ingredients: "", price: "6000", imageUrl: "", category: "salads" },
  { name: "Greek Salad", ingredients: "", price: "5000", imageUrl: "", category: "salads" },
  { name: "Fattoush Salad", ingredients: "", price: "5000", imageUrl: "", category: "salads" },
  { name: "Blue Special Salad", ingredients: "", price: "6000", imageUrl: "", category: "salads" }


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
      <h4>${categoryName}</h4>
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
      <p>Menu</p>
      <h3>${categoryName}</h3>
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
      <h4>${name}</h4>
      <p class="ingredients">${ingredients}</p>
      <p class="price">${price}</p>
    `;
    
    menuContainer.appendChild(menuItem);
  }

  // Loop through each item and add it to the page
  menuItems.forEach(item => {
    addMenuItem(item.name, item.ingredients, item.price, item.imageUrl,item.category);
  });
