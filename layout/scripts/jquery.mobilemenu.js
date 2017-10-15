// mobile menu dropdown
function changeMobileMenu() {
    $('#mobilemainav .mobile-menu').click(function mobileMenu() {
      $('.navbar-mobile').css('padding-top', '0');
      $('#mobilemainav .menu').show();
    });
  
    $('#mobilemainav .menu .close').click(function closeMobileMenu() {
    //   $('.navbar-mobile').css('padding-top', '15px');
      $('#mobilemainav .menu').hide();
    });
  }

changeMobileMenu();
