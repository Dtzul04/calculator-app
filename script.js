document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = button.textContent;

            
            if (buttonText !== 'C' && buttonText !== '=' && buttonText !== '.') {
                
                const lastChar = display.value[display.value.length - 1];
                if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(buttonText)) {
                    return; 
                }
                display.value += buttonText;
            }

            if (buttonText === '.') {
                if (!display.value.includes('.') || display.value[display.value.length - 1] === ' ') {
                    display.value += buttonText;
                }
            }

            if (buttonText === 'C') {
                display.value = '';
            }

            if (buttonText === '=') {
                try {
                    
                    const expression = display.value.replace(/\s+/g, ''); 
                    if (/[^\d+\-*/.()]/.test(expression)) {
                        display.value = 'Error'; 
                    } else {
                        display.value = eval(expression); 
                    }
                } catch (error) {
                    display.value = 'Error'; 
                }
            }
        });
    });
});

