function loca()
{
	var n;
	n=window.prompt("Enter the location");
	document.getElementById("l1").value= n;
}

function show() {
    alert("Thank You For Contact Us !!!");
    window.location.href = "./index.html";
   };
/* 
   function ureview(){
    let uname = document.querySelector("#uname").value;
    let userComment = document.querySelector("#comments").value;
    const newElement = document
        .querySelector("#reference")
        .cloneNode(true);

    newElement.style.visibility = "visible";
    console.log("hello");
    newElement.children[0].innerHTML = uname;
    newElement.children[1].innerHTML = userComment;

    const commentBox = document.querySelector("#ference");
    commentBox.appendChild(newElement);

    document.querySelector("#uname").value="";
    document.querySelector("#comments").value="";
   } */

 