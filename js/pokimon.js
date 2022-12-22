const buttonPetPlayer = document.getElementById("button-pet")
const sectionChooseAttack = document.getElementById("choose-attack")

const buttonRestart = document.getElementById("button-restart") 
const finalButtonRestart = document.getElementById("button-restart")
finalButtonRestart.style.display = "none"
const sectionChoosePet = document.getElementById("choose-pet")
const spanPetBot = document.getElementById("bot-player")

const spanPetPlayer = document.getElementById("pet-player")

const spanPlayerLife = document.getElementById("life-player")
const spanEnemyLife = document.getElementById("life-enemy")

const sectionMessages = document.getElementById("totalResult")
const playerAttack = document.getElementById("player-Attack")
const EnemyAttack = document.getElementById("Enemy-Attack")
const containerCards = document.getElementById("containerCards")
const attackCards = document.getElementById("attackCards")

const sectionSeeMap = document.getElementById("seeMap")
const map = document.getElementById("map")

let pokimonPets = []
let enemyAttack = []
let attackPlayer = []
let pokimonOptions
let petPlayerObject

let inputBrazzers 
let inputVulvasur
let inputPitochu 
let inputLudiculo
let inputPaloma 

let petPlayer
let pokimonsAttack

let buttonElectric 
let buttonWater 
let buttonGrass 
let buttonAir
let buttonMix 
let attacksPokimonEnemy 

let buttons = []

let indexAtaqueP
let indexAtaqueE

let victoriesP = 0
let victoriesE = 0
let lienzo = map.getContext("2d")
let intervalo 
let backgroundMap = new Image()
backgroundMap.src = "./img/pokemap.jpg"

