import React from 'react';
import { useContext } from 'react';
import { ContainerMain } from '../../components/ContainerMain/styles';
import ReposFavoritoContainer from '../../components/RepositorioContainer/ReposFavoritoContainer';
import { context } from '../../context';

function RepositorioFavorito() {

    const contexto = useContext(context);

    return ( 
        <ContainerMain>
            <ReposFavoritoContainer name={contexto.userData?.name} repos={contexto.userFavRepos} />
        </ContainerMain>
     );
}

export default RepositorioFavorito;