import { useContext } from "react";
import { GithubContext } from "../contexts/githubContext";

interface UserInfosProps {
    username: string,
    fullname: string,
    avatar:  string,
    followers: number,
    following: number,
    publicRepos: number,
    url: string
}

interface RepositorieProps {
    id: number,
    html_url: string,
    name: string,
}

interface GithubContextProps {
    user: UserInfosProps | undefined;
    repositories: RepositorieProps[];
    searchUser: (user: string) => void;
    searchUserRepos: (user: string) => void;
    clearInfos: () => void;
}


function useGit(): GithubContextProps {
    const context = useContext(GithubContext);

    return context;
}

export { useGit }
