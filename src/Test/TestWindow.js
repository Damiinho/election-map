import { useState } from "react";
import { useParams } from "react-router-dom";

const TestWindow = () => {
  const params = useParams();
  const search = params.search;
  const [parametr, setParametr] = useState(search);

  console.log(params);

  return (
    <div onClick={setParametr("eee")}>
      test window {parametr === "window" ? "z buttona" : "z palca"}
    </div>
  );
};

export default TestWindow;
