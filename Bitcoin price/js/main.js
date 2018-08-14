/*
var priceShow = document.querySelector("#price");
var btn = document.querySelector("button");
var currency = "EUR";

btn.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);
            var price = data.bpi[currency].rate;
            priceShow.innerText = price + " " + currency;
        }

    }
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
}) */

// using promises
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
var priceShow = document.querySelector("#price");
var btn = document.querySelector("button");
//add eventlisterner
btn.addEventListener("click", function () {
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updatePrice)
})

function handleErrors(res){
    if(!res.ok){
        throw Error(res.status);
    }
    return res;
}

function parseJSON(response) {
    console.log(response);
    return response.json()
}

function updatePrice (data) {
    var rate = data.bpi.EUR.rate + " EUR";
    priceShow.innerText = rate;
}