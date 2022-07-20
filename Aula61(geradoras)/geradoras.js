// Funções geradoras
/**
 * Funções geradoras, são capazes de entregar valores diferentes
 * sempre que forem executadas. Diferente das funções comuns, que
 * entregam sempre uma única saída, as geradoras podem entregar 
 * várias saídas dependendo do que a função foi programada para
 * fazer.
 */
function* generator() {
    // Código...
    yield 'Valor 1';
    // Código...
    yield 'Valor 2';
    // Código...
    yield 'Valor 3';
}

const g1 = generator();
console.log(g1.next().value); // A função '.next()' chama o próximo valor...
console.log(g1.next().value); 
console.log(g1.next().value); // ...até que a função termine de enviar o ultimo.
console.log(g1.next()); // Aqui vemos na segunda chave, que a função entregou todos os valores.

// =======================================================
/**
 * Essa simples função, mostra que ela pode devolver um valor diferente 
 * sempre que solicitado. Nesse caso, temos um loop infinito, que, quando chamada
 * a função, sempre vai devolver um valor diferente, mesmo quando chamada varias
 * vezes da mesma forma.
 */
function* counter() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const g2 = counter();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
// Aqui vemos que a função geradora é capaz de devolver valores de forma infinita.

// =======================================================
function* generator2() {
    yield 0;
    yield 1;
    yield 2;
}

// Também podemos delegar para que uma geradora faça parte de uma trabalho
function* generator3() {
    yield* generator2(); // Aqui a geradora 3 delega parte do serviço para a geradora 2.
    yield 3;
    // yield 4;
    return 4; // 'return'
    yield 5; // Unreachable code when return.
}
/**
 * O comando 'return' nesse caso, faz com que a função geradora termine
 * assim que o comando é chamado, interrompendo assim o restante da função.
*/

const g3 = generator3();
console.log('');
console.log('Skip...');
for (let v of g3) {
    console.log(v);
}
