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
}

export default Interfaz;