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
      question: "Opodatkowanie dochodu to zły pomysł.",
      effects: { right: 1 },
    },
    {
      question:
        "Ciężką pracą zawsze doprowadzisz się do awansu w hierarchii społecznej.",
      effects: { right: 1 },
    },
    {
      question: "Duże organizacje i korporacje potrzebują regulacji.",
      effects: { right: -1 },
    },
    {
      question:
        "Rząd, który zapewnia opiekę wszystkim, to z założenia dobry rząd.",
      effects: { right: -1 },
    },
    {
      question:
        "Rozszerzanie systemu opieki społecznej to dobry sposób na walkę z nierównościami.",
      effects: { right: -1 },
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
        "Nadzór rządu nad obywatelami jest uzasadnionym środkiem zwalczania terroryzmu.",
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
      question: "Aborcja powinna być zabójstwo.",
      effects: { prog: -1 },
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
        "Niektóre narkotyki powinny być legalne do użytku nieleczniczego.",
      effects: { prog: -1 },
    },
    {
      question: "Kara śmierci powinna istnieć.",
      effects: { prog: -1 },
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
      question: "Państwa narodowe są ideą, którą trzeba chronić.",
      effects: { prog: -1 },
    },
  ];
  const [isTestStart, setIsTestStart] = useState(false);
  const [result, setResult] = useState({ prog: 0, auth: 0, right: 0 });
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const providerValue = {
    questions,
    isTestStart,
    setIsTestStart,
    result,
    setResult,
    currentQuestion,
    setCurrentQuestion,
  };

  return (
    <TestContext.Provider value={providerValue}>
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
