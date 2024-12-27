const tabellone = document.getElementById('tabellone')
const estrazione = document.getElementById("estrazione")
const buttons = document.getElementById("game")

let all_numbers = []
for (let i = 1; i <= 90; i++) {
  all_numbers.push(i)
}
console.log(all_numbers)

function createTable() {
  all_numbers.forEach(num => {
    const button = document.createElement('button')
    button.textContent = num
    button.className = 'button-tabellone'
    tabellone.appendChild(button)

  });

}
createTable()

function estraction(event) {
  if (all_numbers.length === 0) {
    alert("Tutti i numeri sono stati estratti!\nClicca su termina gioco per una nuova partita")
    return;
  }

  const randomIndex = Math.floor(Math.random() * all_numbers.length);
  const numeroCasuale = all_numbers[randomIndex]
  console.log("Numero estratto: " + numeroCasuale)

  // Rimuove il numero estratto dall'array
  all_numbers.splice(randomIndex, 1)
  console.log("Numeri rimanenti: " + all_numbers)

  // Cerca un elemento esistente con la classe 'button-numCasual'
  let numberSelected = document.querySelector('.button-numCasual')

  if (!numberSelected) {
    numberSelected = document.createElement('div')
    numberSelected.className = 'button-numCasual'
    buttons.appendChild(numberSelected)
  }

  // Aggiorna il contenuto con il nuovo numero estratto
  numberSelected.textContent = '. . .'

  setTimeout(() => {
    numberSelected.textContent = numeroCasuale

    const buttonToActivate = Array.from(document.querySelectorAll('.button-tabellone')) //NodeList
      .find(button => button.textContent == numeroCasuale) //Trasformiamo la NodeList in un Array per utilizzare il metodo find

    if (buttonToActivate) {
      buttonToActivate.classList.add('active')
    }
  }, 1000);
}


function endGame() {
  alert("Tombolaaa")
  if (confirm("Vuoi terminare il gioco?")) {
    location.reload()
  }
}








