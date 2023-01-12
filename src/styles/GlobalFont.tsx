import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
    return (
        <Global styles= { css`
        @font-face {
            font-family: 'Pretendard-Regular';
            src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
        }
        @font-face {
            font-family: 'Pretendard-Bold';
            src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
        }
        @font-face {
            font-family: 'Pretendard-Medium';
            src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
        `} />
    )
}

export default GlobalStyles;