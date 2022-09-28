const fetchRick = () => {
    const getRickMorty = id => `https://rickandmortyapi.com/api/character/${id}`
    const characterPromise = []
    for (let i = 1; i <= 20; i++) {
        characterPromise.push(fetch(getRickMorty(i)).then(r => r.json()))
    }
    Promise.all(characterPromise).then(characters => {
        const lischaracters = characters.reduce((accumulator, character) => {
            accumulator +=
                `<li class="card">
             <img class="card-image"src="${character.image}" />
             <h2 class="card-tittle">${character.name}</h2>
             <p class="card-status"> Status: ${character.status}</p>
             <p class="card-specie"> Specie: ${character.species}</p>
             <p class="card-origin"> Origin: ${character.origin.name}</p>
                </li>`
            return accumulator
        }, '')
        const ul = document.querySelector('[data-js="rick"]')
        ul.innerHTML = lischaracters
    })
}
fetchRick()