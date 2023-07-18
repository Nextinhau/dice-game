// js入边获取资源文件时嘅路径同css不同，css从本身文件嘅位置开始，而js系根据引用呢个js嘅html文件位置开始
function startBattle() {
    let player1_DiceVal = getRandomDiceVal()
    let player2_DiceVal = getRandomDiceVal()

    let title = document.querySelector(".title")

    let player1_Name = document.querySelectorAll(".player-name")[0]
    let player2_Name = document.querySelectorAll(".player-name")[1]
    player1_Name.style.color = "#41BA8E"
    player2_Name.style.color = "#41BA8E"

    let player1_ImageSource = ""
    let player2_ImageSource = ""

    let dice1 = document.querySelectorAll(".dice")[0]
    let dice2 = document.querySelectorAll(".dice")[1]

    // 注意路径
    let bgMusic = new Audio("./static/audios/bass-1.wav")

    if (player1_DiceVal === player2_DiceVal) {
        let coin = Math.random()
        if (coin < 0.5) {
            player1_DiceVal = 6
            player2_DiceVal = 1

        } else {
            player1_DiceVal = 1
            player2_DiceVal = 6
        }
    }

    if (player1_DiceVal > player2_DiceVal) {
        title.textContent = "player 1 wins!"
        player1_Name.style.color = "orange"
    } else {
        title.textContent = "player 2 wins!"
        player2_Name.style.color = "orange"
    }

    // 注意路径
    player1_ImageSource = "./static/images/dice-" + player1_DiceVal + ".png"
    player2_ImageSource = "./static/images/dice-" + player2_DiceVal + ".png"

    dice1.setAttribute("src", player1_ImageSource)
    dice2.setAttribute("src", player2_ImageSource)

    bgMusic.play()
}

function getRandomDiceVal() {
    return Math.floor(Math.random() * 6) + 1
}