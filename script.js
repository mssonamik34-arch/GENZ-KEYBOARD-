const typeBox = document.getElementById('typeBox');
const keys = document.querySelectorAll('.key');
const suggestions = document.querySelectorAll('#suggestionBar span');

// কিবোর্ডের বাটনে ক্লিক করলে টাইপ হবে
keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.textContent;
        if (keyValue === '⌫') {
            typeBox.value = typeBox.value.slice(0, -1);
        } else if (keyValue === '⇧') {
            // Shift ফিচার পরবর্তীতে যোগ করা যাবে
        } else {
            typeBox.value += keyValue;
        }
    });
});

// স্লাং সাজেশনে ক্লিক করলে সরাসরি টাইপ বক্সে যুক্ত হবে
suggestions.forEach(word => {
    word.addEventListener('click', () => {
        typeBox.value += (typeBox.value ? ' ' : '') + word.textContent + ' ';
    });
});
