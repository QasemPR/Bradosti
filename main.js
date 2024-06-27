let x = document.getElementById("menu") ;
let c=  document .getElementById("myul") ;
x.onclick = ()=>{
    if(c.classList=="active"){
        c.classList.remove("active") ;
    }else{
        c.classList.add("active") ;
    }
}