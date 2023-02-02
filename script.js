const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY
        // ^ tracks XY coordinates of click within browser window

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        // ^ gets position of button

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        // ^ gets position of click within button

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})