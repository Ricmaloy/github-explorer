import { FC } from "react";
import { useState } from "react";
import { createContext } from "react";

interface UserInfosProps {
  username: string;
  fullname: string;
  avatar: string;
  followers: number;
  following: number;
  publicRepos: number;
  url: string;
}

interface RepositorieProps {
  id: number;
  html_url: string;
  name: string;
}

interface GithubContextProps {
  user: UserInfosProps | undefined;
  repositories: RepositorieProps[];
  searchUser: (user: string) => Promise<void>;
  searchUserRepos: (user: string) => Promise<void>;
  clearInfos: () => void;
}

const GithubContext = createContext<GithubContextProps>(
  {} as GithubContextProps
);

const GithubProvider: FC = ({ children }) => {
  const [user, setUser] = useState<UserInfosProps>();
  const [repositories, setRepositories] = useState<RepositorieProps[]>([]);

  const searchUser = async (user: string) => {
    try {
      const userData = await fetch(`https://api.github.com/users/${user}`).then(
        (response) => response.json()
      );

      const formatedData: UserInfosProps = {
        username: userData.login,
        fullname: userData.name,
        url: userData.html_url,
        avatar: userData.avatar_url,
        followers: userData.followers,
        following: userData.following,
        publicRepos: userData.public_repos,
      };

      setUser(formatedData);
    } catch {
      setUser(undefined);
    }
  };

  const searchUserRepos = async (user: string) => {
    try {
      const userReposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      ).then((response) => response.json());

      setRepositories(userReposData);
    } catch {
      setRepositories([{ html_url: "none", id: 15, name: "jow" }]);
    }
  };

  const clearInfos = () => {
    setUser(undefined);
    setRepositories([]);
  };

  return (
    <GithubContext.Provider
      value={{ user, repositories, clearInfos, searchUser, searchUserRepos }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
