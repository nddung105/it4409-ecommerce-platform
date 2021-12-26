var stars;
document.addEventListener('DOMContentLoaded', () => {
    stars = document.querySelectorAll(".reviewStars span");

    stars.forEach(item => {
        item.addEventListener('click', function () {
            var rating = this.getAttribute("data-rating");
            return SetRatingStar(rating, stars);
        });
    });
});


function SetRatingStar(rating, stars) {
    var len = stars.length;
    console.log(rating);

    for (var i = 0; i < len; i++) {
        if (i < rating) {
            stars[i].innerHTML = '<i class="fas fa-star"></i>';
        } else {
            stars[i].innerHTML = '<i class="far fa-star"></i>';
        }
    }

};