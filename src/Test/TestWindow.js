import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TestWindow = () => {
  const params = useParams();
  const search = params.search;
  const [parametr, setParametr] = useState(search);
  const navigate = useNavigate();

  console.log(params);
  useEffect(() => {
    params.search = parametr;
    console.log(params);
  }, [params, parametr]);
  return (
    <div
      onClick={() => {
        setParametr("eee");
        navigate("/test/winddow/");
      }}
    >
      test window {parametr === "window" ? "z buttona" : "z palca"}
    </div>
  );
};

export default TestWindow;
