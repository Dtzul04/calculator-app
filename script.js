
// Named function for addition
function add(a, b) {
    return a + b
}

// Anonymous function for subtraction
const subtract = function(a, b) {
    return a - b;
};

// Arrow function for multiplication
const multiply = (a, b) => {
    return a * b;
};

// Named function for division
function divide(a, b) {
    if (Number(b) === 0) {
        return "Error";
    }
    return a / b
}

// Calculator object with methods
const calculator = {
    equation: '',
    
    add: function(a, b)  {
        return a + b;
    },
    subtract: function(a, b)  {
        return a - b;
    },
    multiply: (a, b) =>  a * b,
    divide: function(a, b) {
        if (b === 0) {
            return "Error";
        }
        return a / b;
    },

    updateEquation: function(value) {
        this.equation += value;
        document.getElementById('equation').value = this.equation;
    },
    clearEquation: function() {
        this.equation = "";
        document.getElementById('equation').value = this.equation;
    },
    calculate: function() {
        const equation = this.equation.split(' ');
        const a = parseFloat(equation[0]);
        const operation = equation[1];
        const b = parseFloat(equation[2]);
        let result;

        switch (operation) {
            case '+':
                result = this.add(a, b);
                break;
            case '-':
                result = this.subtract(a, b);
                break;
            case '*':
                result = this.multiply(a, b);
                break;
            case '/':
                result = this.divide(a, b);
                break;
            default:
                result = 'Invalid Operation';
        }

        this.updateEquation(` = ${result}`);
        document.getElementById('equation').value = this.equation;
    }
};

// Event Listeners
document.querySelectorAll('button[name="input"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        calculator.updateEquation(value);
    });
});

document.querySelectorAll('button[name="operation"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = " " + event.target.value + " ";
        calculator.updateEquation(value);
    });
});

document.querySelector('button[name="calculate"]').addEventListener('click', () => {
    calculator.calculate();
});

document.querySelector('button[name="clear"]').addEventListener('click', () => {
    calculator.clearEquation();
});
