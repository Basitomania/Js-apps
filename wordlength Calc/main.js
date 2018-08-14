let btn = document.getElementById("btn");
let input = document.getElementById("str");
let output = document.getElementById("output");

const print = function(msg){
  output.innerHTML = `Length is ${msg}`
}

btn.onclick = function(event){
  print(input.value.length);
}

// var print = function(msg){
//     document.getElementById("output").innerHTML = `Length is ${msg}`;
// }

// document.getElementById("btn").onclick = function(event){
//     print(document.getElementById("str").value.length);
// }