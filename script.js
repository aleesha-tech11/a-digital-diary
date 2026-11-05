const emojiButtons = document.querySelectorAll('.the-emoji-butn');
const writingCorner = document.querySelector('.the-writing-corner');
emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
        const emoji = button.textContent;
        writingCorner.value += emoji;
        writingCorner.focus();
    });
});
const enterButton = document.querySelector('#the-entering-butn');
const entriesContainer = document.querySelector('.the-list-entries');
enterButton.addEventListener('click', () => {
    const entryText = writingCorner.value.trim();
    if (entryText !== "") {
        const entryCard = document.createElement('div');
        entryCard.classList.add('journal-entry-card');
        entryCard.textContent = entryText;
        entriesContainer.prepend(entryCard);
        writingCorner.value = "";
        writingCorner.focus();
    }
});