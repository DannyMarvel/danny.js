function snowFlake(){
  const create = document.createElement("i");
  create.classList.add("fas");
  create.classList.add("snow");
  create.style.left = Math.random() * window.innerWidth + "px";
  create.style.animationDuration= Math.random()*3 + 7 + "s";
  create.style.opacity= Math.random();
  create.style.fontSize= Math.random() * 10 + 10+ "px ";    
  
  document.body.appendChild(create).innerHTML="*";

    
}

setInterval(snowFlake, 100);
setTimeout(() => {
create.remove();

},  5000)
console.log(create);