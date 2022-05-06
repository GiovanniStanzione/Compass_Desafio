import React from 'react';
import { Container, NumeroReposContainer } from './styles';
import { useNavigate } from "react-router-dom";

function ReposUsuario(props) {

    const history = useNavigate();
    const aoClicar = rota => history(rota);
    const numero = props?.favRepox.length;

    return ( 
        <Container>
            <NumeroReposContainer onClick={() => aoClicar('/repos')}>
                <h1>{props?.repos}</h1>
                <h2>Repositórios</h2>
            </NumeroReposContainer>

            <NumeroReposContainer onClick={() => aoClicar('/reposfav')}>
                <h1>{numero}</h1>
                <h2>Repositórios Favoritos</h2>
            </NumeroReposContainer>
        </Container>
     );
}

export default ReposUsuario;