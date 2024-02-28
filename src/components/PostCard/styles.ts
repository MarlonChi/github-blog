import styled from "styled-components";

export const PostCard = styled.div`
  background: ${(props) => props.theme["base-post"]};
  padding: 3.2rem;
  border-radius: 10px;
`;

export const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;

  h3 {
    font-size: 2rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-title"]};

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    text-transform: capitalize;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const PostDescription = styled.p`
  margin-top: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
