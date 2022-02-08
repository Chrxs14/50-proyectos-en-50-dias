const page_body = document.getElementById('container')
const count_container = document.createElement('div')
const blurBg =  document.getElementById('blur')
const count = document.createTextNode('0')
const blur_value = 100

let porcentaje = 0
let setInt = setInterval(run, 20)

count_container.classList.add('text')
count_container.appendChild(count)
page_body.appendChild(count_container)

function run(){
    porcentaje++

    if(porcentaje > 99){
        clearInterval(setInt)   
    }
    count_container.innerHTML = `${porcentaje}%`
    blurBg.style.filter = `blur(${blur_value - porcentaje}px)`
    count_container.style.opacity = (blur_value - porcentaje) + ''
}