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
                tooltipText: 'Avec leur design ??l??gant et harmonieux nos bornes se fondent ?? merveille dans le paysage urbain.',
                link: 'https://croso-france.com/226-bornes-decoratives-et-protections-darbres-mars',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Appui-v??los',
                tooltipText: 'Nos appuis-v??los en acier galvanis?? ?? chaud et inox prennent une place de plus en plus importante dans l???am??nagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'SolarEye',
                tooltipText: 'Spot ?? encastrer au sol enti??rement aliment?? par l?????nergie solaire, fournit un balisage ?? lumi??re LED ?? visibilit?? de 360??.',
                link: 'https://croso-france.com/crososolar/7243-solareye.html',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Bornes lumineuses',
                tooltipText: 'Poteau en acier inoxydable avec syst??me d?????clairage intelligent int??grant la technique LED avec une cellule photovolta??que plac??e dans la t??te.',
                link: 'https://croso-france.com/crososolar/7244-solarpost.html',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de mod??les de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique???',
                link: 'https://croso-france.com/321-bancs',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Corbeille de propret??',
                tooltipText: 'Nos corbeilles de propret?? sont esth??tiques, fonctionnelles et pratiques pour cr??er une harmonie avec les mod??les de banc.',
                link: 'https://croso-france.com/320-corbeilles-de-proprete',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Grille d???arbres',
                tooltipText: 'Nos grilles d???arbres en fonte, ?? la fois ??l??gantes et pratiques, conviennent ?? n???importe quel environnement et s???adaptent ?? diff??rentes tailles de tronc.',
                link: 'https://croso-france.com/325-grilles-darbre',
                tooltipButton: 'd??tails du produit'
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
                tooltipText: 'Les garde-corps tout en verre Crosilux avec main courante ?? LED associent design et fonctionnalit?? pour des installations aussi esth??tiques que faciles ?? poser.',
                link: 'https://croso-france.com/23-main-courantes-sur-verre',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Appui-v??los',
                tooltipText: 'Nos appuis-v??los en acier galvanis?? ?? chaud et inox prennent une place de plus en plus importante dans l???am??nagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Barri??re d???acc??s',
                tooltipText: 'Nos barri??res d???acc??s permettent de g??rer les acc??s aux all??es, routes, chemins, aux parkings, ??? Cette gamme compl??te permet de fournir un produit adapt?? ?? chaque besoin.',
                link: 'https://croso-france.com/223-barrieres-et-portiques-dacces-tourniquets',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Borne de voirie',
                tooltipText: 'Avec leur design ??l??gant et harmonieux nos bornes se fondent ?? merveille dans le paysage urbain.',
                link: 'https://croso-france.com/226-bornes-decoratives-et-protections-darbres-mars',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Borne lumineuse Solarpost ',
                tooltipText: 'Aliment??e ?? 100% par l?????nergie solaire gr??ce ?? ses panneaux solaires situ??s sur les 4 c??t??s de la borne, elle fournit un ??clairage continu et intelligent.',
                link: 'https://croso-france.com/crososolar/7244-solarpost.html',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Poteaux ?? sangle',
                tooltipText: "La gamme de poteaux g??re file Beltrac a ??t?? con??ue pour allier design, solidit?? et facilit?? d'utilisation. Ils permettent d???am??liorer les conditions de circulation d???orientation et de r??ception des visiteurs.",
                link: 'https://croso-france.com/79-lieux-culturels-et-publics',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Garde-corps inox',
                tooltipText: 'Les poteaux en inox ou thermolaqu??s de la gamme CROSINOX?? sont fabriqu??s ?? la demande et sur-mesure pour escaliers, balcons, terrasses ou mezzanines.',
                link: 'https://croso-france.com/22-gardes-corps-inox-en-kits',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-7-1',
                idTooltip: 'tooltip-7-1',
                value: '7',
                tooltipTitle: 'Garde-corps inox',
                tooltipText: 'Les poteaux en inox ou thermolaqu??s de la gamme CROSINOX?? sont fabriqu??s ?? la demande et sur-mesure pour escaliers, balcons, terrasses ou mezzanines.',
                link: 'https://croso-france.com/22-gardes-corps-inox-en-kits',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'Barri??re extensible de s??curit??',
                tooltipText: 'Cette barri??re extensible de s??curit?? est autoportante, robuste et supporte de fortes pressions. Facile et rapide ?? mettre en ??uvre et ?? transporter, elle se plie et se d??plie en seulement 5 sec. par une seule personne.',
                link: 'https://croso-france.com/316-barriere-extensible-de-securite',
                tooltipButton: 'd??tails du produit'
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
                tooltipTitle: 'Appui-v??los',
                tooltipText: 'Nos appuis-v??los en acier galvanis?? ?? chaud et inox prennent une place de plus en plus importante dans l???am??nagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Corbeille de propret??',
                tooltipText: 'Nos corbeilles de propret?? sont esth??tiques, fonctionnelles et pratiques pour cr??er une harmonie avec les mod??les de banc.',
                link: 'https://croso-france.com/320-corbeilles-de-proprete',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de mod??les de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique???',
                link: 'https://croso-france.com/321-bancs',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'SolarEye',
                tooltipText: 'Spot ?? encastrer au sol enti??rement aliment?? par l?????nergie solaire, le Solareye fournit un balisage ?? lumi??re LED ?? visibilit?? de 360??.',
                link: 'https://croso-france.com/crososolar/7243-solareye.html',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Garde-corps en verre',
                tooltipText: 'Les garde-corps tout en verre Crosilux associent design et fonctionnalit?? pour des installations aussi esth??tiques que faciles ?? poser.',
                link: 'https://croso-france.com/23-main-courantes-sur-verre',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Borne de voirie',
                tooltipText: "Avec leur design ??l??gant et harmonieux nos bornes se fondent ?? merveille dans le paysage urbain.",
                link: 'https://croso-france.com/224-poteaux-et-bornes-de-voirie-saturn',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Garde-corps inox avec main courante ?? LED',
                tooltipText: 'Le garde corps inox avec mains-courantes ?? LED, rassemblant la main-courante et l?????clairage avec une vari??t?? de couleurs en un seul produit innovant, placent la qualit?? et le design ?? port??e de main.',
                link: 'https://croso-france.com/22-gardes-corps-inox-en-kits',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'Arceau de parking',
                tooltipText: 'L???arceau de parking r??pond ?? un besoin aussi bien des collectivit??s que des particuliers. Il se caract??rise par un design harmonieux et ??l??gant, et une r??sistance ?? la corrosion hors pair.',
                link: 'https://croso-france.com/227-arceaux-de-parking-merkur',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-9',
                idTooltip: 'tooltip-9',
                value: '9',
                tooltipTitle: 'Portique',
                tooltipText: 'Le portique de limitation de hauteur sert ?? r??guler et ?? emp??cher le trafic de certains v??hicules hauts, dans certaines zones (routes et voies de circulation, parkings). La hauteur est r??glable en fonction de la restriction n??cessaire.',
                link: 'https://croso-france.com/223-barrieres-et-portiques-dacces-tourniquets',
                tooltipButton: 'd??tails du produit'
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
                tooltipTitle: 'Appui-v??los',
                tooltipText: 'Nos appuis-v??los en acier galvanis?? ?? chaud et inox prennent une place de plus en plus importante dans l???am??nagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Borne lumineuse Solarpost',
                tooltipText: 'Aliment??e ?? 100% par l?????nergie solaire gr??ce ?? ses panneaux solaires situ??s sur les 4 c??t??s de la borne, elle fournit un ??clairage continu et intelligent.',
                link: 'https://croso-france.com/crososolar/7244-solarpost.html',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Borne de voirie',
                tooltipText: 'Avec leur design ??l??gant et harmonieux nos bornes se fondent ?? merveille dans le paysage urbain.',
                link: 'https://croso-france.com/226-bornes-decoratives-et-protections-darbres-mars',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de mod??les de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique???',
                link: 'https://croso-france.com/321-bancs',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Corbeille de propret??',
                tooltipText: 'Nos corbeilles de propret?? sont esth??tiques, fonctionnelles et pratiques pour cr??er une harmonie avec les mod??les de banc.',
                link: 'https://croso-france.com/320-corbeilles-de-proprete',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Poteaux ?? sangle',
                tooltipText: "Am??liorer les conditions de circulation, d???orientation et de r??ception des voyageurs est une affaire de pro : la gamme de poteaux ?? sangle Viaguide a ??t?? con??ue pour allier design, solidit?? et facilit?? d'utilisation.",
                link: 'https://croso-france.com/78-aeroports-et-transport',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Panneaux d???information',
                tooltipText: 'Compl??ment id??al des poteaux Viaguide, les panneaux d???information Beltrac, disponibles en A4 ou A3, permettent d???informer ou d???orienter vos passagers.',
                link: 'https://croso-france.com/aeroports-et-transport/4178-beltrac-signaletique-panneaux-d-information-aluminium.html',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'Garde-corps en verre',
                tooltipText: 'Les garde-corps tout en verre Crosilux associent design et fonctionnalit?? pour des installations aussi esth??tiques que faciles ?? poser. Ils peuvent ??tre ??quip??s d???une main courante avec ou sans LED',
                link: 'https://croso-france.com/40-erp',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-9',
                idTooltip: 'tooltip-9',
                value: '9',
                tooltipTitle: 'Barri??re extensible de s??curit??',
                tooltipText: 'Cette barri??re extensible de s??curit?? est autoportante, robuste et supporte de fortes pressions. Facile et rapide ?? mettre en ??uvre et ?? transporter, elle se plie et se d??plie en seulement 5 sec. par une seule personne.',
                link: 'https://croso-france.com/316-barriere-extensible-de-securite',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-10',
                idTooltip: 'tooltip-10',
                value: '10',
                tooltipTitle: 'JetTrac, le chariot de fermeture avec sangle',
                tooltipText: "Le syst??me JetTrac a ??t?? con??u pour une utilisation en ext??rieur dans des conditions m??t??orologiques tr??s vari??es. Facile ?? d??placer, il convient pour la protection rapide de zones dangereuses, en particulier sur de longues distances dans les a??roports.",
                link: 'https://croso-france.com/aeroports-et-transport/4174-jettrac.html',
                tooltipButton: 'd??tails du produit'
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
                tooltipText: 'Les garde-corps tout en verre Crosilux associent design et fonctionnalit?? pour des installations aussi esth??tiques que faciles ?? poser.',
                link: 'https://croso-france.com/23-main-courantes-sur-verre',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Grille d???arbres',
                tooltipText: 'Nos grilles d???arbres en fonte, ?? la fois ??l??gantes et pratiques, conviennent ?? n???importe quel environnement et s???adaptent ?? diff??rentes tailles de tronc.',
                link: 'https://croso-france.com/325-grilles-darbre',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Appui-v??los',
                tooltipText: 'Nos appuis-v??los en acier galvanis?? ?? chaud et inox prennent une place de plus en plus importante dans l???am??nagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Jardini??re',
                tooltipText: 'En acier, en acier corten, en bois exotique ou en plastique, nos jardini??res conviennent aussi bien aux environnements classiques que modernes.',
                link: 'https://croso-france.com/324-jardinieres',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Corbeille de propret??',
                tooltipText: 'Nos corbeilles de propret?? sont esth??tiques, fonctionnelles et pratiques pour cr??er une harmonie avec les mod??les de banc.',
                link: 'https://croso-france.com/320-corbeilles-de-proprete',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Mat de drapeau',
                tooltipText: "Du simple m??t de drapeau au m??t d?????clairage ?? LED et aux divers dispositifs de pr??sentation muraux, nos syst??mes offrent des possibilit??s d???utilisation tr??s vari??es.",
                link: 'https://croso-france.com/222-mats-de-drapeaux-systemes-de-banderoles-et-de-presentation-mannus',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de mod??les de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique???',
                link: 'https://croso-france.com/321-bancs',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'SolarEye',
                tooltipText: 'Spot ?? encastrer au sol enti??rement aliment?? par l?????nergie solaire, le Solareye fournit un balisage ?? lumi??re LED ?? visibilit?? de 360??.',
                link: 'https://croso-france.com/crososolar/7243-solareye.html',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-9',
                idTooltip: 'tooltip-9',
                value: '9',
                tooltipTitle: 'Barri??re extensible de s??curit??',
                tooltipText: 'Cette barri??re extensible de s??curit?? est autoportante, robuste et supporte de fortes pressions. Facile et rapide ?? mettre en ??uvre et ?? transporter, elle se plie et se d??plie en seulement 5 sec. par une seule personne.',
                link: 'https://croso-france.com/316-barriere-extensible-de-securite',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-10',
                idTooltip: 'tooltip-10',
                value: '10',
                tooltipTitle: 'Poteaux ?? sangle',
                tooltipText: "La gamme de poteaux g??re file Beltrac a ??t?? con??ue pour allier design, solidit?? et facilit?? d'utilisation. Ils permettent d???am??liorer les conditions de circulation d???orientation et de r??ception des visiteurs.",
                link: 'https://croso-france.com/79-lieux-culturels-et-publics',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-11',
                idTooltip: 'tooltip-11',
                value: '11',
                tooltipTitle: 'Borne de voirie',
                tooltipText: 'Avec leur design ??l??gant et harmonieux nos bornes se fondent ?? merveille dans le paysage urbain.',
                link: 'https://croso-france.com/224-poteaux-et-bornes-de-voirie-saturn',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-12',
                idTooltip: 'tooltip-12',
                value: '12',
                tooltipTitle: 'Barri??re d???acc??s',
                tooltipText: 'Nos barri??res d???acc??s permettent de g??rer les acc??s aux all??es, routes, chemins, aux parkings, ??? Cette gamme compl??te permet de fournir un produit adapt?? ?? chaque besoin.',
                link: 'https://croso-france.com/223-barrieres-et-portiques-dacces-tourniquets',
                tooltipButton: 'd??tails du produit'
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
                tooltipTitle: 'Barri??re levante',
                tooltipText: 'La barri??re levante de la marque Mannus r??pond au besoin d???une entreprise de g??rer les entr??es et sorties de v??hicules de son espaces ferm??.',
                link: 'https://croso-france.com/223-barrieres-et-portiques-dacces-tourniquets',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Jardini??re',
                tooltipText: 'En acier, en acier corten, en bois exotique ou en plastique, nos jardini??res conviennent aussi bien aux environnements classiques que modernes.',
                link: 'https://croso-france.com/324-jardinieres',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Appui-v??los',
                tooltipText: 'Nos appuis-v??los en acier galvanis?? ?? chaud et inox prennent une place de plus en plus importante dans l???am??nagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Corbeille de propret??',
                tooltipText: 'Nos corbeilles de propret?? sont esth??tiques, fonctionnelles et pratiques pour cr??er une harmonie avec les mod??les de banc.',
                link: 'https://croso-france.com/320-corbeilles-de-proprete',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Poteau ?? sangle',
                tooltipText: 'Pr??vu pour des mesures temporaires, Beltrac Safety propose des barri??res flexibles et visuellement percutantes : la s??curit?? au travail doit toujours ??tre la priorit?? absolue',
                link: 'https://croso-france.com/279-industrie',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Poteau de s??curit??',
                tooltipText: "Cette gamme de poteau de s??curit?? Jupiter est destin??e ?? d??limiter des zones de circulation. Avec ses couleurs tr??s visibles m??me de nuit, ce poteau assure la s??curit?? de tous.",
                link: 'https://croso-france.com/315-poteaux-et-arceaux-jupiter',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de mod??les de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique???',
                link: 'https://croso-france.com/321-bancs',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'Ensemble pique-nique',
                tooltipText: 'Pour profiter de l???espace ext??rieur pendant des pauses ou le temps du d??jeuner, certains de nos bancs ont ??t?? d??clin??s en ensemble pique-nique. Ils invitent ?? la convivialit??.',
                link: 'https://croso-france.com/323-ensembles-pique-nique',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-9',
                idTooltip: 'tooltip-9',
                value: '9',
                tooltipTitle: 'Poteau de s??curit??',
                tooltipText: 'Le syst??me modulaire Venus au design ??pur?? permet, gr??ce ?? ces potelets, bornes basses et ses tubes de liaison, de s???adapter ?? toutes les configurations pour s??curiser un espace.',
                link: 'https://croso-france.com/224-poteaux-et-bornes-de-voirie-saturn',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-10',
                idTooltip: 'tooltip-10',
                value: '10',
                tooltipTitle: 'SolarEye',
                tooltipText: 'Spot ?? encastrer au sol enti??rement aliment?? par l?????nergie solaire, le Solareye fournit un balisage ?? lumi??re LED ?? visibilit?? de 360??.',
                link: 'https://croso-france.com/crososolar/7243-solareye.html',
                tooltipButton: 'd??tails du produit'
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
                tooltipTitle: 'Appui-v??los',
                tooltipText: 'Nos appuis-v??los en acier galvanis?? ?? chaud et inox prennent une place de plus en plus importante dans l???am??nagement des espaces publics.',
                link: 'https://croso-france.com/326-appuis-velos',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-2',
                idTooltip: 'tooltip-2',
                value: '2',
                tooltipTitle: 'Jardini??re',
                tooltipText: 'En acier, en acier corten, en bois exotique ou en plastique, nos jardini??res conviennent aussi bien aux environnements classiques que modernes.',
                link: 'https://croso-france.com/324-jardinieres',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-3',
                idTooltip: 'tooltip-3',
                value: '3',
                tooltipTitle: 'Corbeille de propret??',
                tooltipText: 'Nos corbeilles de propret?? sont esth??tiques, fonctionnelles et pratiques pour cr??er une harmonie avec les mod??les de banc.',
                link: 'https://croso-france.com/320-corbeilles-de-proprete',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-4',
                idTooltip: 'tooltip-4',
                value: '4',
                tooltipTitle: 'Banc',
                tooltipText: 'Large choix de mod??les de bancs pour tous les usages : bancs en bois FSC 100% ou en acier, bancs de protection des arbres, ensembles pique-nique???',
                link: 'https://croso-france.com/321-bancs',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-5',
                idTooltip: 'tooltip-5',
                value: '5',
                tooltipTitle: 'Garde-corps inox avec main courante ?? LED',
                tooltipText: 'Le garde corps inox avec mains-courantes ?? LED, rassemblant la main-courante et l?????clairage avec une vari??t?? de couleurs en un seul produit innovant, placent la qualit?? et le design ?? port??e de main.',
                link: 'https://croso-france.com/22-gardes-corps-inox-en-kits',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-6',
                idTooltip: 'tooltip-6',
                value: '6',
                tooltipTitle: 'Barri??re d???acc??s',
                tooltipText: "Nos barri??res d???acc??s permettent de g??rer les acc??s aux all??es, routes, chemins, aux parkings, ??? Cette gamme compl??te permet de fournir un produit adapt?? ?? chaque besoin.",
                link: 'https://croso-france.com/223-barrieres-et-portiques-dacces-tourniquets',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-7',
                idTooltip: 'tooltip-7',
                value: '7',
                tooltipTitle: 'Kit 2 poteaux en inox et 2 tubes',
                tooltipText: "D'une ??l??gance stylistique rare, ce garde-corps ?? deux tubes de liaison, en inox haut de gamme, s'int??gre harmonieusement dans un environnement architectural et commercial. Sa solidit?? lui permet d'??tre parfaitement adapt?? pour une installation en zone tr??s fr??quent??e.",
                link: 'https://croso-france.com/poteaux-et-bornes-de-voirie-saturn/6870-systemes-de-garde-corps-avec-ou-sans-main-courante.html',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-8',
                idTooltip: 'tooltip-8',
                value: '8',
                tooltipTitle: 'Poteau de s??curit??',
                tooltipText: 'Avec leur design ??l??gant et harmonieux nos bornes se fondent ?? merveille dans le paysage urbain.',
                link: 'https://croso-france.com/224-poteaux-et-bornes-de-voirie-saturn',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-9',
                idTooltip: 'tooltip-9',
                value: '9',
                tooltipTitle: 'Borne lumineuse Solarpost',
                tooltipText: 'Aliment??e ?? 100% par l?????nergie solaire gr??ce ?? ses panneaux solaires situ??s sur les 4 c??t??s de la borne, elle fournit un ??clairage continu et intelligent.',
                link: 'https://croso-france.com/crososolar/7244-solarpost.html',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-10',
                idTooltip: 'tooltip-10',
                value: '10',
                tooltipTitle: 'SolarEye',
                tooltipText: 'Spot ?? encastrer au sol enti??rement aliment?? par l?????nergie solaire, le Solareye fournit un balisage ?? lumi??re LED ?? visibilit?? de 360??.',
                link: 'https://croso-france.com/crososolar/7243-solareye.html',
                tooltipButton: 'd??tails du produit'
            },
            {
                idButton: 'number-11',
                idTooltip: 'tooltip-11',
                value: '11',
                tooltipTitle: 'Poteaux ?? sangle',
                tooltipText: "La gamme de poteaux g??re file Beltrac a ??t?? con??ue pour allier design, solidit?? et facilit?? d'utilisation. Ils permettent d???am??liorer les conditions de circulation d???orientation et de r??ception des visiteurs.",
                link: 'https://croso-france.com/79-lieux-culturels-et-publics',
                tooltipButton: 'd??tails du produit'
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