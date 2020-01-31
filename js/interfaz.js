import { cantidadPresupuesto } from "../js/app.js";

class Interfaz{
   // Inserta la cantidad de presupuesto en los dos <span> del DOM
   insertarPresupuesto(cantidad){
      const presupuestoSpan = document.querySelector("span#total");
      const restanteSpan = document.querySelector("span#restante");

      presupuestoSpan.innerHTML = `${cantidad}`;
      restanteSpan.innerHTML = `${cantidad}`;
   }

   // Crea un <div> mostrando un mensaje de error o success
   mostrarMensaje(mensaje, tipo){
      const div = document.createElement("div");
      div.classList.add("text-center", "alert");   

      if(tipo === "error"){
         div.classList.add("alert-danger");
      }else{
         div.classList.add("alert-success");
      }

      div.innerHTML = mensaje;
      const formulario = document.getElementById("agregar-gasto");

      // Inserta el <div> justo antes del s
      document.querySelector(".primario").insertBefore(div, formulario);

      setTimeout(function(){
         div.remove();
      },3000);
   }

   // Agrega el gasto dentro de una lista con su nombre y cantidad
   agregarGastoListado(nombre, cantidad){
      const gastoListado = document.querySelector("#gastos ul");
      const li = document.createElement("li");

      li.className = "list-group-item d-flex justify-content-between align-items-center";

      li.innerHTML = `
      ${nombre}: 
      <span class = "badge badge-primary badge-pill"> 
         $ ${cantidad} 
      </span>`;

      gastoListado.appendChild(li);
   }

   // Inserta la cantidad del prespuesto restante dentro del <span id="#restante">
   presupuestoRestante(cantidad){
      const restante = document.querySelector("#restante");
      const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);

      restante.innerHTML = `${presupuestoRestanteUsuario}`;
      
      this.comprobarPresupuesto();
   }

   // Se encarga de cambiar el color del <span id="#restante"> si es inferior al 50% o 20% 
   comprobarPresupuesto(){
      const presupuestoTotal = cantidadPresupuesto.presupuesto;
      const presupuestoRestante = cantidadPresupuesto.restante;
      const restante = document.querySelector(".restante");

      if((presupuestoTotal / 4) >= presupuestoRestante){
         restante.classList.remove("alert-success", "alert-warning");
         restante.classList.add("alert-danger");
      }else if ((presupuestoTotal / 2) >= presupuestoRestante ){
         restante.classList.remove("alert-success", "alert-danger");
         restante.classList.add("alert-warning");
      }
   }
}

export default Interfaz;