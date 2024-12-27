const tabellone = document.getElementById('tabellone')
const estrazione = document.getElementById("estrazione")

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
  })
}

createTable()


function estraction(event) {
  if (all_numbers.length === 0) {
    alert("Tutti i numeri sono stati estratti!");
    return
  }
  const randomIndex = Math.floor(Math.random() * all_numbers.length);
  const numeroCasuale = all_numbers[randomIndex]; // Estrai un numero casuale dall'array
  console.log("Numero estratto: " + numeroCasuale);

  // Rimuovi il numero estratto dall'array
  all_numbers.splice(randomIndex, 1);
  console.log("estr" + all_numbers)
}


