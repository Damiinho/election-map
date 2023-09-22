import React, { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import MySmallInfoBox from "../Components/MySmallInfoBox";
import MyBar from "../Components/MyBar";

const SimpleSummaryDistrict = (props) => {
  const { simpleDistricts, setSimpleDistricts } = useContext(DataContext);

  const totalMandates = props.district.deputies;

  // Funkcja do przydzielania mandatów
  const distributeSeats = (parties, totalSeats) => {
    // Filtruj partie, aby uwzględniać tylko te, które mają isOverThreshold === true
    const eligibleParties = parties.filter((party) => party.isOverThreshold);

    // Inicjalizuj partie z miejscami
    const partiesWithSeats = eligibleParties.map((party) => ({
      ...party,
      seats: 0,
    }));

    for (let i = 0; i < totalSeats; i++) {
      const adjustedResults = partiesWithSeats.map((party) => ({
        ...party,
        adjustedResult: party.result / (party.seats + 1),
      }));

      const nextMandateParty = adjustedResults.reduce(
        (maxParty, party) =>
          party.adjustedResult > maxParty.adjustedResult ? party : maxParty,
        adjustedResults[0]
      );

      // Znajdź partie na podstawie nazwy w oryginalnej liście partii (nie tylko tych, które są eligible)
      const matchingParty = parties.find(
        (party) => party.name === nextMandateParty.name
      );

      // Znajdź partie w partiesWithSeats na podstawie nazwy
      const partyWithSeat = partiesWithSeats.find(
        (party) => party.name === nextMandateParty.name
      );

      // Zaktualizuj partie z miejscami w partiesWithSeats
      partyWithSeat.seats++;

      // Zaktualizuj partie w oryginalnej liście partii
      matchingParty.seats = partyWithSeat.seats;
    }

    const fullResults = partiesWithSeats.concat(
      parties
        .filter((party) => !party.isOverThreshold)
        .map((party) => ({
          ...party,
          seats: 0,
        }))
    );

    return fullResults;
  };

  useEffect(() => {
    const newSimpleDistricts = [...simpleDistricts];
    const districtToUpdate = newSimpleDistricts.find(
      (district) => district.id === props.district.id
    );
    // console.log(districtToUpdate);

    if (districtToUpdate) {
      districtToUpdate.finalResult = distributeSeats(
        props.district.parties,
        totalMandates
      );
      setSimpleDistricts(newSimpleDistricts);
    }

    // console.log(districtToUpdate);
    // eslint-disable-next-line
  }, [
    // props.district.id,
    setSimpleDistricts,
    totalMandates,
    // props.district.parties,
    // simpleDistricts,
  ]);

  const ResultBox = () => {
    return (
      <div className="simpleSummary-main__details-element">
        <div className="simpleSummary-main__details-element__title">
          {props.district.name}

          <div className="simpleSummary-main__details-element__title-subtitle">
            mandatów:{" "}
            <span style={{ fontWeight: "bold" }}>{totalMandates}</span>
          </div>
        </div>

        <div className="simpleSummary-main__details-element__results">
          <div className="simpleSummary-main__details-element__results-box">
            {simpleDistricts
              .find((district) => district.id === props.district.id)
              .finalResult.map((party, index) => {
                if (party.shortName === "inne") return null;

                return (
                  <MySmallInfoBox
                    key={index}
                    txt={party.shortName}
                    value={party.seats}
                    backgroundTop={party.isOverThreshold ? party.color : "grey"}
                    allWidth={70}
                    radius="0px"
                    title={party.name}
                  />
                );
              })}
          </div>
          <MyBar
            result={props.district.finalResult}
            value="seats"
            name="Liczba mandatów z listy"
          />
          <MyBar
            result={props.district.finalResult}
            value="result"
            name="Procent głosów na liście"
          />
        </div>
      </div>
    );
  };

  return <ResultBox />;
};

export default SimpleSummaryDistrict;
