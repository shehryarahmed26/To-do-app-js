let input = document.getElementById('input')
let button = document.querySelector('button')
button.addEventListener('click', () => {
    if (input.value == '') {
        alert('Please Write Something')
    }
    let ul = document.querySelector('ul')
    let li = document.createElement('li')
    li.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`
    ul.appendChild(li);
    input.value = ''
    let i = li.querySelector('i').addEventListener('click', () =>{
        li.remove();
    })
})
input.addEventListener('keypress', () => {
    
     if (event.key == 'Enter') {
        if (input.value == '') {
            alert('Please Write Something')
        }
        let ul = document.querySelector('ul')
        let li = document.createElement('li')
        li.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`
        ul.appendChild(li);
        input.value = ''
        let i = li.querySelector('i').addEventListener('click', () =>{
            li.remove();
        })
    }
})