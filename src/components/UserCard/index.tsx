import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

import {
  BuildingIcon,
  GithubIcon,
  LinkIcon,
  UserGroupIcon,
} from "../../assets";

import * as S from "./styles";

export const UserCard = () => {
  const { userData } = useContext(UserContext);

  if (!userData) {
    return <p>Carregando...</p>;
  }

  console.log("userData: ", userData);

  return (
    <S.UserCardContainer>
      <S.Avatar>
        <img src={userData.avatar_url} alt={userData.name} />
      </S.Avatar>
      <S.UserInformationContainer>
        <S.CardHeader>
          <h2>{userData.name}</h2>
          <Link to={userData.html_url} target="_blank">
            Github
            <LinkIcon color="#3294F8" />
          </Link>
        </S.CardHeader>
        <p>{userData.bio}</p>
        <S.CardFooter>
          <S.Item>
            <GithubIcon color="#3A536B" />
            {userData.login}
          </S.Item>
          <S.Item>
            <BuildingIcon color="#3A536B" />
            {userData.company}
          </S.Item>
          <S.Item>
            <UserGroupIcon color="#3A536B" />
            {userData.followers} seguidores
          </S.Item>
        </S.CardFooter>
      </S.UserInformationContainer>
    </S.UserCardContainer>
  );
};
