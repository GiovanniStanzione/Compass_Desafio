import React, { useState, useContext } from "react";
import {
  FormularioBotaoBusca,
  FormularioDivInput,
  FormularioInput,
  FormularioSection,
} from "./styles";
import { FiArrowRight } from 'react-icons/fi';
import { api } from "../../api/api";
import {context} from "../../context";
import { useNavigate } from "react-router-dom";

function FormularioPesquisa() {
  const contexto = useContext(context);
  const [pesquisa, setPesquisa] = useState("");

  const nav = useNavigate();
  const aoNav = rota => nav(rota);

  async function pesquisaDados(){
    try{
        const resposta = await api.get(`/${pesquisa}`);
        const repos = await api.get(`/${pesquisa}/repos`);
        const favRepos = await api.get(`/${pesquisa}/starred`);
        contexto.setUserData(resposta.data);
        contexto.setUserRepos(repos.data);
        //console.log(repos.data)
        //console.log(favRepos.data)
        contexto.setUserFavRepos(favRepos.data);
    }catch(erro){
      console.log(erro);
      aoNav('*');
    }
  };

  return (
    <FormularioSection>
      <FormularioDivInput>
          <FormularioInput
            type="text"
            placeholder="nome de usuario"
            onChange={(evento) => {
              setPesquisa(evento.target.value);
              aoNav('/');
            }}
          />
          <FormularioBotaoBusca onClick={pesquisaDados}> <FiArrowRight size={15} /> </FormularioBotaoBusca>
      </FormularioDivInput>
    </FormularioSection>
  );
}

export default FormularioPesquisa;
