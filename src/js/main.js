const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
    searchInputEl.focus()
})

searchInputEl.addEventListener('focus', () => {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', () => {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '')
})

const badgeEl = document.querySelector("header .badges")

window.addEventListener('scroll', _.throttle(()=>{
    if(window.scrollY>500){
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity:0,
            display: 'none',
        })
    } else {
        gsap.to(badgeEl, .6, {
            opacity:1,
            display: 'block',
        })
    }
}, 300/*0.3초*/ ))

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index)=>{
    gsap.to(fadeEl, 1, {
        delay: (index+1)*.7,
        opacity:1,
    })
})