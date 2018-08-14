var url = "https://randomuser.me/api/";
var btn = document.querySelector("#btn");
var fullnameDisp = document.querySelector("#fullname");
var pictureDisp = document.querySelector("#avatar");
var username = document.querySelector("#username");
var emailDisp = document.querySelector("#email");
var city = document.querySelector("#city");

btn.addEventListener("click", function(){
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(displayErrors)
});

function handleErrors(res) {
    if (!res.ok){
        throw Error(res.status);
    }
    return res;
}

function parseJSON (res) {
    return res.json().then(function(parsedData){
        return parsedData.results[0];
    });
}

function updateProfile (data) {
    console.log(data);
    var fullname = data.name.title + " " + data.name.first + " " + data.name.last;
    fullnameDisp.innerText = fullname;
    pictureDisp.src = data.picture.medium;
    emailDisp.innerText = data.email;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
}

function displayErrors(err) {
    console.log("INSIDE displayErrors!");
    console.log(err);
}