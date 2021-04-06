const { Transform } = require("stream");

function letras() {
    var name = "Lucas Reina Justiniani";
    var divname = document.getElementById("name");
    var print = divname.innerHTML = name;
    var str = divname.innerHTML;

    console.log(print.length)
    console.log(print);
}

letras();

function showMenu() {
    let menu = document.getElementById("menu");

    menu.style.display = "block";
    menu.style.zIndex = "101";
}

function delay() {
    timeoutID = window.setTimeout(showMenu, 1000);
}

function showSkill() {
    let skil = document.getElementById("sk");

    skil.style.height = "100vh";

}
/**/
function showPlusJava() {
    let java = document.getElementById("java");

    if (java.style.display === "flex") {
        java.style.display = "none";
    } else {
        java.style.display = "flex";
    }
}
/**/
function showPlusSpring() {
    let spring = document.getElementById("spring");

    if (spring.style.display === "flex") {
        spring.style.display = "none";
    } else {
        spring.style.display = "flex";
    }
}
/**/



/*
*
*
*
*/

function closeMenu() {
    let closemenu = document.getElementById("menu");

    closemenu.style.display = "none";
    closemenu.style.zIndex = "0";
}

function closeSK() {
    let skil = document.getElementById("sk");
    let closemenu = document.getElementById("menu");

    closemenu.style.display = "none";
    closemenu.style.zIndex = "0";
    skil.style.height = "0";
}



/*
 *
 *
 *
 *
 */

