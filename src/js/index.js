const btnMenu = document.querySelector('#hamburguer-button')
const menu = document.querySelector('#menu')

function closeMenu(){
    btnMenu.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-hidden', 'true')
    menu.classList.add('menu-closed')
    menu.classList.remove('menu')
}

function openMenu(){
    btnMenu.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    menu.classList.remove('menu-closed');
    menu.classList.add('menu')
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
        }
    }, 1)
})


const mediaQuerySmall = window.matchMedia('(max-width: 796px)')
const mediaQueryLarge = window.matchMedia('(min-width: 1025px)')

function handleMediaQueryChange(){
    const emailElement = document.querySelector('.contact .email')
    if(mediaQuerySmall.matches){
        console.log('até 796px')
        closeMenu()
        changeHoverForClick()
        copiedEffect()
    }else if (mediaQueryLarge.matches){
        //HOVER ENTRA AQUI
        console.log('maior que 1024px');
        //animação card hard skills
        VanillaTilt.init(document.querySelectorAll(".technologies .card"), {
            max: 25,
            speed: 400,
            scale: 1.1,
            glare: true,
            "max-glare": 0.5
        });
        emailElement.addEventListener('click', copyEmail)
        openMenu()

    } else {
        console.log('entre 796px e 1024px')
        openMenu()
        changeHoverForClick()
        copiedEffect()
    }
}

function addMediaQueryListerners(){
    mediaQuerySmall.addEventListener('change', handleMediaQueryChange)
    mediaQueryLarge.addEventListener('change', handleMediaQueryChange)
}

addMediaQueryListerners()
handleMediaQueryChange()

function changeHoverForClick(){
    //SÓ ABRE O EMAIL E CURRICULO ELEMENT, QUANDO CLICADO
    let emailElement = document.querySelector('#contato .email')
    let curriculoElement = document.querySelector('#contato .curriculo')
    emailElement.addEventListener('click', function() {
        this.classList.add('active')
        copyEmail()
        this.addEventListener('mouseleave', function(){
            this.classList.remove('active')
        })
    })
    curriculoElement.addEventListener('click', function() {
        this.classList.add('active')
        this.addEventListener('mouseleave', function(){
            this.classList.remove('active')
        })
    })
}


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

function copyEmail (){
    const msgCopied = document.querySelector('.copied')
    const email = document.querySelector('.email span')
    
    //exibe a mensagem de "copiado"
    setTimeout(()=>{
        msgCopied.classList.remove('hidden')
    },400)

    navigator.clipboard.writeText(email.textContent)

    //oculta a mensagem de "copiado" após 2 segundos
    setTimeout(()=> {
        msgCopied.classList.add('hidden')
    },2000)
}

function copiedEffect(){
    //PARA TELAS PEQUENAS, TEM QUE CLICAR
    let emailElement = document.querySelector('#contato .email')
    let copiedMsg = emailElement.querySelector('copied')
    if(emailElement.classList.contains('active')){
        emailElement.addEventListener('click', function (){
            copiedMsg.classList.remove('hidden')
        })
    }
}