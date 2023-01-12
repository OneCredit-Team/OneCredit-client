import "./style.scss";
import { Link } from "react-router-dom";

function AddPlace() {
    return (
        <div className="add-page">
            <div className="add-tit">
                <div className="add-top">
                    <p>장소추가</p>
                </div>
                <div className="add-bottom">
                    <input type='text' placeholder='도로명 주소를 입력해주세요.'/>
                </div>
            </div>
        </div>
    );
}

export default AddPlace;
