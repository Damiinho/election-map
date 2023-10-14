import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import MySmallInfoBox from "../../Components/MySmallInfoBox";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";

const BoxSimpleSummary = () => {
  const { simpleFinalResultSummary, setSimpleFinalResultSummary, windowWidth } =
    useContext(AppContext);
  const [grabbedElement, setGrabbedElement] = useState(null);
  const [grabbing, setGrabbing] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e, index) => {
    setGrabbedElement({ index });
    setOffset({ x: e.clientX, y: e.clientY });
    setGrabbing(true);
  };

  const handleMouseMove = (e) => {
    if (grabbing) {
      // Oblicz nową pozycję przesuwanego elementu na podstawie pozycji myszy i przesunięcia
      const newLeft = e.clientX - offset.x;
      const newTop = e.clientY - offset.y;

      // Zaktualizuj pozycję przesuwanego elementu
      setGrabbedElement((prevElement) => ({
        ...prevElement,
        left: newLeft,
        top: newTop,
      }));
    }
  };

  const handleMouseUp = (index) => {
    const elements = document.querySelectorAll(
      ".simpleSummary-main__summary-box__item"
    );
    const positions = Array.from(elements).map((element, index) => {
      const rect = element.getBoundingClientRect();
      return {
        left: rect.left,
        order: index,
      };
    });
    positions.sort((a, b) => a.left - b.left);

    if (grabbing) {
      // Zakończ przeciąganie - zresetuj stany
      setGrabbedElement(null);
      setGrabbing(false);
      setOffset({ x: 0, y: 0 });

      const newSimpleFinalResultSummary = positions.map((pos) => {
        // Znajdź odpowiadający element na podstawie referencji do elementu DOM
        const foundItem = simpleFinalResultSummary.find(
          (item, index) => index === pos.order
        );

        return foundItem;
      });
      setSimpleFinalResultSummary(newSimpleFinalResultSummary);
    }
  };

  const handleTouchStart = (e, index) => {
    setGrabbedElement({ index });
    setOffset({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    setGrabbing(true);
  };

  const handleTouchMove = (e) => {
    if (grabbing) {
      const newLeft = e.touches[0].clientX - offset.x;
      const newTop = e.touches[0].clientY - offset.y;

      setGrabbedElement((prevElement) => ({
        ...prevElement,
        left: newLeft,
        top: newTop,
      }));
    }
  };

  const handleTouchEnd = (index) => {
    const elements = document.querySelectorAll(
      ".simpleSummary-main__summary-box__item"
    );
    const positions = Array.from(elements).map((element, idx) => {
      const rect = element.getBoundingClientRect();
      return {
        left: rect.left,
        order: idx,
      };
    });
    positions.sort((a, b) => a.left - b.left);

    if (grabbing) {
      setGrabbedElement(null);
      setGrabbing(false);
      setOffset({ x: 0, y: 0 });

      const newSimpleFinalResultSummary = positions.map((pos) => {
        const foundItem = simpleFinalResultSummary.find(
          (item, index) => index === pos.order
        );

        return foundItem;
      });
      setSimpleFinalResultSummary(newSimpleFinalResultSummary);
    }
  };

  return (
    <div className="simpleSummary-main__summary-box">
      {simpleFinalResultSummary.map((party, index) => {
        return (
          <div
            key={index}
            className="simpleSummary-main__summary-box__item"
            onMouseDown={(e) => handleMouseDown(e, index)}
            onMouseUp={() => handleMouseUp(index)}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => handleTouchStart(e, index)}
            onTouchEnd={() => handleTouchEnd(index)}
            onTouchMove={handleTouchMove}
            style={{
              top:
                grabbing && index === grabbedElement.index
                  ? grabbedElement.top
                  : "auto",
              left:
                grabbing && index === grabbedElement.index
                  ? grabbedElement.left
                  : "auto",
              zIndex: grabbing && index === grabbedElement.index ? 1 : "auto",
            }}
          >
            {index > 0 && (
              <DragIndicatorRoundedIcon
                style={{
                  left: windowWidth > 350 ? -3 : -1,
                  cursor:
                    grabbing && index === grabbedElement.index
                      ? "grabbing"
                      : "grab",
                }}
                className="simpleSummary-main__summary-box__item-drag"
              />
            )}
            {index < simpleFinalResultSummary.length - 1 && (
              <DragIndicatorRoundedIcon
                style={{
                  right: windowWidth > 350 ? -3 : -1,
                  cursor:
                    grabbing && index === grabbedElement.index
                      ? "grabbing"
                      : "grab",
                }}
                className="simpleSummary-main__summary-box__item-drag"
              />
            )}
            <MySmallInfoBox
              txt={party.shortName}
              value={party.seats}
              backgroundTop={party.isOverThreshold ? party.color : "grey"}
              allWidth={windowWidth > 350 ? 80 : 50}
              radius="0px"
              title={party.name}
              fontSizeTop={windowWidth > 350 ? "" : 10}
              fontSizeBottom={windowWidth > 350 ? "" : 15}
              cursor={
                grabbing && index === grabbedElement.index ? "grabbing" : "grab"
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default BoxSimpleSummary;
