// script.js
function appendToResult(value) {
    const resultField = document.getElementById('result');
    
    if (value === 'c') {
        resultField.value = '';
    } else if (value === '=') {
        try {
            resultField.value = eval(resultField.value);
        } catch (err) {
            resultField.value = 'Error';
        }
    } else {
        resultField.value += value;
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const resultField = document.getElementById('result');
    resultField.focus();
    
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        
        if (/[0-9+\-*/.=]/.test(key)) {
            appendToResult(key);
            event.preventDefault();
        } 
        else if (key === 'Enter') {
            appendToResult('=');
            event.preventDefault();
        } 
        else if (key === 'Escape') {
            clearResult();
            event.preventDefault();
        } 
        else if (key === 'Backspace') {
            resultField.value = resultField.value.slice(0, -1);
            event.preventDefault();
        }
    });
});