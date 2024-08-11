// Function for "Scrol to top" button
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Mobile Header Menu Show / Hide function
document.addEventListener("DOMContentLoaded", function() {
  const toggleCheckbox = document.getElementById("toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  
  if (mobileMenu && toggleCheckbox) {
    toggleCheckbox.addEventListener("change", function() {
      if (toggleCheckbox.checked) {
        mobileMenu.classList.add('opened')
        setTimeout(() => {
          mobileMenu.style.display = "flex";
        }, 200);
      } else {
        mobileMenu.classList.remove('opened')
        setTimeout(() => {
          mobileMenu.style.display = "none";
        }, 300);
      }
    });
  }
});


// news section Slick slider initialization
$(".news .carousel").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  dots: true,
  arrows: true,
  appendArrows: $(".carousel-buttons"),
  prevArrow: $(".slider-left"),
  nextArrow: $(".slider-right"),
});