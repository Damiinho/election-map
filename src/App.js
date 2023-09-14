import "./App.scss";
import DistrictList from "./DistrictList";
import Header from "./Header";
import Options from "./Options";
import Summary from "./Summary";
import AppProvider from "./contexts/AppContext";
import { Tooltip } from "react-tooltip";

function App() {
  return (
    <AppProvider>
      <Tooltip id="my-tooltip" />
      <div className="App">
        <Header />
        <Options />
        <DistrictList />
        <Summary />
      </div>
    </AppProvider>
  );
}

export default App;
