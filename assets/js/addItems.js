// Hot Drink
// Cold Coffee
// Cold Drink
// Main Dishes
// Salads
// Sandwiches
// Burgers
// Desserts// Mojito
// Soft Drinks
const menuItems = [
     { name: "Espresso", ingredients: "water,coffee", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Double Espresso", ingredients: "coffee water", price: "3000", imageUrl: "assets/img/menu/menu-item-1.png", category: "hot-drink" },
    { name: "Espresso Macchiato", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Espresso Con Panna", ingredients: "", price: "3000", imageUrl: "assets/img/menu/menu-item-1.png", category: "hot-drink" },
    { name: "Ristretto", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Lungo", ingredients: "", price: "3000", imageUrl: "assets/img/menu/menu-item-1.png", category: "hot-drink" },
    { name: "Turkish Coffee", ingredients: "", price: "3000", imageUrl: "assets/img/menu/menu-item-1.png", category: "hot-drink" },
    { name: "Arabic Coffee", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Chocolate Coffee", ingredients: "", price: "3000", imageUrl: "assets/img/menu/menu-item-1.png", category: "hot-drink" },
    { name: "Menengic", ingredients: "", price: "3000", imageUrl: "assets/img/menu/menu-item-1.png", category: "hot-drink" },
    { name: "(V60) Filtered Coffee", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "(French Press) Filtered Coffee", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Cortado", ingredients: "", price: "3000", imageUrl: "assets/img/menu/menu-item-1.png", category: "hot-drink" },
    { name: "Cappuccino", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Flat White", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Cafe Latte", ingredients: "", price: "3000", imageUrl: "assets/img/menu/menu-item-1.png", category: "hot-drink" },
    { name: "Latte Macchiato", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Spanish Latte", ingredients: "", price: "3000", imageUrl: "assets/img/menu/menu-item-1.png", category: "hot-drink" },
    { name: "Pumpkin Spice Latte", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Japanese Matcha", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Affogato", ingredients: "", price: "3000", imageUrl: "assets/img/menu/menu-item-1.png", category: "hot-drink" },
    { name: "Long Black", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Americano", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Mochaccino", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Nescafe", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Hot Chocolate", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Hot Milk", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Black Tea", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Caramel Tea", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Green Tea", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },
    { name: "Karak Chai (Pakistani Tea)", ingredients: "", price: "3000", imageUrl: "assets/img/menu/cupOfCoffe.png", category: "hot-drink" },

];



  // Function to add a food item card
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
