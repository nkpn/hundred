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

// Calculator Logic

const amountSlider = document.getElementById('amount');
const periodSlider = document.getElementById('period');
const amountValue = document.getElementById('amount-value');
const periodValue = document.getElementById('period-value');
const weeklyIncome = document.getElementById('weekly-income');

// Function to format number as currency
function formatCurrency(value) {
    return value.toLocaleString()
}

// Function to update the displayed values and calculate weekly income
function updateValues() {
    const amount = parseInt(amountSlider.value);
    const period = parseInt(periodSlider.value);

    amountValue.textContent =  `$ ${formatCurrency(amount)}`;
    periodValue.textContent = `${period} year${period > 1 ? 's' : ''}`;

    // Example formula for weekly income calculation
    const annualInterestRate = 0.5;
    const totalIncome = amount * Math.pow(1 + annualInterestRate, period);
    const weeklyIncomeValue = ((totalIncome - amount) / (period * 52)).toFixed(2);

    weeklyIncome.textContent = `$ ${formatCurrency(parseFloat(weeklyIncomeValue))}`;
}

// Event listeners for sliders
if (amountSlider && periodSlider && amountValue && periodValue && weeklyIncome) {
  amountSlider.addEventListener('input', updateValues);
  periodSlider.addEventListener('input', updateValues);
}

// Initial update
updateValues();