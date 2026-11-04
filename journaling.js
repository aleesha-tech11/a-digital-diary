document.addEventListner('DOMContentLoaded' , () => {
const textarea = document.querySelector('the-writing-corner');
const emojiButtons = document.querySelectorAll('the-emoji-butn');
emojiButtons.forEach(button => {
    button.addEventListner('click' , () => {
        const emoji = button.textContent;
        textarea.value += emoji;
    });
});
});