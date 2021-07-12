<?php
session_start();
$_SESSION['page_name'] = 'parc-publics';

if($_SESSION['current_page'] == 2) {
    header('Location: ./stades.php');
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

        <div id="scene" class="body parc-publics">
            <div class="bg" data-depth="0.7">
                <img src="./img/croso_parc.png" alt="">
            </div>
        </div>
    </div>

    <?php include_once('./includes/scripts.php') ?>

    <!-- Set page -->
    <?php $_SESSION['current_page'] = 2; ?>
</body>
</html>