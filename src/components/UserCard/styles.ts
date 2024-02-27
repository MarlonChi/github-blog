import styled from "styled-components";

export const UserCardContainer = styled.div`
  max-width: 86.4rem;
  width: 100%;
  margin: 0 auto;

  border-radius: 1rem;
  padding: 3.2rem;
  background: ${(props) => props.theme["base-profile"]};

  position: relative;
  top: -90px;

  display: flex;
  gap: 3.2rem;
`;

export const Avatar = styled.div`
  width: 14.8rem;
  height: 14.8rem;

  img {
    border-radius: 8px;
    width: 100%;
  }
`;

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-top: 8px;
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
  margin-top: auto;

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
