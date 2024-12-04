function calculateResults() {
    // A kérdésekhez tartozó állatok és pontok listája
    const animals = [
        { name: "Oscar", points: 0 },
        { name: "Csoki", points: 0 },
        { name: "Max", points: 0 },
        { name: "Gyömbér", points: 0 },
        { name: "Rosie", points: 0 },
        { name: "Kókusz", points: 0 },
        { name: "Zizi", points: 0 },
        { name: "Dojli", points: 0 },
        { name: "Fifi", points: 0 },
        { name: "Cirmos", points: 0 },
        { name: "Sztracsatella", points: 0 },
        { name: "Kiko", points: 0 }
    ];

    // Az osszes kérdés (id tobbszor szerepel)
    const questions = document.getElementsByClassName('question');

    // Minden kerdesen vegigmegyunk
    for (let i = 0; i < questions.length; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i + 1}"]:checked`);
        if (!selectedAnswer) {
            alert(`Kérlek válaszolj az összes kérdésre!`);
            return;
        }

        const answerValue = parseInt(selectedAnswer.value); // A valasz ertekenek lekerese

        // A pontok hozzaadasa a valasz alapjan
        if (i === 0) {  // kerdes 1
            if (answerValue === 1) { //aktiv
                animals[0].points += 3; // Oscar
                animals[1].points += 2; // Csoki
                animals[2].points += 3; // Max
            } else if (answerValue === 2) { //mersekelten aktiv
                animals[1].points += 3; // Csoki
                animals[2].points += 2; // Max
                animals[3].points += 1; // Gyömbér
            } else if (answerValue === 3) { //nyugodt
                animals[3].points += 3; // Gyömbér
                animals[4].points += 2; // Rosie
                animals[5].points += 1; // Kókusz
            }
        } else if (i === 1) {
            if (answerValue === 1) {
                animals[0].points += 3; // Oscar
                animals[2].points += 2; // Max
                animals[3].points += 1; // Gyömbér
            } else if (answerValue === 2) {
                animals[1].points += 3; // Csoki
                animals[4].points += 2; // Rosie
                animals[5].points += 1; // Kókusz
            } else if (answerValue === 3) {
                animals[6].points += 3; // Zizi
                animals[7].points += 2; // Dojli
                animals[8].points += 1; // Fifi
            }
        } else if (i === 2) {
            if (answerValue === 1) {
                animals[0].points += 3; // Oscar
                animals[1].points += 2; // Csoki
                animals[2].points += 3; // Max
            } else if (answerValue === 2) {
                animals[4].points += 3; // Rosie
                animals[5].points += 2; // Kókusz
                animals[6].points += 1; // Zizi
            } else if (answerValue === 3) {
                animals[7].points += 3; // Dojli
                animals[8].points += 2; // Fifi
                animals[9].points += 1; // Cirmos
            }
        } else if (i === 3) {
            if (answerValue === 1) {
                animals[0].points += 3; // Oscar
                animals[1].points += 2; // Csoki
                animals[3].points += 3; // Gyömbér
            } else if (answerValue === 2) {
                animals[2].points += 3; // Max
                animals[5].points += 2; // Kókusz
                animals[6].points += 1; // Zizi
            } else if (answerValue === 3) {
                animals[4].points += 3; // Rosie
                animals[7].points += 2; // Dojli
                animals[8].points += 1; // Fifi
            }
        } else if (i === 4) {
            if (answerValue === 1) {
                animals[0].points += 3; // Oscar
                animals[1].points += 2; // Csoki
                animals[3].points += 1; // Gyömbér
            } else if (answerValue === 2) {
                animals[2].points += 3; // Max
                animals[4].points += 2; // Rosie
                animals[5].points += 1; // Kókusz
            } else if (answerValue === 3) {
                animals[6].points += 3; // Zizi
                animals[7].points += 2; // Dojli
                animals[8].points += 1; // Fifi
            }
        } else if (i === 5) {
            if (answerValue === 1) {
                animals[0].points += 3; // Oscar
                animals[2].points += 2; // Max
                animals[4].points += 1; // Rosie
            } else if (answerValue === 2) {
                animals[1].points += 3; // Csoki
                animals[3].points += 2; // Gyömbér
                animals[5].points += 1; // Kókusz
            } else if (answerValue === 3) {
                animals[6].points += 3; // Zizi
                animals[7].points += 2; // Dojli
                animals[8].points += 1; // Fifi
            }
        } else if (i === 6) {
            if (answerValue === 1) {
                animals[0].points += 3; // Oscar
                animals[1].points += 2; // Csoki
                animals[2].points += 3; // Max
            } else if (answerValue === 2) {
                animals[4].points += 3; // Rosie
                animals[5].points += 2; // Kókusz
                animals[6].points += 1; // Zizi
            } else if (answerValue === 3) {
                animals[3].points += 3; // Gyömbér
                animals[7].points += 2; // Dojli
                animals[8].points += 1; // Fifi
            }
        } else if (i === 7) {
            if (answerValue === 1) {
                animals[0].points += 3; // Oscar
                animals[1].points += 2; // Csoki
                animals[4].points += 1; // Rosie
            } else if (answerValue === 2) {
                animals[2].points += 3; // Max
                animals[3].points += 2; // Gyömbér
                animals[5].points += 1; // Kókusz
            } else if (answerValue === 3) {
                animals[6].points += 3; // Zizi
                animals[7].points += 2; // Dojli
                animals[8].points += 1; // Fifi
            }
        } else if (i === 8) {
            if (answerValue === 1) {
                animals[0].points += 3; // Oscar
                animals[1].points += 2; // Csoki
                animals[2].points += 1; // Max
            } else if (answerValue === 2) {
                animals[3].points += 3; // Gyömbér
                animals[4].points += 2; // Rosie
                animals[5].points += 1; // Kókusz
            } else if (answerValue === 3) {
                animals[6].points += 3; // Zizi
                animals[7].points += 2; // Dojli
                animals[8].points += 1; // Fifi
            }
        } else if (i === 9) {
            if (answerValue === 1) {
                animals[0].points += 3; // Oscar
                animals[2].points += 2; // Max
                animals[3].points += 1; // Gyömbér
            } else if (answerValue === 2) {
                animals[1].points += 3; // Csoki
                animals[4].points += 2; // Rosie
                animals[5].points += 1; // Kókusz
            } else if (answerValue === 3) {
                animals[6].points += 3; // Zizi
                animals[7].points += 2; // Dojli
                animals[8].points += 1; // Fifi
            }
        }
    }

//legmagasabb pontszam
    let bestMatch = animals[0]; //alapertelmezett-elso allat
    for (let i = 1; i < animals.length; i++) {
        if (animals[i].points > bestMatch.points) {
            bestMatch = animals[i]; //ha egy masik allat tobb pontot kapott, ot valasztjuk
        }
    }

    //eredmeny
    const resultText = document.getElementById("resultText");
    resultText.textContent = `A te lelki társad: ${bestMatch.name}`;//kiirja
    document.getElementById("result").style.display = "block";  //megjeleniti
}
