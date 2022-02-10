const general = document.querySelector('.general')
const left = document.querySelector('.left')
const right = document. querySelector('.right')

left.addEventListener('mouseenter', ()=>{
    console.log('mouse aqui')
    general.classList.add('hover1')
})
left.addEventListener('mouseleave', ()=>{
    console.log('mouse chao')
    general.classList.remove('hover1')
})
right.addEventListener('mouseenter', ()=>{
    console.log('mouse aqui')
    general.classList.add('hover2')
})
right.addEventListener('mouseleave', ()=>{
    console.log('mouse chao')
    general.classList.remove('hover2')
})