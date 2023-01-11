import Graph from "../../components/Graph";
import "./Main.scss";
export default function Main() {
  return (
    <>
      <div className="main-tit-background">
        <div className="main-tit">
          <div className="main-store">
            <p className="main-store-top">소마고 강당</p>
            <p className="main-store-bottom">부산광역시 강서구 가락대로 1393</p>
            <p className="main-store-bottom2">
              34명 중 24명이 소마고 강당을 이용중이에요.
              <br />
              아직 14명이 더 올 수 있어요.
            </p>
          </div>

          <div className="main-percent">
            <a className="main-percent-top">
              <a className="percent-front-num">24</a>
              <a className="percent-slash"> / </a>
              <a className="percent-back-num">34</a>
            </a>
            <a className="main-percent-bottom">(84%)</a>
          </div>
        </div>
        <Graph />
      </div>
    </>
  );
}
