import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";
import {
  CalendarIcon,
  ChevronLeftIcon,
  CommentIcon,
  GithubIcon,
  LinkIcon,
} from "../../assets";

import * as S from "./styles";

export const PostHeader = () => {
  const { userData } = useContext(UserContext);

  return (
    <S.PostHeaderContainer>
      <S.PostHeaderInformationContainer>
        <S.CardHeader>
          <Link to="/">
            <ChevronLeftIcon color="#3294F8" />
            Voltar
          </Link>
          <Link to="" target="_blank">
            Ver no Github
            <LinkIcon color="#3294F8" />
          </Link>
        </S.CardHeader>
        <h2>JavaScript data types and data structures</h2>
        <S.CardFooter>
          <S.Item>
            <GithubIcon color="#3A536B" />
            {userData?.login}
          </S.Item>
          <S.Item>
            <CalendarIcon color="#3A536B" />
            Há 1 dia
          </S.Item>
          <S.Item>
            <CommentIcon color="#3A536B" />5 comentários
          </S.Item>
        </S.CardFooter>
      </S.PostHeaderInformationContainer>
    </S.PostHeaderContainer>
  );
};
