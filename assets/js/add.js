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

//

const nameInp = document.getElementById("nameInp");
const priceInp = document.getElementById("priceInp");
const imageInp = document.getElementById("imageInp");
const form = document.getElementById("form");
const newProducts = document.getElementById("newProducts");
const listPro = document.getElementById('listPro')

function myForm(e) {
  e.preventDefault();

  axios
    .post("https://655c84d425b76d9884fd7251.mockapi.io/product", {
      name: nameInp.value,
      price: priceInp.value,
      image: imageInp.value,
    })
    .then((res) => {
      console.log(res.data);
      form.reset();
      renderProduct();
      tableProduct();
    });
}

form.addEventListener("submit", myForm);

///

function renderProduct() {
  newProducts.innerHTML = "";
  axios
    .get("https://655c84d425b76d9884fd7251.mockapi.io/product")
    .then((res) => {
      pro = res.data;
      pro.map((item) => {
        const myDiv = document.createElement("div");
        myDiv.className = "box col-xl-3 col-mf-6 col-12";
        myDiv.innerHTML = `
            
            <div class="boxDiv">
            <img src="${item.image}" alt="">
            <div class="boxText">
                <h6>${item.name}</h6>
                <p>${item.price}</p>
                <div class="twoBtn">
                    <button id="delete" onclick="deleteProducts(${item.id})">Delete</button>
                </div>
               </div>
             </div>
            
            `;
            newProducts.appendChild(myDiv);
      });
    });
}

renderProduct()

///

function deleteProducts(id){
    axios.delete(`https://655c84d425b76d9884fd7251.mockapi.io/product/${id}`)
    .then(res =>{
        renderProduct();
        tableProduct();
    })
}

///

function tableProduct(){

    listPro.innerHTML = ''
    axios.get('https://655c84d425b76d9884fd7251.mockapi.io/product')
    .then(res =>{
        pro = res.data
        pro.map(item =>{
            const tr = document.createElement('tr')
            tr.className = 'listDiv'
            tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td><div class="photo">${item.image}</div></td>
            <td>${item.price}</td>
            <td><button id="delete " onclick="deleteProducts(${item.id})">Delete</button></td>
            `
            listPro.appendChild(tr)
        })
    })
}

tableProduct()