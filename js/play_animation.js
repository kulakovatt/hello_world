//запуск анимации при попадании в определенный блок
var options = {
    root: null,
    rootMargin: '200px',
    threshold: 1.0
}

let observer = new IntersectionObserver(
    function (entries, observer) {
        handleIntersect(entries, observer);
    },
    options);

let targetElement = document.querySelector("#feedback");
observer.observe(targetElement,options);

const handleIntersect = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            var script = document.createElement('script');
            script.src = 'js/keyboard.js';
            document.getElementsByTagName('head')[0].appendChild(script);
            observer.unobserve(entry.target);
        }
    });
};