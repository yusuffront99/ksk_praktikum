<?php 

    include 'connection.php';

    $id = $_POST['id'];
    $sql = mysqli_query($connection, "DELETE FROM tbl_data WHERE id = '$id'");
    if($sql) {
        $result['status'] = true;
        $result['message'] = 'Deleted Data Successfully';
    } else {
        $result['status'] = false;
        $result['message'] = 'Deleted Data Failed';
    }

    echo json_encode($result);
?>