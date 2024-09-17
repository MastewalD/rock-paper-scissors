function getComputerChoice() {
    let array = ["scissor", "rock", "paper"]
    let max = array.length
    let index = Math.floor(Math.random() * (max)) 
    return array[index]
}

function getHumanChoice() {
    let ans = prompt("enter scissor or rock or paper ! ")
    return ans
}

let humanScore = 0
let computerScore = 0
function playRound(humanChoce, computerChoice) {
    let human = humanChoce().toLowerCase()
    let computer = computerChoice()
   
    if (human == "rock" && computer == "rock") {
      
    } else if (human == "rock" && computer == "scissor") {
      
        humanScore +=1
    }else if (human == "rock" && computer == "paper") {
        
        computerScore +=1
    }else if (human == "scissor" && computer == "scissor") {
        
    }else if (human == "scissor" && computer == "paper") {
      
        humanScore +=1
    }else if (human == "scissor" && computer == "rock") {
       
        computerScore +=1
    }else if (human == "paper" && computer == "scissor") {
        
        computerScore +=1
    }else if (human == "paper" && computer == "rock") {
        
        humanScore +=1
    }else if (human == "paper" && computer == "paper") {
       
    }
    
    
    
}


function playGame(playRound) {
    let round =5
    while (round > 0) {
        playRound(getHumanChoice, getComputerChoice)
        round -=1
    } 
    let result = computerScore > humanScore ? "you loss" : "you won"
    alert(result)
}
playGame(playRound)