var gamePieces = ["flaticon-rock8",  "flaticon-text70", "flaticon-hairsalon7", "flaticon-lizards", "flaticon-woman118", "flaticon-question30"];

var computerScore = 0;

var playerScore = 0;

function rules() {
    alert("Scissors cuts Paper \nPaper covers Rock \nRock crushes Lizard \nLizard poisons Spock \nSpock smashes Scissors \nScissors decapitates Lizard \nLizard eats Paper \nPaper disproves Spock \nSpock vaporizes Rock \n\(and as it always has\) Rock crushes scissors");
}
function rock() {
    $("#player").removeClass();
    $("#player").addClass(gamePieces[0]);
}
function paper() {
    $("#player").removeClass();
    $("#player").addClass(gamePieces[1]);
}
function scissors() {
    $("#player").removeClass();
    $("#player").addClass(gamePieces[2]);
}
function lizard() {
    $("#player").removeClass();
    $("#player").addClass(gamePieces[3]);
}
function spock() {
    $("#player").removeClass();
    $("#player").addClass(gamePieces[4]);
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function play() {
    var computer = computerPlay();
    function computerPlay() {
        var x = getRandomInt(0, 5);
        $("#opponent").removeClass();
        if (x === 0) {
            $("#opponent").addClass(gamePieces[0]);
        } else if (x === 1) {
            $("#opponent").addClass(gamePieces[1]);
        } else if (x === 2) {
            $("#opponent").addClass(gamePieces[2]);
        } else if (x === 3) {
            $("#opponent").addClass(gamePieces[3]);
        } else {
            $("#opponent").addClass(gamePieces[4]);
        }
        if ($("#player").hasClass(gamePieces[0])) {
            if ($("#opponent").hasClass(gamePieces[0])) {
                $("#gameBoard h2").html("Tie... lame!");
            } else if ($("#opponent").hasClass(gamePieces[1])) {
                $("#gameBoard h2").html("Paper covers Rock... You Lose!");
                computerScore++;
            } else if ($("#opponent").hasClass(gamePieces[2])) {
                $("#gameBoard h2").html("Rock crushes Scissors... You Win!");
                playerScore++;
            } else if ($("#opponent").hasClass(gamePieces[3])) {
                $("#gameBoard h2").html("Rock crushes Lizard... You Win!");
                playerScore++;
            } else {
                $("#gameBoard h2").html("Spock vaporizes Rock... You Lose!");
                computerScore++;
            }
        } else if ($("#player").hasClass(gamePieces[1])) {
            if ($("#opponent").hasClass(gamePieces[0])) {
                $("#gameBoard h2").html("Paper covers Rock... You Win!");
                playerScore++;
            } else if ($("#opponent").hasClass(gamePieces[1])) {
                $("#gameBoard h2").html("Tie... lame!");
            } else if ($("#opponent").hasClass(gamePieces[2])) {
                $("#gameBoard h2").html("Scissors cuts Paper... You Lose!");
                computerScore++;
            } else if ($("#opponent").hasClass(gamePieces[3])) {
                $("#gameBoard h2").html("Lizard eats Paper... You Lose!");
                computerScore++;
            } else {
                $("#gameBoard h2").html("Paper disproves Spock... You Win!");
                playerScore++;
            }
        } else if ($("#player").hasClass(gamePieces[2])) {
            if ($("#opponent").hasClass(gamePieces[0])) {
                $("#gameBoard h2").html("Rock smashes Scissors... You Lose!");
                computerScore++;
            } else if ($("#opponent").hasClass(gamePieces[1])) {
                $("#gameBoard h2").html("Scissors cuts Paper... You Win!");
                playerScore++;
            } else if ($("#opponent").hasClass(gamePieces[2])) {
                $("#gameBoard h2").html("Tie... lame!");
            } else if ($("#opponent").hasClass(gamePieces[3])) {
                $("#gameBoard h2").html("Scissors decapitates Lizard... You Win!");
                playerScore++;
            } else {
                $("#gameBoard h2").html("Spock smashes Scissors... You Lose!");
                computerScore++;
            }
        } else if ($("#player").hasClass(gamePieces[3])) {
            if ($("#opponent").hasClass(gamePieces[0])) {
                $("#gameBoard h2").html("Rock crushes Lizard... You Lose!");
                computerPlay++;
            } else if ($("#opponent").hasClass(gamePieces[1])) {
                $("#gameBoard h2").html("Lizard eats Paper... You Win!");
                playerScore++;
            } else if ($("#opponent").hasClass(gamePieces[2])) {
                $("#gameBoard h2").html("Scissors decapitates Lizard... You Lose!");
                computerScore++;
            } else if ($("#opponent").hasClass(gamePieces[3])) {
                $("#gameBoard h2").html("Tie... lame!");
            } else {
                $("#gameBoard h2").html("Lizard poisons Spock... You Win!");
                playerScore++;
            }
        } else if ($("#player").hasClass(gamePieces[4])) {
            if ($("#opponent").hasClass(gamePieces[0])) {
                $("#gameBoard h2").html("Spock vaporizes Rock... You Win!");
                playerScore++;
            } else if ($("#opponent").hasClass(gamePieces[1])) {
                $("#gameBoard h2").html("Paper disproves Spock... You Lose!");
                computerScore++;
            } else if ($("#opponent").hasClass(gamePieces[2])) {
                $("#gameBoard h2").html("Spock smashes Scissors... You Win!");
                playerScore++;
            } else if ($("#opponent").hasClass(gamePieces[3])) {
                $("#gameBoard h2").html("Lizard poisons Spock... You Lose!");
                computerScore++;                
            } else {
                $("#gameBoard h2").html("Tie... lame!");
            }
        }
        $("#computerScore").html(computerScore);
        $("#playerScore").html(playerScore);
    }
}
$("a").click(rules);
$("#rock").click(function(){rock(); play();});
$("#paper").click(function(){paper(); play();});
$("#scissors").click(function(){scissors(); play();});
$("#lizard").click(function(){lizard(); play();});
$("#spock").click(function(){spock(); play();});