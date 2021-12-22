<div class="sidebar collapsed">
    <div class="top">
        <h3>Bienvenue chez Croso France!</h3>
        <p>Parcourez nos univers et tous les produits Croso associés :</p>
        <ul class="menus">
            <li>
                <a href="<?php echo($_SESSION['page_slug'] == 'habitat' ? '#' : './habitat.php') ?>" data-direction="sidebar">
                    <i class="ion ion-ios-square"></i>
                    <span>Habitat</span>
                </a>
            </li>
            <li>
                <a href="<?php echo($_SESSION['page_slug'] == 'parc-publics' ? '#' : './parc-publics.php') ?>" data-direction="sidebar">
                    <i class="ion ion-ios-square"></i>
                    <span>Parcs publics</span>
                </a>
            </li>
            <li>
                <a href="<?php echo($_SESSION['page_slug'] == 'gares-aeroports' ? '#' : './gares-aeroports.php') ?>" data-direction="sidebar">
                    <i class="ion ion-ios-square"></i>
                    <span>Gares & aéroports</span>
                </a>
            </li>
            <li>
                <a href="<?php echo($_SESSION['page_slug'] == 'stades' ? '#' : './stades.php') ?>" data-direction="sidebar">
                    <i class="ion ion-ios-square"></i>
                    <span>Stades</span>
                </a>
            </li>
            <li>
                <a href="<?php echo($_SESSION['page_slug'] == 'lieux-evenementiels' ? '#' : './lieux-evenementiels.php') ?>" data-direction="sidebar">
                    <i class="ion ion-ios-square"></i>
                    <span>Lieux évènementiels</span>
                </a>
            </li>
            <li>
                <a href="<?php echo($_SESSION['page_slug'] == 'centres-commerciaux-industrie' ? '#' : './centres-commerciaux-industrie.php') ?>" data-direction="sidebar">
                    <i class="ion ion-ios-square"></i>
                    <span>Centres commerciaux & industrie</span>
                </a>
            </li>
            <li>
                <a href="<?php echo($_SESSION['page_slug'] == 'retail-commerce' ? '#' : './retail-commerce.php') ?>" data-direction="sidebar">
                    <i class="ion ion-ios-square"></i>
                    <span>Retail / commerce</span>
                </a>
            </li>
        </ul>
        <p>Vous pouvez également accéder directement à notre site internet classique :</p>
        <button class="btn btn-outline">
            <span>Accéder au site internet Croso France</span>
        </button>
    </div>

    <div class="bottom">
        <p>Bonne visite, n’hésitez pas à nous contacter pour avoir plus d’informations!</p>
        <ul class="social-media">
            <li>
                <a href="#">
                    <img src="./img/mail.png" alt="">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="./img/facebook.png" alt="">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="./img/linkedin.png" alt="">
                </a>
            </li>
        </ul>
    </div>
</div>