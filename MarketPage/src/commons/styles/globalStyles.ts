import { css } from "@emotion/react";

export const globalStyles = css`
html, body {
  width:100%;
  background-color: #F2F0EB;
}
button {
  border: none;
  border-radius: 15px;
  background: #F2522E;
  color: #F2F0EB;
}
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 10px;
  }
  @font-face {
    font-family: "myfont";
    src: url("/font/scifibit.ttf");
  }
`;