class Pokimon {
  constructor(name, photo, life, photoMap, x = 30, y = 25) {
    this.name = name
    this.photo = photo
    this.life = life
    this.attack = []
    this.x = random(0,700)
    this.y = random(0,350)
    this.width = 100
    this.height = 100
    this.mapPhoto = new Image()
    this.mapPhoto.src = photoMap
    this.speedX = 0
    this.speedY = 0
  }
  pintarPokimon() {
    lienzo.drawImage(
      this.mapPhoto,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
}

let calvo = new Pokimon('calvo', './img/calvo.jpg', 5,'./img/calvocabeza.jpg')

let pitochu = new Pokimon('pitochu', './img/pikacho.jpg', 5, './img/pikachucabeza.png')

let vulvasur = new Pokimon('vulvasur', './img/bulbasaur.jpg', 5, './img/bulbasurcabeza.jpg' )

let palomaperuana = new Pokimon('paloma', './img/paloma.png', 5, './img/palomacabez.png' )

let ludiculo = new Pokimon('ludiculo', './img/taco.jpg', 5, './img/ludicolocabeza.jpg' )

let calvoEnemy = new Pokimon('calvo', './img/calvo.jpg', 5,'./img/calvocabeza.jpg', 500, 120)

let pitochuEnemy = new Pokimon('pitochu', './img/pikacho.jpg', 5, './img/pikachucabeza.png', 400, 200)

let vulvasurEnemy = new Pokimon('vulvasur', './img/bulbasaur.jpg', 5, './img/bulbasurcabeza.jpg', 200, 100)

let palomaperuanaEnemy = new Pokimon('paloma', './img/paloma.png', 5, './img/palomacabez.png', 50, 150 )

let ludiculoEnemy = new Pokimon('ludiculo', './img/taco.jpg', 5, './img/ludicolocabeza.jpg', 300, 300)


calvo.attack.push(
  { name: '💧', id: 'button-water' },
  { name: '💧', id: 'button-water' },
  { name: '💧', id: 'button-water' },
  { name: '⚡', id: 'button-electric'},
  { name: '💧🌱', id: 'button-mix' },
)
  calvoEnemy.attack.push(
    { name: '💧', id: 'button-water' },
    { name: '💧', id: 'button-water' },
    { name: '💧', id: 'button-water' },
    { name: '⚡', id: 'button-electric'},
    { name: '💧🌱', id: 'button-mix' },
)
pitochu.attack.push(
  { name: '⚡', id: 'button-electric'},
  { name: '⚡', id: 'button-electric'},
  { name: '💧', id: 'button-water' },
  { name: '⚡', id: 'button-electric'},
  { name: '💧🌱', id: 'button-mix' },
)
  pitochuEnemy.attack.push(
    { name: '⚡', id: 'button-electric'},
    { name: '⚡', id: 'button-electric'},
    { name: '💧', id: 'button-water' },
    { name: '⚡', id: 'button-electric'},
    { name: '💧🌱', id: 'button-mix' },
  
)
vulvasur.attack.push(
  { name: '🌱', id: 'button-grass' },
  { name: '🌱', id: 'button-grass' },
  { name: '💧', id: 'button-water' },
  { name: '⚡', id: 'button-electric'},
  { name: '💧🌱', id: 'button-mix' },
)
  vulvasurEnemy.attack.push(
    { name: '🌱', id: 'button-grass' },
    { name: '🌱', id: 'button-grass' },
    { name: '💧', id: 'button-water' },
    { name: '⚡', id: 'button-electric'},
    { name: '💧🌱', id: 'button-mix' },
  
)
palomaperuana.attack.push(
  { name: '🦅', id: 'button-air' },
  { name: '🦅', id: 'button-air' },
  { name: '💧', id: 'button-water' },
  { name: '⚡', id: 'button-electric'},
  { name: '🦅', id: 'button-air' },
)
  palomaperuanaEnemy.attack.push(
    { name: '🦅', id: 'button-air' },
    { name: '🦅', id: 'button-air' },
    { name: '💧', id: 'button-water' },
    { name: '⚡', id: 'button-electric'},
    { name: '🦅', id: 'button-air' },
  
)
ludiculo.attack.push(
  { name: '🌱', id: 'button-grass' },
  { name: '💧', id: 'button-water' },
  { name: '💧', id: 'button-water' },
  { name: '💧🌱', id: 'button-mix' },
  { name: '💧🌱', id: 'button-mix' },
)
ludiculoEnemy.attack.push(
  { name: '🌱', id: 'button-grass' },
  { name: '💧', id: 'button-water' },
  { name: '💧', id: 'button-water' },
  { name: '💧🌱', id: 'button-mix' },
  { name: '💧🌱', id: 'button-mix' },
)

pokimonPets.push(calvo, pitochu, vulvasur, palomaperuana, ludiculo)

function startGame() { 
 
 sectionChooseAttack.style.display = "none"
 sectionSeeMap.style.display = "none"

 pokimonPets.forEach((pokimon) => {
  pokimonOptions = `
  <input type= "radio"  name= "pets" id="${pokimon.name}" />
  <label class= "labelBrazzers" for=${pokimon.name} >
    <p>${pokimon.name}</p>
    <img src=${pokimon.photo} alt=${pokimon.name}>
  </label>
  `
containerCards.innerHTML += pokimonOptions

inputBrazzers = document.getElementById("calvo")
inputVulvasur = document.getElementById("vulvasur")
inputPitochu = document.getElementById("pitochu")
inputLudiculo = document.getElementById("ludiculo")
inputPaloma = document.getElementById("paloma")

 })
 buttonPetPlayer.addEventListener("click", selectPetPlayer)
 buttonRestart.addEventListener("click", restartGame )
 
 }

 function selectPetPlayer() {
  
  sectionChoosePet.style.display = "none"

  

 


   if (inputBrazzers.checked) {
    spanPetPlayer.innerHTML = inputBrazzers.id 
    petPlayer = inputBrazzers.id
  }
  else if (inputPitochu.checked) {
   spanPetPlayer.innerHTML = inputPitochu.id 
    petPlayer = inputPitochu.id 
  }
   else if (inputVulvasur.checked)  {
    spanPetPlayer.innerHTML = inputVulvasur.id
  petPlayer = inputVulvasur.id
  }
   else if (inputPaloma.checked)  {
    spanPetPlayer.innerHTML = inputPaloma.id
    petPlayer = inputPaloma.id
  }
   else if (inputLudiculo.checked)  {
    spanPetPlayer.innerHTML = inputLudiculo.id 
    petPlayer = inputLudiculo.id 
  }
   else{alert("you didn't chose, your oponent chose arceus, better you run cowboy")

   }
   extractAttacks(petPlayer)

   sectionSeeMap.style.display = "flex"
   startMap()

   
}
function extractAttacks(petPlayer) {
  let attack
  for (let i = 0; i < pokimonPets.length; i++) {
   if (petPlayer === pokimonPets[i].name) {
      attack = pokimonPets[i].attack
   }
  
  }
 showAttacks(attack)
}

function showAttacks(attack) {
  attack.forEach((attackP) => {
    pokimonsAttack = `
    <button id=${attackP.id} class="buttonattack Battack" >${attackP.name}</button>
    `
    attackCards.innerHTML += pokimonsAttack

  })

  buttonElectric = document.getElementById("button-electric")
  buttonWater = document.getElementById("button-water")
  buttonGrass = document.getElementById("button-grass")
  buttonAir = document.getElementById("button-air")
  buttonMix = document.getElementById("button-mix")

  buttons = document.querySelectorAll(".Battack")  
}

function secuenceAttack() {
  buttons.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if(e.target.textContent === '💧') {
        attackPlayer.push('Water')
        console.log(attackPlayer)
        boton.style.background = "#112f54"
        boton.disabled = true
      } else if (e.target.textContent === "⚡") {
        attackPlayer.push('Electric')
        console.log(attackPlayer)
        boton.style.background = "#112f54"
        boton.disabled = true
      } else if (e.target.textContent === "🌱") {
        attackPlayer.push('Grass')
        console.log(attackPlayer)
        boton.style.background = "#112f54"
        boton.disabled = true
      }else if (e.target.textContent === "🦅") {
        attackPlayer.push('Air')
        console.log(attackPlayer)
        boton.style.background = "#112f54"
        boton.disabled = true
      }else  { attackPlayer.push('Water and grass mother fucker!')
        console.log(attackPlayer)
        boton.style.background = "#112f54"
        boton.disabled = true
      }
      randomEnemyAttack()
    })
  })
}
function selectPetBot(enemy) {
  spanPetBot.innerHTML = enemy.name
  attacksPokimonEnemy = enemy.attack
  secuenceAttack()
} 
 
