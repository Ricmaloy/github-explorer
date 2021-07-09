import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { useGit } from "../../hooks/useGit";
import gitImage from "../../assets/github.svg";
import { Container, Title, SearchContainer, GitImage } from "./styles";

export function Home() {
  const [userInput, setUserInput] = useState("");
  const history = useHistory();

  const { searchUser, searchUserRepos } = useGit();

  async function handleSearch() {
    searchUser(userInput);
    searchUserRepos(userInput);

    history.push(`/${userInput}`);
  }

  return (
    <Container>
      <GitImage src={gitImage} alt="Github logo" />
      <Header />

      <Title>
        Explore repositórios
        <br /> no Github
      </Title>
      <SearchContainer>
        <input
          onChange={(ev) => setUserInput(ev.target.value)}
          type="text"
          placeholder="Digite aqui"
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </SearchContainer>
    </Container>
  );
}
