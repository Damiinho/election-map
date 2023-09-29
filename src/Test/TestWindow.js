import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TestWindow = () => {
  const params = useParams();
  const search = params.search;
  const [parametr, setParametr] = useState(params.search);

  console.log(params);

  return (
    <div>test window {parametr === "window" ? "z buttona" : "z palca"}</div>
  );
};

export default TestWindow;
