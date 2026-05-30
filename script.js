// ================= DASHBOARD DATA =================

const dashboardData = [
  {
    title: "Total Users",
    number: "2,458",
    growth: "12.5%",
  },

  {
    title: "Total Orders",
    number: "1,245",
    growth: "8.2%",
  },

  {
    title: "Total Revenue",
    number: "$48,920",
    growth: "15.6%",
  },

  {
    title: "New Messages",
    number: "328",
    growth: "5.1%",
  },
];



// ================= CARD SECTION =================

const cardContainer = document.querySelector(".card");

dashboardData.forEach((item) => {

  cardContainer.innerHTML += `

      <div class="card1">

         <h4>${item.title}</h4>

         <h2>${item.number}</h2>

         <p class="rate">

            <i class="fa-solid fa-arrow-up"></i>

            ${item.growth}

         </p>

      </div>

   `;
});



// ================= MENU ITEMS =================

const menuItems = document.querySelectorAll(".menu-item");

const usersData = document.querySelector(".users-data");

const tableHead = document.querySelector(".table-head");



// ================= ORDER ARRAY =================

let orders = [];



// ================= MENU CLICK =================

menuItems.forEach((item) => {

  item.addEventListener("click", function () {

    let type = item.dataset.type;

    console.log(type);



    if (type === "users") {

      fetchUsers();

    }

    else if (type === "products") {

      fetchProducts();

    }

    else if (type === "orders") {

      fetchOrders();

    }

  });

});



// ================= USERS API =================

async function fetchUsers() {

  let response = await fetch("https://dummyjson.com/users");

  let data = await response.json();

  usersData.innerHTML = "";



  tableHead.innerHTML = `

      <p>Image</p>
      <p>Name</p>
      <p>Email</p>
      <p>Age</p>

   `;



  data.users.forEach((user) => {

    usersData.innerHTML += `

         <div class="user-row">

            <img src="${user.image}" width="50">

            <p>${user.firstName}</p>

            <p>${user.email}</p>

            <p>${user.age}</p>

         </div>

      `;

  });

}



// ================= PRODUCTS API =================

async function fetchProducts() {

  let response = await fetch("https://dummyjson.com/products");

  let data = await response.json();

  usersData.innerHTML = "";



  tableHead.innerHTML = `

      <p>Image</p>
      <p>Product</p>
      <p>Price</p>
      <p>Stock</p>
      <p>Action</p>

   `;



  data.products.forEach((product) => {

    usersData.innerHTML += `

         <div class="user-row">

            <img src="${product.thumbnail}" width="50">

            <p>${product.title}</p>

            <p>$${product.price}</p>

            <p>${product.stock}</p>

            <button onclick="orderProduct('${product.title}', ${product.price})">

               Order

            </button>

         </div>

      `;

  });

}



// ================= ORDER PRODUCT =================

function orderProduct(title, price) {

  let existingProduct = orders.find((item) => item.title === title);



  if (existingProduct) {

    existingProduct.quantity += 1;

    existingProduct.total = existingProduct.quantity * price;

  }

  else {

    orders.push({

      title: title,
      price: price,
      quantity: 1,
      total: price,

    });

  }



  alert("Order Added Successfully");

  console.log(orders);

}



// ================= FETCH ORDERS =================

function fetchOrders() {

  usersData.innerHTML = "";



  tableHead.innerHTML = `

      <p>Product</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>

   `;



  orders.forEach((item) => {

    usersData.innerHTML += `

         <div class="user-row">

            <p>${item.title}</p>

            <p>$${item.price}</p>

            <p>${item.quantity}</p>

            <p>$${item.total}</p>

         </div>

      `;

  });

}



// ================= DEFAULT LOAD =================

fetchUsers();