function randomEnemyAttack() {
  console.log(attacksPokimonEnemy)
  let randomAttack = random(0, attacksPokimonEnemy.length -1)

  if (randomAttack == 0 || randomAttack == 1) {
    enemyAttack.push("Water") 
  } else if( randomAttack == 3 || randomAttack == 4) {
    enemyAttack.push("Electric") 
  } else if( randomAttack == 6 || randomAttack == 7) {
    enemyAttack.push("Grass")
  } else if( randomAttack == 9 || randomAttack == 10) {
    enemyAttack.push("Air")
  } else { enemyAttack.push("Water and grass mother fucker!")
  }
  console.log(enemyAttack)
 inciarBattle()
}

function inciarBattle() {
  if (attackPlayer.length === 5) {
    battle()
    
  }
}
function indexboth(player, enemy) {
  indexAtaqueP = attackPlayer[player]
  indexAtaqueE = enemyAttack[enemy]

}

function battle() {

  for (let index = 0; index < attackPlayer.length; index++) {
      if(attackPlayer[index] === enemyAttack[index]) {
       indexboth(index, index)
      creatMessage(" tie")
    } else if(attackPlayer[index] === "Water" && enemyAttack [index] === "Air") {
      indexboth(index, index)
      creatMessage("won!")
      victoriesP++
      spanPlayerLife.innerHTML = victoriesP
    } else if(attackPlayer[index] === "Water" && enemyAttack [index] === "Electric") {
      indexboth(index, index)
      creatMessage("won!")
      victoriesP++
      spanPlayerLife.innerHTML = victoriesP
    } else if(attackPlayer[index] === "Grass" && enemyAttack [index] === "Water") {
      indexboth(index, index)
      creatMessage("won!")
      victoriesP++
      spanPlayerLife.innerHTML = victoriesP
    }  else if(attackPlayer[index] === "Grass" && enemyAttack [index] === "Water and grass mother fucker!") {
      indexboth(index, index)
      creatMessage("won!")
      victoriesP++
      spanPlayerLife.innerHTML = victoriesP
    }  else if(attackPlayer[index] === "Electric" && enemyAttack [index] === "Air") {
      indexboth(index, index)
      creatMessage("won!")
      victoriesP++
      spanPlayerLife.innerHTML = victoriesP
    } else if(attackPlayer[index] === "Electric" && enemyAttack [index] === "Water") {
      indexboth(index, index)
      creatMessage("won!")
      victoriesP++
      spanPlayerLife.innerHTML = victoriesP
    } else if(attackPlayer[index] === "Air" && enemyAttack [index] === "Grass") {
      indexboth(index, index)
      creatMessage("won!")
      victoriesP++
      spanPlayerLife.innerHTML = victoriesP
    } else if(attackPlayer[index] === "Air" && enemyAttack [index] === "Water and grass mother fucker!") {
      indexboth(index, index)
      creatMessage("won!")
      victoriesP++
      spanPlayerLife.innerHTML = victoriesP
    } else if(attackPlayer[index] === "Water and grass mother fucker!" && enemyAttack [index] === "Grass") {
      indexboth(index, index)
      creatMessage("won!")
      victoriesP++
      spanPlayerLife.innerHTML = victoriesP
    } else if(attackPlayer[index] === "Water and grass mother fucker!" && enemyAttack [index] === "Electric") {
      indexboth(index, index)
      creatMessage("won!")
      victoriesP++
      spanPlayerLife.innerHTML = victoriesP
    } else {
      indexboth(index, index)
      creatMessage("Lost!")
      victoriesE
      spanEnemyLife.innerHTML = victoriesE 
    }                   

  }
checkLifes()
}

