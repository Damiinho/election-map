import "./App.scss";
import DistrictList from "./DistrictList";
import Options from "./Options";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Options />
        <DistrictList />
      </div>
    </AppProvider>
  );
}

export default App;
