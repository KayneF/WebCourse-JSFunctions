// Declarando funções

/**
 * Funções, assim como variáveis, possuem um "hoisting", que nada mais é,
 * do que a elevação da mesma. Quer dizer que, independente de onde ela é 
 * declarada, eu posso chama-la normalmente. Ou seja, se eu criar uma função
 * no topo do código, ela poderá ser chamada no fim do código e vice-versa.
 */

function sayHi() { // Declaração mais comum de função (pode receber parâmetros)
    console.log("Hi!");
}
sayHi();

/**
 * Funções podem ser 'First-class Objects', isso quer dizer que podemos
 * jogar uma função, dentro de uma variável.
 * Esse tipo de função pode ser executada normalmente como uma função
 * qualquer. 
 * Quando uma variável recebe uma função, ela passa a ser uma função.
 * Com isso, podemos usar essa variável como um parâmetro de outra 
 * função, fazendo com que a função dentro da variável possa ser executada.
 */
// Function expression 
// É possível nomea-las, porém não é habitual
const iAmData = function() {
    console.log('I am data.');
};

function exFunction(func) {
    console.log('Executing "exFunction()"');
    func();
}
exFunction(iAmData);

// Arrow function
const arrowFunction = () => {
    console.log('I am a arrow function');
};
arrowFunction();

// Dentro de um objeto
const obj = {
    talk: function() {
        console.log('I am talking...');
    }
};
obj.talk();
// Ou...
const obj2 = {
    talk() {
        console.log('I am talking again...');
    }
};
obj2.talk();
