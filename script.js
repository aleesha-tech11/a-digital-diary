const emojiButtons = document.querySelectorAll('.the-emoji-butn');
const writingCorner = document.querySelector('.the-writing-corner');
const enterButton = document.querySelector('#the-entering-butn');
const entriesContainer = document.querySelector('.the-list-entries');
let editingIndex = -1;
emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
        const emoji = button.textContent;
        writingCorner.value += emoji;
        writingCorner.focus();
    });
});
let savedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
renderEntries();
enterButton.addEventListener('click', () => {
    const entryText = writingCorner.value.trim();
    if (entryText !== "") {
        if (editingIndex === -1) {
            savedEntries.unshift(entryText);
        } else {
            savedEntries[editingIndex] = entryText;
            editingIndex = -1; 
            enterButton.textContent = "Enter";
        }
        localStorage.setItem('journalEntries', JSON.stringify(savedEntries));
        renderEntries();
        writingCorner.value = "";
        writingCorner.focus();
    }
});
function renderEntries() {
    entriesContainer.innerHTML = "";
    savedEntries.forEach((text, index) => {
        const entryCard = document.createElement('div');
        entryCard.classList.add('journal-entry-card');
        entryCard.textContent = text;
        entryCard.addEventListener('click', () => {
            writingCorner.value = text;
            editingIndex = index;
            enterButton.textContent = "Update Entry 🌸";
            writingCorner.focus();
        });
        entriesContainer.appendChild(entryCard);
    });
}