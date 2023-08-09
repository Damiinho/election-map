import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import PartyResult from "./PartyResult";

const District = (props) => {
  const { parties } = useContext(AppContext);
  const newParties = [...parties];
  console.log(newParties);
  const fillObjectWithDHondtMethod = (data, totalSeats) => {
    const filledObject = [];
    const parties = data.map((party) => ({
      ...party,
      result: parseInt(party.result),
    }));
    const sortedParties = [...parties].sort((a, b) => b.result - a.result);
    const seatsDistribution = Array(sortedParties.length).fill(0);

    if (parties.length > 0) {
      for (let i = 0; i < totalSeats; i++) {
        const quotient = sortedParties.map((party, index) => ({
          index,
          quotient: party.result / (seatsDistribution[index] + 1),
        }));
        quotient.sort((a, b) => b.quotient - a.quotient);
        seatsDistribution[quotient[0].index]++;
      }

      sortedParties.forEach((party, index) => {
        filledObject.push({
          name: party.name,
          result: seatsDistribution[index],
        });
      });

      return filledObject;
    }
  };

  const filledObject = fillObjectWithDHondtMethod(newParties, 460);

  console.log(filledObject);

  return (
    <>
      <div>
        Nazwa: {props.name}, liczba mandatów: {props.deputies}.
      </div>
      <div>
        {parties.length > 0 ? (
          <>
            Symulacja wyników dla całej Polski przy założeniu tylko jednego
            okręgu wyborczego:
            <ul>
              {filledObject.map((item, index) => (
                <PartyResult
                  key={index}
                  name={item.name}
                  result={item.result}
                />
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default District;