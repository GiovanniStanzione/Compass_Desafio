import React, { useContext } from 'react';
import { ContainerMain } from '../../components/ContainerMain/styles';
import RepositorioContainer from '../../components/RepositorioContainer/RepositorioContainer';
import { context } from '../../context';

function Repositorio() {

    const contexto = useContext(context);

    return ( 
        <ContainerMain>
            <RepositorioContainer name={contexto.userData?.name} repos={contexto.userRepos} />
        </ContainerMain>
     );
}

export default Repositorio;
