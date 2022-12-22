let lifePlayer = 5
let lifeEnemy = 5

function startGame() { 
 let buttonPetPlayer = document.getElementById("button-pet")
 let sectionChooseAttack = document.getElementById("choose-attack")
 sectionChooseAttack.style.display = "none"

 buttonPetPlayer.addEventListener("click",selectPetPlayer)

 let buttonElectric = document.getElementById("button-electric")
 buttonElectric.addEventListener("click", attackElectric)
 let buttonWater = document.getElementById("button-water")
 buttonWater.addEventListener("click", attackWater)
 let buttonGrass = document.getElementById("button-grass")
 buttonGrass.addEventListener("click", attackGrass)
 
 let buttonAir = document.getElementById("button-air")
 buttonAir.addEventListener("click", attackAir)
 
 let buttonMix = document.getElementById("button-mix")
 buttonMix.addEventListener("click", attackMix)

let buttonRestart = document.getElementById("button-restart") 
  buttonRestart.addEventListener("click", restartGame )

let finalButtonRestart = document.getElementById("button-restart")
finalButtonRestart.style.display = "none"

 }


 
 function selectPetPlayer() {
  
  let sectionChooseAttack = document.getElementById("choose-attack")
  sectionChooseAttack.style.display = "flex"

  let sectionChoosePet = document.getElementById("choose-pet")
  sectionChoosePet.style.display = "none"



   let inputBrazzers = document.getElementById("calvo de brazzers")
   let inputPitochu = document.getElementById("pitucho")
   let inputVulvasur = document.getElementById("vulvasur")
   let inputPaloma = document.getElementById("paloma peruana")
   let inputLudiculo = document.getElementById("ludiculo")
   let spanPetPlayer = document.getElementById("pet-player")

   if (inputBrazzers.checked) {spanPetPlayer.innerHTML = "calvo de brazzers" }
   else if (inputPitochu.checked) {spanPetPlayer.innerHTML = "pitochu"}
   else if (inputVulvasur.checked)  {spanPetPlayer.innerHTML = "vulvasur"}
   else if (inputPaloma.checked)  {spanPetPlayer.innerHTML = "paloma peruana"}
   else if (inputLudiculo.checked)  {spanPetPlayer.innerHTML = "ludicolo"}
   else{alert("you didn't chose, your oponent chose arceus, better you run cowboy")

   }
   selectPetBot()
   
}

function selectPetBot() {
  let botPet = random(1,5)
  let spanPetBot = document.getElementById("bot-player")

   if(botPet == 1) { spanPetBot.innerHTML = "calvo de brazzers"
   } else if(botPet == 2) { spanPetBot.innerHTML = "pitochu"
   } else if(botPet == 3) { spanPetBot.innerHTML = "vulvasur"
   } else if(botPet == 4) { spanPetBot.innerHTML = "paloma peruana"
   } else {spanPetBot.innerHTML = "ludicolo"}

} 
 
function attackWater() {
  attackPlayer = "Water"
  randomEnemyAttack()
}
function attackElectric() {
  attackPlayer = "Electric"
  randomEnemyAttack()
}
function attackAir() {
  attackPlayer = "Air"
  randomEnemyAttack()
}
function attackGrass() {
  attackPlayer = "Grass"
  randomEnemyAttack()
}
function attackMix() {
  attackPlayer = "Water and grass mother fucker!"
  randomEnemyAttack()
}

function randomEnemyAttack() {
  let randomAttack = random(1,5)

  if (randomAttack == 1) {
    enemyAttack = "Water"
  } else if( randomAttack == 2) {
    enemyAttack = "Electric"
  } else if( randomAttack == 3) {
    enemyAttack = "Grass"
  } else if( randomAttack == 4) {
    enemyAttack = "Air"
  } else { enemyAttack = "Water and grass mother fucker!"

  }
  
  battle()
}

