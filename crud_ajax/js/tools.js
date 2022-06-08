$(document).ready(function(){

    bacaData();

    function bacaData(){
        $.ajax({
            type: 'GET',
            url: 'php/getData.php',
            dataType: 'JSON',
            success: function(response){
                console.log("hello");
            }
        });
    }
})