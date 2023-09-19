import "./App.scss";
import DistrictList from "./DistrictList";
import Header from "./Header";
import Options from "./Options";
import Summary from "./Summary";
import AppProvider from "./contexts/AppContext";
import { Tooltip } from "react-tooltip";
import DataProvider from "./contexts/DataContext";

function App() {
  return (
    <AppProvider>
      <DataProvider>
        <Tooltip id="my-tooltip" />
        <div className="App">
          <Header />
          <Options />
          <DistrictList />
          <Summary />
        </div>
      </DataProvider>
    </AppProvider>
  );
}

export default App;
