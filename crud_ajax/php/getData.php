<?php 

    include 'connection.php';

        // $result = [];
        $sql = mysqli_query($connection, "SELECT * FROM tbl_data");
        $result = [];
    
        while($fetchData = mysqli_fetch_array($sql)){
            $result[] = $fetchData;
        }
    
        echo json_encode($result);

?>