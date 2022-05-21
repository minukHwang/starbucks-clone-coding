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

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

new Swiper('.promotion .swiper-container', {
    slidesPerView:3, // 한번에 보여줄 슬라이드
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이가 가운데
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.swiper-next',
    },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion")
const swiperPagination = document.querySelector(".swiper-pagination")
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", ()=> {
    isHidePromotion = !isHidePromotion
    if(isHidePromotion) {
        promotionEl.classList.add('hide');
        swiperPagination.style.opacity = '0'
    } else {
        promotionEl.classList.remove('hide');
        swiperPagination.style.opacity = '1'
    }
})

function floatingObject(selector) {
    gsap.to(selector, 1, {
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        
    })
}

floatingObject('.floating')