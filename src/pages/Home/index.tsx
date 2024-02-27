import { Search } from "../../components/Search";
import { UserCard } from "../../components/UserCard";

import * as S from "./styles";

export const Home = () => {
  return (
    <S.HomeContainer>
      <UserCard />
      <Search />
    </S.HomeContainer>
  );
};
