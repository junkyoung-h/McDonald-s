$(document).ready(function () {
  $('#toggleBtn').click(function (e) {
    e.preventDefault();
    const menu = $('#menu_wrap');
    const overlay = $('#overlay');
    const img = $(this).find('img');
    const isOpen = menu.css('left') === '0px';

    if (isOpen) {
      menu.css('left', '-70%');
      overlay.hide();
      img.attr('src', 'img/menu.png');
    } else {
      menu.css('left', '0');
      overlay.show();
      img.attr('src', 'img/menu_color.png');
    }
  });

  $('#overlay').click(function () {
    $('#menu_wrap').css('left', '-70%');
    $(this).hide();
    $('#toggleBtn img').attr('src', 'img/menu.png');
  });


  
  $('#menu_wrap #gnb > li').click(function (e) {
    e.stopPropagation();
    const $submenu = $(this).children('.submenu');

    // 닫기 애니메이션이 진행중이면 처리 중단 (중복 방지)
    if ($submenu.is(':animated')) return;

    $('#menu_wrap #gnb > li').not(this).removeClass('click').children('.submenu').slideUp(200);

    if ($(this).hasClass('click')) {
      $(this).removeClass('click');
      $submenu.slideUp(200);
    } else {
      $(this).addClass('click');
      $submenu.slideDown(200);
    }
  });
});
