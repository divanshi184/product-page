document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const buyNowButtons = document.querySelectorAll('.buy-now');
  const viewCartButton = document.querySelector('.view-cart');
  const backToProductsButton = document.querySelector('.back-to-products');
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartContainer = document.querySelector('.cart');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentSlide = 0;

  addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          const productName = this.parentElement.querySelector('h1').innerText;
          addToCart(productName);
      });
  });

  buyNowButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          const productName = this.parentElement.querySelector('h1').innerText;
          alert(`You bought ${productName}!`);
      });
  });

  viewCartButton.addEventListener('click', function() {
      cartContainer.classList.add('cart-visible');
  });

  backToProductsButton.addEventListener('click', function() {
      cartContainer.classList.remove('cart-visible');
  });

  prevButton.addEventListener('click', function() {
      currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
      showSlide(currentSlide);
  });

  nextButton.addEventListener('click', function() {
      currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
      showSlide(currentSlide);
  });

  function showSlide(slideIndex) {
      slides.forEach((slide) => slide.classList.remove('active'));
      slides[slideIndex].classList.add('active');
  }

  function addToCart(productName) {
      const cartItem = document.createElement('li');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
          <span>${productName}</span>
          <button class="remove-from-cart">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);

      const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
      removeFromCartButtons.forEach(function(button) {
          button.addEventListener('click', function() {
              this.parentElement.remove();
          });
      });
  }
});

document.getElementById('decrease').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });

  document.getElementById('increase').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });