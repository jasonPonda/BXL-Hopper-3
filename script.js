const collection = [
    {
        nom: "John Terry",
        image: 'images/terry.jpg',
        club: "Légende",
        age: 41,
        taille: 186,
        pays: "Angletterre",
        link: "https://www.youtube.com/watch?v=W-XZPUEFhPw",
        drapeau: "images/icons8-england-circular-48.png"
    },

    {
        nom: "Didier Drogba",
        image: 'images/drogba.jpg',
        club: "Légende",
        age: 44,
        taille: 188,
        pays: "Côte d'Ivoire",
        link: "https://www.youtube.com/watch?v=ZWYGRehfmR4",
        drapeau: "images/icons8-ivory-coast-48.png"
    },

    {
        nom: "Ashley Cole",
        image: 'images/ashley-cole.jpg',
        club: "Légende",
        age: 41,
        taille: 176,
        pays: "Angletterre",
        link: "https://www.youtube.com/watch?v=xt5AkuZzuAQ",
        drapeau: "images/icons8-england-circular-48.png"
    },

    {
        nom: "Frank Lampard",
        image: 'images/lampard.jpg',
        club: "Légende",
        age: 43,
        taille: 184,
        pays: "Angletterre",
        link: "https://www.youtube.com/watch?v=cSYGVnhEkR4",
        drapeau: "images/icons8-england-circular-48.png"
    },

    {
        nom: "Ronaldo de Assis Moreira",
        image: 'images/ronaldinho.jpg',
        club: "Légende",
        age: 42,
        taille: 182,
        pays: "Brésil",
        link: "https://www.youtube.com/watch?v=_dBz4dTZocg",
        drapeau: "images/icons8-brazil-48.png"
    },

    {
        nom: "Cristano Ronaldo dos Santos Aveiro",
        club: "Manchester United",
        image: 'images/cristiano.jpg',
        age: 37,
        taille: 187,
        pays: "Portugal",
        link: "https://www.youtube.com/watch?v=OUKGsb8CpF8",
        drapeau: "images/icons8-portugal-48.png"
    },

    {
        nom: "Lionel Messi",
        club: "Paris Saint-Germain",
        image: 'images/messi.jpg',
        age: 34,
        taille: 169,
        pays: "Argentine",
        link: "https://www.youtube.com/watch?v=p693u53Q10U",
        drapeau: "images/icons8-argentina-16.png"
    },

    {
        nom: "Robert Lewandowski",
        image: 'images/lewandowski.jpg',
        club: "Bayern Munich",
        age: 33,
        taille: 185,
        pays: "Pologne",
        link: "https://www.youtube.com/watch?v=5A1wwIdptEU",
        drapeau: "images/icons8-poland-16.png"
    },

    {
        nom: "Karim Benzema",
        image: 'images/karim.jpg',
        club: "Réal Madrid",
        age: 35,
        taille: 185,
        pays: "France",
        link: "https://www.youtube.com/watch?v=RgkpdcD3VOc",
        drapeau: "images/icons8-france-48.png"
    },

    {
        nom: "Kylian Mbappé Lottin",
        image: 'images/kylian.jpg',
        club: "Paris Saint-Germain",
        age: 23,
        taille: 178,
        pays: "France",
        link: "https://www.youtube.com/watch?v=omlWuLD5SXk",
        drapeau: "images/icons8-france-48.png"
    }
]

/*const image = [
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

]*/


const header = document.querySelector('header')
const div = document.createElement('div')
div.className = "jason"

const imageH = document.createElement('img')
imageH.src = "images/ponda.jpg"
imageH.className = "profile"

const div1 = document.createElement('div')
const h1 = document.createElement('h1')
h1.innerText = "Jason Ponda's Collection"
const par1 = document.createElement('p')
par1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos nemo ab. Hic quiarecusandae ea? Dolor, eaque! Doloremque dolorum est voluptatum commodi tenetur harum consectetur dolorem ad autem. Ea."
const par2 = document.createElement('p')
par2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis voluptas minus iste adipisci cum eum, vel magnam, aperiam possimus expedita est, magni ipsa sint ex assumenda temporibus aliquid rerum?"

const div2 = document.createElement('div')
div2.id = 'btn'
const button = document.createElement('button')

header.appendChild(div)
div.appendChild(imageH)
div.appendChild(div1)
div1.appendChild(h1)
div1.appendChild(par1)
div1.appendChild(par2)

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

    const para1 = document.createElement('p')
    para1.innerText = fifa.club
    
    const para2 = document.createElement('p')
    para2.innerText = fifa.age

    const para3 = document.createElement('p')
    para3.innerText = fifa.taille

    const div3 = document.createElement('div')
    div3.className = "pays"

    const para4 = document.createElement('p')
    para4.innerText = fifa.pays

    const icons = document.createElement('img')
    icons.src = fifa.drapeau
    icons.className = "icons"

    const a = document.createElement('a')
    a.href = fifa.link
    a.className = "bouton"

    const link = document.createTextNode("Play trailer on YouTube")
    
    const i = document.createElement('i')
    i.className = "fab fa-youtube fa-spin"

    


    section.appendChild(article)
    article.appendChild(img)
    article.appendChild(unDiv)
    unDiv.appendChild(title)
    unDiv.appendChild(para1)
    unDiv.appendChild(para2)
    unDiv.appendChild(para3)
    unDiv.appendChild(div3)
    div3.appendChild(para4)
    para4.appendChild(icons)
    unDiv.appendChild(a)
    a.appendChild(i)
    a.appendChild(link)
    
}



