<?php
session_start();
$_SESSION['page_name'] = 'Gares & aéroports';
$_SESSION['page_slug'] = 'gares-aeroports';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Croso</title>
    
    <?php include_once('./includes/head_scripts.php') ?>
</head>
<body>
    <div class="container">
        <?php include_once('./includes/header.php') ?>

        <?php include_once('./includes/sidebar.php') ?>

        <?php include_once('./includes/overlay.php') ?>

        <div class="body gares-aeroports">
            <div class="drag drag--left">
                <i class="ion ion-ios-arrow-round-back"></i>
            </div>
            <div class="drag drag--right">
                <i class="ion ion-ios-arrow-round-forward"></i>
            </div>
            <div class="bg scrolling-wrapper">
                <img src="./img/gares-aeroports.jpg" alt="">
                <div class="mirror-width-image"></div>
            </div>
        </div>
    </div>

    <?php include_once('./includes/scripts.php') ?>

</body>
</html>