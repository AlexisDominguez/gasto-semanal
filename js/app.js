import Presupuesto from "../js/presupuesto.js";

//variables
const presupuestoUsuario = prompt("¿Cuál es tu presupuesto semanal?");
let cantidadPresupuesto;
//Clases

//Event listeners
document.addEventListener("DOMContentLoaded", function(){
   if(presupuestoUsuario === null || presupuestoUsuario === ""){
      window.location.reload();
   }else{
      //Instancia de presupuesto 
      cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
   } 
});
