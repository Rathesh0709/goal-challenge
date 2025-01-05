const players = [
    { "name": "Lionel Messi", "goals": 874, "photo": "images/messi.jpg" },
    { "name": "Cristiano Ronaldo", "goals": 911, "photo": "images/ronaldo.jpg" },
    { "name": "Neymar Jr", "goals": 403, "photo": "images/neymar.jpg" },
    { "name": "Kylian Mbappé", "goals": 228, "photo": "images/mbappe.jpg" },
    { "name": "Robert Lewandowski", "goals": 611, "photo": "images/lewa.jpg" },
    { "name": "Mohamed Salah", "goals": 300, "photo": "images/salah.jpg" },
    { "name": "Erling Haaland", "goals": 248, "photo": "images/haaland.jpg" },
    { "name": "Harry Kane", "goals": 296, "photo": "images/kane.jpg" },
    { "name": "Zlatan Ibrahimović", "goals": 570, "photo": "images/zlatan.jpg" },
    { "name": "Karim Benzema", "goals": 421, "photo": "images/benzema.jpg" },
    { "name": "Luis Suárez", "goals": 498, "photo": "images/suarez.jpg" },
    { "name": "Sergio Agüero", "goals": 384, "photo": "images/aguero.jpg" },
    { "name": "Eden Hazard", "goals": 178, "photo": "images/hazard.jpg" },
    { "name": "Gareth Bale", "goals": 180, "photo": "images/bale.jpg" },
    { "name": "Ronaldinho", "goals": 229, "photo": "images/ronaldinho.jpg" },
    { "name": "Diego Maradona", "goals": 350, "photo": "images/maradona.jpg" },
    { "name": "Pele", "goals": 767, "photo": "images/pele.jpg" },
    { "name": "Michel Platini", "goals": 224, "photo": "images/platini.jpg" },
    { "name": "Franz Beckenbauer", "goals": 109, "photo": "images/beckanbauer.jpg" },
    { "name": "Johan Cruyff", "goals": 327, "photo": "images/cruyff.jpg" },
    { "name": "David Beckham", "goals": 115, "photo": "images/beckham.jpg" },
    { "name": "Gianluigi Buffon", "goals": 0, "photo": "images/buffon.jpg" },
    { "name": "Thierry Henry", "goals": 360, "photo": "images/henry.jpg" },
    { "name": "Wayne Rooney", "goals": 313, "photo": "images/rooney.jpg" },
    { "name": "Ryan Giggs", "goals": 168, "photo": "images/giggs.jpg" },
    { "name": "Roberto Carlos", "goals": 133, "photo": "images/roberto.jpg" },
    { "name": "Paolo Maldini", "goals": 40, "photo": "images/maldini.jpg" },
    { "name": "Giuseppe Meazza", "goals": 336, "photo": "images/meazza.jpg" },
    { "name": "Francesco Totti", "goals": 307, "photo": "images/totti.jpg" },
    { "name": "Andrea Pirlo", "goals": 90, "photo": "images/pirlo.jpg" },
    { "name": "Xavi Hernández", "goals": 85, "photo": "images/xavi.jpg" },
    { "name": "Luis Figo", "goals": 127, "photo": "images/figo.jpg" },
    { "name": "Ronaldo Nazário", "goals": 414, "photo": "images/r9.jpg" },
    { "name": "Kaká", "goals": 180, "photo": "images/kaka.jpg" },
    { "name": "Alfredo Di Stefano", "goals": 405, "photo": "images/di stefano.jpg" },
    { "name": "Bobby Charlton", "goals": 249, "photo": "images/bobby.jpg" },
    { "name": "George Best", "goals": 179, "photo": "images/best.jpg" },
    { "name": "Marco van Basten", "goals": 272, "photo": "images/van basten.jpg" },
    { "name": "Robinho", "goals": 238, "photo": "images/robinho.jpg" },
    { "name": "Sergio Ramos", "goals": 133, "photo": "images/ramos.jpg" },
    { "name": "Virgil van Dijk", "goals": 50, "photo": "images/van dijk.jpg" },
    { "name": "Paulo Dybala", "goals": 151, "photo": "images/dybala.jpg" },
    { "name": "Raheem Sterling", "goals": 182, "photo": "images/sterling.jpg" },
    { "name": "Phil Foden", "goals": 78, "photo": "images/foden.jpg" },
    { "name": "Jack Grealish", "goals": 29, "photo": "images/grealish.jpg" },
    { "name": "Son Heung-min", "goals": 196, "photo": "images/son.jpg" },
    { "name": "Frank Lampard", "goals": 273, "photo": "images/lampard.jpg" },
    { "name": "Steven Gerrard", "goals": 185, "photo": "images/gerrard.jpg" },
    { "name": "John Terry", "goals": 41, "photo": "images/terry.jpg" },
    { "name": "Carlos Tévez", "goals": 246, "photo": "images/tevez.jpg" },
    { "name": "N'Golo Kanté", "goals": 35, "photo": "images/kante.jpg" },
    { "name": "Sadio Mané", "goals": 225, "photo": "images/mane.jpg" },
    { "name": "Luka Modrić", "goals": 133, "photo": "images/modric.jpg" },
    { "name": "Arturo Vidal", "goals": 108, "photo": "images/vidal.jpg" },
    { "name": "Cesc Fàbregas", "goals": 114, "photo": "images/cesc.jpg" },
    { "name": "Pierre-Emerick Aubameyang", "goals": 252, "photo": "images/aubmayeng.jpg" },
    { "name": "Romelu Lakaka", "goals": 335, "photo": "images/lukaku.jpg" },
        { "name": "David Villa", "goals": 325, "photo": "images/villa.jpg" },
        { "name": "Fernando Redondo", "goals": 57, "photo": "images/redendo.jpg" },
        { "name": "Kevin De Bruyne", "goals": 135, "photo": "images/debruyne.jpg" },
        { "name": "Gonzalo Higuaín", "goals": 333, "photo": "images/higuain.jpg" },
        { "name": "James Rodríguez", "goals": 169, "photo": "images/james.jpg" },
        { "name": "Douglas Costa", "goals": 76, "photo": "images/costa.jpg" },
        { "name": "Juan Mata", "goals": 150, "photo": "images/mata.jpg" },
        { "name": "Juan Román Riquelme", "goals": 178, "photo": "images/riquelme.jpg" },
        { "name": "Carlos Valderrama", "goals": 44, "photo": "images/valderemma.jpg" },
        { "name": "Claudio Pizarro", "goals": 335, "photo": "images/pizzario.jpg" },
        { "name": "Bastian Schweinsteiger", "goals": 71, "photo": "images/bastian.jpg" },
        { "name": "Edinson Cavani", "goals": 379, "photo": "images/cavani.jpg" },
        { "name": "Diego Forlán", "goals": 227, "photo": "images/forlan.jpg" },
        { "name": "Marco Reus", "goals": 167, "photo": "images/reus.jpg" },
        { "name": "Santi Cazorla", "goals": 106, "photo": "images/carzola.jpg" },
        { "name": "Gary Lineker", "goals": 261, "photo": "images/lineker.jpg" },
        { "name": "Javier Hernández", "goals": 196, "photo": "images/javier.jpg" },
        { "name": "Christian Vieri", "goals": 210, "photo": "images/vieri.jpg" },
        { "name": "Fernando Torres", "goals": 259, "photo": "images/torres.jpg" },
        { "name": "Rui Costa", "goals": 133, "photo": "images/rui.jpg" },
        { "name": "Michael Owen", "goals": 222, "photo": "images/owen.jpg" }
];

