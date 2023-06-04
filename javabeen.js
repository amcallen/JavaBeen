$(document).ready(function() {
  $('#shakeButton').click(function() {
    $('#shopButton').addClass('shake');
    
    // Remove the shake class after the animation completes
    setTimeout(function() {
      $('#shakeButton').removeClass('shake');
    }, 500);
  });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();
  
    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';
  
    // Validate fields
    var isValid = true;
    if (name === '') {
      document.getElementById('nameError').textContent = 'Please enter your name.';
      isValid = false;
    }
  
    if (email === '') {
      document.getElementById('emailError').textContent = 'Please enter your email.';
      isValid = false;
    }
  
    if (subject === '') {
      document.getElementById('subjectError').textContent = 'Please enter a subject.';
      isValid = false;
    }
  
    if (message === '') {
      document.getElementById('messageError').textContent = 'Please enter a message.';
      isValid = false;
    }
  
    // Submit the form if all fields are valid
    if (isValid) {
      // You can add your code here to process the form submission
      alert('Form submitted successfully!');
      document.getElementById('contactForm').reset();
    }
  });
  
  
  
  
