import { Header } from "../../components/Header";
import { useGit } from "../../hooks/useGit";
import { MdKeyboardArrowRight } from "react-icons/md";
import gitImage from "../../assets/github.svg";

import {
  Container,
  UserProfile,
  UserImg,
  RepoProfile,
  RepoList,
  RepoListItem,
  GitImage,
  ModalContent,
} from "./styles";
import { useEffect } from "react";
import { Shimmer } from "../../components/Shimmer";
import { useState } from "react";
import { useHistory } from "react-router";
import Modal from "react-modal";

import OctoImg from "../../assets/octo.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export function User() {
  const history = useHistory();
  const { user, repositories, clearInfos } = useGit();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
          if(user?.username === undefined) {
              setIsModalOpen(true);
          };

      }, 10000);

      return () => clearTimeout(timer);
  }, [user?.username]);

  function handleCloseModal() {
    setIsModalOpen(false);
    clearInfos();
    history.goBack();
  }

  return (
    <Container>
      <GitImage src={gitImage} alt="Github logo" />
      <Header hasReturnButton />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <ModalContent>
          <img src={OctoImg} alt="Foto do Octopuss do Github" />
          <p>Não encontramos nada por aqui!</p>
          <button onClick={handleCloseModal} type="button">
            Voltar ao início
          </button>
        </ModalContent>
      </Modal>
      {!user?.avatar ? (
        <Shimmer />
      ) : (
        <>
          <UserProfile>
            <UserImg src={user?.avatar} alt="user" />
            <div>
              <h1>{user.username}</h1>
              <p>Descrição do repo</p>
            </div>
          </UserProfile>
          <RepoProfile>
            <div>
              <h2>{user.followers}</h2>
              <br />
              <span>Seguidores</span>
            </div>
            <div>
              <h2>{user.following}</h2>
              <br />
              <span>Seguindo</span>
            </div>
            <div>
              <h2>{user.publicRepos}</h2>
              <br />
              <span>Repositórios Públicos</span>
            </div>
          </RepoProfile>
          <RepoList>
            {repositories.map((repo) => {
              return (
                <RepoListItem key={repo.id}>
                  <div>
                    <h3>{repo.name}</h3>
                    <span>{user.fullname}</span>
                  </div>
                  <a href={repo.html_url}>
                    {" "}
                    <MdKeyboardArrowRight />{" "}
                  </a>
                </RepoListItem>
              );
            })}
          </RepoList>
        </>
      )}
    </Container>
  );
}
