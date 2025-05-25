let bnt_de_meu_header=document.getElementById("bnt_de_meu_header");
let header=document.getElementById("header");
let navbarlinks=document.getElementById("navbarlinks")

bnt_de_meu_header.addEventListener("click",()=>{
    bnt_de_meu_header.classList.toggle("bx-x")
    navbarlinks.classList.toggle("links_active")
    
    
})