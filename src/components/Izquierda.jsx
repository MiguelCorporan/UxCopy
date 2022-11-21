import React from "react";
import styled from "styled-components";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { AiOutlineCompass, AiOutlineSetting } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import { RiStore2Line } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import perfil from "../assets/perfil.jpeg";

const AlaIzquierda = styled.div`
  width: 20%;
  min-height: calc(100vh - 4rem);
  background-color: #ffffff;
  position: fixed;
  top: 4rem;
  left: 0;

  .Casilla {
    width: 80%;
    height: 8rem;
    margin-top: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5rem;
    border-radius: 20px;
    background-color: #f5f6fa;
  }

  .Repe {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
  }

  .Repe figure {
    width: 50px;
    height: 50px;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 50%;
    background-color: #8e8e8e;
  }

  .Repe figure img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .Namae {
    font-size: 0.8rem;
    font-weight: bold;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .Nm {
    font-size: 0.7rem;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
    color: #787878;
  }

  .Me {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .M2 h5 {
    font-weight: bold;

    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .M2 p {
    font-size: 0.8rem;
    font-weight: bold;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
    color: #787878;
  }

  .Cir {
    color: #0077ff;
  }

  .Letras {
    width: 80%;
    height: 50%;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  .Le {
    width: 90%;

    padding: 0.3rem;

    display: flex;
    align-items: center;
    margin-bottom: 0.1rem;
    border-radius: 10px;
    font-weight: bold;
    /* color: #aaaaaaa2; */
  }

  .Le:hover {
    background-color: #0077ff;
    color: #fff;
  }

  .Le:hover p {
    color: #ffffff;
  }

  .Le:hover .Ico {
    fill: #fff;
  }

  .Le:hover .yomismo {
    fill: #959595;
    color: #ffffff;
  }

  .Le p {
    color: #c1c1c1;
    font-size: 1rem;
    cursor: pointer;

    font-family: "Barlow Semi Condensed", sans-serif;
    font-family: "Fira Sans Condensed", sans-serif;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .Ico {
    font-size: 2rem;
    margin-right: 1rem;
    fill: #959595;
  }

  .yomismo {
    font-size: 2.2rem;
    margin-right: 1rem;
    color: #959595;
  }

  /*--------------*/

  .MoreLetras {
    width: 80%;
    margin-top: 0.6rem;
    margin-left: auto;
    margin-right: auto;
  }

  h4 {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: #8e8e8e;

    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .La {
    width: 90%;
    height: 2.7rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.1rem;
    border-radius: 10px;
    font-weight: bold;
  }

  .La p {
    color: #000000;
    font-size: 1rem;
    cursor: pointer;

    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .La:hover {
    background-color: #0077ff;
  }

  .La:hover p {
    color: #fff;
  }

  .For {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    text-align: center;
    margin-left: 0.5rem;
    color: #ffffff;
    background-color: #ef2929;
  }

  .Bolita {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    margin-right: 1rem;
  }

  .Uno {
    background-color: #4646ef;
  }

  .Dos {
    background-color: #8e8e8e;
  }

  .Tres {
    background-color: #5f3ec2;
  }

  @media screen and (max-width: 900px) {
    width: 60%;
    background-color: #dedede;
    height: calc(100% - 4rem);
    z-index: 2000;
    transform: ${({ Isvisible }) =>
      Isvisible ? "translateX(0%)" : "translateX(-100%)"};
    transition: transform 0.5s ease-out;
  }
`;
const Izquierda = ({ Isvisible }) => {
  return (
    <AlaIzquierda Isvisible={Isvisible}>
      <div className="Casilla">
        <div className="Repe">
          <figure>
            <img src={perfil} alt="" />
          </figure>
          <div className="">
            <p className="Namae">
              Jisso Safitri <AiFillCheckCircle className="Cir" />
            </p>
            <p className="Nm">@Jissofast</p>
          </div>
        </div>
        <div className="Me">
          <div className="M2">
            <h5>5.5K</h5>
            <p>Follower</p>
          </div>
          <div className="M2">
            <h5>568</h5>
            <p>Following</p>
          </div>
          <div className="M2">
            <h5>112</h5>
            <p>Post</p>
          </div>
        </div>
      </div>

      <div className="Letras">
        <div className="Le">
          <HiOutlineSquares2X2 className="yomismo" />
          <p>Feed</p>
        </div>
        <div className="Le">
          <AiOutlineCompass className="Ico" />
          <p>Discover</p>
        </div>
        <div className="Le">
          <BsPeople className="Ico" />
          <p>Friends</p>
        </div>
        <div className="Le">
          <BiCube className="Ico" />
          <p>Community</p>
        </div>
        <div className="Le">
          <BsCameraVideo className="Ico" />
          <p>Videos</p>
        </div>
        <div className="Le">
          <RiStore2Line className="Ico" />
          <p>Marketplaces</p>
        </div>
        <div className="Le">
          <AiOutlineSetting className="Ico" />
          <p>Settings</p>
        </div>
      </div>

      <div className="MoreLetras">
        <h4>LAST VISITED</h4>
        <div className="La">
          <p className="Bolita Uno"></p>
          <p>UI/UX Comunit...</p>
          <div className="For">4</div>
        </div>
        <div className="La">
          <p className="Bolita Dos"></p>
          <p>Sambat coding</p>
        </div>
        <div className="La">
          <p className="Bolita Tres"></p>
          <p>AndroidDev indo</p>
        </div>
      </div>
    </AlaIzquierda>
  );
};

export default Izquierda;
