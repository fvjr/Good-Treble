const signupFormHandler = async (event) => {
  event.preventDefault();

  const newUserName = document.querySelector('#name-signup').value.trim();
  const newUserEmail = document.querySelector('#email-signup').value.trim();
  const newUserPassword = document
    .querySelector('#password-signup')
    .value.trim();

  if (newUserName && newUserEmail && newUserPassword) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ newUserName, newUserEmail, newUserPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
