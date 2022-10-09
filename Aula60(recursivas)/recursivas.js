// Funções recursivas
/**
 * Basicamente, funções recursivas, são quando as funções chamam
 * a elas mesmas. Funcionam como um laço for ou while, porém,
 * ela é uma função e não um comando de repetição.
 */
function recursive(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursive(max);
}

recursive(0);
