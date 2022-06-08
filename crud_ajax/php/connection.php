<?php 

    $connection = mysqli_connect('localhost', 'root', '', 'toko');

    if(mysqli_connect_errno()){
        echo "Failed connection to database" . mysqli_connect_error();
    } else {
        echo "Successfully";
    }
?>