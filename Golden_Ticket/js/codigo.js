
//EVENTOS e INPUTS//
const datos = {
    nombre:"",
    telefono:"",
    email:"",
    mensaje:"",

}
const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

//nombre.addeventlistener("input",function(evento){
  //  console.log(evento.target.value)
//});
//email.addeventlistener("input",function(evento){
  //  console.log(evento.target.value)
//});
//mensaje.addeventlistener("input",function(evento){
  //  console.log(evento.target.value)
//});

nombre.addEventListener("input", leertexto);//leertexto lo usaremos para una funcion
telefono.addEventListener("input", leertexto);
email.addEventListener("input", leertexto);
mensaje.addEventListener("input", leertexto);

//evento Submit
formulario.addEventListener("submit",function(evento){
  evento.preventDefault();
  //validar formulario
  const{nombre, telefono, email, mensaje}=datos;

  if(nombre ===""  || telefono ==="" || email==="" || mensaje==="" )
  {mostrarError("Todos los campos son obligatorios")
  return;//corta la ejecucion del codigo
}
//crear la alerta de envio satisfactorio
mostraralerta("Mensaje Enviado Correctamente")
})
//mostrar alerta en pantalla
function mostraralerta(mensaje){
  const correcto = document.createElement("p");
  correcto.textContent = mensaje
correcto.classList.add("correcto");
formulario.appendChild(correcto);
//quitar el mensaje en 5 seg 

setTimeout(()=>{
  correcto.remove();
}, 5000 );
}


function leertexto(evento){
  datos[evento.target.id]=evento.target.value
}
//mostrar error en pantalla 
function mostrarError(mensaje){
  const error = document.createElement("p");
  error.textContent = mensaje
error.classList.add("error");
formulario.appendChild(error);

//Desaparecer despues de 5 seg
setTimeout(()=>{
  error.remove();
}, 3000 );
}