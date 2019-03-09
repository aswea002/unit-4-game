
$(document).ready(function(){

//gameStart()
//checkWin()

var crystal1;
var crystal2;
var crystal3;
var crystal4;
var userScore = 0;
var targetScore;
var wins = 0;
var losses = 0;

function gameStart() {
    //in this function you want to reset the userscore to zero, set the new targetscore, and assign values to crystals
crystal1 = Math.floor(Math.random() * 101) + 20;

}

function checkWin() {
    //in this function you want an if statement to determine if the userscore and the targetscore either match or the userscore is over targetscore
}
// var crystalOne = document.getElementById (".crystalone");
// var crystalTwo = document.getElementById ("crystaltwo");
// var crystalThree = document.getElementById ("crystalthree");
// var crystalFour = document.getElementById ("crystalfour");


$('#crystalone').on("click", function () {
    console.log ("the button is clicked");
    userScore = userScore + crystal1;
    //when you click the button, the value of the crystal1 variable is added to userScore, and then you run checkWin.
    checkWin();
})

// }
// // $("#crystalone").on("click", function (){
// // Math.floor(Math.random()*5)
// // })
// }

// $(".crystalone").on("click", "img", function (event) {
//     var currentImage = event.currentTarget;{
//         console.log ("the button is clicked");
//     }
gameStart();
});

