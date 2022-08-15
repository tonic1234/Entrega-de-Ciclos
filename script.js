alert("Adivina adivinador.Tenes 3 oportunidades para adivinar que numero del 0 al 20 elegí");

let numero = Math.ceil(Math.random() * 20);

for (let index = 0; index < 3; index++) {
  let chance = 2 - index;
  const entrada = prompt("Ingrese su numero");
  if (chance == 0 && entrada != numero) {
    alert("Game Over el numero era" + " " + numero);
    break;
  }
  if (chance == 0 && entrada == numero) {
    alert("El numero es correcto. Acertaste en tu ultima oportunidad. El numero era" + " " + numero);
    break;
  }
  if (entrada == numero) {
    alert("El numero es correcto. El numero era" + " " + numero);
    break;
  } else if (entrada > numero) {
    alert("El numero es menor le quedan" + " " + chance + " " + "intentos");
  } else if (entrada < numero) {
    alert("El numero es mayor le quedan" + " " + chance + " " + "intentos");
  }
}



