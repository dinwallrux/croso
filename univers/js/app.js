// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);

jQuery(document).ready(function ($) {
    // Toggle Sidebar
    !function () {
        let trigger = $('#trigger-sidebar');
        let isCollapsed = $('.sidebar').hasClass('collapsed');

        if(!isCollapsed) {
            setTimeout(function () {
                $('.sidebar').addClass('collapsed')
                trigger.removeClass('back');
            }, 5000)
        }

        // Remove class if burger menu is not exist for first time
        if (isCollapsed) trigger.removeClass('back');

        if (!isCollapsed) {
            // Close header title page when click on it
            $('.header > div').not('.wrap-brand').click(function (e) {
                $('.sidebar').addClass('collapsed')
                trigger.removeClass('back')
            })
            // Close sidebar when click body of the illustration
            $('.body').on('click', function (e) {
                $('.sidebar').addClass('collapsed')
                trigger.removeClass('back')
            })
        }

        // Trigger sidebar to appear by click
        $('#trigger-sidebar i').on('click', function (e) {
            $('.sidebar').toggleClass('collapsed');
            trigger.toggleClass('back')
        });


    }();

    // Fetch Tooltip
    !function () {
        let par_publics = [
            {
                idButton: 'number-1',
                idTooltip: 'tooltip-1',
                value: '1',
                tooltipTitle: 'Borne de voirie',
                tooltipText: 'Avec leur design élégant et harmonieux nos bornes se fondent à merveille dans le paysage urbain.',
                link: 'https://croso-france.com/226-bornes-decoratives-et-protections-darbres-mars',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Appui-vélos',
                tooltipText: 'Nos appuis-vélos en acier galvanisé à chaud et inox prennent une place de plus en plus importante dans l’aménagement des espaces publics.',
                link: '#',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'SolarEye',
                tooltipText: 'Spot à encastrer au sol entièrement alimenté par l’énergie solaire, fournit un balisage à lumière LED à visibilité de 360°.',
                link: 'https://croso-france.com/crososolar/7243-solareye.html',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Bornes lumineuses',
                tooltipText: 'Poteau en acier inoxydable avec système d’éclairage intelligent intégrant la technique LED avec une cellule photovoltaïque placée dans la tête.',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de modèles de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique…',
                link: '#',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Corbeille de propreté',
                tooltipText: 'Nos corbeilles de propreté sont esthétiques, fonctionnelles et pratiques pour créer une harmonie avec les modèles de banc.',
                link: '#',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Grille d’arbres',
                tooltipText: 'Nos grilles d’arbres en fonte, à la fois élégantes et pratiques, conviennent à n’importe quel environnement et s’adaptent à différentes tailles de tronc.',
                link: '#',
                tooltipButton: 'détails du produit'
            },
        ]

        if($('.parc-publics').length > 0) {
            par_publics.forEach(function (data) {
                let isDisabledButton = data.link == '#' ? 'btn-disabled' : 'btn-success';
                $('.parc-publics .bg').append(`
                    <div class="numbers" >
                        <div id="${data.idButton}" class="number">
                            <span>${data.value}</span>
                        </div>
                        <div id="${data.idTooltip}" class="tooltip">
                            <div class="tooltip-body">
                                <h4>${data.tooltipTitle}</h4>
                                <p>${data.tooltipText}</p>
                            </div>
                            <div class="tooltip-footer">
                                <a href="${data.link}" class="btn ${isDisabledButton}">
                                    <span>${data.tooltipButton}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                `);
            })

        }

        let stades = [
            {
                idButton: 'number-1',
                idTooltip: 'tooltip-1',
                value: '1',
                tooltipTitle: 'Garde-corps en verre',
                tooltipText: 'Les garde-corps tout en verre Crosilux avec main courante à LED associent design et fonctionnalité pour des installations aussi esthétiques que faciles à poser.',
                link: 'https://croso-france.com/23-main-courantes-sur-verre',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Appui-vélos',
                tooltipText: 'Nos appuis-vélos en acier galvanisé à chaud et inox prennent une place de plus en plus importante dans l’aménagement des espaces publics.',
                link: '#',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Barrière d’accès',
                tooltipText: 'Nos barrières d’accès permettent de gérer les accès aux allées, routes, chemins, aux parkings, … Cette gamme complète permet de fournir un produit adapté à chaque besoin.',
                link: 'https://croso-france.com/223-barrieres-et-portiques-dacces-tourniquets',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Borne de voirie',
                tooltipText: 'Avec leur design élégant et harmonieux nos bornes se fondent à merveille dans le paysage urbain.',
                link: 'https://croso-france.com/226-bornes-decoratives-et-protections-darbres-mars',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Borne lumineuse Solarpost ',
                tooltipText: 'Alimentée à 100% par l’énergie solaire grâce à ses panneaux solaires situés sur les 4 côtés de la borne, elle fournit un éclairage continu et intelligent.',
                link: 'https://croso-france.com/crososolar/7244-solarpost.html',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Poteaux à sangle',
                tooltipText: "La gamme de poteaux gère file Beltrac a été conçue pour allier design, solidité et facilité d'utilisation. Ils permettent d’améliorer les conditions de circulation d’orientation et de réception des visiteurs.",
                link: 'https://croso-france.com/79-lieux-culturels-et-publics',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Garde-corps inox',
                tooltipText: 'Les poteaux en inox ou thermolaqués de la gamme CROSINOX® sont fabriqués à la demande et sur-mesure pour escaliers, balcons, terrasses ou mezzanines.',
                link: 'https://croso-france.com/22-gardes-corps-inox-en-kits',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-7-1',
                idTooltip: 'tooltip-7-1',
                value: '7',
                tooltipTitle: 'Garde-corps inox',
                tooltipText: 'Les poteaux en inox ou thermolaqués de la gamme CROSINOX® sont fabriqués à la demande et sur-mesure pour escaliers, balcons, terrasses ou mezzanines.',
                link: 'https://croso-france.com/22-gardes-corps-inox-en-kits',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'Barrière extensible de sécurité',
                tooltipText: 'Cette barrière extensible de sécurité est autoportante, robuste et supporte de fortes pressions. Facile et rapide à mettre en œuvre et à transporter, elle se plie et se déplie en seulement 5 sec. par une seule personne.',
                link: 'https://croso-france.com/316-barriere-extensible-de-securite',
                tooltipButton: 'détails du produit'
            },
        ]

        if($('.stades').length > 0) {
            stades.forEach(function (data) {
                $('.stades .bg').append(`
                    <div class="numbers" data-depth="0.7">
                        <div id="${data.idButton}" class="number">
                            <span>${data.value}</span>
                        </div>
                        <div id="${data.idTooltip}" class="tooltip">
                            <div class="tooltip-body">
                                <h4>${data.tooltipTitle}</h4>
                                <p>${data.tooltipText}</p>
                            </div>
                            <div class="tooltip-footer">
                                <a href="${data.link}" class="btn btn-success">
                                    <span>${data.tooltipButton}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                `);
            })
        }
    }();

    // Add tooltip
    !function () {
        let numbers = $('.numbers')

        numbers.each(function (i, el) {
            let idButton = $(el).find('.number').attr('id');
            let tooltip = $(el).find('.tooltip');

            tooltip.css('display', 'block');
            tippy('#'+idButton, {
                content: tooltip[0],
                arrow: true,
                allowHTML: true,
                placement: 'auto',
                trigger: 'click',
                interactive: true,
                onShown() {
                    $('.btn-disabled')
                        .closest('.tippy-popper[x-placement^=top]')
                        .find('.tippy-arrow')
                        .css('border-top', '8px solid #424242');
                }
            });

        })
    }();

    // Parallax
    !function () {
        let scene = document.getElementById('scene');
        let parallaxInstance = new Parallax(scene, {
            relativeInput: true,
            pointerEvents: true,
        });
    }();

    // Random page
    // !function () {
    //     const baseUrl =  location.origin;
    //     const endpoints = ["", "stades.php"];
    //     const rand_endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];

    //     const newUrl = baseUrl + '/univers/' + rand_endpoint;

    //     if (!sessionStorage.getItem("random_url")) {
    //         window.location = newUrl;

    //         sessionStorage.setItem("random_url", newUrl);
    //     }

    //     setTimeout(function(){
    //         sessionStorage.removeItem("random_url")
    //     }, 10000)
    // }();
})