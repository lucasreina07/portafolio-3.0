
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
            backgroundColor:  "red"
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
        cargando.animate({width: '60%'}, 1500);
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