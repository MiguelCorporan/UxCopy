import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { SlBell } from "react-icons/sl";
import { BiMessageAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import perfil from "../assets/perfil.jpeg";

const Heade = styled.header`
  width: 100%;
  height: 5.5rem;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  background-color: #ffffff;
  z-index: 9999;

  .Izquierda {
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .L1a {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: blue;
  }

  .L1 {
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }

  .L1 img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    font-family: "Barlow Semi Condensed", sans-serif;
    /* font-family: "Lato", sans-serif; */
    /* font-family: "Mukta", sans-serif; */
    /* font-family: "Poppins", sans-serif; */
    /* font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
    /* margin-left: 1rem; */
  }

  .Medio {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Comu {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .Derecha {
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .Inpu {
    width: 50%;
    height: 3.8rem;
    display: flex;
    align-items: center;
  }

  .Lupa {
    position: absolute;
    margin-left: 10px;
    font-size: 2rem;
    color: #aaaaaa;
  }

  .Input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
    padding-left: 2.8rem;
    font-size: 1.1rem;
    font-weight: 530;
    background-color: #f5f6fa;
    color: #b2b3b8;
  }

  .Input::placeholder {
    color: #979797;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .Nu {
    width: 18px;
    height: 18px;
    text-align: center;
    border-radius: 50px;
    margin-left: 15px;
    background-color: red;
    color: #ffffff;
  }

  .Msj {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
    fill: #959595;
  }

  .Ul {
    font-size: 1.4rem;
    color: #a8a8a8;
  }

  .Menu {
    display: none;
  }

  @media screen and (max-width: 900px) {
    .Izquierda {
      display: none;
    }

    .Comu {
      display: none;
    }

    .Medio {
      width: 70%;
    }

    .Inpu {
      width: 96%;
      margin-left: auto;
      margin-right: auto;
    }

    .L1 {
      display: none;
    }

    .Derecha {
      width: 30%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .Menu {
      width: 13%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .Men {
      font-size: 2.2rem;
      fill: #959595;
    }

    .Ul {
      font-size: 1.8rem;
    }
  }
`;

const Header = ({ setIsvisible, setRigthIsVisible }) => {
  const menuFun = () => {
    setIsvisible((I) => !I);
    setRigthIsVisible(false);
  };

  const caretFun = () => {
    setRigthIsVisible((R) => !R);
    setIsvisible(false);
  };

  return (
    <Heade>
      <div className="Izquierda">
        <p className="L1a"></p>
        <h1>FORUMBOARD</h1>
      </div>
      <div className="Menu">
        <TiThMenu className="Men" onClick={menuFun} />
      </div>
      <div className="Medio">
        <p className="Comu">Community</p>
        <div className="Inpu">
          <CiSearch className="Lupa" />
          <input
            className="Input"
            type="text"
            name=""
            id=""
            placeholder="Find friends, communities or pages here"
          />
        </div>
      </div>
      <div className="Derecha">
        <div>
          <p className="Nu">2</p>
          <BsChatSquareDots className="Msj" />
        </div>
        <div>
          <p className="Nu">9+</p>
          <SlBell className="Msj" />
        </div>
        <div className="L1">
          <img src={perfil} alt="" />
        </div>
        <div onClick={caretFun}>
          <AiFillCaretDown className="Ul" />
        </div>
      </div>
    </Heade>
  );
};

export default Header;
