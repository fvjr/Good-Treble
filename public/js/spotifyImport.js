const importButton = document.querySelector('#button-spotify-import');

const getSongs = async () => {
  const response = await fetch('/spotify/login', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

importButton.addEventListener('click');
