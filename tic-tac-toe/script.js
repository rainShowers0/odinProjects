const cellElements = document.querySelectorAll('[data-cell]');

cellElements.forEach(cell => {
    cell.addEventListener('click', handeClick, {once: true})
})