let coinFlip = Math.round(Math.random())
document.write("coinFlip : " + coinFlip)
let choice = prompt("Head or Tail (h/t): ")
document.write("<br>choice : " + choice + "<br>")


if(coinFlip >= 1 && choice == "h"){
    document.write("The flip was heads and you chose heads...you win!")
}else if(coinFlip >= 1 && choice == "t"){
    document.write("The flip was heads but you chose tails...you lose!")
}else if(coinFlip < 1 && choice == "h"){
    document.write("The flip was tails but you chose heads...you lose!")
} else if(coinFlip < 1 && choice == "t"){
    document.write("The flip was tails and you chose tails...you win!")
}