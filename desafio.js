/* Calculadora de consumo de combustível por KM. Veiculo a gasolina.

Neste programa deve-se fazer uso de cinco variáveis. sendo elas: 

    1 - preçoCombustivel;
    2 - consumo;
    3 - distancia;
    4 - litrosConsumidos;
    5 - ValorGasto;

Utilizei a seguinte fórmula: distancia / consumo * preço do combustivel obtendo o resultado X.*/

const preçoCombustivel = 5.88;
const consumo = 13;
const distancia = 600;

const litrosConsumidos = distancia / consumo;
const valorGasto = litrosConsumidos * preçoCombustivel;

console.log(valorGasto.toFixed(2));