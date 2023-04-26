const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');
const wish = document.querySelector('.wish')

const jsConfetti = new JSConfetti();

button.addEventListener('click',() =>{
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    })
    
})