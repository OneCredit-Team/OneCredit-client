import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./style.scss";

function Graph() {
  const canvasRef = useRef();
  const data = [100, 10, 200, 100, 40, 75, 100, 80, 60, 100, 90, 30];

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = canvas
      .append("svg")
      .attr("width", 1500)
      .attr("height", 304)
      .attr("style", "background-color: #000");
    const xFunc = (data, index) => index * 125 + 50;
    const yFunc = (data) => 220 - data;

    const drawLineChartGenerator = d3.line().x(xFunc).y(yFunc);

    const path = svg
      .append("path")
      .attr("d", drawLineChartGenerator(data))
      .attr("fill", "none")
      .attr("stroke", "rgba(255, 255, 255, 0.4)")
      .attr("stroke-width", 4);

    const length = path.node().getTotalLength();

    path
      .attr("stroke-dashoffset", length)
      .attr("stroke-dasharray", length)
      .transition()
      .ease(d3.easeSin)
      .duration(1000)
      .attr("stroke-dashoffset", 2);
  }, []);

  return <div ref={canvasRef} />;
}

export default Graph;
