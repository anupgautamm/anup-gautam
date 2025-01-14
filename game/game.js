let level = 1;
let password = "";
let hints = [];
let attempts = 3;

const passwordPool = [
    { password: "Apple123", hints: ["It's a fruit.", "It keeps doctors away.", "It starts with 'A' and ends with 'e'.", "At the end, the first 3 natural numbers."] },
    { password: "Tiger77", hints: ["It's a wild animal.", "It has stripes.", "It starts with 'T'.", "At the end, double lucky numbers."] },
    { password: "Paris2023", hints: ["It's a city with a tower.", "It's known as the city of love.", "It starts with 'P'.", "It ends with 's'.", "At the end, the second odd year of the mid 20s."] },
    { password: "Pizzas", hints: ["It's a popular food.", "It has cheese and toppings.", "It starts with 'P'.", "Plural form."] },
    { password: "Eagle99", hints: ["It's a bird.", "It's known for its sharp vision.", "It starts with 'E' and ends with 'e'.", "Ends with the last number of a two-digit series."] },
    { password: "Banana21", hints: ["It's a fruit.", "Monkeys love it.", "It starts with 'B'.", "Ends with the current century's legal drinking age."] },
    { password: "Sunshine90", hints: ["It's bright and warm.", "It's a source of vitamin D.", "It starts with 'S'.", "Ends with the start of the last decade."] },
    { password: "Laptop101", hints: ["It's a device.", "Used for work and gaming.", "It starts with 'L'.", "Ends with the basic computer programming class."] },
    { password: "Ocean76", hints: ["It's vast and blue.", "Home to marine life.", "It starts with 'O'.", "Ends with a common number in nature cycles."] },
    { password: "Rose88", hints: ["It's a flower.", "It symbolizes love.", "It starts with 'R'.", "Ends with double infinity numbers."] },
    { password: "Coffee10", hints: ["It's a drink.", "It keeps you awake.", "It starts with 'C'.", "Ends with a perfect score in exams."] },
    { password: "Winter55", hints: ["It's a season.", "It's cold and snowy.", "It starts with 'W'.", "Ends with double nickels."] },
    { password: "Spring45", hints: ["It's a season.", "Flowers bloom during this time.", "It starts with 'S'.", "Ends with mid-40s."] },
    { password: "Galaxy404", hints: ["It's in space.", "It contains stars and planets.", "It starts with 'G'.", "Ends with an page not found error."] },
    { password: "Football99", hints: ["It's a sport.", "Played with a ball.", "It starts with 'F'.", "Ends with two football field yard markers."] },
    { password: "Basketball89", hints: ["It's a sport.", "Michael Jordan's favorite.", "It starts with 'B'.", "Ends with the year before the 90s."] },
    { password: "Panda22", hints: ["It's an animal.", "It's black and white.", "It starts with 'P'.", "Ends with the double age of adulthood."] },
    { password: "Rainbow34", hints: ["It has 7 colors.", "It appears after rain.", "It starts with 'R'.", "Ends with a common winning lottery number."] },
    { password: "Moon78", hints: ["It orbits Earth.", "It lights up the night sky.", "It starts with 'M'.", "Ends with an important milestone number."] },
    { password: "Island33", hints: ["It's surrounded by water.", "It's a vacation spot.", "It starts with 'I'.", "Ends with the number often repeated in myths."] },
    { password: "Dragon54", hints: ["It's mythical.", "Breathes fire.", "It starts with 'D'.", "Ends with a common engineering graduating year."] },
    { password: "Castle47", hints: ["It's a fortress.", "Associated with royalty.", "It starts with 'C'.", "Ends with the late 40s."] },
    { password: "Garden12", hints: ["It's green and flowery.", "Used for relaxation.", "It starts with 'G'.", "Ends with the first dozen numbers."] },
    { password: "Planet44", hints: ["It's in space.", "Earth is one of them.", "It starts with 'P'.", "Ends with double digits before mid-40s."] },
    { password: "Bookstore21", hints: ["It's a place for books.", "Great for reading enthusiasts.", "It starts with 'B'.", "Ends with the legal adult age in some countries."] },
    { password: "Chocolates5", hints: ["It's sweet.", "Kids love it.", "It starts with 'C'.", "Ends with the number of senses."] },
    { password: "Volcano14", hints: ["It's a mountain.", "It erupts lava.", "It starts with 'V'.", "Ends with a teenage milestone."] },
    { password: "Diamond13", hints: ["It's a gemstone.", "It's very valuable.", "It starts with 'D'.", "Ends with a lucky number for some."] },
    { password: "Orange89", hints: ["It's a fruit.", "Rich in vitamin C.", "It starts with 'O'.", "Ends with the end of the 80s."] },
    { password: "Pineapple42", hints: ["It's a sweet fruit.", "It has a spiky exterior.", "It starts with 'P'.", "Ends with the answer to life and everything."] },
    { password: "Lion77", hints: ["It's a wild animal.", "Known as the king of the jungle.", "It starts with 'L'.", "Ends with a lucky number."] },
    { password: "Giraffe9", hints: ["It's a tall animal.", "Known for its long neck.", "It starts with 'G'.", "Ends with a last single digit."] },
    { password: "Chocolate88", hints: ["It's a sweet treat.", "Loved by all ages.", "It starts with 'C'.", "Ends with double infinity numbers."] },
    { password: "University2025", hints: ["It's an educational institution.", "It starts with 'U'.", "It ends with a future year.", "Ends with a graduation year."] },
    { password: "Turtle45", hints: ["It's a slow-moving animal.", "It lives both in water and on land.", "It starts with 'T'.", "Ends with the number representing 5." ] },
    { password: "Rocket56", hints: ["It's a spacecraft.", "Used for space travel.", "It starts with 'R'.", "Ends with a common number associated with space missions."] },
    { password: "Butterfly23", hints: ["It's an insect.", "It has colorful wings.", "It starts with 'B'.", "Ends with the number of chromosomes."] },
    { password: "Elephant40", hints: ["It's a large animal.", "It has big ears and a trunk.", "It starts with 'E'.", "Ends with the number of years in a typical lifetime."] },
    { password: "Guitar77", hints: ["It's a musical instrument.", "Has six strings.", "It starts with 'G'.", "Ends with a lucky number."] },
    { password: "Football22", hints: ["It's a sport.", "Played with a round ball.", "It starts with 'F'.", "Ends with the number of players per side."] },
    { password: "Helicopter9", hints: ["It's a flying vehicle.", "It has blades that rotate.", "It starts with 'H'.", "Ends with a lucky number for some."] },
    { password: "Sunflower10", hints: ["It's a plant.", "It has large yellow petals.", "It starts with 'S'.", "Ends with a score in sports."] },
    { password: "Butterfly50", hints: ["It flies in the air.", "Has beautiful wings.", "It starts with 'B'.", "Ends with the number of years in a typical human lifespan."] },
    { password: "Snowman5", hints: ["It's built in winter.", "Made of snow.", "It starts with 'S'.", "Ends with a lucky number for children."] },
    { password: "Starfish42", hints: ["It's a sea creature.", "Has five arms.", "It starts with 'S'.", "Ends with a lucky number for some."] },
    { password: "Mountain99", hints: ["It's a large landform.", "Peaks above the earth's surface.", "It starts with 'M'.", "Ends with the highest common digit."] },
    { password: "Whale101", hints: ["It's a marine animal.", "It's very large.", "It starts with 'W'.", "Ends with a beginner's number."] },
    { password: "Candle22", hints: ["Used for lighting.", "Melts as it burns.", "It starts with 'C'.", "Ends with the number associated with doubling."] },
    { password: "Pineapple77", hints: ["A tropical fruit.", "Spiky exterior.", "It starts with 'P'.", "Ends with a lucky number."] },
    { password: "Chocolate54", hints: ["Sweet and delicious.", "Often comes in bars.", "It starts with 'C'.", "Ends with an even number."] },
    { password: "Computer9", hints: ["It's an essential device.", "Used for processing data.", "It starts with 'C'.", "Ends with a lucky single-digit number."] },
    { password: "Telescope1", hints: ["Used for viewing distant objects.", "It's used by astronomers.", "It starts with 'T'.", "Ends with the smallest integer."] },
    { password: "Mango30", hints: ["It's a tropical fruit.", "Sweet and juicy.", "It starts with 'M'.", "Ends with a milestone age number."] },
    { password: "Tree44", hints: ["It's a plant.", "Has a trunk and leaves.", "It starts with 'T'.", "Ends with a number representing balance."] },
    { password: "Castle21", hints: ["It's a fortification.", "Associated with kings and queens.", "It starts with 'C'.", "Ends with a milestone in adulthood."] },
    { password: "Chocolate72", hints: ["Sweet and often dark.", "Loved by many.", "It starts with 'C'.", "Ends with the perfect mid-year number."] },
    { password: "Bicycle35", hints: ["It's a two-wheeled vehicle.", "It can be powered by pedaling.", "It starts with 'B'.", "Ends with a number representing a decade."] },
    { password: "Firefly17", hints: ["It's a glowing insect.", "It flies at night.", "It starts with 'F'.", "Ends with a common prime number."] },
    { password: "Chocolate88", hints: ["Sweet and delicious.", "Loved by all ages.", "It starts with 'C'.", "Ends with double infinity numbers."] },
    { password: "Penguin11", hints: ["It's a bird.", "It can't fly.", "It starts with 'P'.", "Ends with a common lucky number."] },
    { password: "Peach34", hints: ["It's a fruit.", "Soft and sweet.", "It starts with 'P'.", "Ends with a number considered an even lucky number."] },
    { password: "Zebra77", hints: ["It's an animal.", "It has black and white stripes.", "It starts with 'Z'.", "Ends with a lucky number."] },
    { password: "Rocket45", hints: ["Used to explore space.", "It starts with 'R'.", "Ends with a milestone number in history."] },
    { password: "Cactus66", hints: ["It's a plant.", "Known for its thorns.", "It starts with 'C'.", "Ends with double six."] },
    { password: "Shark100", hints: ["It's a marine predator.", "Has sharp teeth.", "It starts with 'S'.", "Ends with a perfect score in exams."] }
];



