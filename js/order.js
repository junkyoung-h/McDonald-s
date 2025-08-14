$(function() {
  $('.how ul li').click(function(){
    $('.how ul li').removeClass('selected');
    $(this).addClass('selected');
  });

  /* gpt */
  $('.slide-menu li').on('click', function() {
    /* e.preventDefault();  // a 태그 기본 동작 방지 (필요하면 제거) */
    $('.slide-menu li').removeClass('selected'); // 기존 선택 해제
    $(this).addClass('selected'); // 클릭한 요소에 selected 추가
  });
});