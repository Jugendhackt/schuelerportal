function menuon() {
    var x = document.getElementById("menu");
    var i = document.getElementById("menuon");
    var q = document.getElementById("menuoff");
    x.style.display="block"
    q.style.display="block"
    i.style.display="none"
}
function menuoff() {
    var x = document.getElementById("menu");
    var i = document.getElementById("menuoff");
    var q = document.getElementById("menuon");
    x.style.display="none"
    q.style.display="block"
    i.style.display="none"
}
