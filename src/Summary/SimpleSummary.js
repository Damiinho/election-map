import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import { AppContext } from "../contexts/AppContext";

import DistrictListSimple from "./SimpleSummary/DistrictListSimple";
import BarsSimpleSummary from "./SimpleSummary/BarsSimpleSummary";
import BoxSimpleSummary from "./SimpleSummary/BoxSimpleSummary";
import GraphSimpleSummary from "./SimpleSummary/GraphSimpleSummary";
import SearchDistrictSimple from "./SimpleSummary/SearchDistrictSimple";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { useNavigate } from "react-router-dom";

const SimpleSummary = () => {
  const { simpleDistricts } = useContext(DataContext);
  const { setSimpleFinalResultSummary, setShowSimpleSummary } =
    useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    const updatedFinalResultSummary = [];
    const nameColorMap = {};

    simpleDistricts.forEach((district) => {
      if (district.finalResult && Array.isArray(district.finalResult)) {
        district.finalResult.forEach((item) => {
          if (item.name && item.color) {
            const key = `${item.name}_${item.color}`;

            if (nameColorMap[key]) {
              nameColorMap[key].result += item.result;
              nameColorMap[key].seats += item.seats;
            } else {
              nameColorMap[key] = { ...item };
              updatedFinalResultSummary.push(nameColorMap[key]);
            }
          }
        });
      }
    });

    updatedFinalResultSummary.sort((a, b) => b.seats - a.seats);

    setSimpleFinalResultSummary(updatedFinalResultSummary);
  }, [simpleDistricts, setSimpleFinalResultSummary]);

  const handleRestart = () => {
    setShowSimpleSummary(false);
    navigate("/prosty");
  };

  return (
    <div className="simpleSummary">
      <div className="simpleSummary-main">
        <div className="simpleSummary-main__summary">
          <div className="simpleSummary-main__summary-header">
            <div className="simpleSummary-main__summary-header__title">
              wyniki ogólne{" "}
              <span onClick={handleRestart}>
                zmień <ChangeCircleIcon fontSize="large" />
              </span>
            </div>
          </div>
          <BoxSimpleSummary />
          <BarsSimpleSummary />
          <GraphSimpleSummary />
        </div>

        <div className="simpleSummary-main__details">
          <div className="simpleSummary-main__details-header">
            <div className="simpleSummary-main__details-header__title">
              wyniki szczegółowe
            </div>
            <SearchDistrictSimple />
          </div>
          <DistrictListSimple />
        </div>
      </div>
    </div>
  );
};

export default SimpleSummary;
