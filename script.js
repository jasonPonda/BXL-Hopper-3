const collection = [
    {
        nom: "John Terry",
        image: 'images/terry.jpg',
        club: "Légende",
        age: 41,
        taille: 186,
        pays: "Angletterre",
    },

    {
        nom: "Didier Drogba",
        image: 'images/drogba.jpg',
        club: "Légende",
        age: 44,
        taille: 188,
        pays: "Côte d'Ivoire"
    },

    {
        nom: "Ashley Cole",
        image: 'images/ashley-cole.jpg',
        club: "Légende",
        age: 41,
        taille: 176,
        pays: "Angletterre"
    },

    {
        nom: "Frank Lampard",
        image: 'images/lampard.jpg',
        club: "Légende",
        age: 43,
        taille: 184,
        pays: "Angletterre"
    },

    {
        nom: "Ronaldo de Assis Moreira",
        image: 'images/ronaldinho.jpg',
        club: "Légende",
        age: 42,
        taille: 182,
        pays: "Brésil"
    },

    {
        nom: "Cristano Ronaldo dos Santos Aveiro",
        club: "Manchester United",
        image: 'images/cristiano.jpg',
        age: 37,
        taille: 187,
        pays: "Portugal"
    },

    {
        nom: "Lionel Messi",
        club: "Paris Saint-Germain",
        image: 'images/messi.jpg',
        age: 34,
        taille: 169,
        pays: "Argentine"
    },

    {
        nom: "Robert Lewandowski",
        image: 'images/lewandowski.jpg',
        club: "Bayern Munich",
        age: 33,
        taille: 185,
        pays: "Pologne"
    },

    {
        nom: "Karim Benzema",
        image: 'images/karim.jpg',
        club: "Réal Madrid",
        age: 34,
        taille: 185,
        pays: "France"
    },

    {
        nom: "Kylian Mbappé Lottin",
        image: 'images/kylian.jpg',
        club: "Paris Saint-Germain",
        age: 23,
        taille: 178,
        pays: "France"
    }
]

const image = [
    'images/terry.jpg',
    'images/drogba.jpg',
    'images/ashley-cole.jpg',
    'images/lampard.jpg',
    'images/ronaldinho.jpg',
    'images/cristiano.jpg',
    'images/messi.jpg',
    'images/lewandowski.jpg',
    'images/karim.jpg',
    'images/kylian.jpg'

]

const section = document.querySelector('section')

for (const fifa of collection) {
    console.log(fifa.club)

    const article = document.createElement('article')
    article.className = 'cards'

    const title = document.createElement('h1')
    title.innerText = fifa.nom

    const unDiv = document.createElement('div')
    unDiv.className = 'description'
    
    const img = new Image(200, 200)
    img.src = fifa.image

    const para = document.createElement('p')
    para.innerText = fifa.club
    para.innerText = fifa.age
    para.innerText = fifa.taille
    para.innerText = fifa.pays

    section.appendChild(article)
    article.appendChild(img)
    article.appendChild(title)
    article.appendChild(para)
    
}



