const item = document.querySelectorAll('.steps')
const list_item = document.querySelector('.list')
const prev_button = document.getElementById('prev_button')
const next_button = document.getElementById('next_button')

let amountOfLi = []
let amountOfLiActive = []
let lastItemIndex

function count() {
    for(let i = 0; i<item.length; i++){
        if(item[1].parentNode == list_item){
            amountOfLi.push(item[i])
        }
    }
    return amountOfLi
} 

next_button.addEventListener('click', ()=>{
    const item_active = document.querySelectorAll('.active')
    const bar = document.getElementById('progressBar')
    const newAmountOfLiActive = amountOfLiActive.filter((item, index)=>{
        return amountOfLiActive.indexOf(item)==item
    })
    count()
    if(item_active.length<=3){
        prev_button.disabled = false
        for(let i = 0; i <item_active.length; i++){
            if (item_active[i].parentNode == list_item){
                amountOfLiActive.push(item[i])
            }
        }
        lastItemIndex = amountOfLi[item_active.length]
        lastItemIndex.classList.add('active')
        amountOfLiActive = newAmountOfLiActive
        console.log(bar.style.width)
        if(bar.style.width < '99.33'){
            bar.style.width = parseInt(bar.style.width) + 33 + "%"
        }
        if(item_active.length == 3){
            next_button.disabled = true
        }
    }
})

prev_button.addEventListener('click', ()=>{
    const item_active = document.querySelectorAll('.active')
    const bar = document.getElementById('progressBar')
    const newAmountOfLiActive = amountOfLiActive.filter((item, index)=>{
        return amountOfLiActive.indexOf(item)==item
    })
    count()
    if(item_active.length >= 2){
        next_button.disabled = false
        for(let i = 0; i <item_active.length; i++){
            if (item_active[i].parentNode == list_item){
                amountOfLiActive.push(item[i])
            }
        }
        lastItemIndex = amountOfLi[item_active.length-1]
        lastItemIndex.classList.remove('active')
        amountOfLiActive = newAmountOfLiActive
        if(bar.style.width != '0%'){
            bar.style.width = parseInt(bar.style.width) - 33 + "%"
        }
        if(item_active.length == 2){
            prev_button.disabled = true
        }
    }
})