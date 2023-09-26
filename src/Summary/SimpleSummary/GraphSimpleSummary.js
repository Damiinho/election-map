import MapSimple from "./MapSimple";
import SimpleCircus from "./SimpleCircus";
import TableSimple from "./TableSimple";

const GraphSimpleSummary = () => {
  return (
    <div className="simpleSummary-main__summary-graph">
      <div className="simpleSummary-main__summary-graph__item">
        <div className="simpleSummary-main__summary-graph__item-map">
          <MapSimple />
        </div>
      </div>
      <div className="simpleSummary-main__summary-graph__table">
        <div className="simpleSummary-main__summary-graph__table-circus">
          <SimpleCircus />
        </div>
        <TableSimple />
      </div>
    </div>
  );
};

export default GraphSimpleSummary;
