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
      .attr("viewBox", "0 0 1200 304")
      .attr("width", 1000)
      .attr("style", "padding-top: 50px;");
    const xFunc = (_, index) => index * 100 + 30; // 곱하기는 간격 더하기로 위치를 조정
    const yFunc = (data) => 304 - data;

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

    data.forEach((element, index) => {
      svg
        .append("text")
        .text(element)
        .attr("class", "data")
        .attr("style", "font-weight: 500; font-size: 28px; font-style: normal;")
        .attr("fill", "rgba(255, 255, 255, 0.3)")
        .attr("x", index * 100)
        .attr("y", 260 - element);
    });
  }, []);

  return <div ref={canvasRef} />;
}

export default Graph;
