import { useContext } from "react";

import { PostItem, UserContext } from "../../contexts/UserContext";

import { PostCard } from "../../components/PostCard";
import { Search } from "../../components/Search";
import { UserCard } from "../../components/UserCard";

import * as S from "./styles";

export const Home = () => {
  const { posts } = useContext(UserContext);

  console.log(posts?.items);

  return (
    <S.HomeContainer>
      <UserCard />
      <Search />
      <S.Posts>
        {posts?.items.map((item: PostItem) => (
          <PostCard
            key={item.id}
            title={item.title}
            description={item.body}
            date={item.updated_at}
          />
        ))}
      </S.Posts>
    </S.HomeContainer>
  );
};
