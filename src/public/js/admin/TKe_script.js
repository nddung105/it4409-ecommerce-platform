const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

let isSidebarOpen = 1

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');

		// var isOpen = new URLSearchParams();
		
	})
});




// TOGGLE SIDEBAR
// const menuBar = document.querySelector('#content nav .bx.bx-menu');
// const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
	isSidebarOpen = -isSidebarOpen
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

// searchButton.addEventListener('click', function (e) {
// 	if(window.innerWidth < 576) {
// 		e.preventDefault();
// 		searchForm.classList.toggle('show');
// 		if(searchForm.classList.contains('show')) {
// 			searchButtonIcon.classList.replace('bx-search', 'bx-x');
// 		} else {
// 			searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		}
// 	}
// })





if(window.innerWidth < 800) {
	console.log("width 800px")
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	// searchButtonIcon.classList.replace('bx-x', 'bx-search');
	// searchForm.classList.remove('show');
}

window.addEventListener('resize', (event) =>{
	if(this.innerWidth < 800){
		sidebar.classList.add('hide');
		isSidebarOpen = -1
	}
} )


// window.addEventListener('resize', function () {
// 	if(this.innerWidth > 576) {
// 		searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		searchForm.classList.remove('show');
// 	}
// })



// const switchMode = document.getElementById('switch-mode');

// switchMode.addEventListener('change', function () {
// 	if(this.checked) {
// 		document.body.classList.add('dark');
// 	} else {
// 		document.body.classList.remove('dark');
// 	}




// })

//http://localhost:3000/api/v1/order/sales_by_month
//fix
// $.ajax({
// 	url: "http://localhost:3000/api/v1/order/sales_by_month",
// 	type: 'GET',
// 	dataType: 'json', // added data type
// 	headers: {
// 		'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjEwLCJuYW1lIjoiVEsgQURNSU4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDIzMDUwMjN9.yJJFnXULEOoq96uZeRcVnkluU6zyQvmNZE6H8xGhMoc'
// 	},
// 	success: function(res) {
// 		console.log(res);
// 		// alert(res);
// 		// document.getElementById("numUser").innerHTML = res.data.length
// 		var doanhThu = res.data
// 		var totalDoanhthu = 0  
// 		for(let i=0; i <= doanhThu.length; i++){
// 			totalDoanhthu += doanhThu[i].total_money
// 		}
// 		document.getElementById("doanhThu").innerHTML=totalDoanhthu
// 	}
// });


$.ajax({
	url: "http://localhost:3000/api/v1/users/show_all_customer",
	type: 'GET',
	dataType: 'json', // added data type
	headers: {
		'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbGUiLCJpZCI6bnVsbCwibmFtZSI6IlRLIFNBTEUiLCJyb2xlIjoic2FsZSIsImlhdCI6MTY0MjMwMjM0OX0.5R6-asHF7ylnZWvNb8dLdIq2228h9XEAxBVU3NFO6mA'
	},
	success: function(res) {
		console.log(res);
		// alert(res);
		document.getElementById("numUser").innerHTML = res.data.length
	}
});


const countEl = document.getElementById('vistorCount');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/vinhvinh123/aloha/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}