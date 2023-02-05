const banner = document.querySelector('.banner')

let index = 1
setInterval(() => {

    if (index >= 8) index = 1
    else index++
    banner.style.backgroundImage = `url(assets/${index}.jpg)`

}, 2500)