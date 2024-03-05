const box = document.querySelectorAll(".imagecontainer");

gsap.to(".imagecontainer",{
    ease : Expo.easeInOut,
    width : "100%" ,
    duration : 3,
    stagger : 2

})

gsap.to(".text h1",{
    ease : Expo.easeInOut,
    top : 0,
    stagger : 2,
    duration : 3
})

gsap.to(".text h1",{
    ease : Expo.easeInOut,
    delay : 2,
    top : "-100%",
    stagger : 2,
    duration : 3
})