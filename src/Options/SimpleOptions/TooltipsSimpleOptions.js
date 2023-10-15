import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { AppContext } from "../../contexts/AppContext";

const TooltipsSimpleOptions = () => {
  const { simpleElectionsType } = useContext(AppContext);
  return (
    <>
      <Tooltip style={{ zIndex: 1, width: 440 }} id="correction-tooltip">
        <div>
          <p style={{ marginBottom: 10 }}>
            1. Poparcie w poszczególnych okręgach korygowane jest na podstawie
            wyników z 2019.
          </p>
          <p style={{ marginBottom: 10 }}>
            2. Wyniki Bezpartyjnych Samorządowców nie są korygowane w okręgach,
            w których nie startowali w 2019.
          </p>
          <p>
            3. Trzecia Droga ma wynik korygowany o głosy PSL-u oraz o ważoną
            sumę wyników z poszczególnych okręgów wszystkich komitetów, od
            których wyborców przejęła Polska2050 na podstawie sondażu o
            przepływie wyborców.
          </p>
        </div>
      </Tooltip>
      <Tooltip style={{ zIndex: 1 }} id="td-tooltip">
        <div>Koalicja, próg wyborczy 8%</div>
      </Tooltip>
      <Tooltip style={{ zIndex: 1, width: 440 }} id="options-tooltip">
        {simpleElectionsType.value === "sejm" && (
          <>
            <div style={{ marginBottom: 10 }}>
              1. Wyniki z 2019: Trzeciej Drodze przypisuje się głosy PSL-u,
              Bezpartyjni Samorządowcy jako wynik dostają średni wynik z
              okręgów, w których startowali w 2019. Jako że suma przekracza
              100%, zostaje dopasowana.
            </div>
            <div>2. Średnia sondażowa na podstawie ewybory.eu</div>
          </>
        )}
        {simpleElectionsType.value === "euro" && (
          <>
            <div style={{ marginBottom: 10 }}>
              1. Wyniki z 2019: Do wyniku Koalicji Europejskiej zostaje dopisany
              wynik Wiosny, która w 2019 startowała niezależnie. Wynik Kukiz'15
              wliczony do pozostałych.
            </div>
            <div>2. Średnia sondażowa na podstawie ewybory.eu</div>
          </>
        )}
      </Tooltip>
      <Tooltip style={{ zIndex: 1, width: 500 }} id="other-tooltip">
        <p style={{ marginBottom: 10 }}>
          Jeśli suma wyników wszystkich komitetów wyniesie mniej niż 100%,
          brakujące głosy zostaną dodane do pozostałych.
        </p>
        <p style={{ marginBottom: 10 }}>
          Jeśli suma wyników wszystkich komitetów wyniesie więcej niż 100%, a
          głosy na pozostałe komitety wynoszą więcej niż 0, wynik pozostałych
          komitetów zostanie dopasowany tak, by suma wszystkich wynosiła 100
        </p>
        <p>
          Jeśli mimo odjęcia wszystkich głosów na pozostałe komitety suma
          wyników nadal wynosi ponad 100%, należy poprawić wyniki.
        </p>
      </Tooltip>
    </>
  );
};

export default TooltipsSimpleOptions;
