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
        <div
          className="simpleSummary-main__summary-graph__table-item"
          style={{
            width: "80%",
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: 30,
            backgroundColor: "#00000099",
            // textShadow: "1px 1px grey",
            color: "white",
            fontWeight: 700,
            letterSpacing: 2,
            padding: 20,
            marginTop: 50,
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
          }}
        >
          Kliknij w okręg wyborczy, aby zobaczyć szczegóły
        </div>
      ) : (
        <div
          className="simpleSummary-main__summary-graph__table-item"
          style={{
            width: "95%",
            marginTop: 5,
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
          }}
        >
          <div
            style={{
              fontSize: 30,
              textAlign: "center",
              margin: "0 auto",
              fontWeight: "bold",
              color: "white",
              letterSpacing: 1.5,
              fontFamily: "Ysabeau Office, sans-serif",
              backgroundColor: "#00000099",
              boxShadow:
                "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
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
              backgroundColor: "#4747478f",
              boxShadow:
                "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div></div>
            <div style={{ textAlign: "center", color: "white" }}>miejsca</div>
            <div style={{ textAlign: "center", color: "white" }}>wynik</div>
          </div>
          {currentDistrict?.finalResult.map((party, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "4fr 1fr 1fr",
                gap: 10,
                // height: 30,
                padding: "5px 0",
                fontSize: 20,
                backgroundColor: `${tinycolor(party.color)
                  .lighten(0)
                  .toString()}aa`,
                color: "white",
                textShadow: "1px 1px black",
                boxShadow:
                  "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
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

export default TableSimple;
