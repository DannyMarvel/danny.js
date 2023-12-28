const wrap= document.querySelector("#wrapper");
//grab element within elements
const grab =document.querySelector( "#list li:nth-child(2) .name");
var books= document.querySelector("#list li .name");
//querySelector selects only one
//querySelectorAll selects all of them

var booker= document.querySelectorAll("#list li .name");
//console.log(booker);
Array.from(booker).forEach(function(book)
{ book.textContent += " (book title)"; 
});

// const clonedwrap= wrap.cloneNode(true);

const bookList= document.querySelector("#list");
console.log("the parent node is", bookList.parentNode);
//.childNodes .children .nextSibling

var h2= document.querySelector("#List h2");
console.log(h2);

h2.addEventListener("click", function(e){
console.log(e.target);
});

//How to delete all 
/*var button= document.querySelectorAll("#list .delete"); 
// How to turn into variable
Array.from(button).forEach(function(bt){
bt.addEventListener("click", function(e){

const li= e.target.parentElement;  
//To Remove li parent element
li.parentNode.removeChild(li)  

});     
});*/
// Delete all Books

const list=document.querySelector("#list  ul");

list.addEventListener("click", function(e){
if(e.target.className == "delete"){
const li= e.target.parentElement;
list.removeChild(li); 
    
}
});

//Add to book-list
const addForm= document.forms["Add"];

addForm.addEventListener("submit", function(e){
e.preventDefault();
const value= addForm.querySelector('input[type="text"]').value;
//create elements

const listed= document.createElement("li");
const bookName= document.createElement("span");
const deleteBtn= document.createElement("span"); 

//add content
bookName.textContent=value;
deleteBtn.textContent= "delete";

//add classes
bookName.classList.add("name");
deleteBtn.classList.add("delete");



// append to DOM
listed.appendChild(bookName);
listed.appendChild(deleteBtn);
list.appendChild(listed);
});

//book.getAttribute book.setAttribute book.hasAttribute
//How to hide Books

const hideBox= document.querySelector("#hide");

hideBox.addEventListener("change", function(e){
if(hideBox.checked){
list.style.display="none";    
} else{
list.style.display="initial";   
}
});

//creating a search function
const searchBar= document.forms["search"].querySelector("input");
searchBar.addEventListener("keyup", function(e){
const term= e.target.value.toLowerCase();
const bucks= list.getElementsByTagName("li");
Array.form(bucks).forEach(function(cook){
const title=cook.firstElementChild.textContent; 
if(title.toLowerCase().indexOf(term)!=-1){
cook.style.display="block";

} else{cook.style.display="none";
}

}) 

})






 

 
 