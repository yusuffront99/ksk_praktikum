<?php 

    include 'connection.php';

    $id = $_POST['id'];
    $nama_barang = $_POST['nama_barang'];
    $harga_barang = $_POST['harga_barang'];
    $stok = $_POST['stok'];

    $sql = mysqli_query($connection, "UPDATE tbl_data SET nama_barang = '$nama_barang', harga_barang = '$harga_barang', stok = '$stok' WHERE id = '$id'");
    
    if($sql) {
        $result['status'] = true;
        $result['message'] = 'Updated Data Successfully';
    } else {
        $result['status'] = false;
        $result['message'] = 'Updated Data Failed';
    }

    echo json_encode($result);
?>