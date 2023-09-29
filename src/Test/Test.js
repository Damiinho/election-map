import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Test = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      test
      <button
        onClick={() => {
          navigate("/test/window/");
        }}
      >
        test window
      </button>
    </div>
  );
};

export default Test;
