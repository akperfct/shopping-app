var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	toogleOn(li);
	addDelete(li);
	input.value = "";
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toogleOn(list)
{  list.addEventListener("click",function()
  {
	list.classList.toggle("done");
  });
}


function addDelete(list)
{
	var del=document.createElement("button");
	del.className="delete";
	del.appendChild(document.createTextNode("Delete"));
	list.appendChild(del);
	var btn=document.querySelectorAll(".delete");
    
    btn.forEach(deleteOnClick);
}

function deleteOnClick(button)
{
	button.addEventListener("click",function()
	{
		button.parentElement.remove();
	});
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
 
 var li=document.querySelectorAll("li");
 
 console.log(li);
   
li.forEach(toogleOn);
li.forEach(addDelete);
 

   