import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { PostHeader } from "../../components/PostHeader";

import * as S from "./styles";

interface Post {
  body: string;
}

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  const getPost = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/MarlonChi/lorem-blog/issues/${id}`
      );
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching GitHub issue:", error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <S.PostContainer>
      <PostHeader post={post} />

      <S.PostDescription>{post?.body}</S.PostDescription>
    </S.PostContainer>
  );
};
