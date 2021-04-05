
function letras() {
    var name = "Lucas Reina Justiniani";
    var divname = document.getElementById("name");
    var print = divname.innerHTML = name;
    var str = divname.innerHTML;

    console.log(print.length)
    console.log(print);
}

letras();

/*
function load(){
    var carga = $("#cargando");
        carga.animate({width: '60%'}, "slow");
}

load();*/

$(document).ready(function () {
    function showmenu() {
        $("#showmenu").click(function () {
            $("#menu").css({
                display: 'block',
                zIndex: '101'
            });
            $("#about, .c-2, .c-3, .c-0, .m-close").animate({
                opacity: '1',
            }, 550);
        });
    }
    function showskil() {
        $("#m-sk").click(function () {
            $("#sk").animate({
                height: '100vh',
                zIndex: '102',
            }, 800);
            $(".sk-ic").css({
                transform: 'translateX(0px)',
                Transition: '900ms'
            });
        });
    }
    showmenu();
    showskil();
});

$(document).ready(function () {
    function animate() {
        $(".m-close").click(function () {
            $("#menu").css({
                display: 'none'
            });
            $("#about, .c-2, .c-3, .c-0, .m-close").animate({
                opacity: '0',
            }, 450);
        });
    }
    animate();
});

$(document).ready(function () {
    function close() {
        $(".sk-close").click(function () {
            location.reload(1);
            $("#sk").css({
                zIndex: "0",
                height: '0',
                overflow: 'hidden'
            });
            $("#menu").css({
                zIndex: "0",
                display: 'none'
            });
        })
    }
    close();
});