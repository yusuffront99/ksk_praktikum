$(document).ready(function(){

    bacaData();

    $('#btn-tambah').click(function(){
        tambahData();
    })

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

    function tambahData(){
        let nama_barang = $('#txt_nama_barang').val();
        let harga_barang = $('#txt_harga_barang').val();
        let stok = $('#txt_stok').val();

        alert(nama_barang + harga_barang + stok);
    }

})