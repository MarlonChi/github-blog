import * as S from "./styles";

export const Search = () => {
  return (
    <S.SearchForm>
      <S.SearchHeader>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </S.SearchHeader>
      <S.SearchInput type="text" placeholder="Buscar Conteúdo" />
    </S.SearchForm>
  );
};