function checkLifes() {
  if (victoriesP === victoriesE) {
    creatFinalMessage("TIE !!!!")
  }
  else if(victoriesP > victoriesE) {
    creatFinalMessage ("WOOON !!!") }
  else {
    creatFinalMessage ("loooser!!!!!!")
  }
}
function creatMessage(result) {
 
  let newAttackPlayer = document.createElement("p")
  let newAttackEnemy = document.createElement("p")

  sectionMessages.innerHTML = result
  newAttackPlayer.innerHTML = indexAtaqueP
  newAttackEnemy.innerHTML = indexAtaqueE
  
  playerAttack.appendChild(newAttackPlayer)
  EnemyAttack.appendChild(newAttackEnemy)
}

function creatFinalMessage(Finalresult) {
  
  sectionMessages.innerHTML = Finalresult
  finalButtonRestart.style.display = "block"
}

function restartGame() {
  location.reload()
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min) 
} 

function paintCanvas() {


  petPlayerObject.x = petPlayerObject.x + petPlayerObject.speedX
  petPlayerObject.y = petPlayerObject.y + petPlayerObject.speedY
  lienzo.clearRect(0, 0, map.width, map.height)
  lienzo.drawImage(
    backgroundMap,
    0,
    0,
    map.width,
    map.height
  )
petPlayerObject.pintarPokimon()
calvoEnemy.pintarPokimon()
pitochuEnemy.pintarPokimon()
palomaperuanaEnemy.pintarPokimon()
vulvasurEnemy.pintarPokimon()
ludiculoEnemy.pintarPokimon()

if(petPlayerObject.speedX !== 0 || petPlayerObject.speedY !== 0) {
  checkColision(calvoEnemy)
  checkColision(vulvasurEnemy)
  checkColision(ludiculoEnemy)
  checkColision(palomaperuanaEnemy)
  checkColision(pitochuEnemy)
  
}
}

