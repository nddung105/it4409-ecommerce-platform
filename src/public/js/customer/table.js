function clickRowLink(event) {
  if(event.target.matches('.table-row-link')) {
    var link = event.target.dataset.link;
    window.open(link);
  }
}

window.onclick = function(event) {
  clickRowLink(event);
};

function hoverNameProduct(event) {
  if(event.target.matches('.product-name-row')) {
    var product_name = event.target.innerText;
    event.target.setAttribute("title", product_name);
  }
}

window.onmouseover = function(event) {
  hoverNameProduct(event);
};