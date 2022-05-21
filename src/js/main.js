const badgeEl = document.querySelector("header .badges");

const toTopEl = document.getElementById("to-top");

window.addEventListener(
    "scroll",
    _.throttle(() => {
        if (window.scrollY > 500) {
            //gsap.to(요소, 지속시간, 옵션);
            gsap.to(badgeEl, 0.6, {
                opacity: 0,
                display: "none",
            });
            gsap.to(toTopEl, 0.2,{
                x: 0,
            })
        } else {
            gsap.to(badgeEl, 0.6, {
                opacity: 1,
                display: "block",
            });
            gsap.to(toTopEl, 0.2,{
                x: 100,
            })
        }
    }, 300 /*0.3초*/)
);

toTopEl.addEventListener("click", ()=>{
    gsap.to(window, .7, {
        scrollTo: 0
    })
})

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1,
    });
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true,
});

new Swiper(".promotion .swiper-container", {
    slidesPerView: 3, // 한번에 보여줄 슬라이드
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이가 가운데
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
        clickable: true,
    },
    navigation: {
        prevEl: ".promotion .swiper-prev",
        nextEl: ".promotion .swiper-next",
    },
});

new Swiper(".awards .swiper-container", {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation:{
        prevEl: ".awards .swiper-prev",
        nextEl: ".awards .swiper-next"
    }
})

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
const swiperPagination = document.querySelector(".swiper-pagination");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion) {
        promotionEl.classList.add("hide");
        swiperPagination.style.opacity = "0";
    } else {
        promotionEl.classList.remove("hide");
        swiperPagination.style.opacity = "1";
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size ) {
    gsap.to(selector, random(1.5,2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0,delay),
    });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", .5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach((spyEl)=>{
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8, //0이 뷰포트 최상단 1이 최하단 뷰포트의 어느 지점에 감시되는지!
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
})