let totalGoals = 0;
let playersAdded = 0;
let targetGoals = 0;
let buttonClicks = {
career: 0,
double: 0,
triple: 0,
quad: 0,
x5: 0,
x7: 0,
x10: 0
};

function startChallenge(goalTarget) {
document.getElementById("home").style.display = "none";
document.getElementById("challenge").style.display = "block";

targetGoals = goalTarget;
totalGoals = 0;
playersAdded = 0;
resetButtonClicks();  // Reset button clicks at the start of a new challenge
updateStats();
clearResult();
document.getElementById("total-goals").style.display = "none";  // Hide total goals before challenge ends
document.getElementById("play-again-button").style.display = "none";
nextPlayer();
}

function updateStats() {
document.getElementById("players-added").textContent = playersAdded;
}

function clearResult() {
document.getElementById("result").textContent = "";
}

function displayResult(message, isSuccess,buttonContainer) {
const result = document.getElementById("result");
result.textContent = message;
result.style.color = isSuccess ? "green" : "red";
document.getElementById("play-again-button").style.display = "block";
document.getElementById("total-goals").style.display = "block";  // Show total goals after challenge ends
document.getElementById("total-goals").textContent = totalGoals;
  // Display total goals after challenge ends
}

function nextPlayer() {
const randomPlayer = players[Math.floor(Math.random() * players.length)];
document.getElementById("player-name").textContent = `${randomPlayer.name}`;
document.getElementById("player-photo").src = randomPlayer.photo;
generateButtons(randomPlayer.goals,randomPlayer.name);
}

