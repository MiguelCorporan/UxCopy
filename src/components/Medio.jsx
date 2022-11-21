import React from "react";
import styled from "styled-components";
import CasiMedio from "./CasiMedio";
import Post from "./Post";
import { TbDots } from "react-icons/tb";
import perfil from "../assets/perfil.jpeg";
import { SlBell } from "react-icons/sl";
import Otra from "../assets/dese.jpg";
import Footer from "./Footer";

const EnElMedio = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6.5rem;
  min-height: 100vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #f5f6fa;

  .Arriba {
    width: 90%;
    height: 22rem;
    padding-top: 0.3rem;
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5rem;
    border-radius: 20px;
    background-color: #ffffff;
  }

  .Arri {
    width: 96%;
    height: 40%;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .Arri img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .Medio {
    width: 92%;
    height: 40%;
    margin-left: auto;
    margin-right: auto;
  }

  .Abajo {
    width: 100%;
    height: 15%;
  }

  .ElMedio {
    width: 90%;
    height: 8rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    background-color: #ffffff;
  }

  .Blue {
    width: 60px;
    height: 60px;
    text-align: center;
    margin-left: 1rem;
    margin-top: -3rem;
    padding-top: 20px;
    border-radius: 10px;
    position: absolute;
    border: 3px solid #ffffff;
    background-color: #0033ff;
    color: #ffffff;
  }

  /**----------------- */

  .Pana {
    width: 88%;
    margin-top: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0.3rem;
    padding-left: 1.5rem;
    display: flex;
    justify-content: space-between;
  }

  .Pana p {
    color: #959595;
  }

  .Msj {
    font-size: 1.6rem;
  }

  .Info {
    width: 100%;
    margin-top: 0.1rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
  }

  .Tite {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 0.5rem;

    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .ExInfo {
    display: flex;
  }

  .ExInfo p {
    font-size: 0.9rem;
    font-weight: 900;
    color: #9d9d9d;

    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .MasInfo {
    display: flex;
    align-items: center;
    padding-top: 1.1rem;
  }

  .Line {
    font-size: 0.7rem;
    font-weight: bolder;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
    color: #929292;
  }

  .Circu {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: aliceblue;
    margin-right: -0.5rem;
  }

  .Circu img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .Otros {
    margin-left: 1rem;
  }

  /*------------------*/

  .Abajo {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 4.5rem;
    border-top: 2px solid #e0e0e0;
  }

  .Abj {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    padding-left: 2.5rem;
  }

  .Abj p {
    font-size: 0.9rem;
    padding: 0.2rem;
    color: #a8a8a8;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .Puntito {
    font-size: 2rem;
    color: #a8a8a8;
  }

  @media screen and (max-width: 900px) {
    width: 100%;

    .Arriba {
      width: 96%;
    }

    .Medio {
      width: 96%;
      height: 38%;
    }

    .Info {
      display: block;
    }

    .Tite {
      font-size: 1.3rem;
      margin-bottom: 0rem;
    }

    .Abj {
      padding-left: 1rem;
    }
  }
`;
const Medio = () => {
  return (
    <EnElMedio>
      <div className="Arriba">
        <div className="Arri">
          <img src={Otra} alt="" className="Img" />
          <div className="Blue">UX</div>
        </div>

        <div className="Medio">
          <div className="Pana">
            <p>Member since July 2022</p>
            <p>
              <SlBell className="Msj" />
            </p>
          </div>
          <div className="Info">
            <div className="MoreInfo">
              <p className="Tite">UI/UX Community forum</p>
              <div className="ExInfo">
                <p>Public Community </p> <p> 65.3k members</p>
              </div>
            </div>
            <div className="MasInfo">
              <div className="Circu">
                {" "}
                <img src={perfil} alt="" className="perfil-img" />{" "}
              </div>
              <div className="Circu">
                {" "}
                <img src={perfil} alt="" className="perfil-img" />{" "}
              </div>
              <div className="Circu">
                {" "}
                <img src={perfil} alt="" className="perfil-img" />{" "}
              </div>
              <div className="Circu">
                {" "}
                <img src={perfil} alt="" className="perfil-img" />{" "}
              </div>
              <div className="Circu">
                {" "}
                <img src={perfil} alt="" className="perfil-img" />{" "}
              </div>
              <div className="Otros">
                <p className="Line">
                  Jiso and 5 other friends are
                  <br /> members
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Abajo">
          <div className="Abj">
            <p>About</p>
            <p>Forum</p>
            <p>Members</p>
            <p>Events</p>
          </div>
          <TbDots className="Puntito" />
        </div>
      </div>

      <CasiMedio />

      <Post />
      <Post />

      <Footer />
    </EnElMedio>
  );
};

export default Medio;
