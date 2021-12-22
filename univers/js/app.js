// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);

jQuery(document).ready(function ($) {
    // Toggle Sidebar
    !function () {
        let trigger = $('#trigger-sidebar');
        let isCollapsed = $('.sidebar').hasClass('collapsed');

        if(!sessionStorage.getItem('isSidebarCollapsed')) {
            setTimeout(function () {
                // open the sidebar
                $('.sidebar').removeClass('collapsed')
                trigger.addClass('back');
                sessionStorage.setItem('isSidebarCollapsed', true);

                // close the sidebar after opened
                setTimeout(function () {
                    $('.sidebar').addClass('collapsed')
                    trigger.removeClass('back');
                }, 5000)
            }, 100)
        }

        // Remove class if burger menu is not exist for first time
        if (!isCollapsed) trigger.removeClass('back');

        if (isCollapsed) {
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

    // transitions animation page
    function slide(targets, step, direction){
        const duration = 1000;
        const from = step === 'leave' ? 0 : 100;
        const to = step === 'leave' ? 100 : 0;

        targets.style.transform = direction === 'next' ?
            `translateX(${from}%)` :
            `translateX(-${from}%)`;

        const translateX = direction === 'next' ? `-${to}%` : `${to}%`;
        const staggerX = window.innerWidth * 0.1;
        const anim = anime.timeline({
            easing: 'easeInOutQuart',
            duration,
        });

        anim.add({
            targets,
            translateX,
        });


        if (step === 'enter') {
            anim.add({
                targets: targets.querySelectorAll('main > *'),
                translateX: direction === 'next' ? [staggerX, 0] : [-staggerX, 0],
                duration: duration * 0.6,
                easing: 'easeOutQuart',
                delay: anime.stagger(100),
            }, '-=500');
        }

        return anim.finished;
    }

    // init barba transition page
    barba.hooks.before(() => {
        barba.wrapper.classList.add('is-animating');
    });
    barba.hooks.after(() => {
        barba.wrapper.classList.remove('is-animating');
        location.reload();
    });
    barba.init({
        debug: true,
        transitions: [
            {
                sync: true,
                custom: ({ trigger }) => trigger.dataset && trigger.dataset.direction === 'next',
                leave: ({ current }) => slide(current.container, 'leave', 'next'),
                enter: ({ next }) => {
                    slide(next.container, 'enter', 'next')
                },
            },
            {
                sync: true,
                custom: ({ trigger }) => trigger.dataset && trigger.dataset.direction === 'prev',
                leave: ({ current }) => slide(current.container, 'leave', 'prev'),
                enter: ({ next }) => {
                    slide(next.container, 'enter', 'prev')
                },
            },
            {
                sync: true,
                custom: ({ trigger }) => trigger.dataset && trigger.dataset.direction === 'sidebar',
                leave: ({ current }) => {
                    return gsap.to(current.container, {
                        opacity: 0
                    });
                },
                enter: ({ next }) => {
                    return gsap.from(next.container, {
                        opacity: 0
                    });
                },
            },
        ]
    });

    // Fetch Tooltip
    !function () {
        // parc publics
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
                $('.parc-publics .bg .mirror-width-image').append(`
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

        // stades
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
                $('.stades .bg .mirror-width-image').append(`
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

        // habitat
        let habitat = [
            {
                idButton: 'number-1',
                idTooltip: 'tooltip-1',
                value: '1',
                tooltipTitle: 'Appui-vélos',
                tooltipText: 'Nos appuis-vélos en acier galvanisé à chaud et inox prennent une place de plus en plus importante dans l’aménagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Corbeille de propreté',
                tooltipText: 'Nos corbeilles de propreté sont esthétiques, fonctionnelles et pratiques pour créer une harmonie avec les modèles de banc.',
                link: 'https://croso-france.com/320-corbeilles-de-proprete',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de modèles de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique…',
                link: 'https://croso-france.com/321-bancs',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'SolarEye',
                tooltipText: 'Spot à encastrer au sol entièrement alimenté par l’énergie solaire, le Solareye fournit un balisage à lumière LED à visibilité de 360°.',
                link: 'https://croso-france.com/crososolar/7243-solareye.html',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Garde-corps en verre',
                tooltipText: 'Les garde-corps tout en verre Crosilux associent design et fonctionnalité pour des installations aussi esthétiques que faciles à poser.',
                link: 'https://croso-france.com/23-main-courantes-sur-verre',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Borne de voirie',
                tooltipText: "Avec leur design élégant et harmonieux nos bornes se fondent à merveille dans le paysage urbain.",
                link: 'https://croso-france.com/224-poteaux-et-bornes-de-voirie-saturn',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Garde-corps inox avec main courante à LED',
                tooltipText: 'Le garde corps inox avec mains-courantes à LED, rassemblant la main-courante et l’éclairage avec une variété de couleurs en un seul produit innovant, placent la qualité et le design à portée de main.',
                link: 'https://croso-france.com/22-gardes-corps-inox-en-kits',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'Arceau de parking',
                tooltipText: 'L’arceau de parking répond à un besoin aussi bien des collectivités que des particuliers. Il se caractérise par un design harmonieux et élégant, et une résistance à la corrosion hors pair.',
                link: 'https://croso-france.com/227-arceaux-de-parking-merkur',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-9',
                idTooltip: 'tooltip-9',
                value: '9',
                tooltipTitle: 'Portique',
                tooltipText: 'Le portique de limitation de hauteur sert à réguler et à empêcher le trafic de certains véhicules hauts, dans certaines zones (routes et voies de circulation, parkings). La hauteur est réglable en fonction de la restriction nécessaire.',
                link: 'https://croso-france.com/223-barrieres-et-portiques-dacces-tourniquets',
                tooltipButton: 'détails du produit'
            },
        ]

        if($('.habitat').length > 0) {
            habitat.forEach(function (data) {
                $('.habitat .bg .mirror-width-image').append(`
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

        // gares-aeroports
        let garesAeroports = [
            {
                idButton: 'number-1',
                idTooltip: 'tooltip-1',
                value: '1',
                tooltipTitle: 'Appui-vélos',
                tooltipText: 'Nos appuis-vélos en acier galvanisé à chaud et inox prennent une place de plus en plus importante dans l’aménagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Borne lumineuse Solarpost',
                tooltipText: 'Alimentée à 100% par l’énergie solaire grâce à ses panneaux solaires situés sur les 4 côtés de la borne, elle fournit un éclairage continu et intelligent.',
                link: 'https://croso-france.com/crososolar/7244-solarpost.html',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Borne de voirie',
                tooltipText: 'Avec leur design élégant et harmonieux nos bornes se fondent à merveille dans le paysage urbain.',
                link: 'https://croso-france.com/226-bornes-decoratives-et-protections-darbres-mars',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de modèles de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique…',
                link: 'https://croso-france.com/321-bancs',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Corbeille de propreté',
                tooltipText: 'Nos corbeilles de propreté sont esthétiques, fonctionnelles et pratiques pour créer une harmonie avec les modèles de banc.',
                link: 'https://croso-france.com/320-corbeilles-de-proprete',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Poteaux à sangle',
                tooltipText: "Améliorer les conditions de circulation, d’orientation et de réception des voyageurs est une affaire de pro : la gamme de poteaux à sangle Viaguide a été conçue pour allier design, solidité et facilité d'utilisation.",
                link: 'https://croso-france.com/78-aeroports-et-transport',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Panneaux d’information',
                tooltipText: 'Complément idéal des poteaux Viaguide, les panneaux d’information Beltrac, disponibles en A4 ou A3, permettent d’informer ou d’orienter vos passagers.',
                link: 'https://croso-france.com/aeroports-et-transport/4178-beltrac-signaletique-panneaux-d-information-aluminium.html',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'Garde-corps en verre',
                tooltipText: 'Les garde-corps tout en verre Crosilux associent design et fonctionnalité pour des installations aussi esthétiques que faciles à poser. Ils peuvent être équipés d’une main courante avec ou sans LED',
                link: 'https://croso-france.com/40-erp',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-9',
                idTooltip: 'tooltip-9',
                value: '9',
                tooltipTitle: 'Barrière extensible de sécurité',
                tooltipText: 'Cette barrière extensible de sécurité est autoportante, robuste et supporte de fortes pressions. Facile et rapide à mettre en œuvre et à transporter, elle se plie et se déplie en seulement 5 sec. par une seule personne.',
                link: 'https://croso-france.com/316-barriere-extensible-de-securite',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-10',
                idTooltip: 'tooltip-10',
                value: '10',
                tooltipTitle: 'JetTrac, le chariot de fermeture avec sangle',
                tooltipText: "Le système JetTrac a été conçu pour une utilisation en extérieur dans des conditions météorologiques très variées. Facile à déplacer, il convient pour la protection rapide de zones dangereuses, en particulier sur de longues distances dans les aéroports.",
                link: 'https://croso-france.com/aeroports-et-transport/4174-jettrac.html',
                tooltipButton: 'détails du produit'
            },
        ]

        if($('.gares-aeroports').length > 0) {
            garesAeroports.forEach(function (data) {
                $('.gares-aeroports .bg .mirror-width-image').append(`
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

        // lieux-evenementiels
        let lieuxEvenementiels = [
            {
                idButton: 'number-1',
                idTooltip: 'tooltip-1',
                value: '1',
                tooltipTitle: 'Garde-corps en verre',
                tooltipText: 'Les garde-corps tout en verre Crosilux associent design et fonctionnalité pour des installations aussi esthétiques que faciles à poser.',
                link: 'https://croso-france.com/23-main-courantes-sur-verre',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Grille d’arbres',
                tooltipText: 'Nos grilles d’arbres en fonte, à la fois élégantes et pratiques, conviennent à n’importe quel environnement et s’adaptent à différentes tailles de tronc.',
                link: 'https://croso-france.com/325-grilles-darbre',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Appui-vélos',
                tooltipText: 'Nos appuis-vélos en acier galvanisé à chaud et inox prennent une place de plus en plus importante dans l’aménagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Jardinière',
                tooltipText: 'En acier, en acier corten, en bois exotique ou en plastique, nos jardinières conviennent aussi bien aux environnements classiques que modernes.',
                link: 'https://croso-france.com/324-jardinieres',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Corbeille de propreté',
                tooltipText: 'Nos corbeilles de propreté sont esthétiques, fonctionnelles et pratiques pour créer une harmonie avec les modèles de banc.',
                link: 'https://croso-france.com/320-corbeilles-de-proprete',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Mat de drapeau',
                tooltipText: "Du simple mât de drapeau au mât d’éclairage à LED et aux divers dispositifs de présentation muraux, nos systèmes offrent des possibilités d’utilisation très variées.",
                link: 'https://croso-france.com/222-mats-de-drapeaux-systemes-de-banderoles-et-de-presentation-mannus',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de modèles de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique…',
                link: 'https://croso-france.com/321-bancs',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'SolarEye',
                tooltipText: 'Spot à encastrer au sol entièrement alimenté par l’énergie solaire, le Solareye fournit un balisage à lumière LED à visibilité de 360°.',
                link: 'https://croso-france.com/crososolar/7243-solareye.html',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-9',
                idTooltip: 'tooltip-9',
                value: '9',
                tooltipTitle: 'Barrière extensible de sécurité',
                tooltipText: 'Cette barrière extensible de sécurité est autoportante, robuste et supporte de fortes pressions. Facile et rapide à mettre en œuvre et à transporter, elle se plie et se déplie en seulement 5 sec. par une seule personne.',
                link: 'https://croso-france.com/316-barriere-extensible-de-securite',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-10',
                idTooltip: 'tooltip-10',
                value: '10',
                tooltipTitle: 'Poteaux à sangle',
                tooltipText: "La gamme de poteaux gère file Beltrac a été conçue pour allier design, solidité et facilité d'utilisation. Ils permettent d’améliorer les conditions de circulation d’orientation et de réception des visiteurs.",
                link: 'https://croso-france.com/79-lieux-culturels-et-publics',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-11',
                idTooltip: 'tooltip-11',
                value: '11',
                tooltipTitle: 'Borne de voirie',
                tooltipText: 'Avec leur design élégant et harmonieux nos bornes se fondent à merveille dans le paysage urbain.',
                link: 'https://croso-france.com/224-poteaux-et-bornes-de-voirie-saturn',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-12',
                idTooltip: 'tooltip-12',
                value: '12',
                tooltipTitle: 'Barrière d’accès',
                tooltipText: 'Nos barrières d’accès permettent de gérer les accès aux allées, routes, chemins, aux parkings, … Cette gamme complète permet de fournir un produit adapté à chaque besoin.',
                link: 'https://croso-france.com/223-barrieres-et-portiques-dacces-tourniquets',
                tooltipButton: 'détails du produit'
            },
        ]

        if($('.lieux-evenementiels').length > 0) {
            lieuxEvenementiels.forEach(function (data) {
                $('.lieux-evenementiels .bg .mirror-width-image').append(`
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

        // centres-commerciaux-industrie
        let centresCommerciauxIndustrie = [
            {
                idButton: 'number-1',
                idTooltip: 'tooltip-1',
                value: '1',
                tooltipTitle: 'Barrière levante',
                tooltipText: 'La barrière levante de la marque Mannus répond au besoin d’une entreprise de gérer les entrées et sorties de véhicules de son espaces fermé.',
                link: 'https://croso-france.com/223-barrieres-et-portiques-dacces-tourniquets',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Jardinière',
                tooltipText: 'En acier, en acier corten, en bois exotique ou en plastique, nos jardinières conviennent aussi bien aux environnements classiques que modernes.',
                link: 'https://croso-france.com/324-jardinieres',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Appui-vélos',
                tooltipText: 'Nos appuis-vélos en acier galvanisé à chaud et inox prennent une place de plus en plus importante dans l’aménagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Corbeille de propreté',
                tooltipText: 'Nos corbeilles de propreté sont esthétiques, fonctionnelles et pratiques pour créer une harmonie avec les modèles de banc.',
                link: 'https://croso-france.com/320-corbeilles-de-proprete',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Poteau à sangle',
                tooltipText: 'Prévu pour des mesures temporaires, Beltrac Safety propose des barrières flexibles et visuellement percutantes : la sécurité au travail doit toujours être la priorité absolue',
                link: 'https://croso-france.com/279-industrie',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Poteau de sécurité',
                tooltipText: "Cette gamme de poteau de sécurité Jupiter est destinée à délimiter des zones de circulation. Avec ses couleurs très visibles même de nuit, ce poteau assure la sécurité de tous.",
                link: 'https://croso-france.com/315-poteaux-et-arceaux-jupiter',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de modèles de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique…',
                link: 'https://croso-france.com/321-bancs',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'Ensemble pique-nique',
                tooltipText: 'Pour profiter de l’espace extérieur pendant des pauses ou le temps du déjeuner, certains de nos bancs ont été déclinés en ensemble pique-nique. Ils invitent à la convivialité.',
                link: 'https://croso-france.com/323-ensembles-pique-nique',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-9',
                idTooltip: 'tooltip-9',
                value: '9',
                tooltipTitle: 'Poteau de sécurité',
                tooltipText: 'Le système modulaire Venus au design épuré permet, grâce à ces potelets, bornes basses et ses tubes de liaison, de s’adapter à toutes les configurations pour sécuriser un espace.',
                link: '#',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-10',
                idTooltip: 'tooltip-10',
                value: '10',
                tooltipTitle: 'SolarEye',
                tooltipText: 'Spot à encastrer au sol entièrement alimenté par l’énergie solaire, le Solareye fournit un balisage à lumière LED à visibilité de 360°.',
                link: 'https://croso-france.com/crososolar/7243-solareye.html',
                tooltipButton: 'détails du produit'
            },
        ]

        if($('.centres-commerciaux-industrie').length > 0) {
            centresCommerciauxIndustrie.forEach(function (data) {
                $('.centres-commerciaux-industrie .bg .mirror-width-image').append(`
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

        // centres-commerciaux-industrie
        let retailCommerce = [
            {
                idButton: 'number-1',
                idTooltip: 'tooltip-1',
                value: '1',
                tooltipTitle: 'Appui-vélos',
                tooltipText: 'Nos appuis-vélos en acier galvanisé à chaud et inox prennent une place de plus en plus importante dans l’aménagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Jardinière',
                tooltipText: 'En acier, en acier corten, en bois exotique ou en plastique, nos jardinières conviennent aussi bien aux environnements classiques que modernes.',
                link: 'https://croso-france.com/324-jardinieres',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Corbeille de propreté',
                tooltipText: 'Nos corbeilles de propreté sont esthétiques, fonctionnelles et pratiques pour créer une harmonie avec les modèles de banc.',
                link: 'https://croso-france.com/320-corbeilles-de-proprete',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de modèles de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique…',
                link: 'https://croso-france.com/321-bancs',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Garde-corps inox avec main courante à LED',
                tooltipText: 'Le garde corps inox avec mains-courantes à LED, rassemblant la main-courante et l’éclairage avec une variété de couleurs en un seul produit innovant, placent la qualité et le design à portée de main.',
                link: 'https://croso-france.com/22-gardes-corps-inox-en-kits',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Barrière d’accès',
                tooltipText: "Nos barrières d’accès permettent de gérer les accès aux allées, routes, chemins, aux parkings, … Cette gamme complète permet de fournir un produit adapté à chaque besoin.",
                link: 'https://croso-france.com/223-barrieres-et-portiques-dacces-tourniquets',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: '',
                tooltipText: '',
                link: '#',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'Poteau de sécurité',
                tooltipText: 'Avec leur design élégant et harmonieux nos bornes se fondent à merveille dans le paysage urbain.',
                link: 'https://croso-france.com/224-poteaux-et-bornes-de-voirie-saturn',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-9',
                idTooltip: 'tooltip-9',
                value: '9',
                tooltipTitle: 'Borne lumineuse Solarpost',
                tooltipText: 'Alimentée à 100% par l’énergie solaire grâce à ses panneaux solaires situés sur les 4 côtés de la borne, elle fournit un éclairage continu et intelligent.',
                link: 'https://croso-france.com/crososolar/7244-solarpost.html',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-10',
                idTooltip: 'tooltip-10',
                value: '10',
                tooltipTitle: 'SolarEye',
                tooltipText: 'Spot à encastrer au sol entièrement alimenté par l’énergie solaire, le Solareye fournit un balisage à lumière LED à visibilité de 360°.',
                link: 'https://croso-france.com/crososolar/7243-solareye.html',
                tooltipButton: 'détails du produit'
            },
            {
                idButton: 'number-11',
                idTooltip: 'tooltip-11',
                value: '11',
                tooltipTitle: 'Poteaux à sangle',
                tooltipText: "La gamme de poteaux gère file Beltrac a été conçue pour allier design, solidité et facilité d'utilisation. Ils permettent d’améliorer les conditions de circulation d’orientation et de réception des visiteurs.",
                link: 'https://croso-france.com/79-lieux-culturels-et-publics',
                tooltipButton: 'détails du produit'
            },
        ]

        if($('.retail-commerce').length > 0) {
            retailCommerce.forEach(function (data) {
                $('.retail-commerce .bg .mirror-width-image').append(`
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
    // !function () {
    //     let scene = document.getElementById('scene');
    //     let parallaxInstance = new Parallax(scene, {
    //         relativeInput: true,
    //         pointerEvents: true,
    //     });
    // }();

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

    // Display or Hide overlay screen alert
    !function() {
        // Appear overlay when drag the window
        jQuery(window).resize(function(e) {
            if( sessionStorage.getItem('is_overlay') != null ) {
                $('.overlay').hide();
            } else {
                if( window.innerWidth != 1024 && window.innerWidth != 1280 && window.innerWidth != 1366 && window.innerWidth != 1440 && window.innerWidth != 1600 && window.innerWidth != 1680 && window.innerWidth != 1920 && window.innerWidth != 2560 && window.innerWidth != 3840 && window.innerWidth != 4096 && window.innerWidth != 5120 ) {
                    $('.overlay').css('display', 'flex');
                }
                setTimeout(() => {
                    if( window.innerWidth == 1024 || window.innerWidth == 1280 || window.innerWidth == 1366 || window.innerWidth == 1440 || window.innerWidth == 1600 || window.innerWidth == 1680 || window.innerWidth == 1920 || window.innerWidth == 2560 && window.innerWidth == 3840 && window.innerWidth == 4096 && window.innerWidth == 5120 ) {
                        $('.overlay').hide();
                    }
                }, 500);
            }

        })
    
        // Appear overlay in first time
        if( window.innerWidth != 1024 && window.innerWidth != 1280 && window.innerWidth != 1366 && window.innerWidth != 1440 && window.innerWidth != 1600 && window.innerWidth != 1680 && window.innerWidth != 1920 && window.innerWidth != 2560 && window.innerWidth != 3840 && window.innerWidth != 4096 && window.innerWidth != 5120 ) {
            $('.overlay').css('display', 'flex');
        }
        
        // Check session if overlay is false
        if( sessionStorage.getItem('is_overlay') != null ) {
            $('.overlay').hide();
        }

        // Hide overlay and set sessionStorage
        $('#close-overlay').on('click', function() {
            sessionStorage.setItem("is_overlay", false); 
            $('.overlay').hide();
        })
    }()
})

// drag horizontal
const slider = document.querySelector('.scrolling-wrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', function(e) {
    let rect = slider.getBoundingClientRect();
    isDown = true;
    slider.classList.add('active');
    // Get initial mouse position
    startX = e.pageX - rect.left;
    // Get initial scroll position in pixels from left
    scrollLeft = slider.scrollLeft;
    // change cursor
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseleave', function() {
    isDown = false;
    slider.dataset.dragging = false;
    slider.classList.remove('active');
    
    // hide arrow when arrow leave
    $('.drag').removeClass('show');
});

slider.addEventListener('mouseup', function() {
    isDown = false;
    slider.dataset.dragging = false;
    slider.classList.remove('active');
    // change cursor
    slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    let rect = slider.getBoundingClientRect();
    e.preventDefault();
    slider.dataset.dragging = true;
    // Get new mouse position
    const x = e.pageX - rect.left;
    // Get distance mouse has moved (new mouse position minus initial mouse position)
    const walk = (x - startX);
    // Update scroll position of slider from left (amount mouse has moved minus initial scroll position)
    slider.scrollLeft = scrollLeft - walk;
});

// add hover to show arrow
$('.body').mousemove(function(e) {
    if ( e.pageX <= (window.innerWidth / 2) ) {
        $('.drag--left').addClass('show');
        $('.drag--right').removeClass('show');
    } else if ( e.pageX >= (window.innerWidth / 2) ) {
        $('.drag--left').removeClass('show');
        $('.drag--right').addClass('show');
    }
})

// trigger drag horizontal by arrow
$('.drag--left').on('click', function() {
    $('.scrolling-wrapper').stop().animate({
        scrollLeft: -2000
    }, 900);
    // slider.scrollLeft -= 2000;
})
$('.drag--right').on('click', function() {
    $('.scrolling-wrapper').stop().animate({
        scrollLeft: +2000
    }, 900);
    // slider.scrollLeft += 2000;
})

// check img attribute loaded 
function loadImage() {
    var image = document.querySelector('.bg img');
    var isLoaded = image.complete && image.naturalHeight !== 0;
    if (isLoaded) {
        setTimeout(() => {
            $('.bg .mirror-width-image').css('width', image.width)
            
            // make center of horizontal scroll
            let innerWidth = document.querySelector('.scrolling-wrapper > div')
            $('.scrolling-wrapper').stop().animate({
                scrollLeft: (innerWidth.offsetWidth - slider.offsetWidth) / 2
            }, 300);
        }, 100);
    }
};
window.addEventListener('load', function(e){
    loadImage()
})

window.addEventListener('resize', function(e) {
    loadImage()
})