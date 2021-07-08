import { Header } from '../../components/Header';
import { useGit } from '../../hooks/useGit';
import { MdKeyboardArrowRight } from 'react-icons/md';
import gitImage from '../../assets/github.svg';

import { Container, UserProfile, UserImg, RepoProfile, RepoList, RepoListItem, GitImage } from './styles';

export function User() {
    const {user, repositories} = useGit();

    return (
        <Container>
            <GitImage src={gitImage} alt="Github logo" />
            <Header hasReturnButton />
            {
               !user?.avatar ? (
                   <p>carregando....</p>
                ) : (
                    <>
                    <UserProfile>
                        <UserImg src={user?.avatar} alt="user " />
                        <div>
                            <h1>{user.username}</h1>
                            <p>Descrição do repo</p>
                        </div>
                    </UserProfile>
                    <RepoProfile>
                        <div><h2>{user.followers}</h2><br/><span>Seguidores</span></div>
                        <div><h2>{user.following}</h2><br/><span>Seguindo</span></div>
                        <div><h2>{user.publicRepos}</h2><br/><p>Repositórios Públicos</p></div>
                    </RepoProfile>
                    <RepoList>
                        {
                            repositories.map(repo => {
                                return(
                                    <RepoListItem key={repo.id} >
                                        <div>
                                            <h3>{repo.name}</h3>
                                            <span>{user.fullname}</span>
                                        </div>
                                        <a href={repo.html_url}> <MdKeyboardArrowRight/> </a>
                                    </RepoListItem>
                                )
                            })
                        }
                    </RepoList>
                    </>
                )
            }
        </Container>
    )
}