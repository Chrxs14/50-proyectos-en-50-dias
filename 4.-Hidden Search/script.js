const search = document.getElementById('search-button')
const text = document.getElementById('text')
const box = document.getElementById('box')

search.addEventListener('click', ()=>{
    const box_width = parseInt(box.style.width)
    if(box_width === 50){
        console.log('La caja es pequena')
        box.style.width = 300 + 'px'
        box.classList.add('active')
    }else{
        box.classList.remove('active')
        console.log('la caja es grande')
        box.style.width = 50 + 'px'
    }
    console.log(box_width)
})
