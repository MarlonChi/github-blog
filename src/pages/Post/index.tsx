import { PostHeader } from "../../components/PostHeader";
import * as S from "./styles";

export const Post = () => {
  return (
    <S.PostContainer>
      <PostHeader />

      <S.PostDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget
        nisi suscipit, sollicitudin risus vel, ultrices metus. Suspendisse id mi
        ligula. Integer ullamcorper justo et elit sodales, vitae venenatis felis
        aliquet. Aenean interdum elementum enim, id placerat sapien elementum
        hendrerit. Phasellus vitae convallis lectus. Donec neque libero,
        consequat luctus tincidunt sed, maximus sit amet urna. Morbi magna
        neque, porttitor non tortor id, cursus tempus sem. Phasellus sodales
        nulla ac sapien imperdiet vestibulum eu in ex. Nullam erat libero,
        faucibus non nibh sit amet, tincidunt vehicula nisi. In posuere finibus
        felis, ac porttitor libero tempor eget. Suspendisse tincidunt efficitur
        metus nec consectetur.
      </S.PostDescription>
    </S.PostContainer>
  );
};
