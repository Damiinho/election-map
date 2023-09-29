import { useNavigate } from "react-router-dom";

const Test = () => {
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
