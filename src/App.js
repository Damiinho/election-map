import "./App.css";
import District from "./District";
import Parties from "./Parties";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        symulator
        <Parties />
        <District name="okręg 1" deputies="2" />
      </div>
    </AppProvider>
  );
}

export default App;
