function page1animation(){
    var tl =gsap.timeline()
tl.from("nav h1,nav h4,nav button",{
     y:-10,
    opacity:0,
     delay:0.3,
     duration:0.7,
      stagger:0.15
})
tl.from(".center-part1",{
    x:-880,
    opacity:0,
     duration:0.2,
})
tl.from(".center-part1 button",{
     opacity:0,
     duration:0.4,
})
tl.from(".center-part2 img",{
     opacity:0,
     duration:0.4,
},"-=0.5")

tl.from(".section1bottom img",{
    y:30,
     opacity:0,
     duration:0.4,
     stagger:0.15,
      delay:0.5
})

 
}
 function page2animation(){
    
var tl2 = gsap.timeline({
     scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:2
    }
})
tl2.from(".services",{
y:-50,
opacity:0
})
tl2.from(".elem.line1.left",{
    x:-500,
opacity:0,
duration:1
},"ue")
tl2.from(".elem.line1.right",{
    x:500,
opacity:0,
duration:1
},"ue")
tl2.from(".elem.line2.left",{
    x:-500,
opacity:0,
duration:1
},"shita")
tl2.from(".elem.line2.right",{
    x:500,
opacity:0,
duration:1
},"shita")
 }
  page1animation()
 page2animation()