<?php 

    include 'connection.php';

    $nama_barang = $_POST['nama_barang'];
    $harga_barang = $_POST['harga_barang'];
    $stok = $_POST['stok'];

    $sql = mysqli_query($connection, "INSERT INTO `tbl_data` (`id`, `nama_barang`, `harga_barang`, `stok`) VALUES (NULL, '$nama_barang', '$harga_barang', '$stok')");
    
    if($sql) {
        $result['status'] = true;
        $result['message'] = 'Added Data Successfully';
    } else {
        $result['status'] = false;
        $result['message'] = 'Added Data Failed';
    }

    echo json_encode($result);
?>