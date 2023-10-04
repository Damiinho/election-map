import { useEffect, useState } from "react";
import {
  useParams,
  //  useNavigate
} from "react-router-dom";
import TestList from "./TestList";
import ResultsPanel from "./ResultsPanel";
import Concept from "./Concept";

const TestWindow = () => {
  const params = useParams();
  const [
    parametr,
    // setParametr
  ] = useState(params.result);
  // const navigate = useNavigate();

  console.log(params);
  useEffect(() => {
    params.result = parametr;
    console.log(params);
  }, [params, parametr]);
  return (
    // <div
    //   onClick={() => {
    //     setParametr("eee");
    //     navigate("/test/winddow/");
    //   }}
    // >
    //   test window {parametr === "window" ? "z buttona" : "z palca"}
    // </div>

    <>
      {" "}
      {params.result === "lista" ? (
        <TestList />
      ) : params.result === "wynik" ? (
        <ResultsPanel />
      ) : params.result === "koncepcja" ? (
        <Concept />
      ) : (
        "błąd"
      )}
    </>
  );
};

export default TestWindow;
