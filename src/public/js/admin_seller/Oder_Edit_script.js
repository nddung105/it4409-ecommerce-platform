   

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




//getData from click
order = JSON.parse(localStorage.getItem("order"))

document.querySelector(".breadcrumb li:nth-child(3) a").innerHTML = "Hóa đơn ID " + order.id
// document.querySelector("#bigTitle").innerHTML = account.name
// document.getElementById("name").placeholder= product.ten
// document.getElementById("price").placeholder= product.gia
// document.getElementById("category").placeholder= product.loai
// document.getElementById("brand").placeholder= product.hang
// {
//     "id": 2,
//     "user_id": 2,
//     "address": "Nghe An",
//     "full_name": "Nguyen Dinh Dung",
//     "status": "processed",
//     "total_money": 0,
//     "phone_number": "0984933079",
//     "note": "Thay doi roi",
//     "createdAt": "2022-01-16T02:57:29.580Z",
//     "updateTimestamp": "2022-01-16T03:25:13.540Z"
// }

// {
//     "id": 1,
//     "order_id": 1,
//     "product_id": 13,
//     "quantity": 2,
//     "total_money": 10000,
//     "createdAt": "2022-01-16T03:59:47.140Z",
//     "updateTimestamp": "2022-01-16T03:59:47.140Z"
// } 
// document.getElementById("name").value= account.name
document.getElementById("orID").value= order.id
document.getElementById("userID").value= order.user_id
document.getElementById("totalMoney").value= order.total_money
document.getElementById("fullName").value= order.full_name
document.getElementById("createDate").innerHTML= order.createdAt
document.getElementById("address").value= order.address
document.getElementById("phoneNum").value= order.phone_number
document.getElementById("status").value= order.status
document.getElementById("note").value= order.note
// document.getElementById("fullName").value= order.full_name
var productList = document.getElementById("productList")
var quantityList = document.getElementById("quantityList")
$.ajax({
	url: "http://localhost:3000/api/v1/order_detail/" + order.id,
	type: 'GET',
	dataType: 'json', // added data type
	headers: {
		'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5kZHVuZzEwNSIsImlkIjoyLCJuYW1lIjoiRHVuZ05EIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjQyMzA1NzcxfQ.Xqdy18YvsBqUIcxC3i083C2ij52RVUNo4qpRVhrnvsk'
	},
	success: function(res) {
		console.log("Going detailed");
		console.log(res);
		let product_list = res.data
        for(let i = 0; i< product_list.length; i++){
            var prod_node = document.createElement("li");
            prod_node.innerHTML =`Sản phẩm id ${product_list[i].id} :   ${product_list[i].quantity} sản phẩm`
            productList.appendChild(prod_node)

            var cost_node = document.createElement("li");
            cost_node.innerHTML =`${product_list[i].total_money * product_list[i].quantity}`
            quantityList.appendChild(cost_node)
        }
	}
});
// {
//     "id": 1,
//     "order_id": 1,
//     "product_id": 13,
//     "quantity": 2,
//     "total_money": 10000,
//     "createdAt": "2022-01-16T03:59:47.140Z",
//     "updateTimestamp": "2022-01-16T03:59:47.140Z"
// } 



// var prodname = document.getElementById("name")
// var price = document.getElementById("price")
// var category = document.getElementById("category")
// var brand = document.getElementById("brand")
// var descrip = document.getElementById("descrip")
//them cac thong tin o day

//

//save
// saveBtn = document.getElementById("saveBtn")
// //call Api
// saveBtn.addEventListener('click', () =>{
// 	//call api
// 	//not change
// 	// if(prodname.value === product.ten &&
// 	// 	price.value === product.gia &&
// 	// 	category.value === product.loai &&
// 	// 	brand.value === product.hang &&
// 	// 	descrip.value === ""
// 	// 	){
// 	// 		//do nothing
// 	// 	}
// 	// else{
// 	// 	//call api to update
// 	// }
// 	location.href="../../../views/admin_seller/AdminSell_QlyOrder.html",true;
// 	console.log("back")
// })
//

//delete
// delBtn = document.querySelector(".btn-delete")

// const Confirm = {
//     open (options) {
//         options = Object.assign({}, {
//             title: '',
//             message: '',
//             okText: 'OK',
//             cancelText: 'Cancel',
//             onok: function () {},
//             oncancel: function () {}
//         }, options);
        
//         const html = `
//             <div class="confirm">
//                 <div class="confirm__window">
//                     <div class="confirm__titlebar">
//                         <span class="confirm__title">${options.title}</span>
//                         <button class="confirm__close">&times;</button>
//                     </div>
//                     <div class="confirm__content">${options.message}</div>
//                     <div class="confirm__buttons">
//                         <button class="confirm__button confirm__button--ok confirm__button--fill">${options.okText}</button>
//                         <button class="confirm__button confirm__button--cancel">${options.cancelText}</button>
//                     </div>
//                 </div>
//             </div>
//         `;

//         const template = document.createElement('template');
//         template.innerHTML = html;

//         // Elements
//         const confirmEl = template.content.querySelector('.confirm');
//         const btnClose = template.content.querySelector('.confirm__close');
//         const btnOk = template.content.querySelector('.confirm__button--ok');
//         const btnCancel = template.content.querySelector('.confirm__button--cancel');

//         confirmEl.addEventListener('click', e => {
//             if (e.target === confirmEl) {
//                 options.oncancel();
//                 this._close(confirmEl);
//             }
//         });

//         btnOk.addEventListener('click', () => {
//             options.onok();
//             this._close(confirmEl);
//         });

//         [btnCancel, btnClose].forEach(el => {
//             el.addEventListener('click', () => {
//                 options.oncancel();
//                 this._close(confirmEl);
//             });
//         });

//         document.body.appendChild(template.content);
//     },

//     _close (confirmEl) {
//         confirmEl.classList.add('confirm--close');

//         confirmEl.addEventListener('animationend', () => {
//             document.body.removeChild(confirmEl);
//         });
//     }
// };

// delBtn.addEventListener('click', () => {
//     Confirm.open({
//       title: 'Xác nhận xóa tài khoản',
//       message: 'Bạn có chắc muốn xóa tài khoản này chứ?',
//       onok: () => {
//         //call api xoa
//         location.href="../../../views/admin_seller/AdminSell_QlyOrder.html";
//       }
//     })
//   });