//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
const section =  document.querySelector('section')
function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const url = `https://pokeapi.co/api/v2/pokemon/${poke1}`
 // const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
  let pokeStore = []
  let pokeImg = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // document.getElementById('pokeImg2').src = data['sprites']['front_default']
        // document.querySelector('h3').innerText = poke1
        // document.querySelector('#skill1').innerText = data['moves'][0]['move']['name']
        // document.querySelector('#skill2').innerText = data['moves'][1]['move']['name']

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
        moves.appendChild(p1)
        moves.appendChild(p2)
        card.appendChild(h3)
        card.appendChild(img)
        card.appendChild(h4)
        card.appendChild(moves)
        card.appendChild(remove)
        section.appendChild(card)
        // append h3 to card
        // append img to card
        // append h4 to card
        // append move to card
        // append button to card
      
        // localStorage
        localStorage.setItem('section', section)
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
if(!localStorage.getItem('section')){
  localStorage.setItem('section', section)
} else {
  document.querySelector('body').appendChild(section)
}
// enter pokemon name
// on click display image, the number of pokemone entered it top 2 moves
// add local storage 

// fetch(url2)
// .then(res => res.json()) // parse response as JSON
// .then(data => {
//    //console.log(data)
//   // pokeStore.push(data.types[0].type.name)
//   // pokeImg.push(data.sprites.front_shiny)

//   if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
//     document.querySelector('#pokeImg1').src = pokeImg[0]
//     document.querySelector('#pokeImg2').src = pokeImg[1]
//     document.querySelector('h2').innerText = " 2x > "
//   }
// })

// pokeStore.push(data.types[0].type.name)
// pokeImg.push(data.sprites.front_shiny)