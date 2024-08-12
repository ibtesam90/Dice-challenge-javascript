function diceGame(){
    var player1DiceCount = Math.floor((Math.random()*6)+1);
    var player2DiceCount = Math.floor((Math.random()*6)+1);
    //setting up the image by selecting the class using query selector ".className" and 
    //setting th attribute by .setAttribute("attributeName","Value")
    document.lastElementChild.querySelector(".img1").setAttribute("src","./images/dice"+player1DiceCount+".png");
    document.lastElementChild.querySelector(".img2").setAttribute("src","./images/dice"+player2DiceCount+".png");
    //Comparison of Dice counts and changing the heading as per results.
    if (player1DiceCount>player2DiceCount){
        document.lastElementChild.querySelector("h1").innerHTML = "Player 1 Won";  
    } else if (player2DiceCount> player1DiceCount){
        document.lastElementChild.querySelector("h1").innerHTML = "Player 2 Won"; 
    } else {
        document.lastElementChild.querySelector("h1").innerHTML = "Game Drawn";
    }
}
