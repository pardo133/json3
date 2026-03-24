const boton = document.getElementById("btn-sumar");

boton.onclick = () => {
  
  operacion.valorA = Number(document.getElementById("num1").value);
  operacion.valorB = Number(document.getElementById("num2").value);
  
  
  operacion.tipo = "suma";
  
  
  operacion.total = operacion.valorA + operacion.valorB;

  
  document.getElementById("resultado").textContent = `Resultado: ${operacion.total}`;

  
  historial.push({ ...operacion });
  
  console.log("Suma realizada y guardada:", operacion.total);
};