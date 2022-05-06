import React from "react";

//import { Link } from "react-router-dom";
import FormularioPesquisa from "../FormularioPesquisa";
import { Container, HeaderTitulo } from "./styles";

function Header() {
  return (
    <Container>
              <HeaderTitulo>Github - Pesquisa de Usuario</HeaderTitulo>
              <FormularioPesquisa />
    </Container>
  );
}

export default Header;
