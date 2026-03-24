const boton=document.getElementById ("btn-sumar"),
botonSumar.onclick = () => {
  operacion.valorA = Number(document.getElementById("num1").value);
  operacion.valorB = Number(document.getElementById("num2").value);
};