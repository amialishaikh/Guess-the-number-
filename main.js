const checkBtn = document.querySelector(".checkBtn");
const userNo = document.querySelector(".userNo");
const machineNo = document.querySelector(".machineNo");
const againBtn = document.querySelector(".again");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");
const message = document.querySelector(".message");
const mahineNo = document.querySelector(".mahineNo");

let currentScore = 20;
let maxScore = 0;
let randomNum = generateRandomNumber(); 

function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

checkBtn.addEventListener("click", () => {
    const userNum = parseInt(userNo.value, 10);

    console.log(randomNum);
    console.log(userNum);

    if (randomNum === userNum) {
        mahineNo.innerHTML = userNum;
        message.style.display = "block";
        message.innerHTML = "Congratulations! <br> You've guessed it right.";
        
        mahineNo.style.backgroundColor = "red";

        setTimeout(() => { 
            userNo.value = '';
            mahineNo.innerHTML = '?';
            message.style.display = "none";
            currentScore = 20;
            score.textContent = currentScore;
            location.reload(); 
        }, 5000);

        if (currentScore > maxScore) {
            maxScore = currentScore;
            highScore.textContent = currentScore;
        }

        score.textContent = 0;
        currentScore = 20;
    } else {
        currentScore--; 

        if (userNum < randomNum) {
            message.style.display = "block";
            message.innerHTML = "My number is greater than " + userNum;
        } else if (userNum > randomNum) {
            message.style.display = "block";
            message.innerHTML = "My number is less than " + userNum;
        }

        score.textContent = currentScore; 

        if (currentScore <= 0) {
            highScore.textContent = 0;
            alert("Game Over! Try Again");
            location.reload();
        }
    }
});

againBtn.addEventListener("click", () => {
    randomNum = generateRandomNumber(); 
    userNo.value = '';
    machineNo.innerHTML = '?';
    message.style.display = "none";
    currentScore = 20;
    score.textContent = currentScore;
});
