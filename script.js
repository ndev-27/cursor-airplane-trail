const planes = [

"https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
"https://images.unsplash.com/photo-1493238792000-8113da705763",
"https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
"https://images.unsplash.com/photo-1474302770737-173ee21bab63",
"https://images.unsplash.com/photo-1464039397811-476f652a343b",
"https://images.unsplash.com/photo-1508614589041-895b88991e3e"

]

let index = 0

function createTrail(x,y){

const img = document.createElement("img")

img.src = planes[index % planes.length]

img.classList.add("trail")

document.body.appendChild(img)

img.style.left = x + "px"
img.style.top = y + "px"

/* Premium animation */

gsap.fromTo(img,
{
scale:0.4,
opacity:1,
rotation:Math.random()*40-20,
filter:"blur(0px)"
},
{
scale:1.4,
opacity:0,
rotation:Math.random()*90-45,
filter:"blur(6px)",
duration:1.2,
ease:"power3.out",
onComplete:()=>img.remove()
})

index++

}

/* Desktop */

document.addEventListener("mousemove",(e)=>{

createTrail(e.clientX,e.clientY)

})

/* Mobile */

document.addEventListener("touchmove",(e)=>{

let touch=e.touches[0]

createTrail(touch.clientX,touch.clientY)

})