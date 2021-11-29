<?php 
$pages = [
    'habitat',
    'parc-publics',
    'gares-aeroports',
    'stades',
    'lieux-evenementiels',
    'centres-commerciaux-industrie'
];
$indexCurrentPage = array_search($_SESSION['page_slug'], $pages);
$lastIndex = array_search(end($pages), $pages);
$urlArrorLeft = $indexCurrentPage == 0 ? $pages[$lastIndex] . '.php' : $pages[$indexCurrentPage-1] . '.php';
$urlArrorRight = $indexCurrentPage == $lastIndex ? $pages[0] . '.php' : $pages[$indexCurrentPage+1] . '.php';
?>
<div class="header">
    <div class="wrap-brand">
        <div id="trigger-sidebar">
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
            <a href="<?php echo $urlArrorLeft ?>">
                <i class="ion ion-ios-arrow-dropleft"></i>
            </a>
        </div>
        <div class="title">
            <p>Les univers CROSO FRANCE</p>
            <h2><?php echo $_SESSION['page_name'] ?></h2>
        </div>
        <div class="arrow arrow-right">
            <a href="<?php echo $urlArrorRight ?>">
                <i class="ion ion-ios-arrow-dropright"></i>
            </a>
        </div>
    </div>
</div>