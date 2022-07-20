// Calculadora

function createCalc() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clickBtn() {
            document.addEventListener('click', (e) => {
                const element = e.target;

                if (element.classList.contains('btn-num')) {
                    this.btnDisplay(element.innerText);
                }
                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (element.classList.contains('btn-del')) {
                    this.deleteOne();
                }
                if (element.classList.contains('btn-eq')) {
                    this.equals();
                }
            });
        },

        returnKey() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.equals();
                }
            });
        },

        start() {
            this.clickBtn();
            this.returnKey();
        },

        btnDisplay(value) {
            this.display.value += value;
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        equals() {
            let res = this.display.value;
            try {
                res = eval(res);
                if (!res) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = res;
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

    };
}

const calc = createCalc();
calc.start();
