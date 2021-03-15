var nodelist = document.getElementsByTagName("li");
var i;

var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    // event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
for(i =0; i<nodelist.length; i++){
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);
  nodelist[i].appendChild(span);


}
var close = document.getElementsByClassName("close");
var i;

for(i =0; i<close.length; i++){
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }

}

function newElement(){
  var li = document.createElement("li");
  var inputvalue = document.getElementById("myInput").value;
  var sun = document.createTextNode(inputvalue);
  li.appendChild(sun);

  if(inputvalue === ""){
    alert("you have to write some thing");
  }
  else{
    document.getElementById("myUL").appendChild(li);
    li.className = "list-group-item"
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for(i =0; i<close.length; i++){
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.display = "none";
    }
  
  }
}