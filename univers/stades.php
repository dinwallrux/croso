<?php
session_start();
$_SESSION['page_name'] = 'Stades';
$_SESSION['page_slug'] = 'stades';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Croso</title>
    
    <?php include_once('./includes/head_scripts.php') ?>
</head>
<body data-barba="wrapper">
    <div class="container" data-barba="container">
        <?php include_once('./includes/header.php') ?>

        <?php include_once('./includes/sidebar.php') ?>

        <?php include_once('./includes/overlay.php') ?>

        <div class="body stades">
            <div class="drag drag--left">
                <i class="ion ion-ios-arrow-round-back"></i>
            </div>
            <div class="drag drag--right">
                <i class="ion ion-ios-arrow-round-forward"></i>
            </div>
            <div class="bg scrolling-wrapper">
                <img src="./img/stades.jpg" alt="">
                <div class="mirror-width-image"></div>
            </div>
        </div>
    </div>

    <?php include_once('./includes/scripts.php') ?>

</body>
</html>