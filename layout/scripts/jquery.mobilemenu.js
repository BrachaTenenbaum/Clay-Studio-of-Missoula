// mobile menu dropdown
function changeMobileMenu() {
    $('#mobilemainav .mobile-menu').click(function mobileMenu() {
      $('#mobilemainav .menu').show();
    });
  
    $('#mobilemainav .menu .close').click(function closeMobileMenu() {
      $('#mobilemainav .menu').hide();
    });
  }

changeMobileMenu();
