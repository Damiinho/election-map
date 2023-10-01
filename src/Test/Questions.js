const Questions = () => {
  const questions = [
    {
      id: 0,
      question:
        "Wolność biznesu to najlepszy praktyczny sposób, w jaki społeczeństwo może prosperować.",
      effects: { right: 1 },
    },
    {
      id: 1,
      question: "Zakład Ubezpieczeń Społecznych powinien zostać zamknięty.",
      effects: { right: 1 },
    },
    {
      id: 2,
      question:
        "Pracodawcy najlepiej znają wartość pracy zatrudnionego, dlatego też uczciwie go wynagradzają.",
      effects: { right: 1 },
    },
    {
      id: 3,
      question: "Bycie chcwiwym jest naturą ludzką",
      effects: { right: 1 },
    },
    {
      id: 4,
      question:
        "Wyzysk to przestarzały termin, nie żyjemy w XIX-wiecznym kapitalizmie.",
      effects: { right: 1 },
    },
    {
      id: 5,
      question: "Komunizm nigdy nie może działać w praktyce.",
      effects: { right: 1 },
    },
    {
      id: 6,
      question:
        "Opodatkowanie bogatych to zły pomysł, społeczeństwo byłoby lepiej bez tego.",
      effects: { right: 1 },
    },
    {
      id: 7,
      question:
        "Im ciężej pracujesz, tym bardziej awansujesz po drabinie społecznej.",
      effects: { right: 1 },
    },
    {
      id: 8,
      question:
        "Organizacje i korporacje nie mogą być zaufane i potrzebują regulacji przez rząd.",
      effects: { right: -1 },
    },
    {
      id: 9,
      question: "Rząd, który zapewnia wszystkim, to z założenia dobry pomysł.",
      effects: { right: -1 },
    },
    {
      id: 10,
      question:
        "Obecny system opieki społecznej powinien zostać rozszerzony, aby zwalczyć nierówności.",
      effects: { right: -1 },
    },
    {
      id: 11,
      question:
        "Generalna Unia Pracowników (Histadrut) jest ważna dla izraelskiej gospodarki.",
      effects: { right: -1 },
    },
    {
      id: 12,
      question: "Wszystkie przemysły i banki powinny być upaństwowione.",
      effects: { right: -1 },
    },
    {
      id: 13,
      question: "Klasa społeczna to główny podział społeczeństwa.",
      effects: { right: -1 },
    },
    {
      id: 14,
      question: "Nierówności ekonomiczne są zbyt duże w Izraelu.",
      effects: { right: -1 },
    },
    {
      id: 15,
      question:
        "Nadzór rządu nad obywatelami jest uzasadnionym środkiem zwalczania terroryzmu.",
      effects: { power: 1 },
    },
    {
      id: 16,
      question: "Osoby pełniące funkcje władzy są dobrem dla społeczeństwa.",
      effects: { power: 1 },
    },
    {
      id: 17,
      question: "Siła jest niezbędna, aby rząd mógł osiągnąć sukces.",
      effects: { power: 1 },
    },
    {
      id: 18,
      question: "Tylko rząd może uczciwie i skutecznie regulować organizacje.",
      effects: { power: 1 },
    },
    {
      id: 19,
      question: "Społeczeństwo wymaga struktury i biurokracji, aby działać.",
      effects: { power: 1 },
    },
    {
      id: 20,
      question:
        "W określonych sytuacjach wojsko powinno pełnić funkcje policyjne wobec cywilów.",
      effects: { power: 1 },
    },
    {
      id: 21,
      question:
        "Rządy wojskowe nad Palestyńczykami są konieczne, nawet jeśli ograniczają ich wolności obywatelskie.",
      effects: { power: 1 },
    },
    {
      id: 22,
      question: "Jeśli nie masz nic do ukrycia, nie masz czego się bać.",
      effects: { power: 1 },
    },
    {
      id: 23,
      question:
        "Rząd powinien być mniej zaangażowany w codzienne życie swoich obywateli.",
      effects: { power: -1 },
    },
    {
      id: 24,
      question: "Bez demokracji społeczeństwo to nicość.",
      effects: { power: -1 },
    },
    {
      id: 25,
      question: "Aresztowanie administracyjne powinno być zakazane.",
      effects: { power: -1 },
    },
    {
      id: 26,
      question: "Im mniejszy rząd, tym wolniejsi ludzie.",
      effects: { power: -1 },
    },
    {
      id: 27,
      question: "Służba w IDF nie powinna być obowiązkowa.",
      effects: { power: -1 },
    },
    {
      id: 28,
      question: "Policja powinna mieć mniejszą władzę nad obywatelami.",
      effects: { power: -1 },
    },
    {
      id: 29,
      question:
        "Wybór szkoły powinien być dokonywany przez rodziców, a nie przez władze lokalne.",
      effects: { power: -1 },
    },
    {
      id: 30,
      question:
        "Izrael nie może być demokratyczny, dopóki Palestyńczycy nie mogą głosować.",
      effects: { postęp: 1 },
    },
    {
      id: 31,
      question:
        "Ciało jednostki to jej własność, i powinna mieć prawo do robienia z nim wszystkiego, na co ma ochotę.",
      effects: { postęp: 1 },
    },
    {
      id: 32,
      question:
        "Osoba powinna mieć prawo wyznawać cokolwiek lub kogo chce, bez ograniczeń.",
    },
    {
      id: 33,
      question: "Izrael powinien być państwem wszystkich swoich obywateli.",
      effects: { postęp: 1 },
    },
    {
      id: 34,
      question: "Zwierzęta zasługują na pewne uniwersalne prawa.",
      effects: { postęp: 1 },
    },
    {
      id: 35,
      question:
        "Płeć jest konstruktem społecznym, a nie naturalnym stanem rzeczy.",
      effects: { postęp: 1 },
    },
    {
      id: 36,
      question: "Małżeństwa cywilne i mieszane powinny być legalne.",
      effects: { postęp: 1 },
    },
    {
      id: 37,
      question:
        "Autonomia ciała dotyczy nawet nieletnich, osób chorych psychicznie i poważnych przestępców.",
      effects: { postęp: 1 },
    },
    {
      id: 38,
      question: "Homoseksualizm jest sprzeczny z moimi wartościami.",
      effects: { postęp: -1 },
    },
    {
      id: 39,
      question:
        "Osoby transgenderowe nie powinny mieć prawa do adopcji dzieci.",
      effects: { postęp: -1 },
    },
    {
      id: 40,
      question:
        "Niektóre narkotyki powinny być legalne do użytku nieleczniczego.",
      effects: { postęp: -1 },
    },
    {
      id: 41,
      question: "Kara śmierci powinna istnieć za pewne przestępstwa.",
      effects: { postęp: -1 },
    },
    {
      id: 42,
      question: "Dzieci arabskie i żydowskie powinny uczyć się oddzielnie.",
      effects: { postęp: -1 },
    },
    {
      id: 43,
      question:
        "Zajęcia z religii (takie jak Tanach) powinny być obowiązkowe w izraelskich szkołach.",
      effects: { postęp: -1 },
    },
    {
      id: 44,
      question:
        "Rodzice powinni mieć absolutną władzę nad swoimi dziećmi, ponieważ są starsi i bardziej doświadczeni.",
      effects: { postęp: -1 },
    },
    {
      id: 45,
      question: "Ważne jest chronienie żydowskiego charakteru Państwa Izrael.",
      effects: { postęp: -1 },
    },
  ];

  return <></>;
};

export default Questions;
