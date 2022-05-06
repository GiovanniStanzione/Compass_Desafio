import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './styles';



function ReposFavoritoContainer(props) {
    return ( 
        <Section>
            <Title>Repositórios favoritos de {(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo key={repo?.id}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
     );
}

export default ReposFavoritoContainer;