document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  // Function for "Scrol to top" button
  function scrollToTop() {
    console.log('click')
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  const scrollToTopButton = document.querySelector('.scroll-top-btn');
  scrollToTopButton.addEventListener('click', scrollToTop)

  // Mobile Header Menu Show / Hide function
  const toggleCheckbox = document.getElementById("toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  
  if (mobileMenu && toggleCheckbox) {
    toggleCheckbox.addEventListener("change", function() {
      if (toggleCheckbox.checked) {
        mobileMenu.classList.add('opened')
        document.body.classList.add('no-scroll');
        setTimeout(() => {
          mobileMenu.style.display = "flex";
        }, 200);
      } else {
        mobileMenu.classList.remove('opened')
        document.body.classList.remove('no-scroll');
        setTimeout(() => {
          mobileMenu.style.display = "none";
        }, 300);
      }
    });
  }



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

  // pricing section carousel
  $(".pricing-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    responsive: [
        {
          breakpoint: 2048,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '24px'
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
  });

  // testimonials section carousel
  $(".testimonials-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    responsive: [
        {
          breakpoint: 2048,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '24px'
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
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

  // Slider background logic to update
  function updateSliderBackground(slider, sliderValue) {
    const progress = (sliderValue / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #4E6CFF ${progress}%, #EEF1FF ${progress}%)`
  }

  if (amountSlider && amountValue){
    updateSliderBackground(amountSlider, amountSlider.value);
    amountSlider.addEventListener("input", function(event) {
      updateSliderBackground(amountSlider, event.target.value);
    });
  }

  if (periodSlider && periodValue){
    /* -0.5 because slider has little step and because of this the background gradient is too large */ 
    updateSliderBackground(periodSlider, periodSlider.value -0.5 );
    periodSlider.addEventListener("input", function(event) {
      updateSliderBackground(periodSlider, event.target.value - 0.5)
    })
  }



});