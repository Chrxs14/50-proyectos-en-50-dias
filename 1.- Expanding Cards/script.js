const img = document.querySelectorAll('.img')

img.forEach(img => {
    img.addEventListener('click', () =>{
        removeActive()
        img.classList.add('active')
    })
})

function removeActive(){
    img.forEach(img => {
        img.classList.remove('active')
    })
}