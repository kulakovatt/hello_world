var i = 0;
var txt = 'Начни изучать новые технологии вместе с hello_world!'; /* Текст */
var speed = 80; /* Скорость/длительность эффекта в миллисекундах */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("hello_text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        if(i == txt.length){
            setTimeout(function (){
                document.getElementById("hello_text").innerHTML = '';
                i = 0;
                setTimeout(typeWriter, speed);
            }, 500);
        }
    }

}
// //отключение скролла страницы при нажатии на пробел
// var SPACE_KEYCODE=32;
// document.onkeydown=function(e){
//     var keycode=e.keyCode||e.charCode,
//         body=document.body;
//
//     if(keycode!=SPACE_KEYCODE)
//         return;
//
//     e.preventDefault();
// }

//изменение информации о курсах
let f = -1;
function change_info(){
    let div_name = document.getElementById('name_course');
    let div_info = document.getElementById('info_course');
    let div_start = document.getElementById('start_course');
    let arr_name = ['// Python разработчик','// Java разработчик','// Frontend разработчик'];
    let arr_info = ['// Научим с нуля разработке web-приложений на Python за 5,5 месяцев.','// Научим программировать на Java c нуля за 7,5 месяцев.','// Научим с нуля HTML, CSS и JavaScript за 7 месяцев.'];
    let arr_start = ['// Старт: 25 мая','// Старт: 19 апреля','// Старт: 20 июля'];
    if(f < 2){
        f++;
    } else if (f == 2) {
        f = 0;
    }
    console.log(f);
    div_name.innerText = arr_name[f];
    div_info.innerText = arr_info[f];
    div_start.innerText = arr_start[f];
}

//модальное окно формы
// function modal(selectorButton,selectorContent){
//     let body = $('body');
//     let content = $(selectorContent);
//     let button = $(selectorButton);
//
//     body.prepend(
//         '<div class="modal" data-modal="'
//         + selectorButton
//         + '">'
//         + '<div class="modal_content">'
//         + '<a href="#" class="modal_close">&times</a>'
//         + '</div>'
//         + '</div>'
//     );
//
//     let modal = $(
//         '.modal[data-modal="'
//         + selectorButton
//         + '"]'
//     );
//
//     modal
//         .find('.modal_content')
//         .append(content);
//
//     button.on('click', function (e){
//         e.preventDefault();
//         modal.addClass('modal_active');
//     });
// }
//
// modal('#button', '#content');