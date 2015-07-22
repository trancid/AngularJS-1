<?php

# Access PHPMyAdmin by https://angularjs1-trancid.c9.io/phpmyadmin

$mysqli = new mysqli(
                    getenv('IP'), 
                    getenv('C9_USER'), 
                    '', // empty pwd
                    'c9', // c9 DB
                    3306);
$sth = $mysqli->query("SELECT * FROM products");
$rows = array();
while($r = mysqli_fetch_assoc($sth)) {
    $rows[] = $r;
}
print json_encode($rows);
$mysqli->close();
?>