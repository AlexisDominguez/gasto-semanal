import Presupuesto from "../js/presupuesto.js";
import Interfaz from "../js/interfaz.js";

// -- Variables -- 
const presupuestoUsuario = prompt("¿Cuál es tu presupuesto semanal?");
const formulario = document.getElementById("agregar-gasto");
let cantidadPresupuesto;

export {cantidadPresupuesto};

// -- Event listeners --
// Se encarga de establer las acciones justo al cargar la página
document.addEventListener("DOMContentLoaded", function(){
   // Se encarga de verificar si el valor introducido en el prompt()
   // es  nulo o un espacio vacío.
   if(presupuestoUsuario === null || presupuestoUsuario === ""){
      window.location.reload();    //Recarga la página
   }else{

      cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
      
      const ui = new Interfaz();

      // Inserta cantidadPresupuesto dentro del HTML
      ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
   } 
});

// Se encarga de procesar las acciones del formulario
formulario.addEventListener("submit", function(e){
   e.preventDefault();

   const nombreGasto = document.getElementById("gasto").value;
   const cantidadGasto = document.getElementById("cantidad").value;
   
   const ui = new Interfaz();

   //Comprueba que no haya campos vacíos al enviar el formulario
   if(nombreGasto === "" || cantidadGasto === ""){
      ui.mostrarMensaje("Error al crear gasto", "error");
   }else{
      ui.mostrarMensaje("Gasto añadido al listado", "success");
      ui.agregarGastoListado(nombreGasto, cantidadGasto);
      ui.presupuestoRestante(cantidadGasto);
   }
});