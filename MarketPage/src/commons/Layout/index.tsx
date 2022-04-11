
import { ReactNode } from "react";
import styled from "@emotion/styled";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface LayOutPageProps {
  children: ReactNode;
}

// const HIDDEN = ["/"];

export default function LayOutPage(props: LayOutPageProps) {
  // const router = useRouter();
  // const isHidden = HIDDEN.includes(router.asPath);
  return (
    <>
      {/* <HeaderLayout />
      <NavigationLayout />
      <BannerLayout /> */}
      <Body>{props.children}</Body>
    </>
  );
}
