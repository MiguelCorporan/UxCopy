import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Izquierda from "./components/Izquierda";
import Derecha from "./components/Derecha";
import Medio from "./components/Medio";
import Footer from "./components/Footer";

const Todo = styled.div`
  width: 100%;
  /*  padding-left: 20%; */
  position: relative;
  min-height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;

function App() {
  const [Isvisible, setIsvisible] = useState(false);
  const [rigthIsVisible, setRigthIsVisible] = useState(false);

  return (
    <>
      <Header
        setIsvisible={setIsvisible}
        setRigthIsVisible={setRigthIsVisible}
      />
      <Todo>
        <Izquierda Isvisible={Isvisible} />
        <Medio />
        <Derecha rigthIsVisible={rigthIsVisible} />
      </Todo>
    </>
  );
}

export default App;
