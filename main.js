//N1
let first = document.body.children[0]

firstWork.classList.add('wraper')

let img = document.createElement('img')
img.src = 'img.png'
img.style.width = '700px'

let header = document.createElement('h2')
header.classList.add('title')
header.textContent = 'image title'
header.style.color = 'red'
header.style.fontSize = '30px'


document.body.children[0].appendChild(img)
document.body.children[0].appendChild(h2)


//N2
let second = document.querySelectorAll(".second_div")

let p = document.createElement("p")
p.classList.add("text")
p.textContent = ("hello")

document.body.children[1].appendChild(p)


// N3
let a = document.createElement('a')
a.textContent = 'google link'
a.href = 'https://google.com'
a.target = 'blank'
a.classList.add('link')
a.classList.replace('link', 'newclass')

document.body.children[4].appendChild(a)