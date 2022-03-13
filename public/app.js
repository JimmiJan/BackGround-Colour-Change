let color = document.getElementById("color")
let btncolor = document.getElementById("colorGenerat")
let copyCode = document.getElementById("CopyCode")

let colorName= "0123456789abcdefghijklmnopqrst"
let gencolr ="#"

btncolor.addEventListener("click",()=>{
    for(let i=0; i<6; i++){
        gencolr += colorName[Math.floor(Math.random()* 16)]
    }
    console.log(gencolr)
    document.body.style.background=gencolr
    color.innerHTML=gencolr
    gencolr="#"
})
copyCode.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(color.innerHTML)
    document.querySelector(".Copy").innerHTML=color.innerHTML
    document.querySelector(".Copy").style.color=color.innerHTML

})