const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function (e){
    if(e.key == "Escape"){
        cactus.style.animationPlayState = "running";
    }
    jump();
});

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");
    }
    setTimeout(function (){
        dino.classList.remove('jump');
    }, 300)
}

let isAlive = setInterval(function (){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("GAME OVER");
        //TODO: возможно заменить алерт на отображение текста в блоке игры
        cactus.style.animationPlayState = "paused";
    }
}, 10)