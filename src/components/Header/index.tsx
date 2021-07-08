import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useGit } from "../../hooks/useGit";

import { MdKeyboardArrowLeft } from 'react-icons/md';

import { HeaderContainer } from './styles';

interface HeaderProps {
  hasReturnButton?: boolean;
}

export function Header({ hasReturnButton = false }: HeaderProps) {
  const history =  useHistory();
  const { clearInfos } = useGit();

  function handleGoBack() {
    clearInfos();
    history.goBack();
  }

  return (
    <HeaderContainer>
      <img src={logo} alt="marca da aplicação" />

      {hasReturnButton && <button onClick={handleGoBack} type="button"> <MdKeyboardArrowLeft/> voltar</button>}
    </HeaderContainer>
  );
}
