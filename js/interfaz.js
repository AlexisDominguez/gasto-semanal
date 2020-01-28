class Interfaz{
   // Inserta la cantidad de presupuesto en los dos <span> del DOM
   insertarPresupuesto(cantidad){
      const presupuestoSpan = document.querySelector("span#total");
      const restanteSpan = document.querySelector("span#restante");

      presupuestoSpan.innerHTML = `${cantidad}`;
      restanteSpan.innerHTML = `${cantidad}`;
   }
}

export default Interfaz;