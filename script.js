/*
//Con addEventListener---------
const btnAumentar = document.querySelector(".btn-info")
const btnDisminuir = document.querySelector("btn-dange")
const span = document.getElementById("span")
let contador = 0

btnAumentar.addEventListener('click',()=>{
    console.log("me diste aumentar")
    contador ++
    span.textContent = contador
})

btnAumentar.addEventListener('click',()=>{
    console.log("me diste aumentar")
    contador ++
    span.textContent = contador
})*/

//con eventDelegation--------
const container = document.querySelector(".container")
const span = document.getElementById("span")
let contador = 0

container.addEventListener('click', (e) =>{
    if (e.target.classList.contains('btn-info')) {
        contador++
        span.textContent=contador
    }else if (e.target.classList.contains('btn-danger')) {
        contador--
        span.textContent=contador
    }
    e.stopPropagation()
})