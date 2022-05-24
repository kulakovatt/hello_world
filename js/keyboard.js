//TODO: сделать для нескольких отзывов
let text_feed1 = document.getElementById('feedback_1').innerText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
let text_feed2 = document.getElementById('feedback_2').innerText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
let text_feed3 = document.getElementById('feedback_3').innerText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
let array = [text_feed1,text_feed2,text_feed3];
let letter;
let h = 0;
let increment = (function(n) {
    return function() {
        n += 1;
        return n;
    }
}(-1));
let str = array[h];

        function changeColor(){
            letter = str.charAt(increment());
            if (letter == letter.toLowerCase()) {
                letter = letter.toUpperCase();
            }
            if(letter == ' '){
                letter = 'space';
            }
            // console.log(letter);
            let key = document.getElementById(letter);
            // console.log(key);
            key.style.background = '#B5DE10';

            setTimeout(function (){
                key.style.background = '#1A1A1A';
                // console.log("!");
            }, 200);


        }

        let time = setInterval(changeColor, 500);
        setTimeout(function (){
            clearInterval(time);
        }, (str.length * 500));




var g = 0;
var txt1 = document.getElementById('feedback_1').innerText;
document.getElementById('feedback_1').innerText = "";
var txt2 = 'Курс закончился в начале октября, и в декабре я уже вышел на новую работу. Всего прошел около 15 собеседований. Почти каждый день было по собеседованию.'; /* Текст */
var txt3 = 'Сейчас IT - это единственно место, которое представляет тебе достойные рабочие условия и хороших людей рядом с тобой.'; /* Текст */
var speed1 = 480; /* Скорость/длительность эффекта в миллисекундах */
//TODO: решить со скоростью набора текста)

function typeWriter1() {

    if (g < txt1.length) {
        document.getElementById("feedback_1").innerHTML += txt1.charAt(g);
        g++;
        setTimeout(typeWriter1, speed1);
    }
}
typeWriter1();
