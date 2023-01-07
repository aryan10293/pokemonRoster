//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
const section =  document.querySelector('section')
let pokeRoster = JSON.parse(localStorage.getItem('pokemons')) || []
function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const url = `https://pokeapi.co/api/v2/pokemon/${poke1.toLowerCase()}`
  let pokeStore = []
  let pokeImg = []
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // create a div give it the class card
        const card = document.createElement('div')
        const moves = document.createElement('div')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const remove = document.createElement('button')

        card.classList.toggle('card')
        card.id = poke1
        moves.classList.toggle('moves')
        img.src = data['sprites']['front_default']
        h3.innerText = poke1
        h4.innerText = 'Skill Moves'
        p1.innerText = data['moves'][0]['move']['name']
        p2.innerText = data['moves'][1]['move']['name']
        remove.innerText = 'Remove From Roster'
        remove.classList.toggle('remove')
        // create a h3 and give it the inner text of the name 
        // create a img 
        // give it the source attribute of the link
        // create a h4 give it the innertext Skill moves 
        // create anoither give it the class moves 
        // create two p elements call em p1 and p2
        // give them the next content of the 2 skill moves
        // create a button give it the class name remove 
        // add th einner text remove 
      
        // append the p elements to the div wqiht the class name move
        moves.append(p1,p2)
        card.append(h3, img, h4, moves, remove)
        section.appendChild(card)
        // append h3 to card
        // append img to card
        // append h4 to card
        // append move to card
        // append button to card

        // localStorage
         let pokemon = {
           nameOf: poke1,
           skillMove1: data['moves'][0]['move']['name'],
           skillMove2: data['moves'][1]['move']['name'],
           img: data['sprites']['front_default'],
         }
         pokeRoster.push(pokemon)
         document.querySelector('#poke1').value= ''
        console.log(pokeRoster)
        localStorage.setItem('pokemons', JSON.stringify(pokeRoster))
        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}
if(pokeRoster.length >= 1){
  pokeRoster.forEach(x => {
    const card = document.createElement('div')
    const moves = document.createElement('div')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const remove = document.createElement('button')

    card.classList.toggle('card')
    card.id = poke1
    moves.classList.toggle('moves')
    img.src = x['img']
    h3.innerText = x['nameOf']
    h4.innerText = 'Skill Moves'
    p1.innerText = x['skillMove1']
    p2.innerText = x['skillMove2']
    remove.innerText = 'Remove From Roster'
    remove.classList.toggle('remove')

    moves.append(p1,p2)
    card.append(h3, img, h4, moves, remove)
    section.appendChild(card)
  })
}

