import AddParty from "./AddParty";
import PartyList from "./PartyList";

const Options = () => {
  return (
    <>
      <div className="options">Uzupełnij listę startujących:</div>
      <AddParty />
      <div>Obecna lista: </div>
      <PartyList />
    </>
  );
};

export default Options;
