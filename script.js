let age = 0;
let initials = "Init";
let playstation = 0;
let xbox = 0;
let nintendo = 0;
let PC = 0;
let counter = 0;


//scene ctrl
//$(".start").hide();
$(".inputs").hide();
$(".welcome").hide();
$(".Q2").hide();
$(".Q3").hide();
$(".Q4").hide();
$(".results").hide();



$(".start").click(function() {
    $(".start").hide();
    $(".inputs").show();
});
$(".confirm").click(function() {
    age = $(".age").val();
    initials = $(".initials").val();
    $(".inputs").hide();
    $(".welcome").show();
    $(".welmess").text("Your age is " + age + ", and your intials are " + initials + "!");
    if (age > 17) {
        PC = PC + 2;
    } else if (age > 12) {
        playstation = playstation + 2;
        xbox = xbox + 2;
    } else {
        nintendo = nintendo + 2;
    }
});

//Q1
$(".divplex").click(function() {
    $(".welcome").hide();
    $(".simplex").hide();
    $(".Q2").show();
    PC = PC + 1;
    playstation = playstation + 1;
});
$(".divmple").click(function() {
    $(".welcome").hide();
    $(".dixplex").hide();
    $(".Q2").show();
    nintendo = nintendo + 1;
    xbox = xbox + 1;
});

//Q2
$(".e4ever").click(function() {
    $(".Q2").hide();
    $(".Q3").show();
    nintendo = nintendo + 1;
    PC = PC - 1;
});
$(".t4teen").click(function() {
    $(".Q2").hide();
    $(".Q3").show();
    xbox = xbox + 1;
    playstation = playstation + 1;

});
$(".m4mat").click(function() {
    $(".Q2").hide();
    $(".Q3").show();
    PC = PC + 1;
    nintendo = nintendo - 1;

});

//Q3
$(".casu").click(function() {
    $(".Q3").hide();
    $(".Q4").show();
    nintendo = nintendo + 2;
    PC = PC - 1;

});
$(".comm").click(function() {
    $(".Q3").hide();
    $(".Q4").show();
    xbox = xbox + 2;
    nintendo = nintendo + 1;
});
$(".comp").click(function() {
    $(".Q3").hide();
    $(".Q4").show();
    PC = PC + 2;

});
$(".qual").click(function() {
    $(".Q3").hide();
    $(".Q4").show();
    playstation = playstation + 2;
    PC = PC + 1;
});

//Q4
//$(".no").hover(function() {
//    $(".no").html("<img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Ski_trail_rating_symbol_black_circle.png">");
//});

$(".PC").hide();
$(".playstation").hide();
$(".xbox").hide();
$(".nintendo").hide();

$(".no").click(function() {
    //$(".Q4").hide();
    xbox = xbox + 2;
    playstation = playstation + 1;
    PC = PC - 1;
    //$(".results").show();
    //$(".total").text("PC: " + PC + "   PlayStation: " + playstation + "   Xbox: " + xbox + "   Nintendo: " + nintendo);
});
$(".meh").click(function() {
    //$(".Q4").hide();
    playstation = playstation + 2;
    xbox = xbox + 1;
    //$(".results").show();
    //$(".total").text("PC: " + PC + "   PlayStation: " + playstation + "   Xbox: " + xbox + "   Nintendo: " + nintendo);
});
$(".idc").click(function() {
    //$(".Q4").hide();
    PC = PC - 1;
    //$(".results").show();
    //$(".total").text("PC: " + PC + "   PlayStation: " + playstation + "   Xbox: " + xbox + "   Nintendo: " + nintendo);
});
$(".maybe").click(function() {
    //$(".Q4").hide();
    nintendo = nintendo + 1;
    //$(".results").show();
    //$(".total").text("PC: " + PC + "   PlayStation: " + playstation + "   Xbox: " + xbox + "   Nintendo: " + nintendo);
});
$(".yes").click(function() {
    //$(".Q4").hide();
    PC = PC + 2;
    //$(".results").show();
    //$(".total").text("PC: " + PC + "   PlayStation: " + playstation + "   Xbox: " + xbox + "   Nintendo: " + nintendo);
});

//results

//$(".PC").hide();
//$(".playstation").hide();
//$(".xbox").hide();
//$(".nintendo").hide();

$(".circle").click(function() {
    $(".Q4").hide();
    $(".results").show();
    $(".total").text("PC: " + PC + "   PlayStation: " + playstation + "   Xbox: " + xbox + "   Nintendo: " + nintendo);
    if ((PC >= nintendo) && (PC >= playstation) && (PC >= xbox)) {
        $(".PC").show();
    }
    if ((playstation >= nintendo) && (playstation >= PC) && (playstation >= xbox)) {
        $(".playstation").show();
    }
    if ((nintendo >= PC) && (nintendo >= playstation) && (nintendo >= xbox)) {
        $(".nintendo").show();
    }
    if ((xbox >= nintendo) && (xbox >= playstation) && (xbox >= PC)) {
        $(".xbox").show();
    }
});

$(".restart").click(function() {
    age = 0;
    xbox = 0;
    playstation = 0;
    PC = 0;
    nintendo = 0;
    counter = counter + 1;
    $(".results").hide();
    $(".start").show();
    $(".PC").hide();
    $(".playstation").hide();
    $(".xbox").hide();
    $(".nintendo").hide();
    $(".count").text("This quiz was taken " + counter + " times.   ");
});