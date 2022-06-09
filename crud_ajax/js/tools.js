$(document).ready(function(){

    bacaData();

    function bacaData(){
        $.ajax({
            type: 'GET',
            url: 'php/getData.php',
            dataType: 'JSON',
            success: function(response){
                var i;
                var data = '';

                for(i = 0; i < response.length; i++){
                    data += 
                    `
                    <tr>
                    <td>`+(i+1)+`</td>
                    <td>`+response[i].nama_barang+`</td>
                    <td>`+response[i].harga_barang+`</td>
                    <td>`+response[i].stok+`</td>
                    </tr>
                    `
                }
                $('.targetData').append(data);
            }
        });
    }
})