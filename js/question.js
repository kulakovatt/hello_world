
let flag = true;
document.addEventListener("click", function(e) {
    if (e.target.id =="search_str") {
        if(flag){
        let div = document.getElementById('question_2');
        let div_que = document.createElement("div");
        let div_que1 = document.createElement("div");
        let div_que2 = document.createElement("div");
        let div_que3 = document.createElement("div");
        let div_que4 = document.createElement("div");
        div_que.className = "ask_more";
        div_que.id = "ask_more";
        div_que1.className = "ask";
        div_que1.id = "ask1";
        div_que1.innerHTML = "Каков путь от джуниор-разработчика до мидла и как его пройти быстрее?";
        div_que2.className = "ask";
        div_que2.id = "ask2";
        div_que2.innerHTML = "Техническое собеседование: самое простое и ужасное?";
        div_que3.className = "ask";
        div_que3.id = "ask3";
        div_que3.innerHTML = "Как бороться с выгоранием в процессе обучения на курсах?";
        div_que4.className = "ask";
        div_que4.id = "ask4";
        div_que4.innerHTML = "Как с нуля качественно спланировать вход в айти?";
        div.appendChild(div_que);
        div_que.appendChild(div_que1);
        div_que.appendChild(div_que2);
        div_que.appendChild(div_que3);
        div_que.appendChild(div_que4);
        flag = false;
        }
    }
});

document.addEventListener("click", function(k) {
    if (k.target.id == 'ask1') {
        let search_str = document.getElementById('search_str');
        let div_parent = document.getElementById('ask_more');
        let div1 = document.getElementById('ask1');
        search_str.textContent = div1.textContent;
        let div2 = document.getElementById('ask2');
        let div3 = document.getElementById('ask3');
        let div4 = document.getElementById('ask4');
        div_parent.removeChild(div1);
        div_parent.removeChild(div2);
        div_parent.removeChild(div3);
        div_parent.removeChild(div4);
        let div_answer = document.createElement('div');
        div_answer.className = 'answer';
        div_answer.id = 'answer';
        div_answer.textContent = 'На развитие вашей карьеры могут повлиять как внешние, так и внутренние факторы. Первые не будут зависеть от вас и тут остается только подстраиваться под обстоятельства, а вот вторые — полностью в ваших руках.'
        div_parent.appendChild(div_answer);
    }
    if (k.target.id == 'ask2') {
        let search_str = document.getElementById('search_str');
        let div_parent = document.getElementById('ask_more');
        let div2 = document.getElementById('ask2');
        search_str.textContent = div2.textContent;
        let div1 = document.getElementById('ask1');
        let div3 = document.getElementById('ask3');
        let div4 = document.getElementById('ask4');
        div_parent.removeChild(div1);
        div_parent.removeChild(div2);
        div_parent.removeChild(div3);
        div_parent.removeChild(div4);
        let div_answer = document.createElement('div');
        div_answer.className = 'answer';
        div_answer.id = 'answer';
        div_answer.textContent = 'Самое важное на техническом собеседовании: это технические скиллы, способность запрашивать дополнительную информацию, вслух рассуждать, честно признаваться, если не знаете ответ на вопрос. Это была заключительная часть нашего гайда о собеседованиях, после которого у вас не должно остаться ни вопросов, ни сомнений, ни синдрома самозванца. Успешных собеседований и помните: отказ — это опыт, и он тоже работает на ваш будущий успех. Удачи!'
        div_parent.appendChild(div_answer);
    }
    if (k.target.id == 'ask3') {
        let search_str = document.getElementById('search_str');
        let div_parent = document.getElementById('ask_more');
        let div3 = document.getElementById('ask3');
        search_str.textContent = div3.textContent;
        let div1 = document.getElementById('ask1');
        let div2 = document.getElementById('ask2');
        let div4 = document.getElementById('ask4');
        div_parent.removeChild(div1);
        div_parent.removeChild(div2);
        div_parent.removeChild(div3);
        div_parent.removeChild(div4);
        let div_answer = document.createElement('div');
        div_answer.className = 'answer';
        div_answer.id = 'answer';
        div_answer.textContent = 'Если вы и изначально не особо любили свою деятельность, то совет довольно прост и очевиден — найдите в себе смелость изменить это. В среднем мы проводим 8 часов в день, 5 дней в неделю за работой, что как минимум треть нашего сознательного существования. Согласитесь, лучше найти 5-6 месяцев и переучиться, чтобы прожить свою лучшую жизнь.'
        div_parent.appendChild(div_answer);
    }
    if (k.target.id == 'ask4') {
        let search_str = document.getElementById('search_str');
        let div_parent = document.getElementById('ask_more');
        let div4 = document.getElementById('ask4');
        search_str.textContent = div4.textContent;
        let div1 = document.getElementById('ask1');
        let div2 = document.getElementById('ask2');
        let div3 = document.getElementById('ask3');
        div_parent.removeChild(div1);
        div_parent.removeChild(div2);
        div_parent.removeChild(div3);
        div_parent.removeChild(div4);
        let div_answer = document.createElement('div');
        div_answer.className = 'answer';
        div_answer.id = 'answer';
        div_answer.textContent = 'Запланируйте себе определенное количество собеседований, которое вы будете проходить для тренировки, а не для трудоустройства. Например, 20. Это снизит уровень стресса (ведь волнуемся мы, когда беспокоимся, что не пройдем собеседование). Если вы воспринимаете собеседование как тренировку, то не волнуетесь так, как если думаете, что это последний шанс и все пропало, если не возьмут.'
        div_parent.appendChild(div_answer);
    }
});

document.addEventListener("click", function(g) {
    if (g.target.tagName == 'rect') {
        let search_str = document.getElementById('search_str');
        search_str.textContent = 'Выберите вопрос...';
        let div_ans = document.getElementById('answer');
        let div_ask = document.getElementById('ask_more');
        let div = document.getElementById('question');
        div_ask.removeChild(div_ans);
        let div_que1 = document.createElement("div");
        let div_que2 = document.createElement("div");
        let div_que3 = document.createElement("div");
        let div_que4 = document.createElement("div");

        div_que1.className = "ask";
        div_que1.id = "ask1";
        div_que1.innerHTML = "Каков путь от джуниор-разработчика до мидла и как его пройти быстрее?";
        div_que2.className = "ask";
        div_que2.id = "ask2";
        div_que2.innerHTML = "Техническое собеседование: самое простое и ужасное?";
        div_que3.className = "ask";
        div_que3.id = "ask3";
        div_que3.innerHTML = "Как бороться с выгоранием в процессе обучения на курсах?";
        div_que4.className = "ask";
        div_que4.id = "ask4";
        div_que4.innerHTML = "Как с нуля качественно спланировать вход в айти?";

        div_ask.appendChild(div_que1);
        div_ask.appendChild(div_que2);
        div_ask.appendChild(div_que3);
        div_ask.appendChild(div_que4);
    }
});


//отправка собственного вопроса
//очистка инпутов и алерт
var text_email= document.getElementById('MY_email');
var text_que= document.getElementById('MY_question');

function send_question(){
    text_que.value = '';
    text_email.value = '';
}