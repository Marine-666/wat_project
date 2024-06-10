

  // document.addEventListener("DOMContentLoaded", function() {
  //   Gallery1showSlides(slideIndex);
  // });

  // function Gallery1plusSlides(n) {
  //   Gallery1showSlides(slideIndex += n);
  // }

  // function Gallery1currentSlide(n) {
  //   Gallery1showSlides(slideIndex = n);
  // }

  // function Gallery1showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("gallery1 ");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slides[slideIndex-1].style.display = "block";
  // }
  // let slideIndex2 = 1;

  // document.addEventListener("DOMContentLoaded", function() {
  //   Gallery2showSlides(slideIndex2);
  // });

  // function Gallery2plusSlides(n) {
  //   Gallery2showSlides(slideIndex2 += n);
  // }

  // function Gallery2currentSlide(n) {
  //   Gallery2showSlides(slideIndex2= n);
  // }

  // function Gallery2showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("gallery2 ");
  //   if (n > slides.length) {slideIndex2 = 1}
  //   if (n < 1) {slideIndex2 = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slides[slideIndex2-1].style.display = "block";
  // }

//   let slideIndex = 1;

// document.addEventListener("DOMContentLoaded", function() {
//   showSlides(slideIndex);
// });

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }

//   function changeImage(imageSrc) {
//       document.getElementById('mapImage').src = imageSrc;
// }

// script.js




