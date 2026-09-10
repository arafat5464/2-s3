const title = document.getElementById ('title')
const text = document.getElementsByClassName ("text")
const btn = document.getElementById ("btn")
const list = document.getElementById ("list")
const pic = document.querySelector ('#pic')
const  text2 = document.querySelector(".text2")
const lili = document.querySelectorAll(".lili")
const box = document.querySelector("#box")


title.style.color = 'red'
title.style.backgroundColor ="blue"
title.style.fontSize = "50px"
title.style.margin  = "50px"




btn.style.backgroundColor ="red"
btn.style.color ="white"
btn.style.borderRadius ="15px"


btn.addEventListener("click", function() { 
  text.className = "text highlight"; 
});

btn.addEventListener("click", function() { 
  title.style.color = "black" 
});

btn.addEventListener("click", function() { 
  box.innerHTML = "<p> hello </p>"; 
});

btn.onclick = function(){
    let img= pic . getAttribute("src")


console.log(img);

pic.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjX8VfVqrV8lOZjEyomtv21_4rakMkxGhD7t1zg33KQ&s=10 ")
}

lili[0].style.backgroundColor ="red"
lili[1].style.backgroundColor ="green"
lili[2].style.backgroundColor ="blue"