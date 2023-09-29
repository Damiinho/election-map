import "./App.scss";
import DistrictList from "./DistrictList";
import Header from "./Header";
import Options from "./Options";
import Summary from "./Summary";
import AppProvider from "./contexts/AppContext";
import { Tooltip } from "react-tooltip";
import DataProvider from "./contexts/DataContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./Test/Test";
import TestWindow from "./Test/TestWindow";

function App() {
  return (
    <Router>
      <AppProvider>
        <DataProvider>
          <Tooltip id="my-tooltip" />
          <Routes>
            <Route
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
            <Route
              path="/:variant"
              element={
                <div className="App">
                  <Header />
                  <Options />
                  <DistrictList />
                  <Summary />
                </div>
              }
            ></Route>
            <Route
              path="/:variant/:result"
              element={
                <div className="App">
                  <Header />
                  <Options />
                  <DistrictList />
                  <Summary />
                </div>
              }
            ></Route>
            <Route path="/test" element={<Test />} />
            <Route path="/test/:search" element={<TestWindow />} />
          </Routes>
        </DataProvider>
      </AppProvider>
    </Router>
  );
}

export default App;
