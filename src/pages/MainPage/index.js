import "./style.scss";
import { Link } from "react-router-dom";

function MainPage({ navigation }) {
  return (
    <div className="main-page">
      <div className="main-content">
        <div className="main-tit">
          당장 가고싶은 장소,
          <br />
          갈깡 말깡~?
        </div>
        <div className="sub-tit">
          평소 가고 싶은 장소가 많은 사람들로 
          <br />
          북적거리진 않을까 갈지말지 고민하신 적이 있으신가요? 
          <br />
          이제 갈깡말깡과 함께라면 현재혼잡도 뿐만 아니라, 
          <br />
          앞으로의 예측 혼잡도도 알 수 있어요!
        </div>
        <Link className="main-btn" to="/graph">
          바로 써보기
        </Link>
      </div>
      <img src="/img/happy.svg" className="happy-img" />
    </div>
  );
}

export default MainPage;
