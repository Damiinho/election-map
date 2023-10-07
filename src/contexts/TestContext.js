import { createContext, useState } from "react";

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const questions = [
    {
      question:
        "Ekonomia powinna opierać się najbardziej jak to możliwe na zasadach wolnego rynku.",
      effects: { right: 1 },
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
      effects: { right: 1, auth: -0.2, prog: -0.3 },
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
    {
      question:
        "Pracodawcy najlepiej znają wartość pracy zatrudnionego, dlatego też uczciwie go wynagradzają.",
      effects: { right: 1, auth: -0.2 },
      min: -0.2,
      max: 1,
      marks: [
        {
          value: -0.2,
          position: "absolute",
          answer: "Nie",
          left: 0,
        },
        {
          value: 0,
          answer: "Nie wiem",
          left: 0,
        },

        {
          value: 0.99,
          answer: "Tak",
          right: 0,
          position: "absolute",
        },
      ],
    },
    {
      question: "Człowiek jest z natury zachłanny",
      effects: { right: 1 },
    },
    {
      question: "Komunizm nigdy nie zadziała w praktyce.",
      effects: { right: 1, auth: -0.3 },
    },
    {
      question: "Podatki powinny być jak najmniejsze.",
      effects: { right: 1 },
    },
    {
      question: "Opodatkowanie dochodu to dobry pomysł.",
      effects: { right: -0.5 },
    },
    {
      question:
        "Ciężką pracą zawsze doprowadzisz się do awansu w hierarchii społecznej.",
      effects: { right: 0.5, prog: 1 },
    },
    {
      question: "Duże organizacje i korporacje potrzebują regulacji.",
      effects: { right: -0.5, auth: 1 },
    },
    {
      question:
        "W idealnym świecie prywatne przedsiębiorstwa nie powinny istnieć.",
      effects: { right: -1, auth: 1 },
    },
    {
      question:
        "Każdy ma prawo indywidualnie decydować o tym, co chce robić w życiu.",
      effects: { right: 0.2, prog: 1 },
    },
    {
      question: "Gromadzenie majątku nie powinno być dozwolone.",
      effects: { right: -1, prog: -1 },
      min: 0,
      max: 1,
      marks: [
        {
          value: 0.01,
          position: "absolute",
          answer: "Nie zgadzam się",
          left: 0,
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
      question: "Czy rząd powinien zapewniać opiekę socjalną?",
      effects: { right: -1, auth: 0.3 },

      marks: [
        {
          value: -0.99,
          position: "absolute",
          answer: "Żadnej",
          left: 0,
        },
        {
          value: -0.7,
          position: "absolute",
          answer: "Dla niepełnosprawnych",
          left: -60,
          top: -50,
        },
        {
          value: -0.4,
          answer: "Dla najuboższych",
          left: 0,
        },
        {
          value: 0.2,
          position: "absolute",
          answer: "Prodemograficzną",
          right: -30,
          top: -50,
        },
        {
          value: 0.6,
          answer: "Aktywizacyjną",
          top: -50,
        },
        {
          value: 0.99,
          answer: "Bezwarunkowy dochód podstawowy",
          right: 0,
          position: "absolute",
        },
      ],
      info: (
        <div>
          W pytaniu chodzi przede wszystkim o stopień pomocy socjalnej, którego
          ma udzielać władza. Podpowiedzi na osi mają charakter wyłącznie
          pomocniczy i ich za zadaniem jest przede wszystkim pomóc mniej więcej
          uświadomić sobie o jaki poziom socjalnej pomocy chodzi. Możesz
          oczywiście popierać np. pomoc prodemograficzną, a nie popierać dla
          najuboższych, powinieneś wtedy jednak skorygować swój wynik
          odpowiednio w lewo, nawet jeśli oznaczałoby to teoretycznie na skali
          zgodę na coś odwrotnego.
        </div>
      ),
    },
    {
      // fundacje
      question:
        "Instytucje charytatywne są skuteczniejsze w pomocy potrzebującym niż państwo",
      effects: { right: 1, auth: -1, prog: 1 },
    },
    {
      question: "Każdy ma prawo wyznawać jakąkolwiek religię",
      effects: { prog: 0.5, auth: -1 },
    },

    {
      question: "Małżeństwa państwowe powinny istnieć",
      effects: { prog: -0.2 },
    },

    {
      question: "Jeśli małżeństwa powinny istnieć, to w jakiej konfiguracji.",
      effects: { prog: 1, auth: -0.2 },
      min: 0,
      max: 1,
      marks: [
        {
          value: 0,
          position: "absolute",
          answer: "Kobieta i mężczyzna",
          left: 0,
        },
        {
          value: 0.4,
          // position: "absolute",
          answer: "Pary homoseksualne",
          // left: -60,
          top: -50,
        },
        {
          value: 0.7,
          answer: "Poligamia",
          // left: 0,
          top: -50,
        },
        {
          value: 0.99,
          answer: "Wszystkie możliwe",
          right: 0,
          position: "absolute",
        },
      ],
      info: (
        <div>
          Jak w każdym pytaniu, tak i w tym, nasza odpowiedź znajduje się w
          pewnym spektrum. Być może akceptujemy poligamię, natomiast związków
          jednopłciowych nie. Podobnie jak przy pytaniu o pomoc socjalną, w
          takim przypadku należałoby odpowiednio skorygować swoją odpowiedź na
          osi w lewo, mimo że sugerowałoby to odpowiedź odwrotną. Wszystkie
          możliwe konfiguracje zawierają w sobie nawet takie skrajności jak
          prawna dopuszczalność małżeństw ze zwierzętami lub rzeczami.
        </div>
      ),
    },

    {
      question: "Rząd powinien mieć odgórną możliwość ustalania cen.",
      effects: { right: -1 },
      min: -0.2,
      max: 1,
      marks: [
        {
          value: -0.19,
          position: "absolute",
          answer: "Żadnej ceny",
          left: 0,
        },
        {
          value: 0.4,
          // position: "absolute",
          answer: "Istnieją takie produkty",
          // left: -60,
          top: -50,
        },
        {
          value: 0.99,
          answer: "Powinien ustalać wszystkie",
          right: 0,
          position: "absolute",
        },
      ],
    },
    {
      question: "To władza powinna decydować o wysokości wynagrodzenia.",
      effects: { right: -1 },
      min: -0.2,
      max: 1,
      marks: [
        {
          value: -0.19,
          position: "absolute",
          answer: "Żadnego wynagrodzenia",
          left: 0,
        },
        {
          value: 0,
          // position: "absolute",
          answer: "W biurokracji państwowej",
          // left: -60,
          left: 50,
          top: -50,
        },
        {
          value: 0.5,
          // position: "absolute",
          answer: "W pewnych gałęziach gospodarki",
          // left: -60,
          left: 50,
          top: -50,
        },
        {
          value: 0.99,
          answer: "Powinna ustalać wszystkie",
          right: 0,
          position: "absolute",
        },
      ],
    },

    {
      question: "Związki zawodowe powinny mieć istotny wpływ na gospodarkę",
      effects: { right: -0.5 },
    },
    {
      question: "Wszystkie przemysły i banki powinny być upaństwowione.",
      effects: { right: -1 },
    },
    {
      question:
        "Zadaniem państwa powinno być między innymi przeciwdziałanie nierównościom ekonomicznym.",
      effects: { right: -0.5 },
    },
    {
      question:
        "Nie da się skutecznie walczyć z terroryzmem bez ograniczania wolności obywateli.",
      effects: { auth: 0.5 },
    },
    {
      question: "Każdy obywatel powinien być stale monitorowany",
      effects: { auth: 1 },
    },
    {
      question: "Każdy autorytet można poddać w wątpliwość.",
      effects: { auth: -0.2 },
    },
    {
      question: "Silny rząd jest niezbędny do osiągnięcia sukcesu przez kraj.",
      effects: { auth: 0.5 },
    },
    {
      question: "Tylko rząd może uczciwie i skutecznie regulować organizacje.",
      effects: { prog: -1 },
    },
    {
      question:
        "Społeczeństwo wymaga struktur i biurokracji, aby działać poprawnie.",
      effects: { auth: 1 },
    },
    {
      question:
        "Mogą zaistnieć sytuacje, w których wojsko powinno pełnić funkcje policyjne wobec cywilów.",
      effects: { auth: 1 },
    },
    {
      question: "Jeśli nie masz nic do ukrycia, nie masz czego się bać.",
      effects: { auth: 1 },
    },
    {
      question:
        "Rząd powinien być mniej zaangażowany w codzienne życie swoich obywateli.",
      effects: { auth: -1 },
    },
    {
      question: "Aresztowanie bez procesu powinno być zakazane.",
      effects: { auth: -0.3 },
    },
    {
      question: "Im mniej regulacji, tym wolniejsi ludzie.",
      effects: { auth: -1 },
    },
    {
      question: "Służba w wojsku nie powinna być obowiązkowa.",
      effects: { auth: -1 },
    },
    {
      question:
        "Aby skutecznie pilnować porządku, policja powinna mieć bardzo duże uprawnienia.",
      effects: { auth: 1, prog: -0.2 },
    },
    {
      question:
        "Wybór szkoły powinien być dokonywany przez rodziców, a nie przez władze.",
      effects: { auth: -1 },
    },
    {
      question: "Szkoły nie powinny mieć państwowej podstawy programowej.",
      effects: { auth: -1 },
    },
    {
      question:
        "Powinien istnieć zunifikowany system sprawdzający wiedzę i umiejętności obywateli.",
      effects: { auth: -1 },
    },
    {
      question: "Każda dorosła osoba powinna mieć prawo wyboru władzy.",
      effects: { prog: 1, auth: -0.2 },
    },
    {
      question:
        "Prawo wyboru władzy może zostać ograniczone pod pewnymi warunkami.",
      effects: { prog: 0.1, auth: -0.5 },
    },
    {
      question:
        "Starsi ludzie, ze względu na swoje doświadczenie, powinni mieć w życiu publicznym więdcej do powiedzenia od młodych.",
      effects: { prog: -0.7 },
    },
    {
      question:
        "Osoby bogatsze lub inteligentniejsze powinny mieć większy wpływ na wybór władzy od innych ludzi",
      effects: { prog: 0.7 },
    },
    {
      question:
        "Ciało jednostki to jej własność, i powinna mieć prawo do robienia z nim wszystkiego, na co ma ochotę.",
      effects: { prog: 1 },
    },
    {
      question: "Eutanazja powinna być legalna.",
      effects: { prog: 0.5 },
    },
    {
      question: "Aborcja powinna być legalna.",
      effects: { prog: 0.5 },
      marks: [
        {
          value: -0.99,
          position: "absolute",
          answer: "Nigdy",
          left: 0,
        },
        {
          value: -0.5,
          // position: "absolute",
          answer: "Przy zagrożeniu życia matki",
          // left: -60,
          left: 50,
          top: -50,
        },
        {
          value: 0,
          // position: "absolute",
          answer: "W przypadku gwałtów",
          // left: -60,
          left: 50,
          top: -50,
        },
        {
          value: 0.3,
          // position: "absolute",
          answer: "Przy chorobie płodu",
          // left: -60,
          left: 50,
          top: -50,
        },
        {
          value: 0.99,
          answer: "Zawsze",
          right: 0,
          position: "absolute",
        },
      ],
    },
    {
      question: "Podczas ciąży w łonie matki znajduje się człowiek",
      effects: { prog: -1 },
    },
    {
      question:
        "Władza powinna być obejmowana na bardzo długi okres lub nawet całe życie.",
      effects: { prog: -1, auth: 1 },
    },
    {
      question:
        "Każda dorosła osoba powinna mieć prawo wyznawać cokolwiek lub kogokolwiek, bez ograniczeń.",
      effects: { prog: 1 },
    },
    {
      question:
        "Państwo powinno służyć wszystkim mieszkańcom, nie tylko obywatelom.",
      effects: { prog: 1 },
    },
    {
      question: "Zabijanie zwierząt na mięso powinno byc legalne.",
      effects: { prog: -1 },
    },
    {
      question:
        "Powinno się zabraniać zabijania przynajmniej niektórych zwierząt ze względów etycznych.",
      effects: { prog: 1 },
    },
    {
      question: "Zwierzęta zasługują na pewne uniwersalne prawa.",
      effects: { prog: 1 },
    },
    {
      question: "Każdy ma prawo żyć z kimkolwiek mu się podoba.",
      effects: { prog: 1 },
    },
    {
      question: "Płeć jest wyłącznie konstruktem społecznym.",
      effects: { prog: 1 },
    },

    {
      question:
        "Autonomia ciała dotyczy nawet nieletnich, osób chorych psychicznie i poważnych przestępców.",
      effects: { prog: 1 },
    },
    {
      question: "Homoseksualizm nie jest normalny.",
      effects: { prog: -1 },
    },
    {
      question: "Homoseksualizm jest chorobą.",
      effects: { prog: -1 },
    },
    {
      question:
        "Osoby po zmianie płci lub osoby homoseksualne nie powinny mieć prawa do adopcji dzieci.",
      effects: { prog: -1 },
    },
    {
      question:
        "Posiadania używek (takich jak narkotyki, alkohol, papierosy) powinno być legalne.",
      effects: { prog: -1, right: 1, auth: -1 },
      marks: [
        {
          value: -0.99,
          position: "absolute",
          answer: "Żadnej",
          left: 0,
        },
        {
          value: 0,
          // position: "absolute",
          answer: "Niektórych",
          // left: -60,
          top: -50,
        },
        {
          value: 0.99,
          answer: "Wszystkich",
          right: 0,
          position: "absolute",
        },
      ],
    },
    {
      question: "Kara śmierci powinna istnieć.",
      effects: { prog: -0.2 },
    },
    {
      question: "Policja powinna być państwowa",
      effects: { prog: -0.2, auth: 0.5, right: -0.2 },
      marks: [
        {
          value: -0.99,
          position: "absolute",
          answer: "Nie",
          left: 0,
        },
        {
          value: -0.4,
          // position: "absolute",
          answer: "Policja prywatna",
          // left: -60,
          top: -50,
        },
        {
          value: 0.4,
          // position: "absolute",
          answer: "Różne systemy policyjne",
          // left: -60,
          top: -50,
        },
        {
          value: 0.99,
          answer: "Wyłacznie państwowa",
          right: 0,
          position: "absolute",
        },
      ],
    },
    {
      question: "Służby ratunkowe powinny być wyłacznie państwowe",
      effects: { prog: -0.2, auth: 0.5, right: -0.2 },
      marks: [
        {
          value: -0.99,
          position: "absolute",
          answer: "Nie",
          left: 0,
        },
        {
          value: -0.4,
          // position: "absolute",
          answer: "Policja prywatna",
          // left: -60,
          top: -50,
        },
        {
          value: 0.4,
          // position: "absolute",
          answer: "Różne systemy policyjne",
          // left: -60,
          top: -50,
        },
        {
          value: 0.99,
          answer: "Wyłacznie państwowa",
          right: 0,
          position: "absolute",
        },
      ],
    },
    {
      question: "Wszelkie podmioty wojskowe powinny być państwowe",
      effects: { prog: -0.2, auth: 0.5, right: -0.2 },
      answers: ["Nie zgadzam się", "Mogą istnieć prywatne", "Zgadzam się"],
    },
    {
      question:
        "Rząd powinien móc wpływać na gospodarkę dotacjami, obniżkami kosztów, dotacjami i cłami",
      effects: { right: -1 },
      answers: ["Żadnym", "Nie wiem", "Wszystkimi"],
    },
    {
      question: "Wszelkie instytucje sądownicze powinny być państwowe",
      effects: { prog: -0.2, auth: 0.5, right: -0.2 },
      answers: ["Wyłącznie", "Prywatne z licencją", "Tylko prywatne"],
    },
    {
      question: "W sądzie o winie powinien decydować",
      effects: { prog: -0.5, auth: 0.5 },
      answers: ["Ława przysięgłych", "Nie wiem", "Niezawisły sędzia"],
    },
    {
      question: "W więzieniu ważniejsza jest",
      effects: { prog: -0.5, auth: 0.5 },
      answers: ["Resocjalizacja", "Nie wiem", "Kara"],
    },

    {
      question: "Dzieci z różnych kultur powinny uczyć się oddzielnie.",
      effects: { prog: -1 },
    },
    {
      question: "Zajęcia z religii powinny być obowiązkowe w szkołach.",
      effects: { prog: -1 },
    },
    {
      question:
        "Rodzice powinni mieć absolutną władzę nad swoimi dziećmi, przynajmniej do pewnego wieku.",
      effects: { prog: -1 },
    },
    {
      question:
        "Sprawowanie władzy lub posiadanie prawa własności nad dorosłymi ludźmi jest dopuszczalne.",
      effects: { prog: 0.5, auth: 1, right: 0.5 },
    },
    {
      question: "Broń powinna być oficjalnie dostępna.",
      effects: { prog: 0.5, auth: -1 },
      answers: ["Dla nikogo", "Za przyzwoleniem rządu", "Dla każdego"],
    },
    {
      question: "Pornografia powinna być zakazana",
      effects: { prog: -0.5, auth: 1 },
    },

    {
      question: "Państwa narodowe są ideą, którą trzeba chronić.",
      effects: { prog: -1 },
    },

    {
      question:
        "Podstawa struktura władzy powinna składać się z jak najmniejszych społeczności.",
      effects: { prog: 1, auth: -1 },
    },
    {
      question:
        "Przynależność do danej struktuiry samorządowej lub rządowej powinna być kwestią dobrowolną.",
      effects: { prog: 1, auth: -1 },
    },
    {
      question: "W najlepszym przypadku rząd centralny nie powinien istnieć.",
      effects: { auth: -1 },
    },
    {
      question: "Rząd światowy to dobry pomysł.",
      effects: { auth: 1, prog: 0.3 },
    },
    {
      question: "Rządy jednej osoby to dobry pomysł.",
      effects: { auth: 1 },
    },
    {
      question: "Władza jest nam dana przez boga.",
      effects: { auth: 1, prog: -1 },
    },
  ];
  const [isTestStart, setIsTestStart] = useState(false);
  const [result, setResult] = useState({ prog: 0, auth: 0, right: 0 });
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
  };

  return (
    <TestContext.Provider value={providerValue}>
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
