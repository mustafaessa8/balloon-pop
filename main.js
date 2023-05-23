

let cliCkcount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxsize = 300
let currentPopCount = 0
let highestPopCount = 0
let gamelength = 0
let clockid = 0
let timeRemaing = 0

// start//

function startgame(){
    document.getElementById("game-controls").classList.remove("hidden")
    document.getElementById("main-controls").classList.add("hidden")
    document.getElementById("scoreboard").classList.add("hidden")

    startClock()
    setTimeout(stopGame , gamelength)
}

function startClock(){
    timeRemaing = gamelength
    setInterval(drawClock , 1000);
}

function stopClock(){
    clearInterval(clockid)
}


function drawClock(){
let countdownElem = document.getElementById("countdown")
countdownElem.innerText = (timeRemaing/1000).toString()
timeRemaing -= 1000

}



function inflate(){
    cliCkcount++
    height += inflationRate
    width += inflationRate
    
    if(height >= maxsize){
    console.log("pop the balloon")
    currentPopCount ++
    height = 0
    width = 0

    document.getElementById("pop-sound").play()
}


draw()

}



function draw(){
    let balloonElement = document.getElementById("balloon")
    let clickCountElem = document.getElementById("click-count")
    let popCountElem = document.getElementById("pop-count")
    let highPopCountElem = document.getElementById("high-pop-count")
   let playernameElem =  document.getElementById("player-name")
    
    
    balloonElement.style.width = width  + "px"
    balloonElement.style.height = height   + "px"

    clickCountElem.innerText = cliCkcount.toString()
    popCountElem.innerText = currentPopCount.toString()
    highPopCountElem.innerText = highestPopCount.toString()

    playernameElem.innerText = currentPlayer.name
}




function stopGame(){
    console.log("game over ")


    document.getElementById("game-controls").classList.remove("hidden")
    document.getElementById("main-controls").classList.add("hidden")
    document.getElementById("scoreboard").classList.add("hidden")

    cliCkcount = 0
    height = 120
    width = 100

    if(currentPopCount > highestPopCount){
        highestPopCount = currentPopCount

    }
    currentPopCount = 0


    stopClock()
    draw()
}


let players = []

function setPlayer(event){
    event.preventDefault()
    let form = event.target

    let playerName = form.playerName.value

  let currentPlayer = players.find(player => player.name == playerName)

if(!currentPlayer ){
    currentPlayer = {name : playerName , topScore: 0}
}


console.log(currentPlayer)

    form.rest()


    draw()
}

function changePlayer(){
    document.getElementById("player-form")
}

function savePlayers(){
    window.localStorage.setItem("players ", JSON.stringify(players))

}
function loadPlayers(){
    let playerData = JSON.parse(window.localStorage.getItem("Players"))
    if(playerData){
        players = playerData
    }
}




