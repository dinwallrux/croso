<?php
session_start();
$_SESSION['page_name'] = 'stades';

if($_SESSION['current_page'] == 1) {
    header('Location: ./parc-publics.php');
    exit;
}
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

        <div id="scene" class="body stades">
            <div class="bg" data-depth="0.7">
                <img src="./img/croso_stade.png" alt="">
            </div>
        </div>
    </div>

    <?php include_once('./includes/scripts.php') ?>

    <!-- Set page -->
    <?php $_SESSION['current_page'] = 1; ?>
</body>
</html>