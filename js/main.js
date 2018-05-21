// Задание №1
$(function () {
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

// Задание №2
check = function (form) {
  let name = form.name.value,
    phone = form.phone.value,
    email = form.email.value,
    text = form.text.value,
    namePattern = /^[а-яА-ЯёЁa-zA-Z]+$/,
    phonePattern = /^\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/,
    emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    textPattern = /^.*$/,
    errorText = '';
  if (namePattern.test(name)) document.getElementById('name').style.border = '1px solid green';
  else {
    document.getElementById('name').style.border = '1px solid red';
    errorText += 'Имя должно содержать только буквы\n';
  }
  if (phonePattern.test(phone)) document.getElementById('phone').style.border = '1px solid green';
  else {
    document.getElementById('phone').style.border = '1px solid red';
    errorText += 'Телефон должен быть в формате +7(000)000-0000\n';
  }
  if (emailPattern.test(email)) document.getElementById('email').style.border = '1px solid green';
  else {
    document.getElementById('email').style.border = '1px solid red';
    errorText += 'Укажите корректный email\n';
  }
  if (textPattern.test(text)) document.getElementById('text').style.border = '1px solid green';
  else {
    document.getElementById('text').style.border = '1px solid red';
    errorText += 'Заполните поле текст произвольным текстом';
  }
  if (errorText != '') alert(errorText);
  else alert('Данные отправлены. Спасибо!');
}

//Предективный поиск города

$(function () { //Загрузка JSON файла
  $.getJSON("js/cities.json", function (json) {
    console.log(json);
  });
  


  $('#city').keyup(function () { // Проверка ввода с клавиатуры
    let city = ($('#city').val());
    console.log(city);
  })
});
