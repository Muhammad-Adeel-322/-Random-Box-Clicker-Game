let mov = document.querySelector(".mov-box")
let box = document.querySelector(".box")
let span = document.querySelector(".span")
let count = 0


mov.addEventListener("click", () => {
    count++
    span.innerHTML = `Score : ${count}`
    mov.classList.add("color")
})
setInterval(() => {
    mov.classList.remove("color");
}, 1000);

   setInterval(() => {
    let x =  Math.floor(Math.random() * 400 )
   let y =  Math.floor(Math.random() * 400 )
   console.log(x , y);
            mov.style.top = `${y}px`
    mov.style.left = `${x}px`
        }, 500)