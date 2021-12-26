// Đảm bảo không thể để trống input[type=number]
const numInputs = document.querySelectorAll('input[type=number]')

numInputs.forEach((input) => {
  input.addEventListener('change', function(e) {
    if (e.target.value == '') {
      e.target.value = 1
    }
  })
})

// 
function increaseValue(element) {
  // Chú ý giữa Node vs Element?
  var parent_element = element.parentElement;
  var qty_element = parent_element.children[1]; 
  var value = parseInt(qty_element.value, 10);
  var max_value = parseInt(qty_element.max, 10);
  max_value = isNaN(max_value)? 99 : max_value;

  value = value === max_value ? value : value + 1;

  qty_element.value = value;
}

function decreaseValue(element) {
  var parent_element = element.parentElement;
  var qty_element = parent_element.children[1]; 
  var value = parseInt(qty_element.value, 10);
  var min_value = parseInt(qty_element.min, 10);
  min_value = isNaN(min_value)? 1 : min_value;

  value = value === min_value ? value : value - 1;
  qty_element.value = value;
}


function clickProduct(event) {
    console.log(event.target)
    var link = event.target.getAttribute("data-link");
    window.open(link);
  
}

var elements = document.getElementsByClassName("product-item");
for(var i = 0; i < elements.length; ++i) {
  elements[i].addEventListener('click', (event) => {
    clickProduct(event);
  })
}