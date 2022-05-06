import React from "react";
import { Container, ProfilePicture } from "./styles";

function UsuarioFoto(props) {
  return (
    <Container>
      <ProfilePicture src={props.url} alt={props.descricaoImg} />
    </Container>
  );
}

export default UsuarioFoto;
