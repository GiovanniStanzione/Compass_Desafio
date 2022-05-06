import React, { useContext } from "react";
//import FormularioPesquisa from "../components/FormularioPesquisa";
import UsuarioFoto from "../components/UsuarioFoto";
import ContainerUsuario from "../components/ContainerUsuario";
import UsuarioDetalhes from "../components/UsuarioDetalhes";
//import { Container } from "./styles";
import { context } from "../context";
import ReposUsuario from "../components/ReposUsuario/ReposUsuario";
import { ContainerMain } from "../components/ContainerMain/styles";
function Home() {
  const contexto = useContext(context);

  return (
    <ContainerMain>
      <ContainerUsuario>
        {contexto.userData?.name ?
          <React.Fragment>
            <UsuarioFoto
              url={contexto.userData?.avatar_url}
              descricaoImg={contexto.userData?.login}
            />
            <UsuarioDetalhes
              nome={contexto.userData?.name}
              usuarioLogin={contexto.userData?.login}
              bio={contexto.userData?.bio}
            />
            <ReposUsuario repos={contexto.userData?.public_repos} favRepox={contexto.userFavRepos}/>
          </React.Fragment>
        :undefined }
      </ContainerUsuario>
    </ContainerMain>
  );
}

export default Home;
