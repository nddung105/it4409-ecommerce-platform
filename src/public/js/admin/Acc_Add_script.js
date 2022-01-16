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
// account = JSON.parse(localStorage.getItem("account"))
// document.querySelector(".breadcrumb li:nth-child(3) a").innerHTML = "Tài khoản ID " + account.id
// document.querySelector("#bigTitle").innerHTML = account.name
// document.getElementById("name").placeholder= product.ten
// document.getElementById("price").placeholder= product.gia
// document.getElementById("category").placeholder= product.loai
// document.getElementById("brand").placeholder= product.hang

// document.getElementById("name").value= account.name
// document.getElementById("email").value= account.email
// document.getElementById("role").value= account.role
// document.getElementById("pass").value= account.password
// document.getElementById("createDate").innerHTML= account.created_at
// var prodname = document.getElementById("name")
// var price = document.getElementById("price")
// var category = document.getElementById("category")
// var brand = document.getElementById("brand")
// var descrip = document.getElementById("descrip")


var createDate = document.getElementById("createDate")
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
createDate.innerHTML = today
//them cac thong tin o day

//

//save
saveBtn = document.getElementById("saveBtn")
//call Api
saveBtn.addEventListener('click', () =>{
	Confirm.open({
        title: 'Xác nhận thêm tài khoản',
        message: 'Bạn có chắc muốn thêm tài khoản này chứ?',
        // {
        //     "id": 1,
        //     "username": "nddung1052",
        //     "hashed_password": "$2b$10$ayHE7G/obzz0dyeenEFvVeU3AViw6okeksXd2wKp39z/BLjV.na2W",
        //     "name": "Nguyen Dinh Dung",
        //     "role": "customer",
        //     "phonenumber": null,
        //     "avatar": null,
        //     "createdAt": "2021-12-19T07:59:10.748Z",
        //     "updateTimestamp": "2021-12-19T07:59:10.748Z"
        // }
        onok: () => {
            var values = {
                "username": document.getElementById("username").value,
                "password": document.getElementById("pass").value,
                "name": document.getElementById("name").value
            }
            // values = JSON.stringify(values);
            var formData = new FormData()
            formData.append("username", document.getElementById("username").value)
            formData.append("password", document.getElementById("pass").value)
            formData.append("name", document.getElementById("name").value)
            // formData.append("brand",document.getElementById("brand").value)
            // formData.append("description",document.getElementById("descrip").value)
            // formData.append("myfile",inputElement.files[0])

            $.ajax({
                type: 'POST',
                url: "http://localhost:3000/api/v1/users/register_sale",
                data: formData,
                headers: {
                    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjEwLCJuYW1lIjoiVEsgQURNSU4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDIzMDUwMjN9.yJJFnXULEOoq96uZeRcVnkluU6zyQvmNZE6H8xGhMoc'
                },
                error: function(e) {
                  console.log(e);
                },
                processData: false,
                contentType: false,
              });
          //call api post
        //fix xong thi uncomment dong duoi
        //   location.href="./AdminSys_QlyAcc.html";
        }
      })
	//post api
	console.log("back")
})
//

//delete
// delBtn = document.querySelector(".btn-delete")

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

// delBtn.addEventListener('click', () => {
//     Confirm.open({
//       title: 'Xác nhận xóa tài khoản',
//       message: 'Bạn có chắc muốn xóa tài khoản này chứ?',
//       onok: () => {
//         //call api xoa
//         location.href="./AdminSys_QlyAcc.html";
//       }
//     })
//   });