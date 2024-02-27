import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.8rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-size: 1.4rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const SearchInput = styled.input`
  margin-top: 1.2rem;
  border: 0;
  border-radius: 6px;
  padding: 12px 18px;
  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;
