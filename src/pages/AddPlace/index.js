import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Inputs = ({ name, setValue }) => {
  return (
    <>
      <div className="add-top">
        <p>{name} 추가</p>
      </div>
      <div className="add-bottom">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder={`${name}를 입력해주세요.`}
        />
      </div>
    </>
  );
};
const initForm = {
  place: "",
  address: "",
  maximum: "",
};
const names = [
  { key: "place", label: "장소" },
  { key: "address", label: "주소" },
  { key: "maximum", label: "최대수용인원" },
];
function AddPlace() {
  const [pageIndex, setPageIndex] = useState(0);
  const [form, setForm] = useState();
  console.log("form : ", form);
  
  return (
    <div className="add-page">
      <div className="add-tit">
        <Inputs
          name={names[pageIndex].label}
          setValue={(v) => {
            setForm((s) => {
              return {
                ...s,
                [names[pageIndex].key]: v,
              };
            });
          }}
        />
        <button
          className="add-bottom-button"
          onClick={() => {
            if (names.length - 1 > pageIndex) {
              setPageIndex((s) => s + 1);
            } else {
              console.log("send data : ", form);
              console.log("move homepage");
              setForm(initForm);
            }
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
}

export default AddPlace;
