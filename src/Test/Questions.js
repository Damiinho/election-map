import React, { useContext } from "react";
import { TestContext } from "../contexts/TestContext";

const Questions = () => {
  const { questions } = useContext(TestContext);

  return (
    <>
      <div className="test__list-item">
        <div className="test__list-item__category">kategoria</div>
        <div className="test__list-item__result">rezultat na osi</div>
        <div className="test__list-item__question">pytanie</div>
      </div>
      {questions.map((item, index) => {
        // Zakładamy, że `xxx` jest dostępne w obiekcie `item.effects`
        // Przykład wartości `xxx`

        const setCategory = () => {
          if (item.effects.right) {
            return "right";
          }
          if (item.effects.prog) {
            return "prog";
          }
          if (item.effects.auth) {
            return "auth";
          }
          return "brak kategorii";
        };
        const category = setCategory();

        const result = () => {
          if (item.effects[category] > 0) {
            return "#2297328f";
          }
          if (item.effects[category] < 0) {
            return "#9722228f";
          }
          return "brak wyniku";
        };

        return (
          <div className="test__list-item" key={index}>
            {" "}
            <div className="test__list-item__number">{index + 1}.</div>
            <div className="test__list-item__category">
              {category === "right"
                ? "prawo"
                : category === "prog"
                ? "postęp"
                : category === "auth"
                ? "władza"
                : "nie wiem"}
            </div>
            <div
              className="test__list-item__result"
              style={{ backgroundColor: result() }}
            ></div>
            <div className="test__list-item__question">{item.question}</div>
          </div>
        );
      })}
    </>
  );
};
export default Questions;
