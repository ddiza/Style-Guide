'use strict'

const errormess = document.querySelector('.errormess')
const error = document.querySelector('.error')




error.addEventListener('keydown', (e) => {

    errormess.classList.remove('opacity-0')
    if (error.value.length >= 6) {
        errormess.classList.add('opacity-0')
    }
})

// colors

const colors = document.querySelector('.colors')
const copy = document.querySelector('.copy')

colors.addEventListener('click', (e) => {

    const clicked = e.target.closest(".cursor-pointer")
    if (clicked) {
      

        navigator.clipboard.writeText(clicked.textContent)
        copy.classList.remove('-translate-y-[500%]', 'opacity-0', '-z-10')
        copy.classList.add(`bg-[${clicked.textContent}]`)

        const time = function () {
            copy.classList.add('-translate-y-[500%]', 'opacity-0', '-z-10')
            copy.classList.remove(`bg-[${clicked.textContent}]`)
        }

        setTimeout(time, 3000)

   }
})





