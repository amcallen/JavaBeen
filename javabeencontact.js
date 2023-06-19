

function shakeFields() {
  var usernameField = document.getElementById('name');
  var emailField = document.getElementById('email');
  var subField = document.getElementById('sub');
  var msgField = document.getElementById('msg');

  if (usernameField.value === '') {
    usernameField.classList.add('shake');
    usernameField.style.border = '2px solid red';

    // Remove shaking class after the animation finishes
    setTimeout(function() {
      usernameField.classList.remove('shake');
      usernameField.style.border = '';
    }, 1950);
     
  }

  if (emailField.value === '') {
    emailField.classList.add('shake');
    emailField.style.border = '2px solid red';

    // Remove shaking class after the animation finishes
    setTimeout(function() {
        emailField.classList.remove('shake');
        emailField.style.border = '';
    }, 1950);
     
  }

  if (subField.value === '') {
    subField.classList.add('shake');
    subField.style.border = '2px solid red';

    // Remove shaking class after the animation finishes
    setTimeout(function() {
        subField.classList.remove('shake');
        subField.style.border = '';
    }, 1950);
     
  }

  if (msgField.value === '') {
    msgField.classList.add('shake');
    msgField.style.border = '2px solid red';

    // Remove shaking class after the animation finishes
    setTimeout(function() {
        msgField.classList.remove('shake');
        msgField.style.border = '';
    }, 1950);
     
  }
}

document.getElementById('Submit').addEventListener('click', shakeFields);

