var toggle="&equiv;";
document.getElementById("nav-toggle").innerHTML = toggle;

var navlist = document.getElementsByTagName("nav");
var i;
for (i = 0; i < 1; i++) { navlist[i].classList.add("navigate"); }

function togNav() {
    if (toggle === "&equiv;") {
        toggle = "x";
        document.getElementById("nav-toggle").innerHTML = toggle;
        document.getElementById("nav-toggle").style.transform = "rotate(180deg)";
        navlist[0].className += " responsive";
    } else {
        toggle = "&equiv;";
        document.getElementById("nav-toggle").innerHTML = toggle;
        document.getElementById("nav-toggle").style.transform = "rotate(-180deg)";
        navlist[0].className = "navigate";
    }
}