import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  padding: 0.4rem;
  text-align: center;
  font-size: 1.1rem;
`;

const Footer = () => {
  return <FooterStyle>&copy; Miguel Corporan</FooterStyle>;
};

export default Footer;
