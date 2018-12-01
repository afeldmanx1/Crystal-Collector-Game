var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/red.jpg", "./assets/images/blue.jpg", "./assets/images/yellow.jpg", "./assets/images/green.jpg"];

function randomTargetNumber() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
}

function resetCrystals() {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "131");
        $(".crystal-images").append(crystal);
    }
}

function resetHTML() {
    $(".target-number").html(targetNumber);
    $(".win-lose-counter").html("<b><p>WINS: " + wins + "</p>" + "<p>LOSSES: " + losses + "</p></b>");
    $(".score-number").html(counter);
    $(".crystal-images").empty();
}

function totalReset() {
    randomTargetNumber();
    counter = 0;
    resetHTML();
    resetCrystals();
}

randomTargetNumber();
resetHTML();
resetCrystals();

function crystalClick() {
    counter += parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter === targetNumber) {
        wins++;
        totalReset();
    }
    else if (counter > targetNumber) {
        losses++;
        totalReset();
    };
};

$(document).on("click", ".crystal", crystalClick);