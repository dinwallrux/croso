<?php 
    session_start();
    $_SESSION['page_slug'] = 'parc-publics';
    $randNumber = mt_rand(1,6);
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
        switch ($randNumber) {
            case 1:
                header('Location: ./habitat.php');
                exit;
                break;
            case 2:
                header('Location: ./parc-publics.php');
                exit;
                break;
            case 3:
                header('Location: ./gares-aeroports.php');
                exit;
                break;
            case 4:
                header('Location: ./stades.php');
                exit;
                break;
            case 5:
                header('Location: ./lieux-evenementiels.php');
                exit;
                break;
            default:
                header('Location: ./centres-commerciaux-industrie.php');
                exit;
                break;
        }
        ?>
    </div>

    <?php include_once('./includes/scripts.php') ?>
</body>
</html>