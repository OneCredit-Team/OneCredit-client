import Graph from "../../components/Graph";
import GraphBar from "../../components/GraphBar";
import "./Main.scss";
import {IoIosArrowDown} from 'react-icons/io';
import PlaceBox from "../../components/PlaceBox";
import Modal from 'react-modal';
import React, { useState } from 'react';

export default function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div className="main-tit-background">
        <div className="main-tit">
          <div className="main-store">
            <p className="main-store-top">
              <a>소마고 강당</a>
              <a className="main-store-top-icon" onClick={()=> setModalIsOpen(true)} ><IoIosArrowDown/></a>
            </p>
            <p className="main-store-bottom">부산광역시 강서구 가락대로 1393</p>
            <p className="main-store-bottom2">
              34명 중 24명이 소마고 강당을 이용중이에요.
              <br />
              아직 14명이 더 올 수 있어요.
            </p>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="Modal">
              <div className="placebox-box"><PlaceBox /></div>
            </Modal>
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
        <GraphBar />
      </div>
    </>
  );
}
