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
product = JSON.parse(localStorage.getItem("product2"))
document.querySelector(".breadcrumb li:nth-child(3) a").innerHTML = "Sản phẩm ID " + product.id
document.querySelector("#bigTitle").innerHTML = product.name
document.getElementById("name").placeholder= product.name
document.getElementById("price").placeholder= product.price
document.getElementById("category").placeholder= product.category
document.getElementById("brand").placeholder= product.brand

document.getElementById("name").value= product.name
document.getElementById("price").value= product.price
document.getElementById("category").value= product.category
document.getElementById("brand").value= product.brand
document.getElementById("descrip").value= product.description
var prodname = document.getElementById("name")
var price = document.getElementById("price")
var category = document.getElementById("category")
var brand = document.getElementById("brand")
var descrip = document.getElementById("descrip")
//them cac thong tin o day

//

//save
saveBtn = document.getElementById("saveBtn")
//call Api
saveBtn.addEventListener('click', () =>{
	//call api
	//not change
	if(prodname.value === product.name &&
		price.value === product.price &&
		category.value === product.category &&
		brand.value === product.brand &&
		descrip.value === ""
		){
			//do nothing
		}
	else{
		//call api to update
        var values = {
            "name":document.getElementById("name").value,
            "price":document.getElementById("price").value,
            "category":document.getElementById("category").value,
            "brand":document.getElementById("brand").value,
            "description":document.getElementById("descrip").value,
            "image_link":"https://s3.ap-southeast-1.amazonaws.com/computer-ecommerce/aad6f126-5d4a-449f-8779-e14b07a5a1a9_screenshot%20from%202022-01-11%2007-59-18.png"
        }

        values = JSON.stringify(values);
        console.log(values)
        // {
        //     "id": 3,
        //     "name": "hoaaaang",
        //     "price": 12,
        //     "category": "aa",
        //     "brand": "afasa",
        //     "description": "asdas",
        //     "image_link": null
        // }

        $.ajax({
            url: 'http://localhost:3000/api/v1/products/' + product.id,
            type: 'put',
            data: values,
            dataType: 'json',
            contentType:'application/json',
            success: function(data) {
            //   alert('Load was performed.');
            }
          });
	}
	location.href="./AdminSys_QlySP.html",true;
	console.log("back")
})
//

//delete
delBtn = document.querySelector(".btn-delete")

const Confirm = {
    open (options) {
        options = Object.assign({}, {
            title: '',
            message: '',
            okText: 'OK',
            cancelText: 'Cancel',
            onok: function () {},
            oncancel: function () {}
        }, options);
        
        const html = `
            <div class="confirm">
                <div class="confirm__window">
                    <div class="confirm__titlebar">
                        <span class="confirm__title">${options.title}</span>
                        <button class="confirm__close">&times;</button>
                    </div>
                    <div class="confirm__content">${options.message}</div>
                    <div class="confirm__buttons">
                        <button class="confirm__button confirm__button--ok confirm__button--fill">${options.okText}</button>
                        <button class="confirm__button confirm__button--cancel">${options.cancelText}</button>
                    </div>
                </div>
            </div>
        `;

        const template = document.createElement('template');
        template.innerHTML = html;

        // Elements
        const confirmEl = template.content.querySelector('.confirm');
        const btnClose = template.content.querySelector('.confirm__close');
        const btnOk = template.content.querySelector('.confirm__button--ok');
        const btnCancel = template.content.querySelector('.confirm__button--cancel');

        confirmEl.addEventListener('click', e => {
            if (e.target === confirmEl) {
                options.oncancel();
                this._close(confirmEl);
            }
        });

        btnOk.addEventListener('click', () => {
            options.onok();
            this._close(confirmEl);
        });

        [btnCancel, btnClose].forEach(el => {
            el.addEventListener('click', () => {
                options.oncancel();
                this._close(confirmEl);
            });
        });

        document.body.appendChild(template.content);
    },

    _close (confirmEl) {
        confirmEl.classList.add('confirm--close');

        confirmEl.addEventListener('animationend', () => {
            document.body.removeChild(confirmEl);
        });
    }
};

delBtn.addEventListener('click', () => {
    Confirm.open({
      title: 'Xác nhận xóa sản phẩm',
      message: 'Bạn có chắc muốn xóa sản phẩm này chứ?',
      onok: () => {
        //call api xoa
        $.ajax({
            url: 'http://localhost:3000/api/v1/products/' + product.id,
            type: 'DELETE',
            success: function(result) {
                // Do something with the result
            }
        });
        location.href="./AdminSys_QlySP.html";
      }
    })
  });