/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

export const Button = ({ position, buttonState, onClick }: any) => {
  return (
    <button
      css={css`
        position: relative;
        width: 6em;
        height: 2em;

        border-radius: 0.4em;
        border: none;

        ${buttonState === position &&
        css`
          color: white;
          background-color: black;
        `}
      `}
      onClick={onClick}
    >
      {position}
    </button>
  );
};
