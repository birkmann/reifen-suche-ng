<?php
	
	include "dbconnect.php";

	$db = mysql_select_db($database) or die( "Unable to select database.");
    $db = mysql_connect($host, $username, $password);

    $result = mysql_query("select * from reifen LIMIT 10 OFFSET 1", $db);
    
    $json_response = array();
    
    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
        $row_array['order_number'] = $row['COL 1'];
        $row_array['manufacturer'] = $row['COL 6'];
        $row_array['product_name'] = $row['COL 7'];

        array_push($json_response,$row_array);
    }

    echo json_encode($json_response);
    
    //fclose($db);
 
?>