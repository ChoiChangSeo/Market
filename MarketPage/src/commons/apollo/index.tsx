import { ApolloClient, ApolloLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../store";
import { ReactNode, useEffect } from "react";

interface IApolloSetting{
    children: ReactNode
}

export default function ApolloSetting(props:IApolloSetting){
    const [accessToken,setAccessToken] = useRecoilState(accessTokenState);
    const [,setUserInfo] = useRecoilState(userInfoState)

    useEffect(() => {
      const localstorageToken = localStorage.getItem("accessToken");
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
      setUserInfo(userInfo);
      setAccessToken(localstorageToken || "");
    }, []);
    
    const uploadLink = createUploadLink({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
        headers:{authorization : `Bearer ${accessToken}`}
      });
      const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(),
      });
    return(<ApolloProvider client={client}>{props.children}</ApolloProvider>)
}