function moveRight() {
  petPlayerObject.speedX = 7
}
function moveDown() {
  petPlayerObject.speedY = 7
}
function moveUp() {
  petPlayerObject.speedY = - 7
}
function moveLeft() {
  petPlayerObject.speedX = - 7
}
function stopMovement() {
  petPlayerObject.speedX = 0
  petPlayerObject.speedY = 0
}

function pressed(event) {
  switch (event.key) {
    case "ArrowUp":
      case "w":
      moveUp()
      break
      case "ArrowDown":
      case "s":
      moveDown()
      break
      case "ArrowLeft":
      case "a":
      moveLeft()
      break
      case "ArrowRight":
      case "d":
      moveRight()
      break
    default:
      break;
  }
}

function startMap() {
  map.width = 900
  map.height = 450
  petPlayerObject = getObjectPet(petPlayer)
  
  intervalo = setInterval(paintCanvas, 50)

  window.addEventListener("keydown", pressed)
  
  window.addEventListener("keyup", stopMovement)
}

function getObjectPet() {
  for (let i = 0; i < pokimonPets.length; i++) {
    if (petPlayer === pokimonPets[i].name) {
       return pokimonPets[i]
    }
   
   }
}
function checkColision(enemy) {
  const upEnemy = enemy.y
  const downEnemy = enemy.y + enemy.height
  const rightEnemy = enemy.x + enemy.width
  const leftEnemy = enemy.x

  const upPet = petPlayerObject.y
  const downPet = petPlayerObject.y + petPlayerObject.height
  const rightPet = petPlayerObject.x + petPlayerObject.width
  const leftPet = petPlayerObject.x
  
  if(
    downPet < upEnemy || 
    upPet > downEnemy ||
    rightPet < leftEnemy ||
    leftPet > rightEnemy
  ) {
    return
  }

  stopMovement()
clearInterval(intervalo)
  /* alert("you wanna figth ah !" +  " " + enemy.name + " " + "wants to figth too!") */
  sectionSeeMap.style.display = 'none'
  sectionChooseAttack.style.display = "flex" 
  selectPetBot(enemy)
}

window.addEventListener("load", startGame)

/* function selectPetPlayer() {
   
   if (document.getElementById("calvo de brazzers").checked) {creatMessage("you chose calvo de brazzers!") }
   else if(document.getElementById("pitucho").checked)
   {creatMessage("you chose pitucho!")}
   else if(document.getElementById("vulvasur").checked)
   {creatMessage("you chose vulvasur!")}
   else if(document.getElementById("paloma peruana").checked)
   {creatMessage("you chose paloma peruana!")}
   else if(document.getElementById("ludiculo").checked)
   {creatMessage("you chose ludiculo!")}
   else{creatMessage("choose a pokimon stupid!")}

 */

   
   /* if (inputBrazzers.checked) {creatMessage('calvo de brazzers is in your team!') }
   
   else if (inputPitochu.checked) {creatMessage("pitochu is in your team!")}
   else if (inputVulvasur.checked) {creatMessage("vulvasur is in your team!")}
   else if (inputPaloma.checked) {creatMessage("paloma peruana is in your team!")}
   else if (inputLudiculo.checked) {creatMessage("ludicolo is in your team!")}
   else{creatMessage("choose a fucking pokimon!")

  */
