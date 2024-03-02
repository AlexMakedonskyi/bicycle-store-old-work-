const valuerange = document.getElementById("range");
const rendItem = document.querySelector(".price-value-range");
const renderedItems = document.querySelector(".products-container");
		
const cartStorage = [];


		valuerange.oninput = function(){
			rendItem.innerText = valuerange.value.toString();
		}

	function functiongetCookie(name) {
		if (document.cookie.length != 0) {
		var array = document.cookie.split("=");
			//   alert("Name=" + array[0] + " " + "Value=" + array[1]);
			return array[1];
		}
	else {
		alert("Cookie not available");
	}
	}
		
const filtervalue = functiongetCookie('filter');
const itemsArray = bikes.filter( bike => bike.type == filtervalue);

window.onload = function renderItmes() {
	renderedItems.innerHTML = "";
	console.log(itemsArray);
	itemsArray.forEach(item => {
		const itemToApend = document.createElement("div");
		const imagetoload = document.createElement("a");
		imagetoload.classList.add("products-container");
		imagetoload.classList.add("product");
		imagetoload.style.backgroundImage = `url(${item.background})`;
		itemToApend.dataset.price = item.price;
		itemToApend.dataset.filter = item.name;
		itemToApend.append(imagetoload);
		itemToApend.innerHTML += `
				<li class="filterli">${item.name}</li>
				<span>$${item.price}</span>
				<span>${item.description}</span>
				<button class="purchase">Purchase</button>
		`;
		// itemToApend.style.backgroundImage = `url(${item.background})`;
		itemToApend.classList.add("product-container");
		renderedItems.append(itemToApend);
	})
	const purchaseButtons = Array.from(document.getElementsByClassName("purchase"));
	purchaseButtons.forEach( item => {
		item.onclick = function(event){
				let itemName = event.target.parentElement.querySelector("li").innerText;
				for (let i = 0; i < bikes.length; i++) {
					if(bikes[i].name == itemName){
						if(cartStorage.includes(i)){
							alert("already in cart");
							return
						} else {cartStorage.push(i);}
						
						// if(localStorage.getItem("cart-items") == null){
						// 	localStorage.setItem("cart-items", [i]);
						// } else {
						// 	let newStorageArr = JSON.parse(localStorage.getItem("car-items"));
						// 	console.log(newStorageArr);
						// 	newStorageArr.push[i];
						// 	localStorage.setItem("cart-items", JSON.stringify(newStorageArr));
						// }
					}
				}
			}
		}
	)
}



document.querySelector(".apply-filter").onclick = function(){
	let value = document.querySelector(".price-value-range");
	let compareItemsStock = document.getElementsByClassName("product-container");
	let compareItems = Array.from(compareItemsStock);
	compareItems.forEach(item => {
		if(Number(item.dataset.price) > Number(value.innerText)){
			item.style.display = "none"
		} else {
			item.style.display = ""
		};
	})
}





// document.getElementById("searchbar").oninput = function(){
// 	let filtervalue = document.getElementById("searchbar");
// 	let filteredItems = document.getElementsByClassName("product-container");
// 	for (let i = 0; i <= filteredItems.length; i++){
// 		for (let j= 0; j <= filteredItems[i].dataset.filter.length; j++){
// 			if(filteredItems[i].dataset.filter.toUpperCase().includes(filtervalue.value.toUpperCase())){
// 				filteredItems[i].style.display = ''
// 			} else {
// 				filteredItems[i].style.display = 'none'
// 			}
// 		}
// 	}
// }




function filteringSearch(){
	let filtervalue = document.getElementById("searchbar");
	let filteredItems = document.getElementsByClassName("product-container");
	for (let i = 0; i <= filteredItems.length; i++){
		for (let j= 0; j <= filteredItems[i].dataset.filter.length; j++){
			if(filteredItems[i].dataset.filter.toUpperCase().includes(filtervalue.value.toUpperCase())){
				filteredItems[i].style.display = ''
			} else {
				filteredItems[i].style.display = 'none'
			}
		}
	}
}

const searchbar = document.getElementById("searchbar");
searchbar.addEventListener("input", filteringSearch);

window.addEventListener("beforeunload", function(){
	localStorage.setItem("cart-items", JSON.stringify(cartStorage));
})