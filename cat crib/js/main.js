$("#btn").click(function(){
    $.ajax({
        method: "GET",
        url: "https://random.me/meow",
        dataType: "json"
    })
    .done(function(data){
        $("#catImg").attr("src", data.file[0]);
    })
    .fail(function(){
        alert("ERROR!")
    })
})
