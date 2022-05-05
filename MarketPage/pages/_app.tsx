import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../src/commons/Layout/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RecoilRoot } from 'recoil';
import 'antd/dist/antd.css'
import ApolloSetting from "../src/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
 

  return (
    <RecoilRoot>
    <ApolloSetting>
      <Global styles={globalStyles}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
