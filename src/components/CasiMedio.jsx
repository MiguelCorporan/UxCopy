import React from "react";
import styled from "styled-components";
import { CiImageOn, CiVideoOn } from "react-icons/ci";
import { MdOutlineFactCheck } from "react-icons/md";
import { IoHappyOutline } from "react-icons/io5";
import perfil from "../assets/perfil.jpeg";

const ArrPost = styled.div`
  width: 90%;
  height: 9rem;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  border-radius: 20px;
  background-color: #ffffff;

  .One {
    width: 10%;
    height: 100%;
    margin-left: 3rem;
  }

  figure {
    width: 60px;
    height: 60px;
    margin-top: 1.4rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
  }

  figure img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .Two {
    width: 80%;
    height: 100%;
  }

  .Thre {
    height: 50%;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .Thre div {
    display: flex;
    align-items: center;
    margin-right: 1px;
  }

  .Thre div p {
    font-size: 1rem;
    font-weight: bold;
    color: #999999;

    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .Fort {
    height: 50%;
    display: flex;
    align-items: center;
  }

  .Imput {
    width: 90%;
    height: 70%;
    font-size: 1rem;
    margin-top: 1.5rem;
    padding-left: 1.7rem;
    border: none;
    border-radius: 16px;
    background-color: #f5f6fa;
  }

  .Ic {
    font-size: 1.6rem;
    margin-right: 0.5rem;
    color: #999999;
  }

  @media screen and (max-width: 900px) {
    width: 96%;

    .One {
      width: 20%;
      margin-left: 0.5rem;
    }

    .Thre p {
      display: none;
    }
  }
`;

const CasiMedio = () => {
  return (
    <ArrPost>
      <div className="One">
        <figure>
          <img src={perfil} alt="" />
        </figure>
      </div>
      <div className="Two">
        <div className="Fort">
          <input
            type="text"
            placeholder="Start post in this group"
            className="Imput"
          />
        </div>
        <div className="Thre">
          <div className="A">
            <CiImageOn className="Ic" />
            <p>Image</p>
          </div>
          <div className="B">
            <CiVideoOn className="Ic" />
            <p>Video / Gif</p>
          </div>
          <div className="C">
            <MdOutlineFactCheck className="Ic" />
            <p>Activity / Poll</p>
          </div>
          <div className="D">
            <IoHappyOutline className="Ic" />
            <p>Feelings</p>
          </div>
        </div>
      </div>
    </ArrPost>
  );
};

export default CasiMedio;
