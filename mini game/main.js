//getting scores
const player_1_Score = document.querySelector("#score0");
const player_2_Score = document.querySelector("#score1");
//getting the dice images
const dice = document.querySelector('.dice');
//getting the buttons
const newGame = document.querySelector(".btn_new_game");
const rollDice =  document.querySelector(".btn_roll_dice");
const holdDice = document.querySelector(".btn_hold_score");

//adding functionality to web page
dice.classList.add("hidden");
player_1_Score.textContent = 0;
player_2_Score.textContent = 0;

player_1 = document.querySelector(".player0");
player_2 = document.querySelector(".player1");

player_1_totalScore = 0;
player_2_totalScore = 0;

let rolingDice, temp, score = 0;
// SlideShow Images
function slideShow(img) {
    
    setTimeout(function() {
        
            if(img < 6) {
                img +=1;
                rolingDice = Math.floor(Math.random() * 6);
                dice.src = `images/dice-${rolingDice+1}.png`;
                dice.classList.remove("hidden");
                temp = rolingDice + 1;
                if(img === 6) {

                    console.log("img: ",img);
                    console.log("temp: ",temp);
                    startCalculation(temp);
                    rollDice.disabled = false;
                    holdDice.disabled = false;
                }
        
                slideShow(img);  
            }
           
        },500);

        
}

rollDice.addEventListener('click', function() {

    slideShow(0);
    rollDice.disabled = true;
    holdDice.disabled = true;
    
});

function startCalculation(diceScore) {

    if(diceScore !== 1) {

        if(player_1.classList.contains("player_active")) {

            score += diceScore;
            // player_1_totalScore = score;
            player_1_totalScore += diceScore;
            console.log(score);
            // document.querySelector(".player_active > .score").textContent = player_1_totalScore;
            document.querySelector(".player_active > .current > .current-score").textContent = score;
            
           
        }

        else {

            score += diceScore;
            player_2_totalScore += diceScore;
            console.log(score);
            // document.querySelector(".player_active > .score").textContent = player_2_totalScore;
            document.querySelector(".player_active > .current > .current-score").textContent = score;
            

        }

        

    }
    else {

        score = 0;
        if(player_1.classList.contains("player_active")) {

            // player_1_totalScore = 0;
            // document.querySelector(".player_active > .score").textContent = player_1_totalScore;
            document.querySelector(".player_active > .current > .current-score").textContent = 0;
            player_1.classList.remove("player_active");
            player_2.classList.add("player_active");
            // player_1_Score.textContent = 0;
            
        }

        else {

            // player_2_totalScore = 0;
            // document.querySelector(".player_active > .score").textContent = player_2_totalScore;
            document.querySelector(".player_active > .current > .current-score").textContent = 0;
            player_2.classList.remove("player_active");
            player_1.classList.add("player_active");
            // player_2_Score.textContent = 0;
            
        }
        

    }

}

holdDice.addEventListener('click', function () {

    score = 0;

    if(player_1.classList.contains("player_active")) {

        document.querySelector(".player_active > .current > .current-score").textContent = 0;
        document.querySelector(".player_active > .score").textContent = player_1_totalScore;
        compare(player_1_totalScore);
        player_1.classList.remove("player_active");
        player_2.classList.add("player_active");
    }

    else {

        document.querySelector(".player_active > .current > .current-score").textContent = 0;
        document.querySelector(".player_active > .score").textContent = player_2_totalScore;
        compare(player_2_totalScore);
        player_2.classList.remove("player_active");
        player_1.classList.add("player_active");
    }

});

newGame.addEventListener('click' , function() {
    location.reload();
});

function compare(winner) {
  
    if( winner >= 100 )
    {
        if(player_1.classList.contains("player_active")) {

            player_1.classList.add("player--winner");
            rollDice.disabled = true;
            holdDice.disabled = true;
            
        }
    
        else {
    
            player_2.classList.add("player--winner");
            rollDice.disabled = true;
            holdDice.disabled = true;

        }
    }
}

// flow will be like first slide show then other works like calculations.