// Calculadora

function Calculadora() {
    this.display = document.querySelector('.display');

    this.captClick = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-cls')) this.clearScreen();
            if (el.classList.contains('btn-del')) this.deleteLast();
            if (el.classList.contains('btn-res')) this.displayResults();
        });
    };

    this.start = () => {
        this.captClick(); 
        this.captEnter();
    };

    this.captEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.key === 'Enter', 'NumpadEnter') this.displayResults();
        }
    )};

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clearScreen = () => this.display.value = '';

    this.deleteLast = () => this.display.value = this.display.value.slice(0, -1);

    this.displayResults = () => {
        try {
            const res = eval(this.display.value);
            if (!res) { 
                alert('Conta inválida.'); 
                return; 
            }
            this.display.value = res;
        } catch (err) {
            alert('Conta inválida.');
            return;
        }
    };
}

const calc = new Calculadora();
calc.start();
