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
  const min = 1;
  const max = 90;
  const numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Numero estratto: " + numeroCasuale);
  all_numbers.splice(numeroCasuale, 1);
}

