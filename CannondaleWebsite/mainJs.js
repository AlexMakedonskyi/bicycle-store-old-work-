
const bikes = [
	{
	id: '0',
	name: "1Gravel_Topstone_CarbonL",
	description: "Fast and modern bike to satisfy all needs",
	background: "/source-img/bikes/Gravels/1Gravel_Topstone_Carbon1L.webp",
	type: "gravel",
	price: 10000
		},
	{
		id: '1',
		name: "2Gravel_Topstone_CarbonR",
		description: "Fast and modern bike to satisfy all needs",
		background: "/source-img/bikes/Gravels/2Gravel_Topstone_Carbon1R.webp",
		type: "gravel",
		price: 9000
		},
	{
		id: '2',
		name: "3Gravel_Topstone_CarbonL",
		description: "Fast and modern bike to satisfy all needs",
		background: "/source-img/bikes/Gravels/3Gravel_Topstone_Carbon2L.webp",
		type: "gravel",
		price: 8000
		},
	{
		id: '3',
		name: "4Gravel_Topstone_CarbonLE",
		description: "Fast and modern bike to satisfy all needs",
		background: "/source-img/bikes/Gravels/4Gravel_Topstone_Carbon2LE.webp",
		type: "gravel",
		price: 7000
		},
	{
		id: '4',
		name: "5Gravel_Topstone_CarbonL",
		description: "Fast and modern bike to satisfy all needs",
		background: "/source-img/bikes/Gravels/5Gravel_Topstone_Carbon3L.webp",
		type: "gravel",
		price: 6000
		},
	{
		id: '5',
		name: "1Mnt_Scalpel_HM_ULT_TRD_PD",
		description: "Fast and modern bike to conquer the mountain",
		background: "/source-img/bikes/Mnt/1Mnt_Scalpel_HM_ULT_TRD_PD.webp",
		type: "mtb",
		price: 10000
		},
	{
		id: '6',
		name: "2Mnt_Scalpel_HM_ULT_TRD_PD",
		description: "Fast and modern bike to conquer the mountain",
		background: "/source-img/bikes/Mnt/2Mnt_Scalpel_HM_ULT_TRD_PD.webp",
		type: "mtb",
		price: 9000
		},
	{
		id: '7',
		name: "3Mnt_Scalpel_HM_ULT_TRD_PD",
		description: "Fast and modern bike to conquer the mountain",
		background: "/source-img/bikes/Mnt/3Mnt_Scalpel_HM_ULT_TRD_PD.webp",
		type: "mtb",
		price: 8000
		},
	{
		id: '8',
		name: "4Mnt_Scalpel_HM_ULT_TRD_PD",
		description: "Fast and modern bike to conquer the mountain",
		background: "/source-img/bikes/Mnt/4Mnt_Scalpel_HM_ULT_TRD_PD.webp",
		type: "mtb",
		price: 7000
		},
	{
		id: '9',
		name: "5Mnt_Scalpel_HM_ULT_TRD_PD",
		description: "Fast and modern bike to conquer the mountain",
		background: "/source-img/bikes/Mnt/5Mnt_Scalpel_HM_ULT_TRD_PD.webp",
		type: "mtb",
		price: 6000
		},
	{
		id: '10',
		name: "1SuperSix_EVO_1",
		description: "Fast and modern bike to smoke the f1",
		background: "/source-img/bikes/Road/1SuperSix_EVO_1.webp",
		type: "road",
		price: 10000
		},
	{
		id: '11',
		name: "2SuperSix_EVO_2",
		description: "Fast and modern bike to smoke the f1",
		background: "/source-img/bikes/Road/2SuperSix_EVO_2.webp",
		type: "road",
		price: 9000
		},
	{
		id: '12',
		name: "3SuperSix_EVO_3",
		description: "Fast and modern bike to smoke the f1",
		background: "/source-img/bikes/Road/3SuperSix_EVO_3.webp",
		type: "road",
		price: 8000
		},
	{
		id: '13',
		name: "4SuperSix_EVO_4",
		description: "Fast and modern bike to smoke the f1",
		background: "/source-img/bikes/Road/4SuperSix_EVO_4.webp",
		type: "road",
		price: 7000
		},
	{
		id: '14',
		name: "5SuperSix_EVO_5",
		description: "Fast and modern bike to smoke the f1",
		background: "/source-img/bikes/Road/5SuperSix_EVO_5.webp",
		type: "road",
		price: 6000
		},
];

const bikesFilter = {
	searchFilter: "",
	priceFilter: 10000
}


let filter = document.querySelectorAll(".filter");

let filterVar = '';


filter.forEach((item) => {
	item.addEventListener("click", ()=>{
		document.cookie = `filter=${item.dataset.type}`;
	})
})

// .onclick = function(){
// 	document.cookie = "filter=gravel";
// }

// const counter = document.getElementsByClassName("product-description").length;
// const qnty = document.querySelector(".quantity");
// let products = document.getElementsByClassName("prodact-description-container");
// const btnp = document.querySelector(".plus");
// const btnm = document.querySelector(".minus");

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

