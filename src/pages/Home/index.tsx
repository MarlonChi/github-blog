import { PostCard } from "../../components/PostCard";
import { Search } from "../../components/Search";
import { UserCard } from "../../components/UserCard";

import * as S from "./styles";

export const Home = () => {
  return (
    <S.HomeContainer>
      <UserCard />
      <Search />
      <S.Posts>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </S.Posts>
    </S.HomeContainer>
  );
};
