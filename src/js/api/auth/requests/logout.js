import auth from '../../auth/requests/index.js'

const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
  logoutButton.addEventListener("click", function() {
    auth.logout(); 
  });
} 
