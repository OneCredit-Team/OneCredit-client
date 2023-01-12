import { useEffect, useState } from "react";
import "./style.scss";

function GraphBar() {
  const [hour, setHour] = useState("");

  useEffect(() => {
    const getTime = () => {
      let time = new Date();

      let hours = time.getHours(); // 시
      setHour(hours);
    };
    setInterval(getTime, 1000);
  }, []);

  const data = [
    "10",
    "11",
    "12",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
  ];
  return (
    <div className="graph-bar">
      {data.map((element, index) => {
        if (index === data.length - 1) {
          return (
            <li
              className={
                element == hour ? "graph-text graph-bold" : "graph-text"
              }
            >
              {element}(시)
            </li>
          );
        }
        return (
          <li
            className={element == hour ? "graph-text graph-bold" : "graph-text"}
          >
            {element}
          </li>
        );
      })}
    </div>
  );
}

export default GraphBar;
