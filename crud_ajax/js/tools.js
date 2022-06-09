$(document).ready(function(){

    bacaData();

    $('#btn-tambah').click(function(){
        tambahData();
    })

    function bacaData(){
        $('.targetData').html('');
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

        $.ajax({
            type: 'POST',
            url: 'php/addData.php',
            data: 'nama_barang='+nama_barang+"&harga_barang="+harga_barang+"&stok="+stok,
            dataType: 'JSON',
            success:function(response){
                if(response.success == true){
                    alert(response.message);
                    bacaData();
                    resetForm();
                }else{
                    alert(response.message);
                    bacaData();
                    resetForm();
                }
            }
        });
    }

    function resetForm(){
        $('#txt_nama_barang').val('');
        $('#txt_harga_barang').val('');
        $('#txt_stok').val('');
    }
});