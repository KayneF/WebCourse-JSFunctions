// Funções construtoras (constructor)

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

const p1 = new Person('Kayne', 'Ferreira');
const p2 = new Person('Danielle', 'Sanches');

console.log(p1, p2);
