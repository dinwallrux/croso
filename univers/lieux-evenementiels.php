<?php
session_start();
$_SESSION['page_name'] = 'Lieux évènementiels';
$_SESSION['page_slug'] = 'lieux-evenementiels';
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

        <div id="scene" class="body lieux-evenementiels">
            <div class="bg" data-depth="0.7">
                <img src="./img/lieux-evenementiels-min.jpg" alt="">
            </div>
        </div>
    </div>

    <?php include_once('./includes/scripts.php') ?>

</body>
</html>