function generatePassword() {
    const index = Math.floor(Math.random() * passwordPool.length); 
    const selected = passwordPool[index];
    password = selected.password;
    hints = [...selected.hints]; 
    displayHints();
}

function displayHints() {
    const hintContainer = document.getElementById("hint-container");
    hintContainer.innerHTML = ""; 
    hints.forEach((hint, index) => {
        const hintElement = document.createElement("div");
        hintElement.textContent = `${index + 1}. ${hint}`; 
        hintElement.className = "hint";
        hintContainer.appendChild(hintElement);
    });
}


function startGame() {
    level = 1;
    attempts = 3;
    document.getElementById("game-message").textContent = `Welcome to Level ${level}! Guess the password.`;
    document.getElementById("guess-input").style.display = "block";
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("success-message").style.display = "none";
    generatePassword();
}

function submitGuess() {
    const userGuess = document.getElementById("guess-input").value;
    const hintContainer = document.getElementById("hint-container");
    if (userGuess === password) {
        document.getElementById("success-message").style.display = "block";
        setTimeout(() => {
            level++;
            document.getElementById("success-message").style.display = "none";
            document.getElementById("guess-input").value = "";
            generatePassword();
            document.getElementById("game-message").textContent = `Welcome to Level ${level}! Guess the password.`;
        }, 2000);
    } else {
        attempts--;
        document.getElementById("game-message").textContent = `Incorrect! ${attempts} attempts left.`;
        if (attempts === 0) {
            Swal.fire({
                title: 'Game Over!',
                text: `The correct password was: ${password}`,
                icon: 'error',
                confirmButtonText: 'Try Again'
            }).then(() => {
                resetGame();
            });
        }
    }
}

function resetGame() {
    document.getElementById("game-message").textContent = "Press 'Start Game' to begin again!";
    document.getElementById("guess-input").style.display = "none";
    document.getElementById("submit-button").style.display = "none";
    document.getElementById("start-button").style.display = "block";
    document.getElementById("hint-container").innerHTML = "";
}

document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("submit-button").addEventListener("click", submitGuess);

document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.key === "F12") {
        e.preventDefault();
    }
});