function generateButtons(playerGoals, playerName) {
    const buttonContainer = document.getElementById("button-container");

    if (!buttonContainer.hasChildNodes()) {
        // Clear previous buttons only on the first call
        buttonContainer.innerHTML = ""; 

        let multipliers;

        if (targetGoals === 10000) {
            multipliers = [
                { text: "Career", multiplier: 1, count: 3 },
                { text: "Double", multiplier: 2, count: 2 },
                { text: "Triple", multiplier: 3, count: 2 },
                { text: "Quad", multiplier: 4, count: 2 },
                { text: "x5", multiplier: 5, count: 1 },
            ];
        } else if (targetGoals === 25000) {
            multipliers = [
                { text: "Career", multiplier: 1, count: 3 },
                { text: "Double", multiplier: 2, count: 1 },
                { text: "Triple", multiplier: 3, count: 1 },
                { text: "Quad", multiplier: 4, count: 1 },
                { text: "x5", multiplier: 5, count: 1 },
                { text: "x7", multiplier: 7, count: 1 },
                { text: "x10", multiplier: 10, count: 2 },
            ];
        }

        multipliers.forEach((multiplierData) => {
            for (let i = 0; i < multiplierData.count; i++) {
                const button = document.createElement("button");
                button.dataset.originalText = multiplierData.text; // Save the original text
                button.textContent = multiplierData.text; // Set initial button text
                // Pass multiplierData and playerName to the button's onclick handler
                button.onclick = () => handleButtonClick(button, playerGoals, multiplierData,playerName,buttonContainer);
                buttonContainer.appendChild(button);
            }
        });
    } else {
        // Update the behavior of buttons for the next player
        const buttons = buttonContainer.querySelectorAll("button");
        buttons.forEach((button) => {
            button.onclick = () => {
                const multiplierText = button.dataset.originalText;
                const multiplierData = getMultiplierDataByText(multiplierText);
                // Pass multiplierData and playerName to the button's onclick handler
                handleButtonClick(button, playerGoals, multiplierData,playerName,buttonContainer);
            };
        });
    }
}

function getMultiplierDataByText(text) {
    // Look for the multiplier data based on the button text
    const multipliers = [
        { text: "Career", multiplier: 1 },
        { text: "Double", multiplier: 2 },
        { text: "Triple", multiplier: 3 },
        { text: "Quad", multiplier: 4 },
        { text: "x5", multiplier: 5 },
        { text: "x7", multiplier: 7 },
        { text: "x10", multiplier: 10 },
    ];
    
    return multipliers.find((m) => m.text === text);
}

function handleButtonClick(button, playerGoals, multiplierData,playerName,buttonContainer) {
    // Update button text with the current player's name and disable it
    button.textContent = `${playerName} (${multiplierData.text})`;
    button.disabled = true; // Disable button
    button.style.opacity = "0.5"; // Visual feedback for disabled button

    // Add goals and handle progression
    addGoals(playerGoals * multiplierData.multiplier, multiplierData.text, playerName,buttonContainer);
}

function addGoals(goalsToAdd, multiplier, playerName,buttonContainer) {
    if (buttonClicks[multiplier] >= getMaxClicks(multiplier)) {
        return; // Prevent button from being clicked more than allowed
    }

    // Increment the click count for the specific button multiplier
    buttonClicks[multiplier]++;

    // Update total goals and player stats
    totalGoals += goalsToAdd;
    playersAdded++;
    updateStats();

    // Check if the goal target has been reached
    if (totalGoals >= targetGoals) {
        displayResult("Challenge Completed! Congratulations!", true,buttonContainer);
        return;
    }

    // Delay before moving to the next player
    setTimeout(() => {
        // Move to the next player if less than 9 players added
        if (playersAdded < 10) {
            nextPlayer();
        } else {
            const isSuccess = totalGoals >= targetGoals;
            displayResult(
                isSuccess ? "Challenge Completed! Congratulations!" : "Challenge Failed. Try Again!",
                isSuccess,
                buttonContainer
            );
        }
    }, 500); // Add a short delay (e.g., 500ms) to allow visual updates
}



function getMaxClicks(multiplier) {
switch (multiplier) {
    case "Career": return 3;  // 3 career buttons in total
    case "Double": return targetGoals === 10000 ? 2 : 1;  // 2 for 5k, 1 for 15k
    case "Triple": return targetGoals === 10000 ? 2 : 1;  // 2 for 5k, 1 for 15k
    case "Quad": return targetGoals == 10000 ? 2 : 1;    // 1 quad button in total
    case "x5": return 1;      // 1 x5 button in total
    case "x7": return 1;      // 1 x7 button in total
    case "x10": return targetGoals==10000 ? 1 : 2;     // 1 x10 button in total
    default: return 0;
}
}

function resetButtonClicks() {
buttonClicks = {
    Career: 0,
    Double: 0,
    Triple: 0,
    Quad: 0,
    x5: 0,
    x7: 0,
    x10: 0
};
}

function refreshChallenge(buttonContainer) {
document.getElementById("home").style.display = "block";
document.getElementById("challenge").style.display = "none";
totalGoals = 0;
playersAdded = 0;
updateStats();
clearResult();
buttonContainer.innerHTML = "";
}