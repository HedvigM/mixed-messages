function getMessage() {
    randomNumber = Math.floor(Math.random() * 14);
    const message = ["Vad säger en Göteborgare till ett Star Wars fan? - JeeDaaaj", 
    "Varför är det ingen snö på gatorna i Glasgow på vintern? - De e la klart. 600 000 skottar.",
    "Vad sa den ena kannibalen till den andra? - E du go eller?",
    "Gick det bra med rymdresan? – Nej, den blev uppskjuten.",
    "Hur vet man att en dykarkurs är inställd? - Instruktören dyker inte upp!",
    "Hur många bor det i Stockholm? – En dryg miljon!", 
    "Vilket djur är jordens största? – Eeeen-orm!",
    "En göteborgare frågade Jesus, vad gör du i påsk? – Vet inte, jag har inget spikat.", 
    "Hur många göteborgare bor det i Kanada? – Åttava?", 
    "Hur tar man med sig en hund genom tullen? – Tax-Free såklart!",
    "Vilken är världens mest musikaliska fågel? – Truten, för det är en måsart.",
    "Vad anser du om läget i Angola? – De Ango-la-inte mig!",
    "I vilken stad tar bilköerna aldrig slut? – Konstantinopel.",
    "Vad är tandläkarnas favoritsport? - Fluorball.", 
    "Ser du mycket på Ishockey? – Nej, bara periodvis."] 
    return message[randomNumber];
}




const knapp = document.getElementById("getMessage");
const jokeDiv = document.getElementById('joke')

knapp.addEventListener("click", function () {
    console.log(jokeDiv)
    const joke = getMessage();
    console.log(joke);
    jokeDiv.innerHTML = joke
});



