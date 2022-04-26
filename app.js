const data = [

    
    {
        title: 'SC 1.1.1 Non-text Content',
        examples: {
            failed: [
                {
                    description: 'Een logo van een organisatie genaamd "Organisatie", geplaatst met een img element heeft geen tekst alternatief. Het is de enige plek waar de organistie naam genoemd is op de pagina'
                },
            ],

            passed: [
                {
                    description: 'Een logo van een organisatie genaamd "Organisatie", geplaatst met een img element heeft een tekst alternatief in de vorm van een alt attribuut. De inhoud van het alt attribuut is "Logo Organisatie".',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.2.1 Audio-only and Video-only',
        examples: {
            failed: [
                {
                    description: 'Er is een stille film geplaatst op de website. De gebeurtenissen in de stille film worden verder niet beschreven.',

                    description: 'Er is een audiofragment van een intervieuw te beluisteren op een website. Het audiofragment is heeft geen volledig uitgeschreven tekst ergens te lezen op de website'
                },
            ],

            passed: [
                {
                    description: 'Alle gebeurtenissen in een stille film worden in een zin beschreven in de paragraaf voorafgaande aan de film.'
                },
                {
                    description: 'Er is een audiofragment van een interview te beluisteren op een website. Het audiofragment is volledig uitgeschreven te lezen vlak onder het audiofragment.'
                }
            ],

            unclear: [
                {
                    description: ''
                },
            ]
        }
    },
    {
        title: 'SC 1.2.2 Captions (Prerecorded)',
        examples: {
            failed: [
                {
                    description: 'Er is een video interview met automatisch gegenereerde ondertitels waardoor sommige woorden verkeerd ondertitelt zijn.'
                },
            ],

            passed: [
                {
                    description: 'Er is een video interview met volledige en handmatig gemaakte ondertitels.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.2.3 Audio Description or Media Alternative (Prerecorded)',
        examples: {
            failed: [
                {
                    description: 'Er is een video interview en de naam en functie van alle personen die aan het woord komen komt in beeld te staan zonder dat deze informatie op een andere manier beschikbaar is.'
                },
            ],

            passed: [
                {
                    description: 'Er is een video interview en de naam en functie van alle personen die aan het woord komen komt in beeld te staan. Op de website wordt de volgorde van de personen die aan het woord zijn geplaatst.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.2.4 Captions (Live)',
        examples: {
            failed: [
                {
                    description: 'Er is live video maar er zijn geen ondertitels geboden.',
                },
            ],

            passed: [
                {
                    description: 'Er is live video en er wordt onmiddelijk ondertitels aangeboden. De onderitels zijn niet foutloos aangezien iemand live meetypt.',
                },
            ],

            unclear: []
        }
    },
    {
        title: 'SC 1.2.5 Audio Description (Prerecorded)',
        examples: {
            failed: [
                {
                    description: 'Er is een video intervieuw en de naam en functie van alle personen die aan het woord komen komt in beeld te staan. Op de website wordt de volgorde van de personen die aan het woord zijn geplaatst, maar er is geen auditieve beschrijving van deze naam en functies.'
                },
            ],

            passed: [
                {
                    description: 'Er is een video intervieuw en de naam en functie van alle personen die aan het woord komen komt in beeld te staan. Er is auditieve beschrijving van deze naam en functies.',
                },
            ],

            unclear: []
        }
    },
    {
        title: 'SC 1.3.1 Info and Relationships',
        examples: {
            failed: [
                {
                    description: 'Visueel is een tekst opgemaakt als een kop met een relatie met tekst er onder. Deze tekst is ook in de HTML code aangegeven als een kop met een kop element. De tekst er onder is echter ook aangegeven met een kop element van hetzelfde niveau. Hierdoor is de relatie niet duidelijk voor hulpsoftware.',
                },
            ],

            passed: [
                {
                    description: 'Visueel is een tekst opgemaakt als een kop met een relatie met tekst er onder. Deze tekst is ook in de HTML code aangegeven als een kop met een kop element. De tekst er onder is niet aangegeven met een kop element van hetzelfde niveau waardoor de hiërarische relatie duidelijk is voor hulpsoftware.e',
                },
            ],

            unclear: []
        }
    },
    {
        title: 'SC 1.3.2 Meaningful Sequence',
        examples: {
            failed: [
                {
                    description: 'Een informatieve afbeelding met een tekst alternatief staat visueel boven een kop. Er is visueel duidelijk een relatie tussen de afbeelding en de kop. In de DOM volgorde staat deze afbeelding ook boven de kop waardoor deze relatie niet duidelijk is voor hulpsoftware.'
                },
            ],

            passed: [
                {
                    description: 'Een kolom staat volledig in de DOM volgorde van de webpagina bij elkaar voordat er een volgende kolom in de DOM volgorde voorkomt.',
                },
            ],

            unclear: []
        }
    },
    {
        title: 'SC 1.3.3 Sensory Characteristics',
        examples: {
            failed: [
                {
                    description: 'Een tekst verwijst naar een menu "aan de linkerkant van de website" maar er is geen andere uitleg hoe dit menu te vinden.'
                },
            ],

            passed: [
                {
                    description: 'Een tekst verwijst naar het feit dat "Alle rood omlijnde velden zijn niet correct ingevuld." Maar stelt ook "Daarnaast staat er een tekstuele foutmelding voor de niet correct ingevulde velden."',
                },
            ],

            unclear: []
        }
    },
    {
        title: 'SC 1.3.4 Orientation',
        examples: {
            failed: [
                {
                    description: 'Als een webpagina bekeken wordt in een scherm dat breder is dan het hoog is wordt de gebruiker geinformeerd "Dat de website ontworpen is voor een verticale leeservaring" en raad aan het beeldscherm te draaien in plaats van dat het de informatie laat zien die beschikbaar is op een scherm dat hoger is dan het breed is.'
                },
            ],

            passed: [
                {
                    description: 'Een pagina verplaatst enkele interface elementen ten opzicht van elkaar als de gebruiker wisselt van een scherm dat breder is dan het hoog is naar een scherm dat hoger is dan het breed is.',
                },
            ],

            unclear: []
        }
    },
    {
        title: 'SC 1.3.5 Identify Input Purpose',
        examples: {
            failed: [
                {
                    description: 'Een formulier vraagt om een voornaam van de gebruiker. Het veld heeft geen autocomplete attribuut.'
                },
            ],

            passed: [
                {
                    description: 'Een formulier vraagt om een voornaam van de gebruiker. Het veld heeft een autocomplete attribuut.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.4.1 Use of Color',
        examples: {
            failed: [
                {
                    description: 'Een link in lopende tekst is niet onderstreept en ziet er hetzelfde uit als de omliggende tekst afgezien van de kleur van de tekst. Als een gebruiker over de tekst heen hovert verschijnt er wel een streep maar het contrast met de omliggende tekst is lager dan 3,0:1'
                },
            ],

            passed: [
                {
                    description: 'Een tekst verwijst naar het feit dat \"\Alle rood omlijnde velden zijn niet correct ingevuld.\"\ Maar stelt ook \"\Daarnaast staat er een tekstuele foutmelding voor de niet correct ingevulde velden.\"\
                    Een link in lopende tekst is niet onderstreept en ziet er hetzelfde uit als de omliggende tekst afgezien van de kleur van de tekst. Als een gebruiker over de tekst heen hovert verschijnt er wel een streep en het contrast met de omliggende tekst is hoger dan 3,0:1',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.4.2 Audio Control',
        examples: {
            failed: [
                {
                    description: 'Als de gebruiker op een pagina komt start er onmiddelijk een geluid wat 4 seconden duurt.'
                },
            ],

            passed: [
                {
                    description: 'Als de gebruiker op een pagina komt start er onmiddelijk een geluid wat 4 seconden duurt. Het eerste element wat focus ontvangt is de pauze knop voor dit geluid.',
                },
                {
                    description: 'Als de gebruiker op een pagina komt start er onmiddelijk een geluid wat 3 seconden duurt.',
                }
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.4.3 Contrast (Minimum)',
        examples: {
            failed: [
                {
                    description: '1 letter niet dikgedrukte tekst van 17 punten groot heeft in vergelijking met de achtergrond kleur een contrast van 4,49999:1.'
                },
            ],

            passed: [
                {
                    description: 'Een dikgedrukte tekst van 14 punten heeft in vergelijking met de achtergrond kleur een contrast van 3,0:1.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.4.4 Resize Text',
        examples: {
            failed: [
                {
                    description: 'Een gebruiker heeft een schermbreedte resolutie van 1024 pixels en zoomed in tot 200%. Een logo wordt vervangen met een ander, kleiner, logo. Hierdoor vervalt de slogan "Wij staan altijd voor uw klaar". Deze slogan staat nergens anders op de pagina.'
                },
            ],

            passed: [
                {
                    description: 'Een gebruiker heeft een schermbreedte resolutie van 1024 pixels en zoomed in tot 200%. Alle informatie en functionaliteit krijgt een andere locatie ten opzichte van elkaar en sommige informatie wordt ingeklapt in geneste accordeon interfaces, daarnaast moet de gebruiker horizontaal scrollen om alle informatie in beeld te krijgen.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.4.5 Images of Text',
        examples: {
            failed: [
                {
                    description: 'Een japanse pagina bevat een screenshot van japanse tekst in plaats van dat er gebruik gemaakt is van japanse tekst geplaatst met behulp van HTML.'
                },
            ],

            passed: [
                {
                    description: 'Een grafiek is geplaatst op de website. Bij de grafiek hoort een legenda. Deze is onderdeel van de afbeelding van de grafiek.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.4.10 Reflow',
        examples: {
            failed: [
                {
                    description: 'Een gebruiker heeft een schermbreedte resolutie van 1280 pixels en zoomed in tot 400%. Een logo wordt vervangen met een ander, kleiner, logo. Hierdoor vervalt de slogan "Wij staan altijd voor uw klaar". Deze slogan staat nergens anders op de pagina.',
                },
                {
                    description: 'Een gebruiker heeft een schermbreedte resolutie van 1280 pixels en zoomed in tot 400%. Een paragraaf kan volledig gelezen worden als een gebruiker horizontaal scrolled. Er kan ook verticaal gescrolled worden op de website om informatie te bereiken.',
                }
            ],

            passed: [
                {
                    description: 'Een gebruiker heeft een schermbreedte resolutie van 1280 pixels en zoomed in tot 400%. Alle informatie en functionaliteit krijgt een andere locatie ten opzichte van elkaar en sommige informatie wordt ingeklapt in geneste accordeon interfaces.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.4.11 Non-text Contrast',
        examples: {
            failed: [
                {
                    description: 'Een logo van aangeeft dat een link een nieuwe venster opent heeft een contrast in vergelijking met de achtergrondkleur van 2,99999:1.'
                },
            ],

            passed: [
                {
                    description: 'Een logo van een organisatie heeft een contrast van 1,0:1 in vergelijking met de achtergrond kleur.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.4.12 Text Spacing',
        examples: {
            failed: [
                {
                    description: 'Een gebruiker stelt de tekst van de browsers zo in dat er tussen elke letter 0,12 keer de grote van een letter aan witruimte valt. Er is 1 heel lange titel van een artikel. Bij deze titel valt de laatste letter buiten beeld.'
                },
            ],

            passed: [
                {
                    description: 'Een gebruiker stelt de tekst van de browsers zo in dat er tussen elke letter 0,12 keer de grote van een letter aan witruimte valt. Hierdoor komt sommige tekst op de volgende regel te staan waardoor het buiten het oorspronkelijke veld valt. Ook moet de gebruiker ineens horizontaal scrollen om alle tekst goed te kunnen lezen.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 1.4.13 Content on Hover or Focus',
        examples: {
            failed: [
                {
                    description: 'Een formulier vraagt om een voornaam van de gebruiker. Het veld heeft geen autocomplete attribuut.'
                },
            ],

            passed: [
                {
                    description: 'Een formulier vraagt om een voornaam van de gebruiker. Het veld heeft een autocomplete attribuut.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.1.1 Keyboard',
        examples: {
            failed: [
                {
                    description: 'Een knop ontvangt geen focus en de functionaliteit kan niet op een andere manier bediend worden met het toetsenbord.'
                },
            ],

            passed: [
                {
                    description: 'Een knop ontvangt geen focus en de functionaliteit die die knop bediend kan alleen bediend worden met het toetsenbord als de gebruiker een combinatie van 3 toetsen tegelijk gebruikt (ALT, SHIFT en een letter). Deze instructies zijn alleen te lezen op een andere pagina binnen deze set webpagina\'s.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.1.2 No Keyboard Trap',
        examples: {
            failed: [
                {
                    description: 'Alle interactieve elementen zijn te bereiken met de tab toets afgezien van de laatste link in de footer aangezien de ena laatste link een toetsenbordval veroorzaakt.'
                },
            ],

            passed: [
                {
                    description: 'Alle interactieve elementen zijn te bereiken met de tab toets.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.1.4 Character Key Shortcuts',
        examples: {
            failed: [
                {
                    description: 'Er is een sneltoets op te springen naar de huidige datum in een datumprikker. Deze sneltoets (de letter H van huidige) werkt alleen als de datumprikker open staat en de focus zich ergens in de datumprikker bevind.'
                },
            ],

            passed: [
                {
                    description: 'Er zijn sneltoetsen op de website maar die worden allemaal bediend in combinatie met de ALT toets.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.2.1 Timing Adjustable',
        examples: {
            failed: [
                {
                    description: 'Een gebruiker wordt automatisch uitgelogd als deze een tijd lang niks doet. Voordat dit gebeurd krijgt de gebruiker een waarschuwing dat deze automatisch uitgelogd wordt. De gebruiker heeft 15 seconden de tijd om op de spatiebalk te drukken of op een knop te klikken.'
                },
            ],

            passed: [
                {
                    description: 'Een gebruiker wordt automatisch uitgelogd als deze een tijd lang niks doet. Echter er is een vinkje wat de gebruiker kan aanvinken op het moment dat deze inlogt dat deze functionaliteit van automatisch uitloggen uitzet.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.2.2 Pause, Stop, Hide',
        examples: {
            failed: [
                {
                    description: 'Een carrousel wisselt elke minuut van slide. Er is geen mechanisme om dit te stoppen.'
                },
            ],

            passed: [
                {
                    description: 'Een carrousel wisselt elke 2 seconden van slide. Als de gebruiker op de "volgende" knop klikt stopt deze beweging en gaat deze beweging niet automatisch verder.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.3.1 Three Flashes or Below Threshold',
        examples: {
            failed: [
                {
                    description: 'Een kwart van het scherm vervangt elke kwart seconde van foto. Er is een mechanisme om dit te stoppen en een waarschuwing dat dit gaat gebeuren. De volledige animatie stopt na 4 foto\'s.'
                },
            ],

            passed: [
                {
                    description: 'Het volledige scherm flitst 3 keer per seconde van volledig zwart naar wit. Er is geen mechanisme om dit te stoppen.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.4.1 Bypass Blocks',
        examples: {
            failed: [
                {
                    description: 'Er is geen skiplink aanwezig op de website maar wel een hoofdmenu dat op 2 pagina\'s voorkomt.'
                },
            ],

            passed: [
                {
                    description: 'Er is een skiplink aanwezig die naar het unieke gedeelte van de website springt. Niet alleen het scherm scrolled naar deze plek maar ook de toetsenbordfocus gaat naar het unieke gedeelte van de website.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.4.2 Page Titled',
        examples: {
            failed: [
                {
                    description: 'Een PDF van de eindejaarsrekening van 2022 heeft als titel "eindejaarsrekening 2022.pdf"'
                },
            ],

            passed: [
                {
                    description: 'Elke pagina heeft een unieke titel die een relatie heeft met de inhoud van die specifieke pagina en bevat geen bestandsnamen of extenties.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.4.3 Focus Order',
        examples: {
            failed: [
                {
                    description: 'De toetsenbord focus gaat eerst langs alle tabtoetsen voordat het langs de interactieve componenten binnen het actieve tabblad gaat.'
                },
            ],

            passed: [
                {
                    description: 'De toetsenbord focus gaat consistent van rechts naar links door de gedeeltes van de pagina.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.4.4 Link Purpose (In Context)',
        examples: {
            failed: [
                {
                    description: 'Er staat een "lees meer" link onder een paragraaf. In de paragraaf zelf staat als laatste zin "Als u de rest van het artikel wilt lezen klik dan op de "lees meer" link hieronder."'
                },
            ],

            passed: [
                {
                    description: 'Er staat een "hier" link in een lopende tekst.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.4.5 Multiple Ways',
        examples: {
            failed: [
                {
                    description: 'Een enkele PDF die verouderd is en ondertussen vervangen is met een nieuwe versie en niet langer naar gelinkt wordt van andere pagina\'s is nog wel vindbaar in de zoekmachine.'
                },
            ],

            passed: [
                {
                    description: 'Alle pagina\'s staan wel in het hoofdmenu van een website gelinkt maar er is geen zoekmachine of sitemap aanwezig op de website.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.4.6 Headings and Labels',
        examples: {
            failed: [
                {
                    description: 'Een header heeft als tekst "Snel naar"'
                },
            ],

            passed: [
                {
                    description: 'Een header heeft als tekst "En nu verder?"',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.4.7 Focus Visible',
        examples: {
            failed: [
                {
                    description: 'De focus is niet zichtbaar op een specifieke link of knop.'
                },
            ],

            passed: [
                {
                    description: 'De focus is zichtbaar op alle interactieve elementen.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.5.1 Pointer Gestures',
        examples: {
            failed: [
                {
                    description: 'Er is een kaart waar een mobiele bezoeker op kan in en uitzoemen met een pinch beweging. Er is geen zoom in en zoom uit knop beschikbaar.'
                },
            ],

            passed: [
                {
                    description: 'Er is een kaart waar een mobiele bezoeker op kan in en uitzoemen met een pinch beweging. Er is ook een zoom in en zoom uit knop beschikbaar.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.5.2 Pointer Cancellation',
        examples: {
            failed: [
                {
                    description: 'Een gebruiker kan een knop activeren als de gebruiker de muis cursor er overheen hovert en de muisknop indrukt. Hierna gaat de gebruiker naar een andere pagina.'
                },
            ],

            passed: [
                {
                    description: 'Een knop reageert onmiddelijk en start een raket lanceer operatie als de gebruiker een link aanklikt en de muisknop ingedrukt houd, echter de lancering wordt gecancelled als de gebruiker de muisknop weer loslaat.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.5.3 Label in Name',
        examples: {
            failed: [
                {
                    description: 'Een knop heeft een zichtbare tekst "Zoeken". De knop heeft een aria-label met de tekst "Deze zoekfunctionaliteit zoekt alleen pagina\'s binnen database van de overheid."'
                },
            ],

            passed: [
                {
                    description: 'Een knop heeft een zichtbare tekst "zoeken". De knop heeft een aria-labelledby attribuut dat verwijst naar een ID van een paragraaf element waar de tekst staat "Met deze knopt kunt u een actie in werking stellen om pagina\'s te vinden die u zoekt. Deze pagina\'s zijn geindexeert door automatische crawler bots. Deze bots zoeken dag en nacht naar nieuwe pagina\'s."',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 2.5.4 Motion Actuation',
        examples: {
            failed: [
                {
                    description: 'Een pagina heeft een dobbelsteen simulator. Deze simulator kunnen dobbelstenen mee geworpen worden door met de mobiele telefoon te schudden. Er is geen andere manier om een dobbelsteen te werpen.'
                },
            ],

            passed: [
                {
                    description: 'Een pagina heeft een 360 graden foto die bekeken kan worden door de gebruiker. Welk gedeelte van de foto bekeken wordt hangt af van de positie van de mobiele telefoon waarmee de gebruiker de foto bekijkt. Maar er zijn ook 4 knoppen die naar boven, naar onder, naar links en naar rechts kunnen scrollen op de foto. Zodra deze knoppen gebruikt worden lijstert de foto niet meer naar de beweging van de mobiele telefoon.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 3.1.1 Language of Page',
        examples: {
            failed: [
                {
                    description: 'De website is volledig in het Engels. De standaard taal van de pagina is aangegeven in het HTML element alszijnde Nederlands met behulp van een lang attribuut.'
                },
            ],

            passed: [
                {
                    description: 'De website is grotendeels in het Engels maar het hoofdmenu is Nederlands. De standaard taal van de pagina is aangegeven in het HTML element alszijnde Nederlands met behulp van een lang attribuut.',
                },
                {
                    description: 'De website is grotendeels in het Engels maar het hoofdmenu is Nederlands. De standaard taal van de pagina is aangegeven in het HTML element alszijnde Engels met behulp van een lang attribuut.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 3.1.2 Language of Parts',
        examples: {
            failed: [
                {
                    description: 'De website is grotendeels in het Nederlands en is met een lang attribuut volledig aangegeven als Nederlands maar er staat een halve zin in het Engels op de website.'
                },
            ],

            passed: [
                {
                    description: 'De website is grotendeels in het Engels maar het hoofdmenu is Nederlands. De standaard taal van de pagina is aangegeven in het HTML element alszijnde Nederlands met behulp van een lang attribuut. De taal van de content afgezien van het hoofdmenu is aangegeven als Engels met behulp van een lang attribuut.',
                },
                {
                    description: 'De website is grotendeels in het Engels maar het hoofdmenu is Nederlands. De standaard taal van de pagina is aangegeven in het HTML element alszijnde Engels met behulp van een lang attribuut. De taal van het hoofdmenu is aangegeven als Nederlands met behulp van een lang attribuut.',
                },
                {
                    description: 'De website is grotendeels in het Nederlands en is met een lang attribuut volledig aangegeven als Nederlands maar er staat een Engelse naam van en product op de website.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 3.2.1 On Focus',
        examples: {
            failed: [
                {
                    description: 'Als een knop focus krijgt ververst de pagina.'
                },
            ],

            passed: [
                {
                    description: 'Als een knop focus krijgt verschijnt er een nieuw menu. De focus blijft op de knop staan.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 3.2.2 On Input',
        examples: {
            failed: [
                {
                    description: 'Als een checkbox van een filter van een zoekmachine aangevinkt wordt dan ververst de pagina om de gebruiker onmiddelijk de nieuwe versie van de gefilterde zoekresultaten te laten zien. De pagina laad zo snel dat de gebruiker niet eens kan zien dat de pagina ververst afgezien van het feit dat de resultaten anders zijn.'
                },
            ],

            passed: [
                {
                    description: 'Een filter bij een zoekmachine wordt pas toegepast als een gebruiker op de "pas nieuwe filters toe" knop drukt.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 3.2.3 Consistent Navigation',
        examples: {
            failed: [
                {
                    description: 'Een optie verdwijnt uit het hoofdmenu maar wordt in plaats daarvan wel bovenaan de pagina geplaatst om aan te geven dat de gebruiker zich daar bevind op dit moment.'
                },
            ],

            passed: [
                {
                    description: 'Een subnavigatie opent en nestelt zich tussen twee opties in het hoofdmenu als een gebruiker zich op sommige pagina\'s van een website bevindt. Op andere pagina\'s is deze subnavigatie tussen deze twee opties van het hoofdmenu niet aanwezig.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 3.2.4 Consistent Identification',
        examples: {
            failed: [
                {
                    description: 'Op de ene pagina wordt de zoekfunctionaliteit "zoekmachine" genoemd en op een andere pagina "paginacrawler"'
                },
            ],

            passed: [
                {
                    description: 'Op de ene pagina wordt de zoekfunctionaliteit "zoeken" genoemd en op een andere pagina "search"',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 3.3.1 Error Identification',
        examples: {
            failed: [
                {
                    description: 'Bij het veld "voornaam" zelf staat een rode tekst met een rood uitroepteken icoon. "Het veld "voornaam" is verplicht!"'
                },
            ],

            passed: [
                {
                    description: 'Bovenaan de pagina staat een tekst "Niet alle velden zijn correct ingevuld. Zie de velden "Voornaam".',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 3.3.2 Labels or Instructions',
        examples: {
            failed: [
                {
                    description: 'Bij het veld "voornaam" staat de tekst "Vul hier in:'
                },
            ],

            passed: [
                {
                    description: 'Bij het veld "voornaam" staat de tekst "Voornaam:"',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 3.3.3 Error Suggestion',
        examples: {
            failed: [
                {
                    description: 'Het correcte format staat in de placeholder tekst van het veld en er staat een foutmelding bij als de gebruiker het verkeerd invult met de tekst "Foutmelding: Het verplichte veld "datum" is wel ingevuld maar niet op een correcte manier, gebruik het juiste format.'
                },
            ],

            passed: [
                {
                    description: 'Als de gebruiker een verkeerd format gebruikt staat er wel "Het veld "datum" is niet correct ingevuld, gebruik het format dd-mm-yyyy" maar het correcte format van de datum staat niet in het label van het veld.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 3.3.4 Error Prevention',
        examples: {
            failed: [
                {
                    description: 'Nadat een formulier verstuurd is is er geen mogelijkheid meer om correcties door te voeren. Er was ook geen pagina om alles nogmaals te controleren voordat het verstuurd werdt. Het formulier verplicht de gebruiker om iets te betalen.'
                },
            ],

            passed: [
                {
                    description: 'Aan het einde van een formulier krijgt de gebruiker de mogelijkheid om alles nogmaals te controleren voordat de gebruiker het verstuurd.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 4.1.1 Parsing',
        examples: {
            failed: [
                {
                    description: 'Een enkele ID waarde wordt op dezelfde pagina binnen twee verschillende elementen gebruikt.'
                },
                {
                    description: 'Een img element heeft twee alt attributen met dezelfde waarde er in.'
                },
            ],

            passed: [
                {
                    description: 'De pagina bevat een heleboel HTML gramatica fouten maar heeft geen dubbele ID\'s, geen dubbele attributen binnen een enkel element, en alle elementen hebben correcte begin en eindtags die correct binnen elkaar genest zijn.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 4.1.2 Name, Role, Value',
        examples: {
            failed: [
                {
                    description: 'Een native button HTML element kan volledig bediend worden met het toetsenbord en heeft als tekstinhoud "menu". De functie van de knop is een menu openklappen.'
                },
            ],

            passed: [
                {
                    description: 'Een div element heeft als tekstinhoud "submit" en heeft een role attribuut met als waarde "button" maar heeft geen andere attributen en is niet bedienbaar met het toetsenbord.',
                },
            ],

            unclear: [],
        }
    },
    {
        title: 'SC 4.1.3 Status Messages',
        examples: {
            failed: [
                {
                    description: 'Als een formulier verstuurd wordt blijft de focus op dezelfde plek staan en er komt vlak onder de submit knop en bij alle invoervelden een opvallende, duidelijke en correcte foutmelding te staan.'
                },
            ],

            passed: [
                {
                    description: 'Als een formulier verstuurd wordt wordt de volledige pagina ververst en bovenaan de pagina onopvallend een samenvatting van wat fouten geplaatst. De focus wordt echter helemaal bovenaan de pagina geplaatst, ver weg van deze samenvatting.',
                },
            ],

            unclear: [],
        }
    },

];

module.exports = data;