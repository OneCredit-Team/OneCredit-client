import "./style.scss";

function GraphBar() {
  const data = [
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "17",
    "18",
  ];
  return (
    <div className="graph-bar">
      {data.map((element, index) => {
        if (index === data.length - 1) {
          return <li className="graph-text">{element}(시)</li>;
        }
        return <li className="graph-text">{element}</li>;
      })}
    </div>
  );
}

export default GraphBar;
