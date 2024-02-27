import { NavLink } from "react-router-dom";

import * as S from "./styles";

export const PostCard = () => {
  return (
    <S.PostCard>
      <S.PostTitle>
        <NavLink to="/post">
          <h3>JavaScript data types and data structures</h3>
        </NavLink>
        <span>Há 1 dia</span>
      </S.PostTitle>
      <S.PostDescription>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript data types and data
        structures
      </S.PostDescription>
    </S.PostCard>
  );
};
