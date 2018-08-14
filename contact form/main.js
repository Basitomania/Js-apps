$(document).ready(function(){
    // using es6
    // init (() => {
    //     if (localStorage["name"]){
    //         $("#name").val(localStorage["name"]);
    //     }
    //     if (localStorage["email"]){
    //       $("#email").val(localStorage["email"]);
    //     }
    //     if (localStorage["message"]){
    //         $("#message").val(localStorage["message"]);
    //     }
    // });
    // init();
    function init() {
        if (localStorage["name"]){
            $("#name").val(localStorage["name"]);
        }
        if (localStorage["email"]){
          $("#email").val(localStorage["email"]);
        }
        if (localStorage["message"]){
            $("#message").val(localStorage["message"]);
        }
    }
    init();
});

$(".stored").change(function(){
    localStorage[$(this).attr("name")] = $(this).val();
})