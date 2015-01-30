<?php

    include "dbconnect.php";

    $db = mysql_select_db($database);
    $db = mysql_connect($host, $username, $password);

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    @$vehicle = $request->vehicle->{'value'};
    @$manufacturer = $request->manufacturer->{'value'};
    @$speed = $request->speed->{'value'};
    @$width = $request->width->{'value'};
    @$height = $request->height->{'value'};
    @$rim = $request->rim->{'value'};

    @$season = $request->season->{'value'};

    if ($season == "w") {
        $seasontext = "Winterreifen";
    };

    if ($season == "s") {
        $seasontext = "Sommerreifen";
    };

    if ($season == "g") {
        $seasontext = "Ganzjahresreifen";
    };

    if ($manufacturer!="all" && $speed!="all") {
        $query = "SELECT * FROM reifen WHERE `COL 15`='$vehicle' AND `COL 14`='$season' AND `COL 6`='$manufacturer' AND `COL 13`='$speed' AND `COL 9`='$width' AND `COL 10`='$height' AND `COL 11`='$rim' ORDER BY `COL 4` * 1 ASC";
    }
    else if($manufacturer!="all" && $speed=="all" ) {
        $query = "SELECT * FROM reifen WHERE `COL 15`='$vehicle' AND `COL 14`='$season' AND `COL 6`='$manufacturer' AND `COL 9`='$width' AND `COL 10`='$height' AND `COL 11`='$rim' ORDER BY `COL 4` * 1 ASC";
    }
    else if($manufacturer=="all" && $speed!="all" ) {
        $query = "SELECT * FROM reifen WHERE `COL 15`='$vehicle' AND `COL 14`='$season' AND `COL 13`='$speed' AND `COL 9`='$width' AND `COL 10`='$height' AND `COL 11`='$rim' ORDER BY `COL 4` * 1 ASC";
    }
    else if($manufacturer=="all" && $speed=="all" ) {
        $query = "SELECT * FROM reifen WHERE `COL 15`='$vehicle' AND `COL 14`='$season' AND `COL 9`='$width' AND `COL 10`='$height' AND `COL 11`='$rim' ORDER BY `COL 4` * 1 ASC";
    }

    //$query = "SELECT * FROM reifen LIMIT 100 OFFSET 1";

    $result = mysql_query($query, $db);
    
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
        $row_array['season']            = $seasontext;
        $row_array['vehicle']           = htmlentities($row['COL 15']);
        $row_array['fuel']              = htmlentities($row['COL 17']);
        $row_array['grip']              = htmlentities($row['COL 18']);
        $row_array['noise']             = htmlentities($row['COL 19']);
        array_push($json_response,$row_array);
    }
    
    echo json_encode($json_response);
     
?>