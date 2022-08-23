const costoMano = 50


alert("Calculador de presupuestos")
alert("Ingrese el costo de los materiales en pesos")
let cMateriales = parseInt(prompt("Costo de materiales"));
alert(`Ingrese cantidad de horas que lleva el trabajo
Si son menos de 3 horas la mano de obra cuesta el doble
Si son mas de 8 horas la mano de obra tiene 10% de descuento`)
let hTrabajo = parseInt(prompt("horas de trabajo"));




function presupuesto() {
  if (hTrabajo > 8) {
    return (hTrabajo * (costoMano * 0.90)) + cMateriales;
  } else if (hTrabajo <= 3) {
    return (hTrabajo * (costoMano * 2)) + cMateriales;
  } else {
    return (hTrabajo * costoMano) + cMateriales;
  }

}
alert("el costo del trabajo es de $" + presupuesto())