$(function() {
  $(".task1__li").click(function () {
    $('.task1__li').removeClass('active');
    $(this).addClass('active');
    $('.task1_p').removeClass('pActive');
    switch (this.innerHTML) {
      case 'Первая вкладка':
        $('.1').addClass('pActive');
        break;
      case 'Вторая вкладка':
        $('.2').addClass('pActive');
        break;
      case 'Третья вкладка':
        $('.3').addClass('pActive');
        break;
      case 'Четвертая вкладка':
        $('.4').addClass('pActive');
        break;
    }
  });
});
