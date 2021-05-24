console.log("Let's roll some dice, baby!");
console.log("---------------------------");

const dieRoll = () => Math.floor(Math.random() * 6) + 1

const rollTen = () => {
    for (let i = 0; i < 10; i++) {
        const roll1 = dieRoll();
        const roll2 = dieRoll();
        if (roll1 === roll2) {
            console.log(`${roll1} + ${roll2} == ${roll1 + roll2} DOUBLES!`)
        } else {
            console.log(`${roll1} + ${roll2} == ${roll1 + roll2}`)
        }
    }
}

rollTen()