import "./App.scss";
import DistrictList from "./DistrictList";
import Header from "./Header";
import Options from "./Options";
import Summary from "./Summary";
import AppProvider from "./contexts/AppContext";
import { Tooltip } from "react-tooltip";
import DataProvider from "./contexts/DataContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppProvider>
        <DataProvider>
          <Tooltip id="my-tooltip" />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="App">
                  <Header />
                  <Options />
                  <DistrictList />
                  <Summary />
                </div>
              }
            ></Route>
            <Route path="/test" element={<div>test</div>}/>
          </Routes>
        </DataProvider>
      </AppProvider>
    </Router>
  );
}

export default App;
