import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import {
  CalendarIcon,
  ChevronLeftIcon,
  CommentIcon,
  GithubIcon,
  LinkIcon,
} from "../../assets";

import * as S from "./styles";

interface Post {
  html_url: string;
  title: string;
  user: {
    login: string;
  };
  updated_at: string;
  comments: number;
}
interface PostHeaderProps {
  post: Post;
}

export const PostHeader = ({ post }: PostHeaderProps) => {
  console.log("post: ", post);

  if (!post) {
    return <p>Carregando...</p>;
  }

  const dateString = post.updated_at;
  const parsedDate = new Date(dateString);

  const formattedDate = formatDistanceToNow(parsedDate, {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <S.PostHeaderContainer>
      <S.PostHeaderInformationContainer>
        <S.CardHeader>
          <Link to="/">
            <ChevronLeftIcon color="#3294F8" />
            Voltar
          </Link>
          <Link to={post.html_url} target="_blank">
            Ver no Github
            <LinkIcon color="#3294F8" />
          </Link>
        </S.CardHeader>
        <h2>{post.title}</h2>
        <S.CardFooter>
          <S.Item>
            <GithubIcon color="#3A536B" />
            {post?.user?.login}
          </S.Item>
          <S.Item>
            <CalendarIcon color="#3A536B" />
            {formattedDate}
          </S.Item>
          <S.Item>
            <CommentIcon color="#3A536B" />
            {post.comments} comentários
          </S.Item>
        </S.CardFooter>
      </S.PostHeaderInformationContainer>
    </S.PostHeaderContainer>
  );
};
