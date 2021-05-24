console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = [
    {
        name: "Turn enemy into a newt",
        isEvil: true,
        energyRequired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyRequired: 2.99
    },
    {
        name: "Give a deaf person the ability to heal",
        isEvil: false,
        energyReqired: 12.2
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyReqired: 100.0
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyReqired: 2921.5
    }
]

const goodSpells = () => {
    let goodSpellsCollection = allSpells.filter(spell => {
        if (spell.isEvil === false) {
            return spell
        }
    })
    let goodSpellNames = goodSpellsCollection.map(spell => spell.name)
    return goodSpellNames;
}

const evilSpells = () => {
    let evilSpellsCollection = allSpells.filter(spell => {
        if (spell.isEvil === true) {
            return spell
        }
    })
    let evilSpellNames = evilSpellsCollection.map(spell => spell.name)
    return evilSpellNames;
}



const displayGoodSpells = () => {
    const theGoodOnes = goodSpells()
    console.log("Good Book");
    theGoodOnes.map(spell => console.log(`  ${spell}`))
}

const displayEvilSpells = () => {
    const theEvilOnes = evilSpells()
    console.log("Evil Book");
    theEvilOnes.map(spell => console.log(`  ${spell}`))
}

displayGoodSpells();
console.log("");
displayEvilSpells();