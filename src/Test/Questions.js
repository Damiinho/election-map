import React, { useContext } from "react";
import { TestContext } from "../contexts/TestContext";
import { AppContext } from "../contexts/AppContext";

const Questions = () => {
  const { questions } = useContext(TestContext);
  const { windowWidth } = useContext(AppContext);

  return (
    <>
      {questions.map((item, index) => {
        return (
          <div className="test__list-item" key={index}>
            {windowWidth > 550 && (
              <div className="test__list-item__number">{index + 1}.</div>
            )}
            {/* <div
                className="test__list-item__result"
                style={{ backgroundColor: result() }}
              ></div> */}
            <div className="test__list-item__question">
              {!(windowWidth > 550) && <span>{index + 1}.</span>}
              <span>{item.question}</span>
            </div>
            <div className="test__list-item__category">
              <span>Wagi:</span>
              <span> Socjalizm / Kapitalizm: {item.effects.right || 0}</span>
              <span> Anarchizm / Autorytaryzm: {item.effects.auth || 0}</span>
              <span> Tradycja / Postęp: {item.effects.prog || 0}</span>
            </div>
            <div className="test__list-item__answers">
              <span>
                Od {item.min ? item.min : item.min === 0 ? "0" : "-1"}
              </span>
              <div>
                {item.marks ? (
                  item.marks.map((mark, index) => (
                    <span key={index} style={{ padding: "0 5" }}>
                      {mark.value} {mark.answer}
                    </span>
                  ))
                ) : (
                  <>
                    <span>-0.99 Nie zgadzam się</span>
                    <span>0 Nie wiem</span>
                    <span>0.99 Zgadzam się</span>
                  </>
                )}
              </div>
              <span>do {item.max ? item.max : item.max === 0 ? "0" : "1"}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Questions;
