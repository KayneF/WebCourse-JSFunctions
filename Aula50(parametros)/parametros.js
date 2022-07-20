// Parâmetros

/** ===================================================================
 * Em Javascript, é possível enviar argumentos para uma função,
 * mesmo que ela não receba absolutamente nenhum valor como parâmetro.
 * Mesmo assim, ela será executada normalmente como se nada tivesse
 * acontecido.
 * Porém, esses argumentos não são descartados. 
 * Eles vão parar dentro de uma variável reservada chamada 'arguments',
 * onde esses argumentos são guardados dentro de um objeto/array
 * para serem utilizados caso necessário.
 * Caso existam parâmetros para receberem os argumentos, eles serão
 * alocados normalmente pelos parâmetros, e caso não existam parâmetros
 * suficientes para receberem argumentos, os parâmetros existentes vão
 * receber os argumentos em ordem que são passados, e o restante ficará
 * sem parâmetros.
 * *** Note que independente de haver parâmetros suficientes, todos
 * os argumentos sempre serão guardados dentro de 'arguments'.***
 * *** Outro detalhe importante, é que 'arguments' não funciona em 
 * arrow functions. ***
 */
 function func() {
    console.log('Hello!');
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[10]);
    console.log(arguments[11]);
}
func('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 33, 'Frase qualquer');

function sum() {
    let total = 0;
    for(let value of arguments){
        total += value;
        console.log('Valor temporário: ', total);
    }
    console.log('Valor final: ', total);
}
sum(3, 15, 33, 90, 27, 48, 44);

/** ===================================================================
 * Funções também podem trabalhar normalmente caso não recebam
 * argumentos suficientes. O que acontece, é que os parâmetros
 * que não receberem argumentos, vão ficar vazios e receber
 * o dado do tipo 'undefined'.
 */
function underflow(a, b, c, d, e) {
    console.log(a, b, c, d, e);
}
underflow(1, 2, 3);

/** ===================================================================
 * Em Javascript, caso algum parâmetro fique sem argumento,
 * também é possível que parâmetros vazios assumam valores padrões.
 * Nesse caso, se o argumento for enviado, ele irá assumir o valor
 * enviado pelo argumento, caso contrário, irá assumir o valor padrão.
 */
// Valores padrão
function defaultValue(x, y=20, z=30) {
    console.log('Resultado:', x + y + z);
}
defaultValue(10);
defaultValue(10, 53);
// Caso queira pular um parâmetro, basta usar um 'undefined'
defaultValue(10, undefined, 53);

// ===================================================================
// Objetos
function personObj({ name, surname, age }) {
    console.log(name, surname, age);
}
let obj = { name:'Kayne', surname:'Ferreira', age:33 };
personObj(obj);

// Arrays
function personArray([v1, v2, v3]) {
    console.log(v1, v2, v3);
}
let array = ['Kayne', 'Ferreira', 33];
personArray(array);

// ===================================================================
function operation(operator, acumulator, numbers) {
    for (let n of numbers) {
        if (operator === '+') acumulator += n;
        if (operator === '-') acumulator -= n;
        if (operator === '*') acumulator *= n;
        if (operator === '/') acumulator /= n;
        console.log('Resultado parcial:', acumulator);
    }
    console.log('Resultado final:', acumulator)
}
operation('+', 0, [10, 20, 30, 40, 50]);

// Também é possível utilizar o 'rest' como parâmetro
function operation2(operator, acumulator, ...numbers) {
    for (let n of numbers) {
        if (operator === '+') acumulator += n;
        if (operator === '-') acumulator -= n;
        if (operator === '*') acumulator *= n;
        if (operator === '/') acumulator /= n;
        console.log('Resultado parcial:', acumulator);
    }
    console.log('Resultado final:', acumulator)
}
operation2('+', 0, 10, 20, 30, 40, 50);

/** 
 * O 'rest operator' pode ser usado para receber vários argumentos
 * em uma 'arrow function'.
 */
const tempFunc = (...args) => {
    console.log(args);
};
tempFunc(1, 10, 100, 1000);
