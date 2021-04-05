
function letras() {
    var name = "Lucas Reina Justiniani";
    var divname = document.getElementById("name");
    var print = divname.innerHTML = name;
    var str = divname.innerHTML;

    console.log(print.length)
    console.log(print);
}

letras();


$(document).ready(function () {
    $(".skl-more").click(function () {
        var carga = $("#hbd");
        carga.animate({
            backgroundColor: "red"
        }, "slow");
        carga.animate({
            height: 'toggle',
            backgroundColor: "rgba(5,18,27,1)"
        }, "slow");
    });
});

$(document).ready(function () {
    $(".skl-more").click(function () {
        var cargando = $("#cargando");
        cargando.animate({ width: '60%' }, 1500);
    });
});

$(document).ready(function () {
    $("#bn").click(function () {
        var carga = $(".hbd-map");
        carga.animate({
            height: 'toggle'
        });
    });
});


/*
function load(){
    var carga = $("#cargando");
        carga.animate({width: '60%'}, "slow");
}

load();*/

$(document).ready(function () {
    $("#showmenu").click(function () {
        $("#menu").css({
            display: 'block',
            zIndex: '101'
        });
        $("#about, .c-2, .c-3, .c-0, .m-close").animate({
            opacity: '1',
        }, 550);
    });
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
        $(".sk-close").click(function () {
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