import { ApolloClient, ApolloLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../store";
import { ReactNode } from "react";

interface IApolloSetting{
    children: ReactNode
}

export default function ApolloSetting(props:IApolloSetting){
    const [accessToken] = useRecoilState(accessTokenState);
    const uploadLink = createUploadLink({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
        headers:{Authorization : `Bearer ${accessToken}`}
      });
      const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(),
      });
    return(<ApolloProvider client={client}>{props.children}</ApolloProvider>)
}