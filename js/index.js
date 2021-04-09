function showMenu() {
    let menu = document.getElementById("menu");
    let mitem = document.getElementById("mitem");
    let pitem = document.getElementById("psm");

    menu.style.display = "block";
    menu.style.zIndex = "101";
    pitem.style.opacity = "1";
    mitem.style.opacity = "1"
}

function delay() {
    timeoutID = window.setTimeout(showMenu, 1000);
}

function showSkill() {
    let skil = document.getElementById("sk");

    skil.style.height = "100vh";

}

function showAB() {
    let ab = document.getElementById("ab-about");
    let psm = document.getElementById("psm");
    let psl = document.getElementById("psl");
    let pp = document.getElementById("pp");
    let pct = document.getElementById("pct");
    let btn = document.getElementById("miclose");

    btn.style.opacity = "0"
    ab.style.display = "block";
    psm.style.opacity = "0";
    psl.style.opacity = "0";
    pp.style.opacity = "0";
    pct.style.opacity = "0";
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

function showMItems(){
    let mitem = document.getElementById("mitem");
    let psm= document.getElementById("psm");
    let psl = document.getElementById("psl");
    let pp = document.getElementById("pp");
    let pct = document.getElementById("pct");
    let bfn = document.getElementById("bfn");
    let nn = document.getElementById("name");
    let ptm = document.getElementById("ptm");
    let btn = document.getElementById("miclose");

    btn.style.opacity = "1"
    psm.style.opacity = "1"
    psl.style.opacity = "1";
    pp.style.opacity = "1";
    pct.style.opacity = "1";
    bfn.style.opacity = "0"
    nn.style.opacity = "0"
    ptm.style.opacity = "0"
    mitem.style.display = "block";
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

function closeAB() {
    let ab = document.getElementById("ab-about");
    let bfn = document.getElementById("bfn");
    let nn = document.getElementById("name");
    let ptm = document.getElementById("ptm");
    let mitem = document.getElementById("mitem");

    bfn.style.opacity = "1"
    nn.style.opacity = "1"
    ptm.style.opacity = "1"
    ab.style.display = "none";
    mitem.style.display = "none";
}

function closeMItems(){
    let mitem = document.getElementById("mitem");
    let bfn = document.getElementById("bfn");
    let nn = document.getElementById("name");
    let ptm = document.getElementById("ptm");

    bfn.style.opacity = "1"
    nn.style.opacity = "1"
    ptm.style.opacity = "1"
    mitem.style.opacity = "0"
    mitem.style.display = "none";
}


/*
 *
 *
 *
 *
 */

function info(){
    let bfn = document.getElementById("bfn");

    bfn.style.transform = "translateX(100px)"
}