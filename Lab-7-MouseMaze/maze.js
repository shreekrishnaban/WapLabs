$(document).ready(function() {
    var hasGameBegun = false;


    $(".boundary").mouseenter(loseGame);


    $("#end").mouseenter(win);

    $("#start").click(startGame);

    $("#maze").mouseleave(mouseExit);



    function startGame() {
        $(".boundary").removeClass("youlose");
        $("#status").text("Keep going!");
        hasGameBegun = true;
    }

    function loseGame() {
        if (hasGameBegun) {
            $(".boundary").addClass("youlose");
            $("#status").text("You lost!");
            hasGameBegun = false;
        }


    }

    function win() {
        $("#status").text("You won!");
        $(".boundary").removeClass("youlose");
        $(".boundary").addClass("youwin");
        hasGameBegun = false;
    }

    function mouseExit() {
        if (hasGameBegun) {
            loseGame();
        }
    }


});