<?php 
    session_start();
    // $randNumber = mt_rand(1,2);
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

        <?php 
        if($_SESSION["current_page"] == 1) {
            $_SESSION["current_page"] = 2;
            header('Location: ./parc-publics.php');
            exit;
        } else { 
            $_SESSION["current_page"] = 1;
            header('Location: ./stades.php');
            exit;
        } 
        ?>
    </div>

    <?php include_once('./includes/scripts.php') ?>
</body>
</html>