// Funções fábrica (Factory functions)

function createPerson(name, surname, weight, height) {
    return {
        name, 
        surname,
        weight,
        height,
        get fullName() { // Getter
            return `${this.name} ${this.surname}`; 
        },
        set fullName(fullName) { // Setter
            fullName = fullName.split(' ');
            this.name = fullName.shift();
            this.surname = fullName.join(' ');
        },
        talk: function(topic) { return `${name} está ${topic}`; },
        imc() {
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2);
        }
    };
}

// ===========================================================
// const p1 = createPerson('Kayne', 'Ferreira', 90, 1.8);
// console.log(p1);
// console.log(p1.fullName());
// console.log(p1.talk('falando sobre JS'));
// console.log(p1.imc());

// ===========================================================
const p2 = createPerson();
p2.fullName = 'Kayne Ferreira';
console.log(p2.name);
console.log(p2.surname);
console.log(p2.fullName);
