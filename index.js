 function expandContent(element, id) {
    var content = document.getElementById(id);
    content.classList.toggle("reveal-content");
}

window.onload = function() {

    var visitorsCount = 100;
    var countElement = document.getElementById('visitors');
    var initialCount = 0;


    var counter = setInterval(function() {
        if(initialCount < visitorsCount) {
            initialCount +=1;
            countElement.innerHTML = initialCount;
        } else {
            clearInterval(counter);
        }
    }, 10);
};