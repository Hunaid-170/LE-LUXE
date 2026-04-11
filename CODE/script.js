// ===== MENU SCRIPT =====
$(document).ready(function() {

  // Open fullscreen menu
  $('#menuBtn, .navbar-toggler').on('click', function() {
    $('#fullMenu').addClass('active');
    $('body').css('overflow', 'hidden'); // prevent background scroll
  });

  // Close fullscreen menu
  $('#closeMenu').on('click', function() {
    $('#fullMenu').removeClass('active');
    $('body').css('overflow', 'auto');
  });

  // Toggle PRODUCTS submenu
  $('#productToggle').on('click', function(e) {
    e.preventDefault();
    $('#productMenu').stop(true, true).slideToggle(300);
  });

  // Optional: close menu if clicked outside links
  $('#fullMenu').on('click', function(e) {
    if(e.target === this) {
      $(this).removeClass('active');
      $('body').css('overflow', 'auto');
    }
  });

  // Smooth scroll for buttons (luxury effect)
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this.hash);
    if(target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });

});


$(document).ready(function() {

  // Animate footer social icons on scroll
  $(window).on('scroll', function() {
    var footerOffset = $('.lux-footer').offset().top;
    var scroll = $(window).scrollTop() + $(window).height();

    if(scroll > footerOffset + 50) {
      $('.footer-social a').each(function(i) {
        $(this).delay(i * 150).animate({opacity: 1, bottom: 0}, 500);
      });
    }
  });

  // Initialize social icons hidden
  $('.footer-social a').css({opacity: 0, position: 'relative', bottom: '20px'});

});



$(document).ready(function(){

  $(".add-cart").click(function(){
    let name = $(this).closest(".product-body").find(".product-title").text();

    $(this)
      .text("Added ✓")
      .css({
        background: "gold",
        color: "#000"
      });

    setTimeout(() => {
      $(this).text("Add to Cart").attr("style", "");
    }, 2000);
  });

});


$(document).ready(function(){

  $(".view-btn").click(function(e){
    let target = $(this).attr("href");

    // Only apply smooth scroll for internal links
    if(target.startsWith("#")){
      e.preventDefault();

      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000);
    }
  });

});