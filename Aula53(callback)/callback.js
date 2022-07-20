// Callback
/**
 * O callback é utilizado, quando há a necessidade de executar determinadas
 * funções em uma ordem expecifica. Por exemplo, não temos como prever o tempo
 * de resposta de um servidor, portanto, são grandes as possibilidades de um
 * determinado dado chamado por uma função, chegar antes do esperado, fazendo
 * com que funções sejam executadas fora de ordem.
 * Para evitar esse tipo de problema, utilizamos o 'callback', que nos possibilita
 * ordenar a ordem em que as funções serão executadas.
 */
function rng(min = 100, max = 500) { // Gerador de número aleatório
    const rng = Math.random() * max + min;
    return Math.round(rng);
}

/**
 * As funções estão sendo executadas com um timeout determinado por
 * um valor aleatório gerado pela função 'rng()', com isso simulamos
 * um tempo de resposta aleatório que poderia ocorrer em um servidor.
 */
function f1(callback) { // Função 1
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rng());
}
function f2(callback) { // Função 2
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rng());
}
function f3(callback) { // Função 3
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rng());
}

// Aqui, criamos funções de callback para serem executadas em ordem.
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}
function f2Callback() {
    f3(f3Callback);
}
function f3Callback() {
    console.log('Hello world!');
}
