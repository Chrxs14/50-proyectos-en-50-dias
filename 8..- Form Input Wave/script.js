const labelitem = document.querySelectorAll('.input label')

labelitem.forEach(el => {
    el.innerHTML = el.innerText
        .split('')
        .map((letter, idx)=>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
});