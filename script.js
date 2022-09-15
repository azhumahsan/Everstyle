// Anchor Fixed Position

Array.from(document.getElementsByClassName('main__nav--action')).map(action => {
    action.addEventListener('click', () => {
        setTimeout(() => {
            window.scrollTo(0, this.pageYOffset - 90)
        }, 10)
    })
})

// Show Nav on Scroll Up only

const navContainer = q('.main__nav')
let lastScroll = 0
let closeDelay = 3000

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    
    if (currentScroll <= lastScroll || pageYOffset <= 80) {
        navContainer.classList.remove('hidden') 
    } else {
        setTimeout(() => {
            navContainer.classList.add('hidden') 
        }, 100)
    }

    lastScroll = currentScroll
})

document.body.addEventListener('mousemove', e => {
    if (e.clientY <= 50) {
        navContainer.classList.remove('hidden') 
    }
})

// Modal Pop Up

const modalWarn = q('.modal__warn')
const modalLogin = q('.modal__login')
const modalMessage = q('.modal__message')

Array.from(document.querySelectorAll('.card .buttons svg')).map(btn => {
    btn.addEventListener('click', () => modalWarn.classList.remove('modal__hidden'))
})

q('.modal__warn .content button').addEventListener('click', () => {
    modalWarn.classList.add('modal__hidden')
    modalLogin.classList.remove('modal__hidden')
})

Array.from(document.querySelectorAll('.cancel__btn')).map(btn => {
    btn.addEventListener('click', e => {
        e.target.parentElement.parentElement.classList.add('modal__hidden')
    })
})

q('.email').addEventListener('click', () => modalMessage.classList.remove('modal__hidden'))

Array.from(document.getElementsByTagName('button')).map(btn => btn.addEventListener('click', e => e.preventDefault()))

q('.modal__login .content .login__btn').addEventListener('click', e => {
    e.target.classList.add('selected__btn')
    q('.modal__login .content .signup__btn').classList.remove('selected__btn')
    q('.modal__login .form__container .signup__form').classList.add('hidden__form')
    q('.modal__login .form__container .login__form').classList.remove('hidden__form')
})
q('.modal__login .content .signup__btn').addEventListener('click', e => {
    e.target.classList.add('selected__btn')
    q('.modal__login .content .login__btn').classList.remove('selected__btn')
    q('.modal__login .form__container .login__form').classList.add('hidden__form')
    q('.modal__login .form__container .signup__form').classList.remove('hidden__form')
})

// Function Helper

function q(el) {
    return document.querySelector(el)
}

function strToHtml(str) {
    const div = document.createElement('div')
    div.innerHTML = str
    return div.firstChild
}
