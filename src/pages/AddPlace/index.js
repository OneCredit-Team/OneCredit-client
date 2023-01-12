import "./style.scss";
import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Inputs = ({ name, setValue, value, described }) => {
  return (
    <>
      <div className="add-top">
        <p className="add">{name} 추가</p>
        <p className="described">{described}</p>
      </div>
      <div className="add-bottom">
        <input
          type="text"
          value={value}
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
  { key: "place", label: "장소", desc: "장소 이름 입력" },
  { key: "address", label: "주소", desc: "도로명 주소 입력" },
  { key: "maximum", label: "최대수용인원", desc: "최대 수용인원 입력" },
];

function AddPlace({ navigation }) {
     const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);
  const [form, setForm] = useState(initForm);
  console.log("form : ", form);

  return (
    <div className="add-page">
      <div className="add-tit">
        <div className="back-button">
          <button onClick={() =>{
            if(pageIndex === 0){
                navigate(-1);
            }
            else{
                setPageIndex((s)=> s-1)
            }
          }}>
            <RiArrowLeftSLine/>
            돌아가기
          </button>
        </div>
        <Inputs
          name={names[pageIndex].label}
          described={names[pageIndex].desc}
          value={form[names[pageIndex].key]}
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
