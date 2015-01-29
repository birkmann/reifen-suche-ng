<?php
	
	include "dbconnect.php";

    $db = mysql_select_db($database);
    $db = mysql_connect($host, $username, $password);

    $result = mysql_query("select * from reifen LIMIT 100 OFFSET 1", $db);
    
    $json_response = array();

    while ($row = mysql_fetch_assoc($result)) {
        $row_array['number']            = htmlentities($row['COL 1']); 
        $row_array['cost']              = htmlentities($row['COL 4']); 
        $row_array['manufacturer']      = htmlentities($row['COL 6']); 
        $row_array['name']              = htmlentities($row['COL 7']);        
        $row_array['width']             = htmlentities($row['COL 9']);
        $row_array['height']            = htmlentities($row['COL 10']);
        $row_array['rim']               = htmlentities($row['COL 11']);
        $row_array['loadindex']         = htmlentities($row['COL 11']);
        $row_array['speedindex']        = htmlentities($row['COL 13']);
        $row_array['season']            = htmlentities($row['COL 14']);
        $row_array['vehicle']           = htmlentities($row['COL 15']);
        $row_array['fuel']              = htmlentities($row['COL 17']);
        $row_array['grip']              = htmlentities($row['COL 18']);
        $row_array['noise']             = htmlentities($row['COL 19']);
        array_push($json_response,$row_array);
    }
    
    echo json_encode($json_response);
     
?>