
const btnRestar = document.getElementById("btn-restar");
const resultadoTexto = document.getElementById("resultado");

btnRestar.onclick = () => {
    
    const inputA = document.getElementById("num1");
    const inputB = document.getElementById("num2");

   
    const a = Number(inputA.value);
    const b = Number(inputB.value);

   
    operacion.valorA = a;
    operacion.valorB = b;
    operacion.tipo = "resta";
    operacion.total = a - b;

    
    resultadoTexto.textContent = `Resultado: ${operacion.total}`;

    
    historial.push({ ...operacion });

    console.log("Resta completada:", operacion.total);
};