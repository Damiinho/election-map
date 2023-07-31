import "./App.scss";
import District from "./District";
import Options from "./Options";
import Parties from "./Parties";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        {/* <h1>Symulator</h1>
        <Parties />
        <District name="1 okręg na cały kraj" deputies="460" /> */}

        <Options />
      </div>
    </AppProvider>
  );
}

export default App;
