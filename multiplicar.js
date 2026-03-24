
const btnMulti = document.getElementById("btn-multi");

btnMulti.onclick = () => {
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);

    operacion.valorA = n1;
    operacion.valorB = n2;
    operacion.tipo = "multiplicación";
    operacion.total = n1 * n2;

    document.getElementById("resultado").textContent = `Resultado: ${operacion.total}`;
    historial.push({ ...operacion });
};