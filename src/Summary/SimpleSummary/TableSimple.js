import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import tinycolor from "tinycolor2";

const TableSimple = () => {
  const { simpleDistricts, selectedSimpleDistrict } = useContext(DataContext);
  const currentDistrict = simpleDistricts.find(
    (district) => district.id === selectedSimpleDistrict
  );

  return (
    <>
      {selectedSimpleDistrict === "" ? (
        <div className="simpleSummary-main__summary-graph__table-item empty">
          Kliknij w okręg na mapie, aby zobaczyć szczegóły
        </div>
      ) : (
        <div className="simpleSummary-main__summary-graph__table-item">
          <div className="simpleSummary-main__summary-graph__table-item__title">
            {currentDistrict.name}
          </div>
          <div className="simpleSummary-main__summary-graph__table-item__legend">
            <div></div>
            <div>miejsca</div>
            <div>wynik</div>
          </div>
          {currentDistrict?.finalResult.map((party, index) => (
            <div
              className="simpleSummary-main__summary-graph__table-item__row"
              key={index}
              style={{
                backgroundColor: `${tinycolor(party.color)
                  .lighten(0)
                  .toString()}aa`,
              }}
            >
              <div>{party.name}</div>
              <div>{party.seats}</div>
              <div>{party.result.toFixed(2)}%</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TableSimple;
