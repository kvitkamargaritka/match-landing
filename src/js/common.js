$(document).ready(function() {

  $('.menu-but').click(function(){
    $(this).toggleClass('show');
    $('.main-menu .mobile-menu').toggleClass('show');
    $('.main-menu .mobile-menu .sub').height(0);
  });

  $('.mobile-menu li a.cont').click(function(){
    $(this).toggleClass('show');
    var sub = $(this).parent().find('.sub');
    if(!sub.hasClass('show')){
      sub.animate({'height':76*4+'px'},300);
      sub.addClass('show');
    }else{
      sub.animate({'height':'0px'},300);
      sub.removeClass('show');
    }

    return false;
  });
  $('.mobile-menu .sub li a').click(function(){
    var sub = $('.main-menu .mobile-menu .sub');
    sub.animate({'height':'0px'},300);
    sub.removeClass('show');
    $('.menu-but').removeClass('show');
    $('.mobile-menu').removeClass('show');
    $('.mobile-menu li a.cont').removeClass('show');
  });

});