/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WrapperProps } from "../../../App";

export const Title = ({ text }: WrapperProps) => {
  return (
    <h1
      css={css`
        font-family: "Pretendard-Medium";
        letter-spacing: -0.03em;
        width: 46.88vw;
        font-size: 36px;
        margin-top: 150px;
      `}
    >
      {text}
    </h1>
  );
};
export const SubTitle = ({ text }: WrapperProps) => {
  return (
    <h3
      css={css`
        font-family: "Pretendard-Medium";
        letter-spacing: -0.03em;
        width: 46.88vw;
        font-size: 18px;
      `}
    >
      {text}
    </h3>
  );
};
