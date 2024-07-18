const btnMenu = document.querySelector('#hamburguer-button')
const menu = document.querySelector('#menu')

function closeMenu(){
    btnMenu.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-hidden', 'true')
    menu.classList.add('menu-closed')
    menu.classList.remove('menu')
}

closeMenu()

btnMenu.addEventListener('click', function() {
    let expanded = this.getAttribute('aria-expanded') === 'true' ? true : false;
    document.removeEventListener('click', closeMenu)
    if(expanded){
        menu.classList.add('menu-closed')
        menu.classList.remove('menu')
    }else{
        menu.classList.remove('menu-closed')
        menu.classList.add('menu')
    }
    this.setAttribute('aria-expanded', !expanded)
    menu.setAttribute('aria-hidden', expanded)
    
    setTimeout(function(){
        if(!expanded){
            document.addEventListener('click', closeMenu)
            console.log('teste')
        }
    }, 1)
})

const mediaQuery = window.matchMedia('(max-width: 796px)')

function handleMediaQueryChange(e){
    if(e.matches){
        closeMenu()
    }else{
        btnMenu.setAttribute('aria-expanded', 'true')
        menu.setAttribute('aria-hidden', 'false')
        menu.classList.remove('menu-closed')
        menu.classList.add('menu')
        
        //animação card hard skills
        VanillaTilt.init(document.querySelectorAll(".technologies .card"), {
            max: 25,
            speed: 400,
            scale: 1.1,
            glare: true,
            "max-glare": 0.5
        });
    }
}

mediaQuery.addEventListener('change', handleMediaQueryChange)
handleMediaQueryChange(mediaQuery)



// VanillaTilt.init(document.querySelectorAll(".technologies .title"), {
//     max: 25,
//     speed: 400,
//     scale: 1.1,
//     glare: true,
//     "max-glare": 0.5
// });


const slider = document.querySelector('.slider')
let currentIndex = 0

slider.addEventListener('mouseover', (event)=> {
    let itens = slider.querySelectorAll('.item')
    const {target} = event
    if(target.classList.contains('item')){
        itens.forEach(item => {
            if (item !== target) item.classList.remove('active')
        })
        target.classList.toggle('active')
    }
})

//mostrar setinha que ao clicar, vai pro topo
const arrowUp = document.querySelector('#arrow-up')
function showArrowUp(){
    if(window.scrollY > 500){
        arrowUp.classList.add('show')
    }else {
        arrowUp.classList.remove('show')
    }
}
window.addEventListener('scroll', showArrowUp)

arrowUp.addEventListener('click', function(e){
    e.preventDefault()
    window.scrollTo({
        top: 0
    })
})

const email = document.querySelector('.email')
email.addEventListener('click', () => {
    
    const msgCopied = email.querySelector('.copied')
    msgCopied.classList.remove('hidden')
    navigator.clipboard.writeText(email.textContent)
    setTimeout(()=> {
        msgCopied.classList.add('hidden')
    },2000)
})