import "./App.scss";
import DistrictList from "./DistrictList";
import Header from "./Header";
import Options from "./Options";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Options />
        <DistrictList />
      </div>
    </AppProvider>
  );
}

export default App;
