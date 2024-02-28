import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import * as S from "./styles";

export const Search = () => {
  const { posts, handleSearch } = useContext(UserContext);

  return (
    <S.SearchForm>
      <S.SearchHeader>
        <h3>Publicações</h3>
        <span>{posts?.total_count} publicações</span>
      </S.SearchHeader>
      <S.SearchInput
        type="text"
        placeholder="Buscar Conteúdo"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </S.SearchForm>
  );
};
