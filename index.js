var sideMenu = document.querySelector(".fa-bars");
var navLinks = document.querySelector(".nav_links");


   sideMenu.addEventListener("click", () => {
        navLinks.classList.toggle("dropSideMenu");
        navLinks.classList.toggle("nav_links")
   });    
      
    

// the function for activating dropdownnav-links in css
//  function dropDown() {
//     var navLinks = document.querySelector(".nav_links");

//     navLinks.classList.toggle("dropSideMenu");
 
//     // setTimeout(function() {
//     //    activeButton.classList.remove("pressed");
//     // }, 100)
//     }

