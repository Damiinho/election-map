const ErrorSimpleOptions = (props) => {
  return (
    <div className="simpleOptions-error">
      {props.resultError ? (
        <div className="simpleOptions-error__text">
          Suma wyników wszystkich partii nie może przekraczać 100%
        </div>
      ) : props.thresholdError ? (
        <div className="simpleOptions-error__text">
          Co najmniej jedna partia musi przekroczyć próg wyborczy
        </div>
      ) : null}
    </div>
  );
};

export default ErrorSimpleOptions;
