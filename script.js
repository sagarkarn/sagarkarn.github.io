var drawerOpen = false;
function openDrawerNavigation(element) {
  button = document.getElementById('right-menu');
  if (!drawerOpen) {
    button.innerHTML = '<i class="fas fa-times"></i>'
    openNav();
    drawerOpen = true;
  } else {
    closeNav();
    
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  button.innerHTML = '<i class="fas fa-bars"></i>'
  drawerOpen = false;
}