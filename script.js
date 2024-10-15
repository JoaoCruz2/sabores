let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length; // Número total de itens
let active = 0;

next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active >= count - 1 ? 0 : active + 1; // Avança para o próximo item
    list[active].classList.add('active'); // Adiciona 'active' ao item correto
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active <= 0 ? count - 1 : active - 1; // Volta para o item anterior
    list[active].classList.add('active'); // Adiciona 'active' ao item correto
}


