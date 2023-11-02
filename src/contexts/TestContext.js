import { createContext, useState } from "react";

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const questions = [
    {
      question:
        "Ekonomia powinna opierać się najbardziej jak to możliwe na zasadach wolnego rynku.",
      effects: { right: 1, auth: -0.2 },
      min: -1,
      max: 1,
      marks: [
        {
          value: -0.99,
          answer: "Nie zgadzam się",
          left: 0,
          position: "absolute",
        },
        {
          value: 0,
          answer: "Nie wiem",
        },
        {
          value: 0.99,
          answer: "Zgadzam się",
          right: 0,
          position: "absolute",
        },
      ],
    },
    {
      question: "Ubezpieczenia zdrowotne powinny być",
      effects: { right: 1, auth: -0.2, prog: 0 },
      marks: [
        {
          value: -0.99,
          answer: "Tylko państwowe",
          left: 0,
          position: "absolute",
        },
        {
          value: 0.99,
          answer: "Tylko prywatne",
          right: 0,
          position: "absolute",
        },
      ],
    },
    // {
    //   question:
    //     "Pracodawcy najlepiej znają wartość pracy zatrudnionego, dlatego też uczciwie go wynagradzają.",
    //   effects: { right: 1, auth: -0.3 },
    //   min: -0.2,
    //   max: 1,
    //   marks: [
    //     {
    //       value: -0.2,
    //       position: "absolute",
    //       answer: "Nie",
    //       left: 0,
    //     },
    //     {
    //       value: 0,
    //       answer: "Nie wiem",
    //       left: 0,
    //     },

    //     {
    //       value: 0.99,
    //       answer: "Tak",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "Człowiek jest z natury zachłanny",
    //   effects: { auth: 0.25 },
    //   min: 0,
    //   max: 1,
    //   marks: [
    //     {
    //       value: 0.0,
    //       position: "absolute",
    //       answer: "Nie",
    //       left: 0,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Tak",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "Komunizm nigdy nie zadziała w praktyce.",
    //   effects: { right: 1, auth: -0.3, prog: -0.1 },
    // },
    // {
    //   question: "Podatki powinny być jak najmniejsze.",
    //   effects: { right: 1, auth: -0.7 },
    // },
    // {
    //   question: "Opodatkowanie dochodu to dobry pomysł.",
    //   effects: { right: -0.5, prog: 0.2, auth: 0.2 },
    // },
    // {
    //   question:
    //     "Ciężką pracą zawsze doprowadzisz się do awansu w hierarchii społecznej.",
    //   effects: { right: 0.5, prog: 1 },
    // },
    // {
    //   question: "Duże organizacje i korporacje potrzebują regulacji.",
    //   effects: { right: -0.8, auth: 1 },
    // },
    // {
    //   question:
    //     "W idealnym świecie prywatne przedsiębiorstwa nie powinny istnieć.",
    //   effects: { right: -1, auth: 1, prog: 0.25 },
    // },
    // {
    //   question:
    //     "Każdy ma prawo indywidualnie decydować o tym, co chce robić w życiu.",
    //   effects: { right: 1, prog: 1, auth: -0.7 },
    // },
    // {
    //   question: "Gromadzenie majątku nie powinno być dozwolone.",
    //   effects: { right: -1, auth: 0.2, prog: -0.1 },
    //   min: 0,
    //   max: 1,
    //   marks: [
    //     {
    //       value: 0.01,
    //       position: "absolute",
    //       answer: "Nie zgadzam się",
    //       left: 0,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Zgadzam się",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "Czy rząd powinien zapewniać opiekę socjalną?",
    //   effects: { right: -1, auth: 0.3, prog: 0.2 },

    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer:
    //         windowWidth > 550 ? (
    //           "Żadnej"
    //         ) : (
    //           <div
    //             style={{
    //               fontSize:
    //                 windowWidth > 450 ? 16 : windowWidth > 400 ? 14 : 12,
    //             }}
    //           >
    //             Żadnej
    //           </div>
    //         ),
    //       left: 0,
    //     },
    //     {
    //       value: -0.7,
    //       position: "absolute",
    //       answer:
    //         windowWidth > 630 ? (
    //           "Dla niepełnosprawnych"
    //         ) : (
    //           <div
    //             style={{
    //               display: "flex",
    //               flexDirection: "column",
    //               fontSize:
    //                 windowWidth > 550
    //                   ? 20
    //                   : windowWidth > 450
    //                   ? 16
    //                   : windowWidth > 400
    //                   ? 14
    //                   : 12,
    //             }}
    //           >
    //             <p>Dla</p>
    //             <p>niepełnosprawnych</p>
    //           </div>
    //         ),
    //       left: windowWidth > 630 ? -60 : windowWidth > 450 ? -80 : -55,
    //       top: windowWidth > 630 ? -50 : -80,
    //     },
    //     {
    //       value: -0.4,
    //       answer:
    //         windowWidth > 550 ? (
    //           "Dla najuboższych"
    //         ) : (
    //           <div
    //             style={{
    //               fontSize:
    //                 windowWidth > 450 ? 16 : windowWidth > 400 ? 14 : 12,
    //               display: windowWidth > 350 ? "block" : "flex",
    //               flexDirection: "column",
    //             }}
    //           >
    //             <span>Dla </span>
    //             <span>najuboższych</span>
    //           </div>
    //         ),
    //       left: 0,
    //     },
    //     {
    //       value: 0.2,
    //       position: "absolute",
    //       answer:
    //         windowWidth > 550 ? (
    //           "Prodemograficzną"
    //         ) : (
    //           <div
    //             style={{
    //               fontSize:
    //                 windowWidth > 450 ? 16 : windowWidth > 400 ? 14 : 12,
    //             }}
    //           >
    //             Prodemograficzną
    //           </div>
    //         ),
    //       right: windowWidth > 450 ? -30 : -10,
    //       top: -50,
    //     },
    //     {
    //       value: 0.6,
    //       answer:
    //         windowWidth > 550 ? (
    //           "Aktywizacyjną"
    //         ) : (
    //           <div
    //             style={{
    //               fontSize:
    //                 windowWidth > 450 ? 16 : windowWidth > 400 ? 14 : 12,
    //             }}
    //           >
    //             Aktywizacyjną
    //           </div>
    //         ),
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer:
    //         windowWidth > 650 ? (
    //           "Bezwarunkowy dochód podstawowy"
    //         ) : (
    //           <div
    //             style={{
    //               display: "flex",
    //               flexDirection: "column",
    //               fontSize:
    //                 windowWidth > 550
    //                   ? 20
    //                   : windowWidth > 450
    //                   ? 16
    //                   : windowWidth > 400
    //                   ? 14
    //                   : 12,
    //             }}
    //           >
    //             <p>Bezwarunkowy</p>
    //             <p>dochód podstawowy</p>
    //           </div>
    //         ),
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    //   info: (
    //     <div>
    //       <p style={{ marginBottom: 10 }}>
    //         W pytaniu chodzi przede wszystkim o stopień pomocy socjalnej,
    //         którego ma udzielać władza.
    //       </p>
    //       <p style={{ marginBottom: 10 }}>
    //         Podpowiedzi na osi mają charakter wyłącznie pomocniczy i ich za
    //         zadaniem jest przede wszystkim pomóc mniej więcej świadomić sobie o
    //         jaki poziom socjalnej pomocy chodzi.
    //       </p>
    //       <p>
    //         Możesz oczywiście popierać np. pomoc prodemograficzną, a nie
    //         popierać dla najuboższych, powinieneś wtedy jednak skorygować swój
    //         wynik odpowiednio w lewo, nawet jeśli oznaczałoby to teoretycznie na
    //         skali zgodę na coś odwrotnego.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   // fundacje
    //   question:
    //     "Instytucje charytatywne są skuteczniejsze w pomocy potrzebującym niż państwo",
    //   effects: { right: 0.5, auth: -0.5 },
    // },
    // {
    //   question: "Każdy ma prawo wyznawać jakąkolwiek religię",
    //   effects: { prog: 0.75, auth: -1 },
    // },

    // {
    //   question: "Małżeństwa państwowe powinny istnieć",
    //   effects: { prog: -0.6, auth: 0.3 },
    // },

    // {
    //   question: "Jeśli małżeństwa powinny istnieć, to w jakiej konfiguracji.",
    //   effects: { prog: 1, auth: -1 },
    //   min: 0,
    //   max: 1,
    //   marks: [
    //     {
    //       value: 0,
    //       position: "absolute",
    //       answer: "Kobieta i mężczyzna",
    //       left: 0,
    //     },
    //     {
    //       value: 0.4,
    //       // position: "absolute",
    //       answer:
    //         windowWidth > 310 ? (
    //           "Pary homoseksualne"
    //         ) : (
    //           <div style={{ display: "flex", flexDirection: "column" }}>
    //             <span>Pary</span>
    //             <span>homoseksualne</span>
    //           </div>
    //         ),
    //       // left: -60,
    //       top: windowWidth > 310 ? -50 : -60,
    //     },
    //     {
    //       value: 0.7,
    //       answer: "Poligamia",
    //       // left: 0,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Wszystkie możliwe",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    //   info: (
    //     <div>
    //       Jak w każdym pytaniu, tak i w tym, nasza odpowiedź znajduje się w
    //       pewnym spektrum. Być może akceptujemy poligamię, natomiast związków
    //       jednopłciowych nie. Podobnie jak przy pytaniu o pomoc socjalną, w
    //       takim przypadku należałoby odpowiednio skorygować swoją odpowiedź na
    //       osi w lewo, mimo że sugerowałoby to odpowiedź odwrotną. Wszystkie
    //       możliwe konfiguracje zawierają w sobie nawet takie skrajności jak
    //       prawna dopuszczalność małżeństw ze zwierzętami lub rzeczami.
    //     </div>
    //   ),
    // },

    // {
    //   question: "Rząd powinien mieć odgórną możliwość ustalania cen.",
    //   effects: { right: -1, auth: 1 },
    //   min: -0.5,
    //   max: 1,
    //   marks: [
    //     {
    //       value: -0.49,
    //       position: "absolute",
    //       answer: "Żadnej ceny",
    //       left: 0,
    //     },
    //     {
    //       value: 0.1,
    //       // position: "absolute",
    //       answer: "Istnieją takie produkty",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Powinien ustalać wszystkie",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "To władza powinna decydować o wysokości wynagrodzenia.",
    //   effects: { right: -1, auth: 1 },
    //   min: -0.5,
    //   max: 1,
    //   marks: [
    //     {
    //       value: -0.49,
    //       position: "absolute",
    //       answer: "Żadnego wynagrodzenia",
    //       left: 0,
    //     },
    //     {
    //       value: -0.3,
    //       answer: "W rządzie / policji / wojsku",
    //       left: 50,
    //       top: -50,
    //     },
    //     {
    //       value: 0,
    //       answer: "W biurokracji państwowej",
    //       left: 50,
    //       top: -50,
    //     },
    //     {
    //       value: 0.5,
    //       // position: "absolute",
    //       answer: "W pewnych gałęziach gospodarki",
    //       // left: -60,
    //       left: 50,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Powinna ustalać wszystkie",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },

    // {
    //   question: "Związki zawodowe powinny mieć istotny wpływ na gospodarkę",
    //   effects: { right: -0.7, prog: 0.3 },
    //   max: 0.8,
    //   marks: [
    //     {
    //       value: -0.99,
    //       answer: "Nie zgadzam się",
    //       left: 0,
    //       position: "absolute",
    //     },
    //     {
    //       value: 0,
    //       answer: "Nie wiem",
    //     },
    //     {
    //       value: 0.79,
    //       answer: "Zgadzam się",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "Wszystkie przemysły i banki powinny być upaństwowione.",
    //   effects: { right: -1 },
    // },
    // {
    //   question:
    //     "Zadaniem państwa powinno być między innymi przeciwdziałanie nierównościom ekonomicznym.",
    //   effects: { right: -0.5 },
    // },
    // {
    //   question:
    //     "Nie da się skutecznie walczyć z terroryzmem bez ograniczania wolności obywateli.",
    //   effects: { auth: 0.5 },
    // },
    // {
    //   question: "Każdy obywatel powinien być stale monitorowany",
    //   effects: { auth: 1 },
    // },
    // {
    //   question: "Każdy autorytet można poddać w wątpliwość.",
    //   effects: { auth: -0.2 },
    // },
    // {
    //   question: "Silny rząd jest niezbędny do osiągnięcia sukcesu przez kraj.",
    //   effects: { auth: 0.5 },
    // },
    // {
    //   question: "Tylko rząd może uczciwie i skutecznie regulować organizacje.",
    //   effects: { prog: -1 },
    // },
    // {
    //   question:
    //     "Społeczeństwo wymaga struktur i biurokracji, aby działać poprawnie.",
    //   effects: { auth: 1 },
    // },
    // {
    //   question:
    //     "Mogą zaistnieć sytuacje, w których wojsko powinno pełnić funkcje policyjne wobec cywilów.",
    //   effects: { auth: 1 },
    // },
    // {
    //   question: "Jeśli nie masz nic do ukrycia, nie masz czego się bać.",
    //   effects: { auth: 1 },
    // },
    // {
    //   question:
    //     "Rząd powinien być mniej zaangażowany w codzienne życie swoich obywateli.",
    //   effects: { auth: -1 },
    // },
    // {
    //   question: "Aresztowanie tymczasowe (bez procesu) powinno być zakazane.",
    //   effects: { auth: -0.3 },
    // },
    // {
    //   question: "Im mniej regulacji, tym wolniejsi ludzie.",
    //   effects: { auth: -1 },
    // },
    // {
    //   question: "Służba w wojsku nie powinna być obowiązkowa.",
    //   effects: { auth: -1 },
    // },
    // {
    //   question:
    //     "Aby skutecznie pilnować porządku, policja powinna mieć bardzo duże uprawnienia.",
    //   effects: { auth: 1, prog: -0.2 },
    // },
    // {
    //   question:
    //     "Wybór szkoły powinien być dokonywany przez rodziców, a nie przez władze.",
    //   effects: { auth: -1 },
    // },
    // {
    //   question: "Szkoły nie powinny mieć państwowej podstawy programowej.",
    //   effects: { auth: -1 },
    // },
    // {
    //   question:
    //     "Powinien istnieć zunifikowany system sprawdzający wiedzę i umiejętności obywateli.",
    //   effects: { auth: -1 },
    // },
    // {
    //   question: "Każda dorosła osoba powinna mieć prawo wyboru władzy.",
    //   effects: { prog: 1, auth: -0.2 },
    // },
    // {
    //   question:
    //     "Prawo wyboru władzy może zostać ograniczone pod pewnymi warunkami.",
    //   effects: { prog: 0.1, auth: -0.5 },
    // },
    // {
    //   question:
    //     "Starsi ludzie, ze względu na swoje doświadczenie, powinni mieć w życiu publicznym więdcej do powiedzenia od młodych.",
    //   effects: { prog: -0.7 },
    // },
    // {
    //   question:
    //     "Osoby bogatsze lub inteligentniejsze powinny mieć większy wpływ na wybór władzy od innych ludzi",
    //   effects: { prog: 0.7 },
    // },
    // {
    //   question:
    //     "Ciało jednostki to jej własność, i powinna mieć prawo do robienia z nim wszystkiego, na co ma ochotę.",
    //   effects: { prog: 1 },
    // },
    // {
    //   question: "Eutanazja powinna być legalna.",
    //   effects: { prog: 0.5 },
    // },
    // {
    //   question: "Aborcja powinna być legalna.",
    //   effects: { prog: 0.5 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "Nigdy",
    //       left: 0,
    //     },
    //     {
    //       value: -0.5,
    //       // position: "absolute",
    //       answer: "Przy zagrożeniu życia matki",
    //       // left: -60,
    //       left: 50,
    //       top: -50,
    //     },
    //     {
    //       value: 0,
    //       // position: "absolute",
    //       answer: "W przypadku gwałtów",
    //       // left: -60,
    //       left: 50,
    //       top: -50,
    //     },
    //     {
    //       value: 0.3,
    //       // position: "absolute",
    //       answer: "Przy chorobie płodu",
    //       // left: -60,
    //       left: 50,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Zawsze",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "Podczas ciąży w łonie matki znajduje się człowiek",
    //   effects: { prog: -1 },
    // },
    // {
    //   question:
    //     "Władza powinna być obejmowana na bardzo długi okres lub nawet całe życie.",
    //   effects: { prog: -1, auth: 1 },
    // },
    // {
    //   question:
    //     "Każda dorosła osoba powinna mieć prawo wyznawać cokolwiek lub kogokolwiek, bez ograniczeń.",
    //   effects: { prog: 1 },
    // },
    // {
    //   question:
    //     "Państwo powinno służyć wszystkim mieszkańcom, nie tylko obywatelom.",
    //   effects: { prog: 1 },
    // },
    // {
    //   question: "Zabijanie zwierząt na mięso powinno byc legalne.",
    //   effects: { prog: -1 },
    // },
    // {
    //   question:
    //     "Powinno się zabraniać zabijania przynajmniej niektórych zwierząt ze względów etycznych.",
    //   effects: { prog: 1 },
    // },
    // {
    //   question: "Zwierzęta zasługują na pewne uniwersalne prawa.",
    //   effects: { prog: 1 },
    // },
    // {
    //   question: "Każdy ma prawo żyć z kimkolwiek mu się podoba.",
    //   effects: { prog: 1 },
    // },
    // {
    //   question: "Płeć jest wyłącznie konstruktem społecznym.",
    //   effects: { prog: 1 },
    // },

    // {
    //   question:
    //     "Autonomia ciała dotyczy nawet nieletnich, osób chorych psychicznie i poważnych przestępców.",
    //   effects: { prog: 1 },
    // },
    // {
    //   question: "Homoseksualizm nie jest normalny.",
    //   effects: { prog: -1 },
    // },
    // {
    //   question: "Homoseksualizm jest chorobą.",
    //   effects: { prog: -1 },
    // },
    // {
    //   question:
    //     "Osoby po zmianie płci lub osoby homoseksualne nie powinny mieć prawa do adopcji dzieci.",
    //   effects: { prog: -1 },
    // },
    // {
    //   question:
    //     "Posiadania używek (takich jak narkotyki, alkohol, papierosy) powinno być legalne.",
    //   effects: { prog: -1, right: 1, auth: -1 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "Żadnej",
    //       left: 0,
    //     },
    //     {
    //       value: 0,
    //       // position: "absolute",
    //       answer: "Niektórych",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Wszystkich",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "Kara śmierci powinna istnieć.",
    //   effects: { prog: -0.2 },
    // },
    // {
    //   question: "Policja powinna...",
    //   effects: { prog: -0.2, auth: 0.5, right: -0.2 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "nie istnieć",
    //       left: 0,
    //     },
    //     {
    //       value: -0.4,
    //       // position: "absolute",
    //       answer: "być prywatna",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.4,
    //       // position: "absolute",
    //       answer: "być i prywatna, i państwowa",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "być państwowa",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "Zorganizowane służby ratunkowe powinny...",
    //   effects: { prog: -0.2, auth: 0.5, right: -0.2 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "nie istnieć",
    //       left: 0,
    //     },
    //     {
    //       value: -0.4,
    //       // position: "absolute",
    //       answer: "być prywatne",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.4,
    //       // position: "absolute",
    //       answer: "być i prywatne, i państwowe",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "być państwowe",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "Wszelkie podmioty wojskowe powinny...",
    //   effects: { prog: -0.2, auth: 0.5, right: -0.2 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "nie istnieć",
    //       left: 0,
    //     },
    //     {
    //       value: -0.4,
    //       // position: "absolute",
    //       answer: "być i prywatna, i państwowa",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.4,
    //       // position: "absolute",
    //       answer: "mieć różne systemy",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "być państwowa",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "Czu rząd powinien móc wpływać na gospodarkę?",
    //   effects: { right: -1 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "W ogóle",
    //       left: 0,
    //     },
    //     {
    //       value: -0.4,
    //       // position: "absolute",
    //       answer: "Cłami i podatkami",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.4,
    //       // position: "absolute",
    //       answer: "W razie konieczności",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Powinien ją kontrolować",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "Wszelkie instytucje sądownicze powinny...",
    //   effects: { prog: -0.2, auth: 0.5, right: -0.2 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "nie istnieć",
    //       left: 0,
    //     },
    //     {
    //       value: -0.4,
    //       // position: "absolute",
    //       answer: "być prywatne",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.4,
    //       // position: "absolute",
    //       answer: "być i prywatne, i państwowe",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "być państwowe",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "W sądzie o winie powinien decydować",
    //   effects: { prog: -0.5, auth: 0.5 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "Ława przysięgłych",
    //       left: 0,
    //     },
    //     {
    //       value: 0.0,
    //       // position: "absolute",
    //       answer: "Nie wiem",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Niezawisły sędzia",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "W więzieniu ważniejsza jest",
    //   effects: { prog: -0.5, auth: 0.5 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "Resocjalizacja",
    //       left: 0,
    //     },
    //     {
    //       value: 0.0,
    //       // position: "absolute",
    //       answer: "Nie wiem",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Kara",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },

    // {
    //   question: "Dzieci z różnych kultur powinny uczyć się oddzielnie.",
    //   effects: { prog: -1 },
    // },
    // {
    //   question:
    //     "Właściwym moralnie byłoby, gdyby zajęcia z religii odbywały się we wszystkich szkołach.",
    //   effects: { prog: -1 },
    // },
    // {
    //   question:
    //     "Rodzice powinni mieć absolutną władzę nad swoimi dziećmi, przynajmniej do pewnego wieku.",
    //   effects: { prog: -1 },
    // },
    // {
    //   question:
    //     "Sprawowanie władzy lub posiadanie prawa własności nad dorosłymi ludźmi jest dopuszczalne.",
    //   effects: { prog: 0.5, auth: 1, right: 0.5 },
    // },
    // {
    //   question: "Broń powinna być oficjalnie dostępna.",
    //   effects: { prog: 0.5, auth: -1 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "Dla nikogo",
    //       left: 0,
    //     },
    //     {
    //       value: -0.5,
    //       // position: "absolute",
    //       answer: "Za zezwoleniem",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.5,
    //       // position: "absolute",
    //       answer: "Po zarejestrowaniu",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Dla każdego bez kontroli",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },
    // {
    //   question: "Pornografia powinna być dostępna?",
    //   effects: { prog: -0.5, auth: 1 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "Dla nikogo",
    //       left: 0,
    //     },
    //     {
    //       value: 0.0,
    //       // position: "absolute",
    //       answer: "Za zezwoleniem",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.7,
    //       // position: "absolute",
    //       answer: "Dla dorosłych",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Dla wszystkich",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    // },

    // {
    //   question: "Państwa narodowe są ideą, którą trzeba chronić.",
    //   effects: { prog: -1 },
    // },

    // {
    //   question: "Jaka powinna być najwyższa forma w strukturze rządzenia?",
    //   effects: { prog: 1, auth: -1 },
    //   marks: [
    //     {
    //       value: -0.99,
    //       position: "absolute",
    //       answer: "Jedna osoba",
    //       left: 0,
    //     },
    //     {
    //       value: -0.5,
    //       // position: "absolute",
    //       answer: "Mała społeczność (np. wsie)",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.0,
    //       // position: "absolute",
    //       answer: "Średnia społeczność (np. samorządy)",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.5,
    //       // position: "absolute",
    //       answer: "Państwo",
    //       // left: -60,
    //       top: -50,
    //     },
    //     {
    //       value: 0.99,
    //       answer: "Cały świat",
    //       right: 0,
    //       position: "absolute",
    //     },
    //   ],
    //   info: (
    //     <div>
    //       Pytanie stawia przed odpowiadającym pod rozwagę kwestię jak szeroką
    //       społecznością zarządzać ma władza. Odpowiedź najbardziej na lewo
    //       odpowiada anarchizmowi, w którym każdy rządzi sobą samodzielnie,
    //       natomiast pomiędzy są przeróżne struktury lokalne, takie jak wsie,
    //       kibuce, miasta, samorządy, a później państwa czy struktury
    //       międzynarodowe typu Unii Europejskiej, natomiast najbardziej na prawo
    //       jest tzw. rząd światowy.
    //     </div>
    //   ),
    // },
    // {
    //   question:
    //     "Przynależność do danej struktuiry samorządowej lub rządowej powinna być kwestią dobrowolną.",
    //   effects: { prog: 1, auth: -1 },
    //   info: (
    //     <div>
    //       Pytanie dotyczy kwestii czy każdy sam powinien móc zdecydować o tym,
    //       czy należy np. do danego państwa i w zamian za przywileje z tym
    //       związane zobowiązywać się do przestrzegania obowiązującego w nim
    //       prawa. Oczywiście takie rozwiązanie ma sens wyłącznie wtedy, gdy osoba
    //       o tym decydująca ma jakąś sensowną alternatywę.
    //     </div>
    //   ),
    // },
    {
      question:
        "Rządy jednej osoby nad całym społeczeństwem są lepsze od tych prowadzonych przez więcej osób.",
      effects: { auth: 1 },
    },
    {
      question: "Władza jest nam dana przez boga.",
      effects: { auth: 1, prog: -1 },
    },
  ];
  const extremeValues = {
    right: { min: 0, max: 0 },
    auth: { min: 0, max: 0 },
    prog: { min: 0, max: 0 },
  };
  questions.map((item) => {
    if (item.effects.right) {
      if (item.effects.right > 0) {
        if (item.max || item.max === 0) {
          extremeValues.right.max = parseFloat(
            (extremeValues.right.max + item.effects.right * item.max).toFixed(2)
          );
        }
        if (item.min || item.min === 0) {
          extremeValues.right.min = parseFloat(
            (extremeValues.right.min + item.effects.right * item.min).toFixed(2)
          );
        } else {
          extremeValues.right.max = parseFloat(
            (extremeValues.right.max + item.effects.right).toFixed(2)
          );
          extremeValues.right.min = parseFloat(
            (extremeValues.right.min - item.effects.right).toFixed(2)
          );
        }
      }
      if (item.effects.right < 0) {
        if (item.min || item.min === 0) {
          extremeValues.right.max = parseFloat(
            (extremeValues.right.max + item.effects.right * item.min).toFixed(2)
          );
        }
        if (item.max || item.max === 0) {
          extremeValues.right.min = parseFloat(
            (extremeValues.right.min + item.effects.right * item.max).toFixed(2)
          );
        } else {
          extremeValues.right.max = parseFloat(
            (extremeValues.right.max - item.effects.right).toFixed(2)
          );

          extremeValues.right.min = parseFloat(
            (extremeValues.right.min + item.effects.right).toFixed(2)
          );
        }
      }
    }
    if (item.effects.auth) {
      if (item.effects.auth > 0) {
        if (item.max || item.max === 0) {
          extremeValues.auth.max = parseFloat(
            (extremeValues.auth.max + item.effects.auth * item.max).toFixed(2)
          );
        }
        if (item.min || item.min === 0) {
          extremeValues.auth.min = parseFloat(
            (extremeValues.auth.min + item.effects.auth * item.min).toFixed(2)
          );
        } else {
          parseFloat(
            (extremeValues.auth.max =
              extremeValues.auth.max + item.effects.auth).toFixed(2)
          );
          parseFloat(
            (extremeValues.auth.min =
              extremeValues.auth.min - item.effects.auth).toFixed(2)
          );
        }
      }
      if (item.effects.right < 0) {
        if (item.min || item.min === 0) {
          extremeValues.auth.max = parseFloat(
            (extremeValues.auth.max + item.effects.auth * item.min).toFixed(2)
          );
        }
        if (item.max || item.max === 0) {
          extremeValues.auth.min = parseFloat(
            (extremeValues.auth.min + item.effects.auth * item.max).toFixed(2)
          );
        } else {
          extremeValues.auth.max = parseFloat(
            (extremeValues.auth.max - item.effects.auth).toFixed(2)
          );

          extremeValues.auth.min = parseFloat(
            (extremeValues.auth.min + item.effects.auth).toFixed(2)
          );
        }
      }
    }
    if (item.effects.prog) {
      if (item.effects.prog > 0) {
        if (item.max || item.max === 0) {
          extremeValues.prog.max = parseFloat(
            (extremeValues.prog.max + item.effects.prog * item.max).toFixed(2)
          );
        }
        if (item.min || item.min === 0) {
          extremeValues.prog.min = parseFloat(
            (extremeValues.prog.min + item.effects.prog * item.min).toFixed(2)
          );
        } else {
          extremeValues.prog.max = parseFloat(
            (extremeValues.prog.max + item.effects.prog).toFixed(2)
          );
          extremeValues.prog.min = parseFloat(
            (extremeValues.prog.min - item.effects.prog).toFixed(2)
          );
        }
      }
      if (item.effects.prog < 0) {
        if (item.min || item.min === 0) {
          extremeValues.prog.max = parseFloat(
            (extremeValues.prog.max + item.effects.prog * item.min).toFixed(2)
          );
        }
        if (item.max || item.max === 0) {
          extremeValues.prog.min = parseFloat(
            (extremeValues.prog.min + item.effects.prog * item.max).toFixed(2)
          );
        } else {
          extremeValues.prog.max = parseFloat(
            (extremeValues.prog.max - item.effects.prog).toFixed(2)
          );

          extremeValues.prog.min = parseFloat(
            (extremeValues.prog.min + item.effects.prog).toFixed(2)
          );
        }
      }
    }
    return null;
  });

  const [isTestStart, setIsTestStart] = useState(false);
  const [result, setResult] = useState({ prog: 0, auth: 0, right: 0 });
  const [answersValue, setAnswersValue] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerValue, setAnswerValue] = useState(0);
  const providerValue = {
    questions,
    isTestStart,
    setIsTestStart,
    result,
    setResult,
    currentQuestion,
    setCurrentQuestion,
    answerValue,
    setAnswerValue,
    extremeValues,
    answersValue,
    setAnswersValue,
  };

  return (
    <TestContext.Provider value={providerValue}>
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
