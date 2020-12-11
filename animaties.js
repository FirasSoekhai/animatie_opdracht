// klik op animeer-knop laat vlakje animeren door class toe te voegen of weg te nemen
document.querySelector('.animeer-knop').addEventListener('click', (e) => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts')
})