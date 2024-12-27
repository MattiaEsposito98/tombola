const tabellone = document.getElementById('tabellone')
const estrazione = document.getElementById("estrazione")
const buttons = document.getElementById("game")

let all_numbers = [];
for (let i = 1; i <= 90; i++) {
  all_numbers.push(i);
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
createTable();

function estraction(event) {
  if (all_numbers.length === 0) {
    alert("Tutti i numeri sono stati estratti!\nClicca su termina gioco per una nuova partita")
    return
  }

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * all_numbers.length)
    const numeroCasuale = all_numbers[randomIndex] // Estrae un numero casuale dall'array
    console.log("Numero estratto: " + numeroCasuale)


    // Rimuove il numero estratto dall'array
    all_numbers.splice(randomIndex, 1)
    console.log("Numeri rimanenti:" + all_numbers)

    // Cerca un elemento esistente con la classe 'button-numCasual'
    let numberSelected = document.querySelector('.button-numCasual')

    if (!numberSelected) {
      numberSelected = document.createElement('div')
      numberSelected.className = 'button-numCasual'
      buttons.appendChild(numberSelected);
    }

    // Aggiorna il contenuto con il nuovo numero estratto
    setTimeout(() => {
      numberSelected.textContent = numeroCasuale
    }, 1000)

    numberSelected.textContent = '. . .'

    const buttonsInTabellone = document.querySelectorAll('.button-tabellone') //NodeList


    //Trasformiamo la NodeList in un Array per utilizzare il metodo find
    const buttonToActivate = Array.from(buttonsInTabellone).find(button => button.textContent == numeroCasuale)

    if (buttonToActivate) {
      setTimeout(() => {
        buttonToActivate.classList.add('active');
      }, 1000)
    }

  }, 1000)
}

function endGame() {
  alert("Tombolaaa")
  if (confirm("Vuoi terminare il gioco?")) {
    location.reload()
  }
}








