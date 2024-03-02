const counter = document.getElementsByClassName("product-description").length;
const qnty = document.querySelector(".quantity");
// let products = document.getElementsByClassName("prodact-description-container");
const btnp = document.querySelector(".plus");
const btnm = document.querySelector(".minus");
const containercart = document.querySelector(".prodact-description-container");
const clearbtn = document.querySelector(".clear-cart");
const checkoutbtn = document.querySelector(".checkout");
const cartContainer = document.querySelector(".cart-container")
const storageItems = JSON.parse(localStorage.getItem("cart"));
const cartItems = JSON.parse(localStorage.getItem("cart-items"));
const quanties = document.getElementsByClassName("quantity");
const removeBtns = document.getElementsByClassName("remove-btn");



// for (i=0; i < removeBtns.length; i++){
// 	let button = removeBtns[i];
// 	button.addEventListener("click", event => {
// 		let buttonclicked = event.target;
// 		buttonclicked.parentElement.parentElement.remove();
// 	})
// }
`<div class="cart-raw">
	<div class="cart-item">
		<div class="cart-item-picture"></div>
		<div class="cart-item-description">blabla</div>
	</div>
	<p class="price">$100</p>
	<div class="cart-item-quantity">
		<input type="number" value="1" class="quantity" name="" id="">
		<button class="remove-btn">Remove</button>
	</div>
</div>`

window.onload = function(){
	Array.from(cartItems).forEach( id => {
		let cartRaw = document.createElement("div");
		cartRaw.classList.add("cart-raw");
		let cartItem = document.createElement("div");
		cartItem.classList.add("cart-item");
		let cartPicture = document.createElement("div");
		cartPicture.classList.add("cart-item-picture");
		cartPicture.style.backgroundImage = `url(${bikes[id].background})`;
		let cartDescription = document.createElement("div");
		cartDescription.classList.add("cart-item-description");
		cartDescription.innerText = `${bikes[id].name}`;
		cartItem.append(cartPicture);
		cartItem.append(cartDescription);
		cartRaw.append(cartItem);
		cartRaw.innerHTML += `
		<p class="price">$ ${bikes[id].price}</p>
		<div class="cart-item-quantity">
			<input type="number" value="1" class="quantity" name="" id="">
			<button class="remove-btn">Remove</button>
		</div>
		<br class="br">
		`
		cartContainer.append(cartRaw);
	})
	Array.from(removeBtns).forEach(button => {
		button.addEventListener("click", event => {
			let buttonclicked = event.target;
			buttonclicked.parentElement.parentElement.remove();
			updateThePrice();
		})
	})
	
	for (i=0; i < quanties.length; i++){
		let quantityInput = quanties[i];
		quantityInput.addEventListener("change", event => {
			let changedQuantity = event.target;
			let prices = changedQuantity.parentElement.parentElement.getElementsByClassName("price");
			updateThePrice();
		} )
	}
	
	function updateThePrice(){
		let total = 0;
		let prices = document.getElementsByClassName("price");
		pricesArray = Array.from(prices);
		console.log(pricesArray)
		pricesArray.forEach(element => {
			let quantity = element.nextElementSibling.querySelector(".quantity").value;
			let itemCoast = parseFloat(element.innerText.replace("$", ""));
			total += quantity * itemCoast;
			console.log("updated total" + total);
		});
		document.querySelector(".total-check").innerText = `Total Price: $${total}`;
		if (total == 0){
			localStorage.removeItem("cart");
			cartContainer.innerHTML = `<div class="empty-cart"></div>
			<a class="home-btn" href="/mainPage.html">Home page</a>
			`;
			document.querySelector(".total-check").remove();
			checkoutbtn.remove();
			clearbtn.remove();
		}
	}
	updateThePrice();

}


// btnp.addEventListener('click', () =>{
// 		let appenditem = document.createElement("div");
// 		appenditem.classList.add("product-description");
// 		document.querySelector(".prodact-description-container").appendChild(appenditem);
// 		console.log("+")
// 		qnty.innerText++;
// })

// btnm.addEventListener('click', ()=> {

// 		let appenditem = document.querySelector(".product-description");
// 		let counter = Array.from(appenditem).length;
// 		appenditem.remove();
// 		qnty.innerText--;
// 		console.log('-')
// })


clearbtn.addEventListener('click', () => {
	localStorage.removeItem("cart");
	cartContainer.innerHTML = `<div class="empty-cart"></div>
	<a class="home-btn" href="/mainPage.html">Home page</a>
	`;
	document.querySelector(".total-check").remove();
	checkoutbtn.remove();
	clearbtn.remove();
})

checkoutbtn.addEventListener("click", ()=> {
	alert("thx for purchase, wish you a good day");
	localStorage.removeItem("cart");
	cartContainer.innerHTML = "<span>THX FOR PURCHASE</span>";
})

// clearCart.addEventListener("click", function(){
// 	if (qnty.innerText == "0")
// })