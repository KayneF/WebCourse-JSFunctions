// Funções imediatas IIEF(Immediately Invoked Function Expression)
/**
 * Funções imediatas são funções que são executadas imediatamente, ou seja, 
 * elas são chamadas assim que criadas, dispensando a necessidade de serem chamadas.
 */

// As funções imediatas precisam ser envolvidas em parênteses
(function(age, hight) { // Funções imediatas podem receber argumentos em parâmetros
    const surname = 'Ferreira';

    function createName(name) {
        return (`${name} ${surname}`);
    }

    function sayName() {
        console.log(createName('Kayne'));
    }

    sayName();
    console.log(`Idade: ${age}, Altura: ${hight}`);

})(33, 1.8); // Ao final, são passados argumentos para funções imediatas

const name = 'Outro nome';
