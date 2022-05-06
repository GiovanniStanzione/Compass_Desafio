import React from "react";
import {
  Container,
  Nome,
  Usuario,
  Bio
} from "./styles";

function UsuarioDetalhes(props) {
  return (
    <Container>
        <Nome>{props?.nome}</Nome>
        <Usuario>{props?.usuarioLogin}</Usuario>
        <Bio>{props?.bio}</Bio>
    </Container>
  );
}

export default UsuarioDetalhes;
