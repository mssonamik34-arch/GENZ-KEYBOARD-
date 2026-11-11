const typeBox = document.getElementById('typeBox');
const keys = document.querySelectorAll('.key');
const words = document.querySelectorAll('.suggestion-bar .word');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const val = key.getAttribute('data-key');
        
        if (val === 'BACK') {
            typeBox.value = typeBox.value.slice(0, -1);
        } else if (val === 'SPACE') {
            typeBox.value += ' ';
        } else if (val === 'ENTER') {
            typeBox.value += '\n';
        } else if (val === 'SHIFT' || val === '123' || val === 'EMOJI') {
            // অপশনাল বাটন
        } else {
            typeBox.value += val;
        }
    });
});

words.forEach(word => {
    word.addEventListener('click', () => {
        typeBox.value += (typeBox.value && !typeBox.value.endsWith(' ') ? ' ' : '') + word.textContent + ' ';
    });
});
