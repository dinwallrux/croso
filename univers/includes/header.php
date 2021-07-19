<?php 
if($_SESSION['page_name'] == 'parc-publics') {
    $url = 'stades.php';
} else {
    $url = 'parc-publics.php';
}
?>
<div class="header">
    <div class="wrap-brand">
        <div id="trigger-sidebar" class="back">
            <i class="ion ion-md-menu"></i>
            <i class="ion ion-md-close close"></i>
        </div>
        <div class="brand">
            <a href="#">
                <img src="./img/brand.png" alt="">
            </a>
        </div>
    </div>
    <div class="wrap-title">
        <div class="arrow arrow-left">
            <a href="<?php echo $url ?>">
                <i class="ion ion-ios-arrow-dropleft"></i>
            </a>
        </div>
        <div class="title">
            <p>Les univers CROSO FRANCE</p>
            <h2><?php echo $_SESSION['page_name'] ?></h2>
        </div>
        <div class="arrow arrow-right">
            <a href="<?php echo $url ?>">
                <i class="ion ion-ios-arrow-dropright"></i>
            </a>
        </div>
    </div>
</div>