let btn = document.querySelector("#btn")
let inputed = document.querySelector("#inptone")
let add = document.querySelector(".addtodo")
btn.addEventListener("click",function(){
let createtext = document.createTextNode(inputed.value)
if(inputed.value===""){
    alert("error")
}
else{
inputed.value=""

let createbox = document.createElement("div")
createbox.className = "box";
let left = document.createElement("div")
left.className = "left"
left.appendChild(createtext)


let icon = document.createElement('i');
icon.className = 'fa-solid fa-trash right';
createbox.appendChild(left)
createbox.appendChild(icon)
   add.appendChild(createbox)
icon.addEventListener("click",function(elem){
    let removeElem = elem.target.parentNode
    removeElem.remove()
})
}
})