// const hardSkills = document.querySelector('.hard-skills')

// hardSkills.addEventListener('wheel', (e)=> {
//     // console.log(e.deltaY)

//     e.preventDefault();
//     const maxScrollLeft = 1626;
//     const newScrollLeft = hardSkills.scrollLeft + e.deltaY;

//     // Limitar a rolagem horizontal a 1526 pixels
//     if (newScrollLeft > maxScrollLeft) {
//         hardSkills.scrollLeft = maxScrollLeft;
//     } else if (newScrollLeft < 0) {
//         hardSkills.scrollLeft = 0;
//     } else {
//         hardSkills.scrollLeft = newScrollLeft;
//     }

    

// })

VanillaTilt.init(document.querySelectorAll(".technologies .title"), {
    max: 25,
    speed: 400,
    scale: 1.1,
    glare: true,
    "max-glare": 0.5
});


const slider = document.querySelector('.slider')
let currentIndex = 0

slider.addEventListener('mouseover', (event)=> {
    let itens = slider.querySelectorAll('.item')
    const {target} = event
    if(target.classList.contains('item')){
        // console.log(target)
        // console.log('pegou o target')
        itens.forEach(item => {
            if (item !== target) item.classList.remove('active')
        })
        target.classList.toggle('active')
    }
})

function showArrowUp(){
    const arrowUp = document.querySelector('#arrow-up')
    const scrollHeight = window.innerHeight*1.3
    if(window.scrollY > scrollHeight){
        arrowUp.classList.add('show')
    }else {
        arrowUp.classList.remove('show')
    }
}
// window.addEventListener('scroll', showArrowUp)
window.addEventListener('scroll', ()=> {
    showArrowUp()
    // activeAnimation()
})

// console.log(window.innerHeight) 607
// console.log(window.scrollY)  0

let intervalId 
function activeAnimation(){
    // const scrollHeight = window.innerHeight
    let skills = document.querySelectorAll('.skill')
    if(window.scrollY > 440 && window.scrollY < 1250){
        // console.log('teste')
        // console.log(window.scrollY)
        intervalId = setInterval(()=> {

            skills.forEach(skill => {
                skill.classList.add('animate__animated', 'animate__backInRight')
            })
        }, 1000)
    } else{
        // console.log(skills)
        // clearInterval(intervalId)
        skills.forEach(skill => {
            skill.classList.remove('animate__animated', 'animate__backInRight')
        })
    }
}
const email = document.querySelector('.email')
email.addEventListener('click', () => {
    console.log('teste')
    navigator.clipboard.writeText(email.textContent)
})

// console.log(arrowUp.getBoundingClientRect().top)
// console.log(arrowUp.innerHeight)
// window.addEventListener('scroll', ()=>{
//     // console.log('pegou o evento')
//     // console.log(arrowUp.getBoundingClientRect().top)
//     // if(arrowUp.getBoundingClientRect().top < (window.innerHeight*3)){
//     if(arrowUp.getBoundingClientRect().top < 1500){
//         console.log(`altura da seta = ${arrowUp.getBoundingClientRect().top}`)
//         console.log('deu certo')
//         arrowUp.style.background= 'black'
//     }
// }) 

/*
if(arrowUp.getBoundingClientRect().top < (window.innerHeight*2)){
    console.log('código correto')
    // console.log(arrowUp.getBoundingClientRect().top)
    // arrowUp.style.background='black'

}*/ 