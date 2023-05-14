document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
        name: 'fries',
        img: 'image/fries.png'
    },
    {
        name: 'fries',
        img: 'image/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'image/cheeseburger.png'
    },
    {
        name: 'cheeseburger',
        img: 'image/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'image/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'image/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'image/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: 'image/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'image/milkshake.png'
    },
    {
        name: 'milkshake',
        img: 'image/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'image/pizza.png'
    },
    {
        name: 'pizza',
        img: 'image/pizza.png'
    }
]

const grid = document.querySelector('.grid')

//create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

createBoard()


})
