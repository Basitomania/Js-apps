/* var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function(){
    if (XHR.readyState == 4){
        if(XHR.status == 200) {
            console.log(XHR.responseText);
        } else {
            console.log("There was a problem")
        }s
    }
}
XHR.open("GET", "https://api.github.com/zen")
XHR.send(); */
/*var btn = document.querySelector("#btn");
if (btn) {
    btn.addEventListener("click", swapper, false);
}*/

var btn = document.querySelector("#btn"); 
var img = document.querySelector("#photo");

btn.addEventListener("click", function () {

    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var url = JSON.parse(XHR.responseText).message;
            img.src = url;
        }
     }

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
})
