const box = document.querySelectorAll('.box')

window.addEventListener('scroll', run)

run()

function run(){
    const bottom = window.innerHeight / 5 * 4.5
    box.forEach(box =>{
        const top = box.getBoundingClientRect().top
        if(top < bottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
        console.log(window.innerHeight/5)
        console.log(top)
    })
    // console.log(top)
    // console.log(window.innerHeight)
}

