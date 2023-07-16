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
        <District name="1 okręg na cały kraj" deputies="460" />
      </div>
    </AppProvider>
  );
}

export default App;
