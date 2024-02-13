const burgerBtn = document.getElementById("burgerBtn");
const ul = document.querySelector("ul");
let toggle = true;

function navbarHead() {
  if (toggle) {
    ul.classList.add("menu");
  } else {
    ul.classList.remove("menu");
  }

  toggle = !toggle;
}

burgerBtn.addEventListener("click", navbarHead);

///

const list = document.getElementById("list");

function getProducts() {
  list.innerHTML = "";
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.map((item, index) => {
    if (item.count == undefined) {
      item.count = 1;
    }
    const myDiv = document.createElement("div");
    myDiv.className = "box col-xl-3 col-mf-6 col-12";
    myDiv.innerHTML = `
          
          <div class="boxDiv">
          <img src="${item.image}" alt="">
          <div class="boxText">
              <h6>${item.name}</h6>
              <p>${item.price}</p>
              <p>${item.count}</p>
              <div class="twoBtn">
                  <button id="add" onclick="removeFunc(${index})">Remove basket</button>
              </div>
             </div>
           </div>
          
          `;
    list.appendChild(myDiv);
  });
}

function removeFunc(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let itemCart = cart[index];
  if (itemCart && itemCart.count > 1) {
    itemCart.count--;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getProducts();
}

getProducts();
