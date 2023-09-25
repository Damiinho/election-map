import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import tinycolor from "tinycolor2";

const SimpleSummaryTable = () => {
  const { simpleDistricts, selectedSimpleDistrict } = useContext(DataContext);
  const currentDistrict = simpleDistricts.find(
    (district) => district.id === selectedSimpleDistrict
  );

  return (
    <>
      {selectedSimpleDistrict === "" ? (
        <div
          className="simpleSummary-main__summary-map__table-item"
          style={{
            width: "80%",
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: 30,
            backgroundColor: "#77777755",
            textShadow: "1px 1px grey",
            fontWeight: 700,
            letterSpacing: 2,
            padding: 20,
            borderRadius: 10,
            marginTop: 40,
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
          }}
        >
          Kliknij w okręg wyborczy, aby zobaczyć szczegóły
        </div>
      ) : (
        <div
          className="simpleSummary-main__summary-map__table-item"
          style={{
            width: "80%",
            backgroundColor: "#77777755",
            padding: 20,
            borderRadius: 10,
            marginTop: 20,
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
          }}
        >
          <div
            style={{
              fontSize: 25,
              textAlign: "center",
              margin: "0 auto",
              marginBottom: 20,
              fontWeight: "bold",
              textShadow: "1px 1px white",
            }}
          >
            {currentDistrict.name}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "4fr 1fr 1fr",
              gap: 10,
              height: 30,
              fontSize: 18,
            }}
          >
            <div></div>
            <div style={{ textAlign: "center" }}>miejsca</div>
            <div style={{ textAlign: "center" }}>wynik</div>
          </div>
          {currentDistrict?.finalResult.map((party, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "4fr 1fr 1fr",
                gap: 10,
                height: 30,
                fontSize: 20,
                backgroundColor: `${tinycolor(party.color)
                  .lighten(0)
                  .toString()}33`,
                color: "white",
                textShadow: "1px 1px black",
              }}
            >
              <div style={{ marginLeft: 20 }}>{party.name}</div>
              <div style={{ textAlign: "center" }}>{party.seats}</div>
              <div style={{ textAlign: "center" }}>
                {party.result.toFixed(2)}%
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SimpleSummaryTable;
