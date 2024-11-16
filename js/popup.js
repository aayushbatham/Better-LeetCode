document.getElementById('login-button').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulating login, you should implement API integration here
  if (username && password) {
      chrome.storage.local.set({ username, password }, () => {
          document.getElementById('auth-section').style.display = 'none';
          document.getElementById('friends-section').style.display = 'block';
      });
  } else {
      alert("Please enter valid credentials.");
  }
});

document.getElementById('add-friend').addEventListener('click', async () => {
  const friendUsername = document.getElementById('friend-username').value;
  // Call backend to add friend here
  alert(`Friend ${friendUsername} added!`);
});
