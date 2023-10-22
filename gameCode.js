function RollRevolution() {
    //this is a function to play Roll Revolution in the game.html
    // For Roll Revolution, sum of 7 or 11 is a loss, doubles that are even win!  
    console.log("RollRevolution() started");
    var die1 = Math.ceil(Math.random() * 6);
    console.log("die1 result =" + die1);
    document.getElementById("die1Res").innerHTML = "die1 result =" + die1

    var die2 = Math.ceil(Math.random() * 6);
    console.log("die2 result =" + die2);
    document.getElementById("die2Res").innerHTML = "die2 result =" + die2

    var sum = die1 + die2;
    console.log("sum result = " + sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    //check for 7 or 11 meaning loss
    if (sum == 7) {
        document.getElementById("gameRes").innerHTML = "You Lost to Roll Revolution"
    } else if (sum == 11) {
        document.getElementById("gameRes").innerHTML = "You Lost to Roll Revolution";
    } //check for doubles and even for the win 
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("gameRes").innerHTML =
            "You Beat Roll Revolution";

    } //You did not win or lose
    else {
        document.getElementById("gameRes").innerHTML =
            "You did not win or lose";
    }
}
