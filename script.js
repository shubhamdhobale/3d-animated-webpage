function loco() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
loco()


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets) {
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span", {
    scrollTrigger: {
        trigger: `#page2>h1>span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: 1,
    },
    stagger: .2,
    color: `#fff`
})




gsap.to(".page3-cir", {
    scrollTrigger: {
        trigger: `.page3-cir`,
        start: `top center`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: .5
    },
    scale: 1.5
})



gsap.to(".page3-cir-inner", {
    scrollTrigger: {
        trigger: `.page3-cir-inner`,
        start: `top center`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: .5
    },
    backgroundColor: `#0000`,
})