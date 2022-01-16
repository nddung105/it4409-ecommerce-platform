// xử lý dropdown
function closeAllDropdown() {
	var dropdowns = document.getElementsByClassName('dropdown-expand')
	for (var i = 0; i < dropdowns.length; i++) {
		dropdowns[i].classList.remove('dropdown-expand')
	}
}

function 	openCloseDropdown(event) {
  if(event.target.matches('#search-bar')) {

  } else if (!event.target.matches('.dropdown-toggle')) { 
		closeAllDropdown()
	} 
  else {
		var toggle = event.target.dataset.toggle
		var content = document.getElementById(toggle)
		if (content.classList.contains('dropdown-expand')) {
			closeAllDropdown()
		} else {
			closeAllDropdown()
			content.classList.add('dropdown-expand')
		}
	}
}

window.onclick = function(event) {
	openCloseDropdown(event)
}

// đóng mở menu
function toggleMenu() {
  document.getElementById("navbar-menu").classList.toggle("expand");
}


// show/hide pass
function hidePwd(hide_pwd_id, show_pwd_id, pwd_id) {
	document.getElementById(hide_pwd_id,).style.display = "none";
	document.getElementById(show_pwd_id).style.display = "block";

	document.getElementById(pwd_id).setAttribute("type", "password");
}

function showPwd(hide_pwd_id, show_pwd_id, pwd_id) {
	document.getElementById(hide_pwd_id).style.display = "block";
	document.getElementById(show_pwd_id).style.display = "none";

	document.getElementById(pwd_id).setAttribute("type", "text");
}


// add loading page
function doneLoading() {
	document.getElementsByClassName("loading-wrapper")[0].style.display = "none";
}

window.onload = () => {
	setTimeout(() => {doneLoading()}, 2000);
	doneLoading();
}
const cube = document.getElementById('products-cates')
const container = document.getElementById('product-cate-link')

cube.addEventListener('mouseover', () => container.style.display = "inline-block")
cube.addEventListener('mouseleave', () => container.style.display = "none")






