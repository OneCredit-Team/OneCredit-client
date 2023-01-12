import Graph from "../../components/Graph";
import GraphBar from "../../components/GraphBar";
import "./style.scss";
import PlacepercentData from './percent.json';
import { IoIosArrowDown } from "react-icons/io";
import PlaceBox from "../../components/PlaceBox";
import Modal from 'react-modal';
import React, { useState } from 'react';
export default function GraphPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div className="percent-tit-background">
        <div className="percent-tit">

          <div className="percent-tit-left">
            <div className="percent-store">
              <p className="percent-store-top">
                <a>{PlacepercentData.placename}</a>
                <a className="percent-store-top-icon" onClick={() => setModalIsOpen(true)} ><IoIosArrowDown /></a>
              </p>
              <p className="percent-store-bottom">{PlacepercentData.address}</p>
              <p className="percent-store-bottom2">
                <p>{PlacepercentData.user}</p>

                <p>{PlacepercentData.vacancy}</p>
              </p>
              <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="Modal">
                <div className="placebox-box"><PlaceBox /></div>
              </Modal>
              <p className="percent-store-solution">
                솔루션 확인하기
              </p>
            </div>

            <div className="percent-percent">
              <a className="percent-percent-top">
                <a className="percent-front-num">{PlacepercentData.useuser}</a>
                <a className="percent-slash"> / </a>
                <a className="percent-back-num">{PlacepercentData.totaluser}</a>
              </a>
              <a className="percent-percent-bottom">({PlacepercentData.percent}%)</a>
            </div>
          </div>
          <div className="percent-tit-right">
            <div className="percent-right-img">
            {
              PlacepercentData.percent < 21 ?
                <img src="/img/verygood.svg" />
                :
                PlacepercentData.percent > 20 && PlacepercentData.percent < 41 ?
                  <img src="/img/good.svg" />
                  :
                  PlacepercentData.percent > 40 && PlacepercentData.percent < 61 ?
                    <img src="/img/so-so.svg" />
                    :
                    PlacepercentData.percent > 60 && PlacepercentData.percent < 81 ?
                      <img src="/img/bad.svg" />
                      :
                      <img src="/img/verybad.svg" />
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
