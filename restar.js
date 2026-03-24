
const inputA = document.getElementById("valor-a");
const inputB = document.getElementById("valor-b");
const btnRestar = document.getElementById("btn-restar");
const resultadoTexto = document.getElementById("resultado");


btnRestar.onclick = () => {
    
    const a = Number(inputA.value);
    const b = Number(inputB.value);

    
    operacion.valorA = a;
    operacion.valorB = b;
    operacion.tipo = "resta";
    operacion.total = a - b;

   
    resultadoTexto.textContent = `Resultado: ${operacion.total}`;

    historial.push({ ...operacion });

    console.log("Operación de resta registrada en el historial:", operacion);
};