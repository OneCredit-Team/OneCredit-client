import React from "react";
import Graph from "../Graph";
import GraphBar from "../GraphBar";
import "./style.scss";

function GraphResult() {
  return (
    <div className="graph-result-page">
      <div className="graph-result-content">
        <div className="graph-text-bundle">
          <div className="graph-tit">시간 별 혼잡도</div>
          <div className="graph-sub-tit">*오전 09시 기준</div>
        </div>
        <Graph />
        <GraphBar />
      </div>
    </div>
  );
}

export default GraphResult;
