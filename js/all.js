$(document).ready(function () {
  //漢堡選單
  $('.showmenu').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('menu-show');
  }); 


  //小圖示部分
  $("a[href$='.']").addClass('fa-sharp fa-solid fa-utensils');
  $("a[href$='.google']").addClass('fa-brands fa-square-google-plus');
  $("a[href$='.twiter']").addClass('fa-brands fa-square-twitter');
  $("a[href$='.facebook']").addClass('fa-brands fa-square-facebook');


  //top滑動效果
  $('.top a').click(function(event) {
    event.preventDefault();
    //animate可以滑動到指定的位置，scrollTop為0是最上面，1000是速度
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });

});
  


