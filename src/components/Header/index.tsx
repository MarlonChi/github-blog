import HeaderImage from "../../assets/bg-header.svg";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={HeaderImage} />
    </S.HeaderContainer>
  );
};
