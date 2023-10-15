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
import TestProvider from "./contexts/TestContext";

function App() {
  return (
    <Router>
      <AppProvider>
        <DataProvider>
          <Tooltip id="my-tooltip" />

          <TestProvider>
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
                path="/:variant/:elections"
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
                path="/:variant/:elections/:result"
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
              <Route path="/test/:result" element={<TestWindow />} />
              <Route path="/test/:result/:values" element={<TestWindow />} />
            </Routes>
          </TestProvider>
        </DataProvider>
      </AppProvider>
    </Router>
  );
}

export default App;
