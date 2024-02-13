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

const wish = document.getElementById("wish");

function getProductsWish() {
  wish.innerHTML = "";
  let heart = JSON.parse(localStorage.getItem("heart")) || [];
  heart.map((item, index) => {
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
                  <button id="wish" onclick="removeFuncWish(${index})">Remove wishlist</button>
              </div>
             </div>
           </div>
          
          `;
    wish.appendChild(myDiv);
  });
}

function removeFuncWish(index) {
  let heart = JSON.parse(localStorage.getItem("heart")) || [];
  heart.splice(index, 1);
  localStorage.setItem("heart", JSON.stringify(heart));
  getProductsWish();
}

getProductsWish();
