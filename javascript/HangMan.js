let letters = "abcdefghijklmnopqrstuvwxyz",
    arrLetters = Array.from(letters);

let lettersContainer = document.querySelector(".letters");



arrLetters.forEach((letter) => {
    let allSpanLetters = document.createElement("span"),
        textSpanLetters = document.createTextNode(letter);

        allSpanLetters.className = "letter-box";

    allSpanLetters.appendChild(textSpanLetters);
    lettersContainer.appendChild(allSpanLetters);
})

// const words = {
//     programing: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
//     movies: ["prestige", "incepthin", "parasite", "interstellar", "whiplash", "memento", "coco", "up"],
//     people: ["albert einstein", "hitchcock", "alexander", "celopatra", "mahatma ghandi"],
//     countries: ["syria", "palestine", "yamen", "egypy", "bahrain", "qatar"]
// }

const words = {
    "Football Player": ["mohamed salah", "cristiano ronaldo", "messi", "benzema", "lewandowski", "ozil", "abo treka"],
    "Programming Languages": ["html", "css", "javascript", "php", "mysql", "cpp", "python"],
    "Country": ["egypt", "qatar", "france", "saudi arabia", "germany", "usa", "palestine"],
    "Movies": ["avengers", "interstellar", "up", "avatar", "the godfather", "baby driver", "kingsman"]
}

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];


let allThellKeys = randomPropValue.length;
let randomThellNumber = Math.floor(Math.random() * allThellKeys);
let endVal = randomPropValue[randomThellNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;


let lettersGussContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(endVal);

lettersAndSpace.forEach((letter) => {
    let emptySpan = document.createElement("span");

    if ( letter === " " ){
        emptySpan.className = "with-space";
    }
    lettersGussContainer.appendChild(emptySpan)
});
////////////
let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttemps = 0;

let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
    let theStatus = false;
    if(e.target.className === "letter-box"){
        e.target.classList.add("clicked");

        let theClickedLetter = e.target.innerHTML.toLowerCase();

        lettersAndSpace.forEach((wordLetter, wordIndex) => {

            if ( theClickedLetter == wordLetter ) {

                theStatus = true;

                guessSpans.forEach((span, spanIndex) => {
                    if (wordIndex === spanIndex) {
                        span.innerHTML = theClickedLetter;
                    }
                })
            }
        })

        if(theStatus !== true){
            wrongAttemps++;
            theDraw.classList.add(`wrong-${wrongAttemps}`)
            if(wrongAttemps === 8){
                endGame();
                lettersContainer.classList.add("finished");
            }
        }

    }
})
function endGame(){
    let div = document.createElement("div"),
        divText = document.createTextNode(`Game Over, The Word Is ${endVal}`);

    div.appendChild(divText);
    div.className = "popup";

    document.body.appendChild(div);

}




