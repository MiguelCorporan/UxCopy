import React from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";
import perfil from "../assets/perfil.jpeg";

const AlaDerecha = styled.div`
  width: 20%;
  min-height: calc(100vh - 4rem);
  position: fixed;
  right: 0;
  top: 5.1rem;
  background-color: #ffffff;

  .MoreLetras {
    width: 90%;

    margin-left: auto;
    margin-right: auto;
  }

  .Let {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .La {
    width: 90%;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.1rem;
    border-radius: 10px;
    font-weight: bold;
  }

  .Tp {
    width: 90%;
    display: flex;
    align-items: center;
    padding: 0.1rem;
  }

  .Tp p {
    border-radius: 10px;
    font-weight: bold;
    font-size: 0.8rem;
    padding-bottom: 0.4rem;
    color: #a0a7bc;

    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .La p {
    color: #000000;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;

    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .La:hover {
    background-color: #006aff;
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
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-right: 1rem;
  }

  /*---------------*/

  .Letras {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
  }

  .All {
    padding: 0.1rem;
    display: flex;
    margin-bottom: 0.1rem;
  }

  .Thep {
    margin-bottom: 0.8rem;
    font-weight: 800;
    font-size: 0.9rem;
    color: #8e8e8e;

    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .Gente {
    width: 35px;
    height: 35px;
    display: flex;
    margin-right: 1rem;
    border-radius: 50px;
    background-color: #000000;
  }

  .Gente img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }

  .Gente p {
    width: 15px;
    height: 15px;
    border-radius: 50px;
    margin-left: 1.3rem;
    background-color: green;
    position: absolute;
    z-index: 1000;
  }

  .TName {
    width: 60%;
    margin-right: 1rem;
  }

  .TName p {
    font-size: 0.8rem;
  }

  .Arroba {
    color: #8e8e8e;
  }

  .Name {
    display: flex;
    font-weight: bold;
    font-size: 0.8rem;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .Cir {
    color: #006aff;
  }

  .Msj {
    font-size: 1.5rem;
    color: #959595;
  }

  .Uno {
    background-color: #4258c6;
  }

  .Dos {
    background-color: #bdbdbd;
  }

  .Tres {
    background-color: #6c42c6;
  }

  .Cuatro {
    background-color: #212650;
  }

  .Cinco {
    background-color: #6c42c6;
  }

  .Seis {
    background-color: #bdbdbd;
  }

  .Siete {
    background-color: #bdbdbd;
  }

  @media screen and (max-width: 900px) {
    width: 60%;
    height: calc(100% - 4rem);
    transition: transform 0.5s ease-in-out;
    transform: ${({ rigthIsVisible }) =>
      rigthIsVisible ? "translateX(0)" : "translateX(100%)"};
  }
`;

const Derecha = ({ rigthIsVisible }) => {
  return (
    <AlaDerecha rigthIsVisible={rigthIsVisible}>
      <div className="MoreLetras Let">
        <div className="Tp">
          <p>My Community</p>
        </div>
        <div className="La">
          <p className="Bolita Uno"></p>
          <p>UI/UX Community</p>
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
        <div className="La">
          <p className="Bolita Cuatro"></p>
          <p>Semaran computer...</p>
        </div>
      </div>

      <div className="MoreLetras">
        <div className="Tp">
          <p>Similar Community</p>
        </div>
        <div className="La">
          <p className="Bolita Cinco"></p>
          <p>UI/UX Community</p>
          <div className="For">4</div>
        </div>
        <div className="La">
          <p className="Bolita Seis"></p>
          <p>Sambat coding</p>
        </div>
        <div className="La">
          <p className="Bolita Siete"></p>
          <p>AndroidDev indo</p>
        </div>
      </div>

      <div className="Letras">
        <p className="Thep">Friends(354 Online)</p>
        <div className="All">
          <div className="Gente">
            <img src={perfil} alt="" className="perfil-img" />
            <p></p>
          </div>
          <div className="TName">
            <div className="Name">
              <p>LiLy Ackerman</p>
              <p>
                <AiFillCheckCircle className="Cir" />
              </p>
            </div>
            <p className="Arroba">@JissoSaft</p>
          </div>
          <div>
            <BiMessageAlt className="Msj" />
          </div>
        </div>

        <div className="All">
          <div className="Gente">
            <img src={perfil} alt="" className="perfil-img" />
            <p></p>
          </div>
          <div className="TName">
            <div className="Name">
              <p>Mikasa Rasmi</p>
              <p>
                <AiFillCheckCircle className="Cir" />
              </p>
            </div>
            <p className="Arroba">@JissoSaft</p>
          </div>
          <div>
            <BiMessageAlt className="Msj" />
          </div>
        </div>

        <div className="All">
          <div className="Gente">
            <img src={perfil} alt="" className="perfil-img" />
            <p></p>
          </div>
          <div className="TName">
            <div className="Name">
              <p>Anee Brown</p>
              <p>
                <AiFillCheckCircle className="Cir" />
              </p>
            </div>
            <p className="Arroba">@JissoSaft</p>
          </div>
          <div>
            <BiMessageAlt className="Msj" />
          </div>
        </div>

        <div className="All">
          <div className="Gente">
            <img src={perfil} alt="" className="perfil-img" />
            <p></p>
          </div>
          <div className="TName">
            <div className="Name">
              <p>Historia Wall</p>
              <p>
                <AiFillCheckCircle className="Cir" />
              </p>
            </div>
            <p className="Arroba">@JissoSaft</p>
          </div>
          <div>
            <BiMessageAlt className="Msj" />
          </div>
        </div>
      </div>
    </AlaDerecha>
  );
};

export default Derecha;
