

const btn = document.querySelector(".btn");

btn.addEventListener("mouseover",(e)=>{
    const x = (e.pageX - btn.offsetLeft)
    const Y = (e.pageY - btn.offsetTop)
    btn.style.setProperty("--bt",x + 'px')
    btn.style.setProperty("--b",Y + 'px')
})