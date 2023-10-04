import { createContext, useState } from "react";

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const questions = [
    {
      question: "Wolny rynek to najlepsze rozwiązanie dla ekonomii.",
      effects: { right: 1 },
    },
    {
      question:
        "Monopol państwowego zakładu ubezpieczeń społecznych nie powinien istnieć.",
      effects: { right: 1 },
    },
    {
      question:
        "Pracodawcy najlepiej znają wartość pracy zatrudnionego, dlatego też uczciwie go wynagradzają.",
      effects: { right: 1 },
    },
    {
      question:
        "Wyzysk to przestarzały termin, nie żyjemy w XIX-wiecznym kapitalizmie.",
      effects: { right: 1 },
    },
    {
      question: "Człowiek jest z natury zachłanny",
      effects: { right: 1 },
    },
    {
      question: "Komunizm nigdy nie zadziała w praktyce.",
      effects: { right: 1 },
    },
    {
      question: "Podatki powinny być jak najmniejsze.",
      effects: { right: 1 },
    },
    {
      question: "Opodatkowanie dochodu to dobry pomysł.",
      effects: { right: -1 },
    },
    {
      question:
        "Ciężką pracą zawsze doprowadzisz się do awansu w hierarchii społecznej.",
      effects: { right: 1, prog: 0.3 },
    },
    {
      question: "Duże organizacje i korporacje potrzebują regulacji.",
      effects: { right: -0.5 },
    },
    {
      question:
        "W idealnym świecie prywatne przedsiębiorstwa nie powinny istnieć.",
      effects: { right: -1 },
    },
    {
      question:
        "Każdy ma prawo indywidualnie decydować o tym, co chce robić w życiu.",
      effects: { right: 0.2, prog: 1 },
    },
    {
      question:
        "Priorytetem powinno być raczej gromadzenie wspólnego majątku mogącego służyć wszystkim obywatelom, niż oszczędności indywidualne.",
      effects: { right: -0.5, prog: -0.5 },
    },
    {
      question:
        "Rząd, który zapewnia opiekę wszystkim, to z założenia dobry rząd.",
      effects: { right: -0.5 },
    },
    {
      question:
        "Istnieją produkty, których wycena na wolnym rynku jest niemożliwa.",
      effects: { right: -0.7 },
    },
    {
      question: "Rząd powinien mieć odgórną możliwość ustalania cen.",
      effects: { right: -1 },
      answers: ["W ogóle", "Nie wiem", "Każdej ceny"],
    },
    {
      question: "To władza powinna decydować o wysokości wynagrodzenia.",
      effects: { right: -1 },
      answers: ["Żadnego", "Nie wiem", "Każdego"],
    },
    {
      question: "Państwo nie powinno zajmować się opieką społeczną",
      effects: { right: 1, auth: -1, prog: -0.2 },
      answers: ["Tylko państwo", "System mieszany", "Tylko obywatele"],
    },
    {
      question: "Opieka społeczna powinna",
      effects: { right: 1, auth: -1, prog: -0.2 },
      answers: ["nie istnieć", "System mieszany", "być bardzo szeroka"],
    },
    {
      question: "Związki zawodowe powinny być istotne dla gospodarki",
      effects: { right: -1 },
    },
    {
      question: "Wszystkie przemysły i banki powinny być upaństwowione.",
      effects: { right: -1 },
    },
    {
      question: "Najtrafniejszy podział społeczeństwa to podział klasowy.",
      effects: { right: -1 },
    },
    {
      question: "W Europie nierówności ekonomiczne są zbyt duże.",
      effects: { right: -1 },
    },
    {
      question:
        "Do skutecznej walki z terroryzmem trzeba ograniczyć wolność obywateli.",
      effects: { auth: 1 },
    },
    {
      question: "Każdy obywatel powinien być stale monitorowany",
      effects: { auth: 1 },
    },
    {
      question: "Szanowanie autorytetów jest korzystne społecznie.",
      effects: { auth: 1 },
    },
    {
      question: "Silny rząd jest niezbędny do osiągnięcia sukcesu przez kraj.",
      effects: { auth: 1 },
    },
    {
      question: "Tylko rząd może uczciwie i skutecznie regulować organizacje.",
      effects: { auth: 1 },
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
      question:
        "Nawet jeśli oznacza to ograniczenie wolności obywatelskich, może zaistnieć konieczność rządów wojskowych.",
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
      question: "Społeczeństwo nie znaczy nic bez demokracji.",
      effects: { auth: -1 },
    },
    {
      question: "Aresztowanie bez procesu powinno być zakazane.",
      effects: { auth: -1 },
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
      effects: { auth: 1 },
    },
    {
      question:
        "Wybór szkoły powinien być dokonywany przez rodziców, a nie przez władze lokalne.",
      effects: { auth: -1 },
    },
    {
      question: "Szkoły nie powinny mieć państwowej podstawy programowej.",
      effects: { auth: -1 },
    },
    {
      question:
        "Powinien istnieć zunifikowany system sprawdzający wiedzę i umiejętności obywateli (np. matura).",
      effects: { auth: -1 },
    },
    {
      question: "Każda dorosła osoba powinna mieć prawo wyboru władzy.",
      effects: { prog: 1 },
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
      effects: { prog: 1 },
    },
    {
      question: "Aborcja powinna być legalna.",
      effects: { prog: 1 },
    },
    {
      question: "Aborcja to zabójstwo.",
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
      question: "Małżeństwa to sprawa religii.",
      effects: { prog: 1 },
    },
    {
      question: "Małżeństwa cywilne powinny istnieć.",
      effects: { prog: -1 },
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
      answers: ["Żadnych", "Niektórych", "Każdych"],
    },
    {
      question: "Kara śmierci powinna istnieć.",
      effects: { prog: -1 },
    },
    {
      question: "Wszelkie podmioty policyjne powinny być państwowe",
      effects: { prog: -0.2, auth: 0.5, right: -0.2 },
      answers: ["Wyłącznie", "Mogą istnieć prywatne", "Żaden"],
    },
    {
      question: "Służby ratunkowe powinny być państwowe",
      effects: { prog: -0.2, auth: 0.5, right: -0.2 },
      answers: ["Wyłącznie", "Mogą istnieć prywatne", "Żaden"],
    },
    {
      question: "Wszelkie podmioty wojskowe powinny być państwowe",
      effects: { prog: -0.2, auth: 0.5, right: -0.2 },
      answers: ["Wyłącznie", "Mogą istnieć prywatne", "Żaden"],
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
