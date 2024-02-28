import styled from "styled-components";

export const PostHeaderContainer = styled.div`
  border-radius: 1rem;
  padding: 3.2rem;
  background: ${(props) => props.theme["base-profile"]};

  position: relative;
  top: -90px;
`;

export const PostHeaderInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-top: 8px;
    font-size: 2.4rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    font-size: 2.4rem;
    line-height: 130%;
    font-weight: bold;
    color: ${(props) => props.theme["base-title"]};
  }

  a {
    font-size: 1.2rem;
    line-height: 130%;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const CardFooter = styled.div`
  margin-top: 8px;

  display: flex;
  gap: 2.4rem;
`;

export const Item = styled.span`
  line-height: 160%;
  color: ${(props) => props.theme["base-subtitle"]};

  display: flex;
  align-items: center;
  gap: 8px;
`;