// script.js
document.addEventListener('DOMContentLoaded', () => {
  const categoryToggles = document.querySelectorAll('.category-toggle');
  const beastToggles = document.querySelectorAll('.beast-toggle');
  const beastInfos = document.querySelectorAll('.beast-info');

  // Data o bestiích
  const beasts = {
      drak1: {
          name: 'Bazilišek',
          description: 'Pro boj s nimi se hodí: Zlatá žluva, Úl, Olej proti drakovitým a znamení Aard a Igni. Navzdory oblíbené pověře nedokážou bazilišci proměnit něco na kámen pouhým pohledem. To je však jen malá útěcha vzhledem k tomu, že jejich kyselinové a jedovaté pařáty skýtají mnoho jiných možností, jak svou kořist zabíjet. Bazilišci milují temná a vlhká místa jako třeba sklepy, jeskyně a městské stoky. Loví přes den, kdy trpělivě čekají v úkrytu, než se jejich oběť přiblíží, pak v mžiku vyskočí a provedou smrtící útok.',
          


   
      },
      drak2: {
          name: 'Kuroliškové',
          description: 'Pro boj s nimi se hodí: Úl, Vlaštovka (negování krvácení), Olej proti drakovitým a znamení Aard  Kuroliškové si hoví v temných jeskyních, opuštěných rozvalinách, kobkách pokrytých pavučinami a starých sklepech.'

          
      },
      drak3: {
          name: 'Vidlohoni',
          description: ' Pro boj s nimi se hodí: Zlatá žluva, Úl, Olej proti drakovitým a znamení Aard Vidlohoni za své svérázné jméno vděčí dlouhým ostrým výrůstkům na ocasu. Úder touto zbraní dokáže rozpoltit dubový štít, spolu s rukou, která ho drží. Ačkoliv jejich název připomíná zemědělské náčiní, boj s vidlohonem není jako okopávání brambor a místo sklizně obvykle končí smrtí. Stejně jako všem drakovitým jim jejich velikost nebrání v rychlém létání a protiútoku ze vzduchu. Jsou schopni využít svou váhu a výšku jako výhodu, jelikož svou oběť srazí k zemi pomocí křídel.'



          
      },
      drak4: {
          name: 'Wyverny',
          description: 'Pro boj s nimi se hodí: Zlatá žluva, Úl, Olej proti drakovitým a znamení Aard.  Wyverny běžně útočí ze vzduchu a snaží se svou kořist sundat k zemi pomocí křídel. Jakmile přistane, tak začne používat svůj zobák, aby odlákaly svou pozornost od jejich smrtící zbraně, kterou je bodec na konci jejich ocasu.       '
          
        },
        Elemental1: {
          name: 'Chrlič',
          description: 'Pro boj s nimi se hodí: Dwimeritová petarda, Olej proti magickým bytostem a znamení Quen. Jedná se o extrémně nebezpečné nepřátele. Díky tomu, že jsou vytesáni z žuly a mramoru, tak vydrží neskutečné množství poškození a zároveň mají nadlidskou sílu. '
          
        },
        Elemental2: {
          name: 'Džinové',
          description: 'Pro boj s nimi se hodí: Dwimeritová petarda a Olej proti magickým bytostem. Džin je silný duch vzduchu, zhuštění moci tohoto živlu nabité vědomím a osobností, a to řádně zlomyslnou. Podle legend umí džinové splnit i ta nejbláznivější přání, ale provádějí to s velkou nechutí. Neobvykle mocní mágové tyto bytosti dokážou zajmout a zkrotit. Mág z nich pak může čerpat energii a s její pomocí sesílat kouzla, aniž by musel vyvolávat Moc z obvyklých zdrojů. '
        }  ,
        Elemental3: {
          name: 'Golemové',
          description: 'Golemové jsou bezduchou hmotou, kouzlem přivedenou k životu. Příkazy svého stvořitele poslouchají bez otázek. Díky nezměrné síle, schopnosti ustát bolest, nekonečné trpělivosti a skutečnosti, že nepotřebují ani unci jídla či pití, jsou to ti nejlepší sluhové či strážci, jaké si jen kdo může přát. '
        }  ,
        Elemental4: {
          name: 'Ledoví elementalové',
          description: 'Pro boj s nimi se hodí: Dwimeritová petarda a Olej proti magickým bytostem. Ledový elementál je masa zmrazené vody oživená magií. Tento elementál, postrádající vědomí i svobodnou vůli, je bezmezně vázán příkazy mága, který jej stvořil. Tyto příkazy občas znamenají jediné a to zabít. '
        } , 
        Elemental5: {
          name: 'Ohniví elementálové',
          description: 'Pro boj s nimi se hodí: Dwimeritová petarda, Severní vítr, Olej proti magickým bytostem a znamení Aard. Oheň je nejničivější z živlů, pročež průbojná nebezpečnost tohoto stvoření, které ztělesňuje jeho esenci, nikoho  nepřekvapí. Ohniví elementálové vznikají během složitých magických obřadů za jediným účelem, kterou je zkáza. A o tu se snaží s vražedným odhodláním. '
        }  ,
        Elemental6: {
          name: 'Psi Divokého honu',
          description: ' Pro boj s nimi se hodí: Dwimeritová petarda, Olej proti magickým bytostem a znamení Igni a Axie. Psi Divokého Honu, kteří jsou, tedy alespoň podle toho, co se někteří odborníci domnívají, zrozeni z magického ledového krystalu. Klušou po boku svých přízračných pánů a doprovází je při jejich výpravách. Stejně jako vyhladovělí divocí psi jsou schopni pouze bezmyšlenkovitě zaútočit na cokoliv, co jim zkříží cestu. '
        }  ,
        Elemental7: {
          name: 'Zemní elementálové',
          description: 'Zemní elementálové se skládají z bláta, hlíny, písku a štěrkového prachu, to vše je spojené vodou a oživeno magií. Ačkoliv jsou tato stvoření zdánlivě pomalá a váhavá, tak jsou stále nebezpečná a každý by se jim měl vyhnout za každou cenu. Dokáží vydržet neskutečné množství poškození a díky jejich obrovské mase je prakticky nemožné je vyvést z rovnováha. Nekrvácí a jsou imunní vůči jedu i ohni.'

           
        },
        Hmyz1:{
          name: 'Endriarčí dělnící',
          description: 'Pro boj s nimi se hodí: Zlatá žluva a Olej proti hmyzovitým. Dělníci jsou tou nejpočetnější, a tudíž tou nejvídanější kastou endriag. V kolonii jejich povinnosti spočívají v budování hnízd a kokonů, získávání potravy a péče o vajíčka a larvy. V případě ohrožení přivolají na pomoc válečníky, ale pokud budou muset, budou se bránit sami, a to překvapivě dobře. Endriačí dělníky je možné nejčastěji spatřit ve skupinách po šesti a více členech. Pohybují se pomalu, ale během útoku jsou schopni v mžiku překonat vzdálenost dělící je od oběti.  '

        } ,
        Hmyz2:{
          name:'Endriarčí trubci', 
          description:'Pro boj s nimi se hodí: Zlatá žluva a Olej proti hmyzovitým. Endriačí samci, takzvaní “trubci”, jsou nenasytné stvůry, jejichž jediný životní cíl je žrát, bojovat a množit se. Když se ale dostanou mimo svá hnízda, útočí tito násilní lovci na všechna stvoření, která se jim dostanou do cesty.  Endriačí trubci žijí pouze krátce a vrchol jejich života přichází na podzim, kdy oplodňují královnu. Čas vedoucí k tomuto okamžiku tráví obranou svého území. '
        } ,
        Hmyz3:{
          name:'Endriarčí válečníci',
          description:'Pro boj s nimi se hodí: Zlatá žluva a Olej proti hmyzovitým. Nekonečné vlny endriačních trubců dokáží přemoct většinu útočníků, ale do střetu s nebezpečnějšími protivníky kolonie endriag nasadí své větší a silnější členy, takzvané válečníky. Tato kasta žije jen pro boj, ke kterému má příležitostí více než dost, když brání hranice kolonie či dobývá nová území. Hlavní zbraní endriačích válečníků je jejich dlouhý ocas, který je zakončen mlatovým výběžkem s ostrými jedovatými ostny. '          
        } ,
        Hmyz4:{
          name:'Jedovatí krabopavouci',
          description:'Pro boj s nimi se hodí: Zlatá žluva a Olej proti hmyzovitým.  Ačkoliv jsou všichni krabopavouci prudce jedovatí, toto plemeno používá neskutečně silný toxin. Na zabití dospělého muže stačí pár kapek, tedy pokud se nejedná o zaklínače, jehož mutace malou dávku tohoto jedu zneškodní. Velké množství ovšem dokáže zabít cokoliv, čeho se dotknou, a mutace v takových případech pouze prodlužují nevyhnutelnou a bolestivou smrt.  Jedovatí krabopavouci produkují obrovské množství tohoto toxinu a dokáží ho použít během boje několika různými způsoby. Předtím než udeří, tak pokryjí své klepeta a zuby silnou vrstvou této smrtící tekutiny. Poté jed plivne na nepřítele,'

         
        } ,
        Hmyz5:{
          name:'Krabopavouci',
          description:' Pro boj s nimi se hodí: Zlatá žluva a Olej proti hmyzovitým. Mocná klepeta, chřtán plný zubů ostrých jako břitva a jedové žlázy se smrtícími toxiny, taková je krabopavoučí smrtící výzbroj. Jelikož lidé a hospodářská zvířata představují významnou část stravy těchto stvůr, zakázky na krabopavouky představují na druhou stranu důležitý zdroj zaklínačské obživy. '
        } ,
        Hmyz6:{
          name:'Obrnění krabopavouci',
          description:'Pro boj s nimi se hodí: Zlatá žluva a Olej proti hmyzovitým. Jedinou slabinou krabopavouka je jeho měkké a citlivé břicho. Někteří krabopavouci ho zakrývají dutými pařezy, zatímco je zde i druhá, “obrněná” varianta, která si vyvinula silný krunýř pokrývající všechny citlivější části jejich těla.'

        } ,
        Hybrid1:{
          name:"Erynie",
          description: "Pro boj s nimi se hodí: Úl, Olej proti hybridům a Aard Je těžké si to představit, ale erynie nacházející se na Skellige jsou ještě odpudivější a nebezpečnější, než harpyje, jejich blízké příbuzné. Ačkoliv nejraději hodují na dobře rozleželé mrtvole, nepohrdnou ani čerstvým masem, lidské nevyjímaje. Když spatří případnou oběť, erynie se stejně jako harpyje a šišigy pokusí naplno využít své početní převahy a schopnosti brázdit nebesa. "
        },
        Hybrid2:{
          name:"Gryfové",
          description: "Pro boj s nimi se hodí: Úl, Olej proti hybridům a Aard, Gryfové se kdysi nalézali jen vysoko v horách, kde lovili sviště a divoké kozy. Jednou si však uvědomili, že země obydlené lidmi skýtají mnohem bohatší a snadnější kořist, zejména krávy, ovce a pastýře. Tyto stvůry, které jsou napůl orlem a napůl divokou kočkou, se tedy během několika málo let staly ze vzácného druhu tou nejhorší škodnou sužující severní království. "
        },
        Hybrid3:{
          name:'Harpyje',
          description: "Pro boj s nimi se hodí: Úl, Olej proti hybridům a Aard, Harpyjí hnízda se nejčastěji nacházejí na vrcholcích vysokých útesů či skalistých stržích. Jasným důkazem toho, že jste zabloudili do jeho okolí, jsou rozpadající se lidské a zvířecí ostatky, guánem pokryté kameny a peří rozházené po zemi. Harpyjí hnízda se nejčastěji nacházejí na vrcholcích vysokých útesů či skalistých stržích. Jasným důkazem toho, že jste zabloudili do jeho okolí, jsou rozpadající se lidské a zvířecí ostatky, guánem pokryté kameny a peří rozházené po zemi. Harpyje a šišigy loví v hejnech číhajících pár až dvacet jedinců. Ačkoliv jsou převážně zbabělé a opatrné, harpyje zuřivě brání svá hnízda a nebudou s útokem váhat, pokud jsou v přesile."

        },
        Hybrid4: {
          name:'Sirény',
          description:"Pro boj s nimi se hodí: Úl, Olej proti hybridům, Igni a Aard. Sirény a lamie (nejbezpečnější sestřenice sirén) většinou loví v hejnech, přičemž využívají svého počtu a schopnosti snadno se pohybovat ve vzduchu i ve vodě. Na zemi jsou však v podstatě bezbranné, a proto je vhodnou taktikou poškodit jejich křídla podobná ploutvím a donutit je přistát. Znamení Igni je v boji proti nim taktéž velmi účinné. Ohrožené či zraněné sirény vydají děsivý křik, čímž na chvíli svého protivníka ochromí a vydají se na ústup "

          
        },
        Hybrid5: {
          name:'Sukuby',
          description:"Pro boj s nimi se hodí: Olej proti hybridům a Quen. Oproti ostatním příšerám necítí sukuby a menády potřebu zabíjet, netouží po lidském mase a obvykle vlastně ani nikomu nechtějí ublížit. Žene je pouze jedna jediná věc: neukojitelný chtíč. Marně se ho snaží utišit milostnými hrátkami s jakýmkoliv lidem podobným druhem, na který narazí.  pokud jsou donuceny k boji, brání se zuřivě. Není tedy dobré nechat se oklamat jejich lepým vzhledem, pod sametovou pokožkou se ukrývají svaly jako ze železa a rány uštědřené jejich zadníma kozíma nohama či tvrdými rohy dokážou snadno zlomit kost. "
        },
        Nekrofag1:{
          name: 'Alghulové',
          description:"Pro boj s nimi se hodí: Olej proti nekrofágům a Axie. Alghúlové se od běžných ghúlů liší velikostí, silou, barvou a především bystrostí. Zatímco ghúlové a graveiři jsou primitivní stvoření neschopná nastražit ani sebe jednodušší léčku, alghúlové a jejich příbuzní (jako třeba hřbitauři) jsou prozíraví a o to nebezpečnější. Ghúlové jsou alespoň natolik chytří, že poznají bystřejší mysl, a proto vůdcovství svých smeček přenechávají alghúlům a hřbitaurům. Takto vedená smečka dokáže nahnat hrůzu všemu, co se jí dostane do cesty.  Při setkání s takovou smečkou je nezbytné zneškodnit alghúla přednostně a zbytek příšer si nechat na později."

        },
        Nekrofag2:{
          name: 'Ghulové',
          description:"Pro boj s nimi se hodí: Olej proti nekrofágům. V souboji jeden na jednoho se zkušeným zaklínačem představuje jeden ghúl malou hrozbu, ale je třeba si pamatovat, že zranění jedinci propadají šílenému běsnění. V takových případech útočí zuřivě a neberou ohled na vlastní bezpečí ani utržená zranění. Je třeba také mít na paměti, že ghúlové a graveiři jsou obzvláště nebezpeční při setmění a v noci. "
        },
        Nekrofag3:{
          name: 'Hrobice',
          description:"Pro boj s nimi se hodí: Černá krev, Olej proti nekrofágům, Yrden a Quen. Jen málo názvů příšer sedí tak přiléhavě jako v případě hrobice. Jak napovídá původ tohoto označení (hrob + babice), připomínají zestárlou a znetvořenou ženu, která se plouží poblíž hřbitovů a bojišť. Hrobice se živí lidskými mrtvolami a obzvláště shnilým morkem, který srkají z kostí pomocí dlouhých a obratných jazyků. Jakmile babice pozře všechny mrtvoly v dosahu, začne zabíjet lidi a pohřbívat je na hřbitově, kde pak čeká, dokud se nezačnou rozkládat. "
        },
        Nekrofag4:{
          name: 'Mlhavci',
          description:"Pro boj s nimi se hodí: Měsíční prach, Olej proti nekrofágům a Quen. Mlha je poutníkův nepřítel. V lese kvůli ní může člověk snadno sejít z cesty, na moři vás může vrhnout na skaliska. Ale taková nebezpečenství nejsou nic v porovnání s příšerami známými jako mlhavci, které v mlze občas přebývají. Tyto obludy mají silné paže a drápy jako zerrikánské kinžály, ale ze všeho nejnebezpečnější jsou kvůli svému mistrovství klamu, šálení a matení. Častokrát ani nemusí vůbec útočit, prostě svou kořist doženou k šílenství či zavedou do bažinatých mokřadů, a čekají až se obět utopí."
        },
        Nekrofag5:{
          name: 'Ohnilci',
          description:"Pro boj s nimi se hodí: Olej proti nekrofágům. Ačkoliv se živí převážně mršinami, občas zaútočí i na živé. Většinou se krmí ve velkých skupinách, a tudíž představují hrozbu pro osamělé poutníky. Rozkládající se tělo ohnilců je plné plynů, které jsou jedovaté i pro ty, již jsou stejně jako zaklínači neteční vůči většině ostatních toxinů. Tyto výpary jsou také vysoce hořlavé, takže i sebemenší jiskra, o bezhlavě seslaném znamení Igni nemluvě, může vést k výbuchu."
        },
        
        Nekrofag6:{
          name: 'Topivci',
          description:"Pro boj s nimi se hodí: Olej proti nekrofágům a Igni.  Zatímco topivci z dálky člověka opravdu připomínají, zaklínači, kteří mají to pochybné potěšení z častých blízkých setkání, uvedli bezpočet věcí, kterými se jejich stavba těla liší od té naší.  Ale pokud by se do jejich území zatoulal nějaký osamělý poutník či neopatrný rybář, změní se z rabovačů na úporné lovce. Dokážou útočit rychlostí blesku, čímž svou oběť překvapí a stáhnou ji pod vodu, kde ji utopí.  "
        },
        Nekrofag7:{
          name: 'Vodnice',
          description:"Pro boj s nimi se hodí: Severní vítr, Olej proti nekrofágům, Quen a Igni. Vrásčité tělo pokryté bradavicemi je téměř dva yardy vysoké, zbarvené do zeleno-růžova a páchnoucí bahnem a rybinou. Jejich obraz dokreslují na dvě pěsti dlouhé kostěné výrůstky na zádech, vlasy jako chuchvalec mořských řas a spáry, za které by se nestyděl ani vlkodlak."
        },
        Proklety1:{
          name:'Berserkové',
          description:"Pro boj s nimi se hodí: Ďáblova pecka, Olej proti prokletým, Quen a Igni. Balady skaldů naznačují, že berserka proměněného v žáru bitvy nelze odlišit od skutečného medvěda. Jsou zde pouze maličkosti ve stavbě, například tvar jazyka a zubů, které toto tajemství mohou odhalit. Různé popisy jejich zdatnosti v boji je vykreslují jako nezranitelná stvoření, která necítí bolest a jejichž každá rána se zahojí téměř okamžitě.  Ale pakliže máme tyto prastaré písně o skutcích těchto stvoření , o hromadných vraždách a krveprolitích, jež mají na svědomí , brát vážně, můžeme jen doufat, že žádný zaklínač nebude muset tato tvrzení ověřovat na vlastní kůži. "
        },
        Proklety2:{
          name:'Potracenky',
          description:"Olej proti prokletým a Axie. Potracenky jsou dost možná těmi nejodpudivějšími stvořeními, s jakými se zaklínač může potýkat. Byly zrozeny z mrtvých nechtěných dětí odhozených bez řádného pohřbu. Potracenka ze svého doupěte vylézá v noci, aby se plížila kolem lože matky s outěžkem a vysávala ve spánku sílu jak z ní, tak z nenarozeného potomka. Takto sužovanou ženu nejprve trápí ošklivé sny, pak horečka, blouznění a všeobecné ochabování svalstva. Po několika takových nocích je žena příliš oslabená na to, aby se bránila, a právě tehdy potracenky zaútočí napřímo když zatnou své dlouhé ostré tesáky do jejího těla a sají krev, dokud matka i plod nezahynou. "
        },
        Proklety3:{
          name:'Vlkodlaci',
          description:"Pro boj s nimi se hodí: Měsíční prach, olej proti prokletým, ďáblova pecka a Igni. Vlkodlaci jsou stvoření, která v sobě mají jak kus člověka, tak kus vlka. Ve zvířecí podobě si berou to horší z obojího: od vlků touhu zabíjet a hlad po syrovém mase, od lidí krutost a vypočítavost. Vlkodlactví je způsobeno kletbou a proměny není možné vědomě ovládat. Vlkodlaci jsou činní v noci, obzvláště pak  při úplňku. Ačkoliv loví sami, v případě ohrožení si na svou pomoc povolají vlky. Vlkodlaci jen zřídkakdy cítí potřebu z boje utíkat, neboť málokterý z jejich protivníků jim dá zabrat. Svými drápy ostrými jako břitva útočí bleskurychle a jakékoliv zranění si dokážou vyléčit za pouhých několik okamžiků. "
        },
        selma1:{
          name:'Medvěd',
          description:"Pro boj s nimi se hodí: Olej proti zvířatům a Quen. Medvědi jsou všežravci, což znamená, že v jejich potravě má své místo kromě bobulí, kořínků a lososů i člověk. Když požírají lidi, většinou si pochutnají na poutnících, kteří nevědomky vkročili na jejich území, nebo na lovcích, pro které je skolení tohoto zvířete celoživotním snem. Jsou různá plemena medvědů: černí medvědi, polární medvědi a jeskynní medvědi, která se od sebe liší barvou, jakož i velikostí a silou. Všichni však mají jednu věc společnou a to schopnost zabíjet jako nikdo jiný."
          
        },
        selma2:{
          name:'Psi',
          description:"Pro boj s nimi se hodí: Olej proti zvířatům. Někteří tvrdí, že psi jsou odrazem svých pánů. Dobře vychovaný mazlíček se svému majiteli odvděčuje věrností a důvěrou, zatímco ten, který poznal špatné zacházení, svému okolí oplácí stejně… na křik odpovídá štěkotem a na kopanec kousancem. A jelikož špatných lidí je na světě víc než dost, není nouze ani o zlé psy. Těmi nejnebezpečnějšími ze všech jsou zaběhlí podvraťáci, kteří ztratili veškerou úctu k lidem a které přepadá chuť po krvi a mršině. "


        },
        selma3:{
          name: 'Vlci',
          description:"Pro boj s nimi se hodí: Olej proti zvířatům. Kdysi dávno byli vlci naprostými vládci lesů. Lidé jimi strašili děti, ale před jejich vytím se třásli i dospělí. Příšery z období po Konkjunkci nejenže vlky zahnaly do těch nejhlubších divočin, ale také jim sebraly místo v nočních můrách. To ovšem neznamená, že by tito staří lovci přestali být nebezpeční. Vlci v sobě nemají špetku magie, nedští oheň ani neplivou kyselinu, ale to jim v žádném případě nezabrání v tom, aby zabíjeli zatoulané poutníky a lovce.Obzvláště nebezpeční jsou wargové, odporný a zarputilý poddruh vlků, a sněhově bílí vlci, na které je dnes možné narazit už jen na divokých vysočinách skelligského souostroví." 
        },
        Upir1:{
          name: 'Ekimary',
          description: "Pro boj s nimi se hodí: Ďáblova pecka, Olej proti upírům a znamení Igni. kimary jsou nezvykle kruté a mimořádně hbité. Dokážou rychle zasadit ránu za ránou a tím roztříštit i tu nejlepší makahamskou zbroj na malé kousky. pokud se s nimi někdo pustí do boje, měl by použít stříbrný meč a pamatovat si, že se jim postupně hojí rány. Rozhodně proto není dobrý nápad snažit se je unavit nebo, nedejte bohové, čekat, až vykrvácejí. Místo toho je posekejte, jak jen rychle to dokážete, a pokud možno spalte tělo na popel a rozpylte ho ve větru. "

        },
        Upir2:{
          name: 'Katakani',
          description: "Pro boj s nimi se hodí: Měsíční prach, Ďáblova pecka, Olej proti upírům a znamení Yrden a Igni. Katakani a jejich nebezpečnější příbuzní nekurati, jsou ztělesněním lidského strachu. Schovávají se ve stínech. Krmí se krví. připomínají obrovské netopýry - jen s dlouhými tesáky a ještě delšími pařáty. A jako by tohle nebylo strašné dost, umí se zneviditelnit a nepozorovaně čekat, dokud hrůza z jejich nevyhnutelného útoku jejich oběť zcela nepřemůže."
        },
        Upir3:{
          name:'Vyšší upíři',
          description: "Pro boj s nimi se hodí: Olej proti upírům a znamení Igni. Vyšší upíry a jejich vzdálené a výrazně jednodušší bratrance: ekimary, alpy, katakany a tak podobně spojuje pouze společná žízeň po krvi. Vyšší upíři se ve skutečnosti podobají mnohem víc lidem než těm netopýrovitým krvesajcům. Nejenže nás připomínají vzhledem, ale také sdílí naši inteligenci a vzorce chování. To znamená, že neobývají vzdálené lesy ani se neschovávají ve stínech. Naopak, mají ve velké oblibě města, kde žijí až klamně běžné životy. Zaklínači mají velké štěstí, že vyšší upíři jsou nesmírně vzácní - a ne všichni jsou lidem nebezpeční. Ačkoliv také žízní po krvi, nepotřebují ji pít, aby přežili. Někteří vyšší upíři se sání lidské krve úplně vzdali a nikomu neškodí, ale ostatní se svým touhám poddají. Zaklínač, který se do boje s vyšším upírem odváží, si musí pamatovat, že čelí příšeře obdařené neuvěřitelnou silou a schopné ovládat lidi a okolí, zneviditelnit se a přeměnit se ve velkého netopýra - a také takové, kterou téměř nelze zabít. "
        },
        Obr1:{
          name:'Kyklopové',
          description:"Pro boj s nimi se hodí: Olej proti zlobrovitým a znameními Quen a Axie. Kyklopy je možné snadno poznat podle jediného oka umístěného uprostřed jejich čela. Pokud z nějakého důvodu není vidět, dalšími rozlišovacími znaky jsou obrovská velikost, nesmírná síla a sžírající nenávist vůči všem lidem."
        },
        Obr2:{
          name:'Ledový obr',
          description:"Pro boj s nimi se hodí: Olej proti zlobrovitým a znamením Quen. Toto silné pravěké stvoření je dost možná posledním svého druhu. Ledový obr se v mnoha ohledech podobá člověku, ale je modrý jako námraza a vyšší než strom. Ačkoliv se zdá být schopný rozumně uvažovat, veškeré dosavadní pokusy o navázání řeči skončily stejně - rychlou a bolestivou smrtí."
        },
        Obr3:{
          name:'Ledový troll',
          description:"pro boj s nimi se hodí: Olej proti zlobrovitým a znamením Quen. Šplhat na zasněžené vrcholky není nikdy bezpečné. Jeden může uklouznout a spadnout ze srázu, může ho pohřbít lavina nebo narazí na ledového trolla. Oproti skalním trollům z nižších nadmořských výšek považují tyto příšery přebývající ve věčně zamrzlých oblastech každého, koho potkají, za vhodnou surovinu do chutného žrádla."
        },
        Obr4:{
          name:'Nekkři',
          description:"Pro boj s nimi se hodí: Severní vítr a Olej proti zlobrovitým. Osamělý nekker je neškodný. Pět už znamená nebezpečí. Deset může zabít i zkušeného zabijáka monster. Obzvláště obtížní jsou větší a silnější jedinci známí jako válečníci, jakož i vzácné plemeno nekkerů, kterým se říká fúky."

        },
        Obr5:{
          name:'Skalní troll',
          description:"Pro boj s nimi se hodí: Olej proti zlobrovitým a znamením Quen. Pokud při vysokohorské túře narazíte na kráčející kamení, nebojte se, že by vás klamal zrak. Místo toho taste svůj meč, protože před vámi stojí skalní troll. Pravda, ne každé setkání s těmito bytostmi končí soubojem - ačkoliv nejsou nijak pronikavě bystří, přeci jen jsou trollové schopní rozumně uvažovat - ale je lepší se připravit na nejhorší. Jinak nemusíte skončit na vrcholku hory, ale v jejich kotli."

        },
        prelud1:{
          name:'Hymové',
          description:"Pro boj s nimi se hodí: Měsíční prach, olej proti přeludům a Igni. Příšery si většinou za oběti vybírají nevinné: opozdilé obchodníky, neopatrné děti a poutníky, kteří se zatoulají moc hluboko do lesů kvůli nemístné zvědavosti. Žádný z nich se ovšem nemusí bát hyma. Tyto přízraky se totiž přisávají jen na obzvláště zavrženíhodné jedince, kteří spáchali nějaký nevýslovný zločin. Pro všechny ostatní jsou naprosto neviditelné. Když už se úkážou tomu, koho mučí, vypadají jako vysoké a do stínu oděné lidské siluety s dlouhými ostrými drápy. "
        },
        prelud2:{
          name:'Morové panny',
          description:"Pro boj s nimi se hodí: Olej proti přeludům a Yrden. Když v nějaké oblasti řádí mor, může se tam objevit duch připomínající  nemocnou ženu, které z těla odpadává hnijící maso a v jejíchž patách se plíží hejno krys. Nikdo neví, jestli tento duch mor způsobuje, nebo jestli je k němu pouze přitahován jako můra ke světlu. Jisté však je, že se vyžívá v působení bolesti a utrpení a v nářcích a kvílení nakažených lidí. O tom, jak bojovat s morovou pannou, se toho moc neví, ačkoliv se dá usuzovat, že mají řadu společných rysů s dalšími fantomy a přízraky."
        },
        prelud2:{
          name:'Polednice',
          description:"Pro boj s nimi se hodí: Měsíční prach, Olej proti přeludům a Yrden. Za obzvláště horkých letních dnů, kdy slunce dosahuje nadhlavníku, se občas objeví přízraky, které připomínají sluncem spálenou ženu oblečenou v dlouhé bílé róbě. To jsou polednice, duchové mladých žen a dívek, které zemřely násilnou smrtí těsně před svou svatbou. Polednice nekrvácejí a jsou z větší části netečné vůči účinkům zaklínačských znamení. Jsou schopné vytvářet zrcadlové obrazy sebe sama, které krouží kolem jejich obětí v jakési morbidní napodobenině tance. Tímto přízračným rituálem vyčerpají životní energii svých obětí a samy díky tomu sílí. Polednice také umí do určité míry ovládat hmatatelný svět kolem sebe, například vyvolávají oblaka prachu, která dočasně oslepí a zmatou své protivníky. Polednice se umí odhmotnit a v takových případech je velmi těžké je zranit. Pokud ji nějaký zaklínač chce donutit se opět zhmotnit, musí ji nejprve uvěznit znamením Yrden nebo na ni použít Měsíční prach. "
        },
        prelud2:{
          name:'Přízraky',
          description:"Pro boj s nimi se hodí: Měsíční prach, Olej proti přeludům, Yrden a Quen. Klerikové a učenci se věčně dohadují, jestli duše opravdu po smrti odejdou do jiného světa, kde je čeká nekonečné veselí, nebo utrpení. Obě skupiny se však shodují na tom, co se stane s duchy, kteří z toho či onoho důvodu setrvávají v našem světě i poté, co jejich tělo vydechne naposledy: promění se v přízraky. Kdo slyšel jejich truchlivé nářky, může se domnívat, že tento osud jim není třeba závidět."
        },
        prelud2:{
          name:'Půlnočnice',
          description:"Pro boj s nimi se hodí: Měsíční prach, Olej proti přeludům a Yrden. Během útoku zůstávají půlnočnice většinu času nehmotné, takže tělesné údery jimi projdou. Hmatatelnější podoby nabývají pouze na krátký okamžik, během kterého samy útočí. Když jsou oslabené, vyvolají několik obrazů sama sebe, které sice nemůžou přímo útočit, ale působí jako jakési vysílače, díky kterým půlnočnice dokážou vysávat životní energii ze svých obětí. Půlnočnice se dokážou odhmotnit a v takových případech je velmi těžké je zranit. Ke zhmotnění je možné je přimět uvězněním pomocí znamení Yrden nebo zásahem Měsíčním prachem."
      
        },
        Relik1:{
          name:'Běs',
          description: "Pro boj s nimi se hodí: Samum, ďáblova pecka a olej proti reliktům. Běsové jsou chodící hory svalů završené rohatou a zubatou hlavou. Stejně jako jejich vzácnější bratranci, bukvačové, žijí v hustých lesích, v močálech a bažinách. Pokud je to možné, lidem se vyhýbají, a pokud to možné není, zabijí je, aniž by se nad tím nějak pozastavili. "
        },
        Relik2:{
          name:'Bůžkové',
          description: "Pro boj s nimi se hodí: jsou mírumilovní. Bůžkové (kteří bývají často zaměňováni za lutiny) jsou lesní stvoření přebývající v norách a mechem pokrytých dutých pařezech na okraji lidských osad. Vzhledem i chováním připomínají děti a stejně jako děti se vyžívají v nepleše. Bůžci jsou hluboce zakořeněni ve svém území a konají ochranitelské skutky ve prospěch těch, kteří blízko jejich nor bydlí. Tyto pracovité a chytré bytosti rády poskytují malé služby pro lidi, jež mají ve své péči, a na oplátku žádají pouze úctu a platbu v podobě jídla či již nepotřebných nástrojů. Snadno se nechají urazit hulvátským, nevděčným nebo jen hrubým chováním. Bůžkové si také cení míru a klidu."
        },
        
        Relik3:{
          name:'Čerti',
          description: "Pro boj s nimi se hodí: Ďáblova pecka a olej proti reliktům. Čerti jsou poněkud menšími příbuznými běsů a bukvačů. Ale každý zaklínač, který se domnívá, že jejich menší postava znamená, že nepředstavují žádné nebezpečí, se dopouští smrtelné chyby a to takové, která může jeho kariéru ukončit navždy. Tito obyvatelé temných a prastarých lesů patří mezi ty nejnebezpečnější příšer, které lidé znají."
        },
        
        Relik4:{
          name:'Doppleři',
          description: "Pro boj s nimi se hodí: Olej proti reliktům. Doppleři, kterým se také říká vexlingové či měňavci, jsou bytosti schopné vzít na sebe podobu jakéhokoliv lidského či zvířecího tvora dle libosti. Tato přeměna není pouhou iluzí, kterou lze zrušit jednoduchým kouzlem, ale dokonalou a celkovou metamorfózou. To znamená, že na dopplerovu přítomnost neupozorní ani ochranné škapulíře, ani zaklínačské medailony, protože tyto bytosti vyzařují stejnou auru jako bytosti, jejichž podobu na sebe vzaly. Ve spojení s jejich neuvěřitelným intelektem a prohnaností by z dopplerů byli prvotřídní zabijáci či zloději, pokud by je příroda neobdařila štědrou a mírumilovnou povahou, kvůli čemuž se vyhýbají krveprolití za každou cenu."
        },
        
        Relik5:{
          name:'Ježibaby',
          description: "Pro boj s nimi se hodí: Olej proti reliktům a Quen. Osamělá zákoutí našeho světa jsou domovem příšer starších než lidstvo samo, starších než akademie a mágové, starších i než elfové a trpaslíci. Právě takovými příšerami jsou i Ježibaby z Křivušských Blat. Nikdo nezná jejich pravá jména ani co za obludnosti ve skutečnosti jsou. Prostý lid těmto třem sestrám dal přezdívky Pletana, Vařena a Šeptana a celé trojici říkají “Dámy lesa” či prostě “Dobrotivé dámy”. Ježibaby působí jako svrchované vládkyně Velenu, jehož obyvatelům pomáhají přežít drsné časy výměnou za bezpodmínečnou poslušnost. Ovládají mocnou magii, ale jinou než mágové."
        },
        
        Relik6:{
          name:'Lešijové',
          description: "Pro boj s nimi se hodí: Dwimeritová petarda, olej proti reliktům a Igni.  Lešijové přebývají v hustých a starých lesích. Svá území si nesmírně zuřivě brání, loví plíživě, vychytrale a sami. Pomocí vrozené magie ovládají rostliny i zvířata ve svém území, a proto když jednoho stopujete, představuje půlku bitvy jen samotná snaha dostat se k němu na dosah meče. Lešijové, kteří jsou natolik letití, aby si vysloužili přízvisko “prastarý”, používají pokročilé schopnosti a taktiku a jsou tudíž mnohem nebezpečnější."
        },
        
        Relik7:{
          name:'Sylvani',
          description: "Pro boj s nimi se hodí: Samum, ďáblova pecka, olej proti reliktům a Igni. Sylvani a jakšové, což je spřízněný druh, jsou nesmírně vzácná lesní stvoření, v jejichž vzhledu se snoubí rysy koz a obtloustlých mužů. Tyto bytosti obvykle nepředstavují velké nebezpečí, neboť svůj styk s lidmi omezují na hravé a neškodné (ačkoliv občas otravné) šprýmy a žraní plodin z jejich polí."

          
        }
        
  };

  categoryToggles.forEach(button => {
      button.addEventListener('click', () => {
          const categoryContent = button.nextElementSibling;
          categoryContent.style.display = categoryContent.style.display === 'block' ? 'none' : 'block';
      });
  });

  beastToggles.forEach(button => {
      button.addEventListener('click', () => {
          const beastKey = button.getAttribute('data-beast');
          const beast = beasts[beastKey];
          const beastInfo = button.parentElement.nextElementSibling;

          if (beast) {
              beastInfo.innerHTML = `
                  <h2>${beast.name}</h2>
                  <p>${beast.description}</p>
           
              `;
              beastInfo.style.display = 'block';
          }
      });
  });
});
function toggleBeastInfo(event) {
  const content = event.currentTarget.nextElementSibling;
  if (content.style.display === "block") {
      content.style.display = "none";
  } else {
      // Zavření všech ostatních otevřených informací o bestii
      const allContents = document.querySelectorAll('.category-content');
      allContents.forEach(item => item.style.display = "none");
      content.style.display = "block";
  }
}

// Přidání události pro každou kategorii
const categoryToggles = document.querySelectorAll('.category-toggle');
categoryToggles.forEach(toggle => {
  toggle.addEventListener('dblclick', toggleBeastInfo);


  

  

});








