
const dashboardData = [
  {
    title: "Total Users",
    number: "2,458",
    growth: "12.5%"
  },

  {
    title: "Total Orders",
    number: "1,245",
    growth: "8.2%"
  },

  {
    title: "Total Revenue",
    number: "$48,920",
    growth: "15.6%"
  },

  {
    title: "New Messages",
    number: "328",
    growth: "5.1%"
  }
];



const cardContainer = document.querySelector(".card");



dashboardData.forEach((item)=>{

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

async function fetchUsers(){

   let response = await fetch("https://dummyjson.com/users");

   let data = await response.json();

   const usersData = document.querySelector(".users-data");


   data.users.forEach((user)=>{

      usersData.innerHTML += `

         <div class="user-row">

            <img src="${user.image}" alt="">

            <p>${user.firstName}</p>

            <p>${user.email}</p>

            <p>${user.age}</p>

         </div>

      `;

   });

}

fetchUsers();


// const usersBtn = document.querySelector(".users-btn");

// const dataContainer = document.querySelector(".data-container");



// usersBtn.addEventListener("click", function () {

//    fetchUsers();

// });



// async function fetchUsers() {

//    let response = await fetch("https://dummyjson.com/users");

//    let data = await response.json();

//    console.log(data);



//    dataContainer.innerHTML = `

//       <h2>${data.users[0].firstName}</h2>

//    `;
// }


// user ya product 

const menuItems = document.querySelectorAll(".menu-item");

const usersData = document.querySelector(".users-data");



menuItems.forEach((item)=>{

   item.addEventListener("click", function(){

      let type = item.dataset.type;

      console.log(type);


      if(type === "users"){

         fetchUsers();

      }

      else if(type === "products"){

         fetchProducts();

      }

   });

});





async function fetchUsers(){

   let response = await fetch("https://dummyjson.com/users");

   let data = await response.json();

   usersData.innerHTML = "";


   data.users.forEach((user)=>{

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





async function fetchProducts(){

   let response = await fetch("https://dummyjson.com/products");

   let data = await response.json();

   usersData.innerHTML = "";


   data.products.forEach((product)=>{

      usersData.innerHTML += `

         <div class="user-row">

            <img src="${product.thumbnail}" width="50">

            <p>${product.title}</p>

            <p>$${product.price}</p>

            <p>${product.stock}</p>

         </div>

      `;

   });

}