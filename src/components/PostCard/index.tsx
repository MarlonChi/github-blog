import { NavLink } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import * as S from "./styles";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
}

export const PostCard = ({ title, description, date }: PostCardProps) => {
  const dateString = date;
  const parsedDate = new Date(dateString);

  const formattedDate = formatDistanceToNow(parsedDate, {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <S.PostCard>
      <S.PostTitle>
        <NavLink to="/post">
          <h3>{title}</h3>
        </NavLink>
        <span>{formattedDate}</span>
      </S.PostTitle>
      <S.PostDescription>{description}</S.PostDescription>
    </S.PostCard>
  );
};
