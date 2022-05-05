
import { ReactNode } from "react";
import styled from "@emotion/styled";
import HeaderLayout from "./Header/header";
import NavigationLayout from "./Navigation/navigation";
import BannerLayout from "./Banner/banner";
import { useRouter } from "next/router";

const Body = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  background-color:#F2F0EB;
`;

interface LayOutPageProps {
  children: ReactNode;
}

const HIDDEN = ["/Login" , "/SignUp"];

export default function LayOutPage(props: LayOutPageProps) {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);
  return (
    <>
      {!isHidden &&
      <>
      <HeaderLayout />
      <BannerLayout />
      <NavigationLayout />
      </>
    }
      <Body>{props.children}</Body>
    </>
  );
}
