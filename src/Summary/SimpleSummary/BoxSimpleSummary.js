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
        top: rect.top,
        order: index,
      };
    });

    let newPositions = [];
    let savedPosition = null;

    for (let i = 0; i < positions.length; i++) {
      if (positions[i].order !== grabbedElement.index) {
        newPositions.push(positions[i]);
      } else {
        savedPosition = positions[i];
      }
    }
    const firstGroup = [];
    const secondGroup = [];

    if (newPositions.every((item) => item.top === newPositions[0].top)) {
      newPositions = [...positions.sort((a, b) => a.left - b.left)];
    } else {
      const referenceTop = newPositions[0].top;

      newPositions.forEach((item) => {
        if (item.top === referenceTop) {
          firstGroup.push(item);
        } else {
          secondGroup.push(item);
        }
      });
      if (firstGroup[0].top > secondGroup[0].top) {
        if (savedPosition.top + 20 < firstGroup[0].top) {
          secondGroup.push(savedPosition);
        } else {
          firstGroup.push(savedPosition);
        }
        newPositions = [
          ...secondGroup.sort((a, b) => a.left - b.left),
          ...firstGroup.sort((a, b) => a.left - b.left),
        ];
      } else {
        if (savedPosition.top + 20 < secondGroup[0].top) {
          firstGroup.push(savedPosition);
        } else {
          secondGroup.push(savedPosition);
        }
        newPositions = [
          ...firstGroup.sort((a, b) => a.left - b.left),
          ...secondGroup.sort((a, b) => a.left - b.left),
        ];
      }
    }

    if (grabbing) {
      setGrabbedElement(null);
      setGrabbing(false);
      setOffset({ x: 0, y: 0 });

      const newSimpleFinalResultSummary = newPositions.map((pos) => {
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
        top: rect.top,
        order: idx,
      };
    });
    let newPositions = [];
    let savedPosition = null;

    for (let i = 0; i < positions.length; i++) {
      if (positions[i].order !== grabbedElement.index) {
        newPositions.push(positions[i]);
      } else {
        savedPosition = positions[i];
      }
    }
    const firstGroup = [];
    const secondGroup = [];

    if (newPositions.every((item) => item.top === newPositions[0].top)) {
      newPositions = [...positions.sort((a, b) => a.left - b.left)];
    } else {
      const referenceTop = newPositions[0].top;

      newPositions.forEach((item) => {
        if (item.top === referenceTop) {
          firstGroup.push(item);
        } else {
          secondGroup.push(item);
        }
      });
      if (firstGroup[0].top > secondGroup[0].top) {
        if (savedPosition.top + 20 < firstGroup[0].top) {
          secondGroup.push(savedPosition);
        } else {
          firstGroup.push(savedPosition);
        }
        newPositions = [
          ...secondGroup.sort((a, b) => a.left - b.left),
          ...firstGroup.sort((a, b) => a.left - b.left),
        ];
      } else {
        if (savedPosition.top + 20 < secondGroup[0].top) {
          firstGroup.push(savedPosition);
        } else {
          secondGroup.push(savedPosition);
        }
        newPositions = [
          ...firstGroup.sort((a, b) => a.left - b.left),
          ...secondGroup.sort((a, b) => a.left - b.left),
        ];
      }
    }

    if (grabbing) {
      setGrabbedElement(null);
      setGrabbing(false);
      setOffset({ x: 0, y: 0 });

      const newSimpleFinalResultSummary = newPositions.map((pos) => {
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
