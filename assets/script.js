const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const navBarElements = document.querySelectorAll('.nav-link');
let userSignedIn = false;

// if the user is signed in they navbar one 
// if the user is not signed in they see navbar two
function signInNavBar (bool) {
  
  for (let i = 0; i < navBarElements.length; i++) {
      const currentNavBar = navBarElements[i];
      // displays the nav bar elements
      if (bool) {
        currentNavBar.setAttribute("style", "visibility: visible"); 
        console.log("User logged in.");
       } else if (!bool) {
          if (i === 0) {
          currentNavBar.textContent = "Events"; 
          currentNavBar.setAttribute("style", "visibility: visible"); 
          } if (i === 4) {
          currentNavBar.textContent = "Why GT"; 
          currentNavBar.setAttribute("style", "visibility: visible");     
          } else {
          currentNavBar.setAttribute("style", "visibility: hidden"); 
          console.log("Not logged in.");
          }   
      }
    } 
}     

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

signInNavBar(userSignedIn); 