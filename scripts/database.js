const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Dr. Evil",
            power: "Evil Genius"
        },
        {
            id: 2,
            name: "The Joker",
            power: "Chaos and Mayhem"
        },
        {
            id: 3,
            name: "Magneto",
            power: "Manipulation of Metal"
        },
        {
            id: 4,
            name: "Lord Voldemort",
            power: "Dark Magic"
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}