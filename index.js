var sideMenu = document.querySelector(".fa-bars");
var navLinks = document.querySelector(".nav_links");
var button = document.querySelector(".button");
var navandbutton = document.querySelector(".navandbutton")

   sideMenu.addEventListener("click", () => {
        navLinks.classList.toggle("dropSideMenu");
        navLinks.classList.toggle("nav_links");
      //   button.classList.toggle("header-button");
      //   button.classList.toggle("button");
      //   navandbutton.classList.toggle("navendbutton");
      //   navandbutton.classList.toggle("navandbutton");
   });    
      
    

// the function for activating dropdownnav-links in css
//  function dropDown() {
//     var navLinks = document.querySelector(".nav_links");

//     navLinks.classList.toggle("dropSideMenu");
 
//     // setTimeout(function() {
//     //    activeButton.classList.remove("pressed");
//     // }, 100)
//     }

