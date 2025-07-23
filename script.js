const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    const action = button.getAttribute('data-action');

    if (action === 'clear') {
      display.value = '';
    } else if (action === 'backspace') {
      display.value = display.value.slice(0, -1);
    } else if (action === 'equals') {
      try {
        // Evaluate expression safely
        display.value = eval(display.value) ?? '';
      } catch {
        display.value = 'Error';
      }
    } else if (value) {
      // Prevent multiple decimals in a number
      if (value === '.') {
        const parts = display.value.split(/[\+\-\*\/]/);
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes('.')) return;
      }
      display.value += value;
    }
  });
});