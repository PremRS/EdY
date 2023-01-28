 function f(element, id) {
    console.log(id);

    var content = document.getElementById(id);
    content.classList.toggle("reveal-content")
}