document.getElementById('checkout-form').addEventListener('submit', function(checkout) {
    checkout.preventDefault();
    
    // Simulate successful payment
    const successMessage = document.getElementById('success-message');
    successMessage.classList.add('show');
  
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 3000);
  });
  