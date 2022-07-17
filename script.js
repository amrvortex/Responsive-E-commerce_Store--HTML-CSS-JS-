const barMenu = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (barMenu) {
  barMenu.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

//Single_Product Page
// var mainImg = document.getElementById("mainImg");
// var smallImg = document.getElementsByClassName("small-img");

// smallImg[0].addEventListener("click", () => {
//   mainImg.src = smallImg[0].src;
// });
// smallImg[1].onclick = function () {
//   mainImg.src = smallImg[1].src;
// };
// smallImg[2].onclick = function () {
//   mainImg.src = smallImg[2].src;
// };
// smallImg[3].onclick = function () {
//   mainImg.src = smallImg[3].src;
// };

/* cart part */
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartItemButtons = document.getElementsByClassName("cart-remove");

  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  let quantityInputs = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    let button = quantityInputs[i];
    button.addEventListener("change", quantityChanged);
  }

  let addToCartButtons = document.getElementsByClassName("add-to-cart");
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement.parentElement;
  // console.log(shopItem);
  let title = shopItem.getElementsByClassName("product-title")[0].innerText;
  // console.log(title);
  let price = shopItem.getElementsByClassName("product-price")[0].innerText;
  let imageSrc = shopItem.getElementsByClassName("produc-img")[0].src;
  console.log(title, price, imageSrc);
  addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc) {
  let cartRow = document.createElement("tr");
  let cartBody = document.getElementsByClassName("cart-body")[0];
  console.log(cartBody);
  let cart = document.getElementById("cart");
  console.log(cart);
  let cartTable = document.getElementsByClassName("cart-table")[0];
  console.log(cartTable);
  let cartRowws = document.getElementsByClassName("cart-row")[0];
  console.log(cartRowws);
}

function updateCartTotal() {
  let cartRows = document.getElementsByClassName("cart-row");
  let total = 0;

  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName("cart-quantity")[0];
    // console.log(priceElement);
    // console.log(quantityElement);
    let price = parseFloat(priceElement.innerText.replace("$", ""));

    let quantity = quantityElement.value;
    // console.log(price);
    // console.log(quantity);
    // console.log(price * quantity);
    total = total + price * quantity;
  }

  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$ " + total;
}
