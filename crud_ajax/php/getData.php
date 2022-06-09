<?php 

    include 'connection.php';

        $sql = mysqli_query($connection, "SELECT * FROM tbl_data");
        $result = array();
        while($fetchData = mysqli_fetch_array($sql)){
            $result[] = $fetchData;
        }
    
        echo json_encode($result);

?>