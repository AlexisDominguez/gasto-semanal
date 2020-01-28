// Importanciones
import Presupuesto from "../js/presupuesto.js";
import Interfaz from "../js/interfaz.js";

// Variables
const presupuestoUsuario = prompt("¿Cuál es tu presupuesto semanal?");
let cantidadPresupuesto;

// Event listeners
document.addEventListener("DOMContentLoaded", function(){
   // Se encarga de verificar si el valor introducido en el prompt()
   // es  nulo o un espacio vacío.
   if(presupuestoUsuario === null || presupuestoUsuario === ""){
      window.location.reload();    //Recarga la página
   }else{
      //Instancia de Presupuesto 
      cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
      //Instancia de Interfaz
      const ui = new Interfaz();
      ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
   } 
});