function battle() {
let spanPlayerLife = document.getElementById("life-player")
let spanEnemyLife = document.getElementById("life-enemy")

if(enemyAttack == attackPlayer) { creatMessage(" tie")} 
else if(attackPlayer == "Water" && enemyAttack == "Air" ) { creatMessage(" you won")  
lifeEnemy--  
spanEnemyLife.innerHTML = lifeEnemy
}        
else if( attackPlayer == "Electric" && enemyAttack == "Water") { creatMessage(" you won!")   
lifeEnemy--  
spanEnemyLife.innerHTML = lifeEnemy
}
else if( attackPlayer == "Grass" && enemyAttack == "Water" ) { creatMessage(" you won!")  
lifeEnemy--  
spanEnemyLife.innerHTML = lifeEnemy  
}
else if( attackPlayer == "Air" && enemyAttack == "Grass") { creatMessage(" you won!")    
lifeEnemy--  
spanEnemyLife.innerHTML = lifeEnemy
}
else if( attackPlayer == "Electric" && enemyAttack == "Air") { creatMessage(" you won!") 
lifeEnemy--  
spanEnemyLife.innerHTML = lifeEnemy
}
else if( attackPlayer == "Air" && enemyAttack == "Grass") { creatMessage(" you won!")   
lifeEnemy--  
spanEnemyLife.innerHTML = lifeEnemy
}
 else if( attackPlayer == "Electric" && enemyAttack == "Grass") { creatMessage(" tie")    
}
else if( attackPlayer == "Grass" && enemyAttack == "Electric") { creatMessage(" tie")    
}
else if( attackPlayer == "Grass" && enemyAttack == "Water and grass mother fucker!") { creatMessage("  tie")    
}
else if( attackPlayer == "Water and grass mother fucker!" && enemyAttack == "Water" ) { creatMessage(" you won") 
lifeEnemy--  
spanEnemyLife.innerHTML = lifeEnemy
}
else if( attackPlayer == "Air" && enemyAttack == "Water") { creatMessage("  tie")   
}
else if( attackPlayer == "Air" && enemyAttack == "Water and grass mother fucker!") { creatMessage(" you won!")   
lifeEnemy--  
spanEnemyLife.innerHTML = lifeEnemy
}
else if( attackPlayer == "Water and grass mother fucker!" && enemyAttack == "Electric" ) { creatMessage("  tie") 
}
else if( attackPlayer == "Electric" && enemyAttack == "Water and grass mother fucker!") { creatMessage(" tie")    
}
else if( attackPlayer == "Water and grass mother fucker!" && enemyAttack == "Grass" ) { creatMessage(" tie") 
} 
else {creatMessage("you lost!")
lifePlayer--
spanPlayerLife.innerHTML = lifePlayer
}
checkLifes()
}

function checkLifes() {
  if (lifeEnemy == 0) {
    
    creatFinalMessage("you won!!!!!!!!")
  }
  
  else if(lifePlayer== 0) {
  
  creatFinalMessage ("loooser!!!!!!")

  }

}

function creatMessage(result) {
  let sectionMessages = document.getElementById("totalResult")
  let playerAttack = document.getElementById("player-Attack")
  let EnemyAttack = document.getElementById("Enemy-Attack")
  
 
  let newAttackPlayer = document.createElement("p")
  let newAttackEnemy = document.createElement("p")

  sectionMessages.innerHTML = result
  newAttackPlayer.innerHTML = attackPlayer
  newAttackEnemy.innerHTML = enemyAttack
  
  
  playerAttack.appendChild(newAttackPlayer)
  EnemyAttack.appendChild(newAttackEnemy)
}

function creatFinalMessage(Finalresult) {
  let sectionMessages = document.getElementById("totalResult")
  
 
  sectionMessages.innerHTML = Finalresult
  
  

  let buttonElectric = document.getElementById("button-electric")
  buttonElectric.disabled = true
  let buttonWater = document.getElementById("button-water")
  buttonWater.disabled = true
  let buttonGrass = document.getElementById("button-grass")
  buttonGrass.disabled = true
  let buttonAir = document.getElementById("button-air")
  buttonAir.disabled = true
  let buttonMix = document.getElementById("button-mix")
  buttonMix.disabled = true

  let finalButtonRestart = document.getElementById("button-restart")
  finalButtonRestart.style.display = "block"

}

function restartGame() {
  location.reload()
}

function random(min, max) {return Math.floor(Math.random() * (max - min +1) + min) 
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

   } */
   