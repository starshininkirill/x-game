let count = 2;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOne = document.querySelector('.player-one')
let playerTwo = document.querySelector('.player-two')
let mapItems = document.querySelectorAll(".map__item")
let player = document.querySelector('.player')
let playMap = [ '' , '' ,'' , '' , '' , '' , '' , '' , '']
let winCombinationsX = [
   playMap[0] == 1 && playMap[1] == 1 && playMap[2] == 1,
   playMap[0] == 1 && playMap[4] == 1 && playMap[8] == 1,
   playMap[0] == 1 && playMap[3] == 1 && playMap[6] == 1,
   playMap[2] == 1 && playMap[5] == 1 && playMap[8] == 1,
   playMap[6] == 1 && playMap[7] == 1 && playMap[8] == 1,
   playMap[2] == 1 && playMap[4] == 1 && playMap[6] == 1,
   playMap[3] == 1 && playMap[4] == 1 && playMap[5] == 1,
]
let winCombinationsO = [
   playMap[0] == '0' && playMap[1] == '0' && playMap[2] == '0',
   playMap[0] == '0' && playMap[4] == '0' && playMap[8] == '0',
   playMap[0] == '0' && playMap[3] == '0' && playMap[6] == '0',
   playMap[2] == '0' && playMap[5] == '0' && playMap[8] == '0',
   playMap[6] == '0' && playMap[7] == '0' && playMap[8] == '0',
   playMap[2] == '0' && playMap[4] == '0' && playMap[6] == '0',
   playMap[3] == '0' && playMap[4] == '0' && playMap[5] == '0',
]

function playersViev() {
   playerOne.innerHTML = `Игрок X: ${playerOneScore}`
   playerTwo.innerHTML = `Игрок O: ${playerTwoScore}`
}

function printOnBoard(){
   if (count % 2 == 0) {
      player.innerHTML = `Ход игрока: O`
      this.event.target.innerHTML = "X"
      playMap = playMap.map(function(elem, index){
         if(index == this.event.target.id - 1){
           return elem = 1
         }
         return elem
      })
      count += 1
   } else {
      player.innerHTML = `Ход игрока: X`
      this.event.target.innerHTML = "O"
      playMap = playMap.map(function(elem, index){
         if (index == this.event.target.id - 1) {
            return elem = 0
         }
         return elem
      })
      count += 1;
   }
}

function print(event){
   if(playMap[event.target.id - 1] !== 1 && playMap[event.target.id - 1] !== 0){
      printOnBoard()
      console.log(playMap);
   } 
   check()
}

function check() {
   resetWinCombination()
   winCombinationsX.forEach(function(elem){
      if (elem == true) {
         alert("Победил игрок X")
         playMap = [ '' , '' ,'' , '' , '' , '' , '' , '' , ''];
         playerOneScore += 1;
         playersViev()
         clearMap()
      } 
   })
   winCombinationsO.forEach(function(elem){
      if (elem == true) {
         alert("Победил игрок O")
         playMap = [ '' , '' ,'' , '' , '' , '' , '' , '' , ''];
         playerTwoScore += 1;
         playersViev()
         clearMap()
      } 
   })
   nobody()
}

function resetWinCombination(){
   winCombinationsX = winCombinationsX = [
      playMap[0] == 1 && playMap[1] == 1 && playMap[2] == 1,
      playMap[0] == 1 && playMap[4] == 1 && playMap[8] == 1,
      playMap[0] == 1 && playMap[3] == 1 && playMap[6] == 1,
      playMap[2] == 1 && playMap[5] == 1 && playMap[8] == 1,
      playMap[6] == 1 && playMap[7] == 1 && playMap[8] == 1,
      playMap[2] == 1 && playMap[4] == 1 && playMap[6] == 1,
      playMap[3] == 1 && playMap[4] == 1 && playMap[5] == 1,
   ]
   winCombinationsO = winCombinationsO = [
      playMap[0] == '0' && playMap[1] == '0' && playMap[2] == '0',
      playMap[0] == '0' && playMap[4] == '0' && playMap[8] == '0',
      playMap[0] == '0' && playMap[3] == '0' && playMap[6] == '0',
      playMap[2] == '0' && playMap[5] == '0' && playMap[8] == '0',
      playMap[6] == '0' && playMap[7] == '0' && playMap[8] == '0',
      playMap[2] == '0' && playMap[4] == '0' && playMap[6] == '0',
      playMap[3] == '0' && playMap[4] == '0' && playMap[5] == '0',
   ]
}




function nobody(){
   let nonePlayerCount = 0
   playMap.forEach(function(elem){
      if(elem === '')
      nonePlayerCount += 1;
   })
   console.log(nonePlayerCount);
   if (nonePlayerCount == 0) {
      alert("Ничья!")
      playMap = [ '' , '' ,'' , '' , '' , '' , '' , '' , ''];
      clearMap()
   }
}

function clearMap() {
   mapItems.forEach(function(elem){
      elem.innerHTML = ''
   })
}



mapItems.forEach(function(elem){
   elem.addEventListener('click',print)
})




