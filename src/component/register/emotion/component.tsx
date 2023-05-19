/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WrapperProps } from "../../../App";
import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Require } from "../../emotion/component";

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

export const TextBox = () => {
  return (
    <div
      css={css`
        font-family: "Pretendard-Regular";
        letter-spacing: -0.03em;
        line-height: 1.5em;
        padding: 0;
        padding-left: 1em;
        padding-bottom: 1em;
        padding-right: 1em;
        padding-top: 1em;
        width: 46.88vw;
        height: 15em;
        border: solid;
        border-radius: 1.07em;
        border-color: #e6e8ea;
        border-width: 0.0714em;
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 14px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 14px;
        }
        box-sizing: border-box;
        white-space: pre-wrap;
        text-align: left;

        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 20px; /* 스크롤바의 너비 */
        }

        &::-webkit-scrollbar-thumb {
          height: 40%;
          min-height: 50px;

          border-radius: 10px;
          border: 8px solid white;
          background-color: #ddd;
        }
        &::-webkit-scrollbar-track {
          margin-block: 8px;
        }
      `}
    >
      {text}
    </div>
  );
};

export interface InputType {
  type?: string;
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;
  maxLength?: number;
  name?: string;
  tabIndex?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
}

export const InputBox = (props: InputType) => {
  return (
    <input
      css={css`
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 13px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 14.5px;
        }
        font-family: "Pretendard-Regular";
        letter-spacing: -0.03em;
        padding: 0;
        padding-left: 1em;
        width: 46.88vw; // 900px;
        height: 3.7em; // 51.8px
        border: solid;
        border-radius: 0.614em; // 0.8596px;
        border-color: #e6e8ea;
        border-width: 0.0614em; // 1px
        box-sizing: border-box;
        transition: 0.2s all;
        outline-color: #4f85e8;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        &:focus {
          outline-color: #4f85e8;

          &:hover {
            box-shadow: none;
          }
          // box-shadow: inset 0 0 0 2px #4F85E8;
        }

        &:hover {
          box-shadow: inset 0 0 0 2px #90c2ff;
        }

        &::placeholder {
          font-family: "Pretendard-Regular";
          color: #8b95a1;
          margin-left: 0.4em;
        }
      `}
      {...props}
      {...props.register}
      maxLength={props.maxLength}
      tabIndex={props.tabIndex}
    />
  );
};

// 사용자가 잘못된 입력을 했을 때 나타내주는 컴포넌트
export const ErrorDescription = ({ children }: any) => {
  return (
    <span
      css={css`
        position: absolute;
        font-family: "Pretendard-Regular";
        letter-spacing: -0.03em;
        font-size: 13px;
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 13px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 13px;
        }
        margin-top: 10.2em;
        margin-left: 0.5em;
        color: red;
      `}
    >
      {children}
    </span>
  );
};

export const SubmitButton = (props: ButtonType) => {
  return (
    <button
      type="submit"
      css={css`
        font-family: "Pretendard-Bold";
        letter-spacing: -0.03em;
        @media (max-width: 768px) {
          font-size: 6px;
          border-radius: 4px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 11.5px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 15.5px;
        }
        width: 46.88vw;
        height: 3.5em;
        border: none;
        border-radius: 8px;
        color: white;
        background-color: #4f85e8;
        transition: 0.5s all;

        ${props.disabled
          ? css`
              cursor: auto;
              filter: grayscale(100%);
              background-color: #828282;
            `
          : css`
              cursor: pointer;
              &:hover {
                opacity: 80%;
              }
            `}
      `}
      {...props}
    >
      {props.children}
    </button>
  );
};

// React-hook-form > typeFiledError 적용 필요
export interface ButtonType {
  name?: string;
  children?: React.ReactNode;
  disabled?: boolean | any;
  onClick?: () => void;
  alt?: string;
}

export const EmailButton = (props: ButtonType) => {
  return (
    <button
      css={css`
        font-family: "Pretendard-Bold";
        letter-spacing: -0.03em;
        @media (max-width: 768px) {
          font-size: 6px;
          border-radius: 4px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 11.5px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 15.5px;
        }
        width: 15vw;
        height: 3.5em;
        border: 1px solid;
        border-radius: 8px;
        color: white;
        background-color: #4f85e8;
        transition: 0.5s all;

        ${props.disabled
          ? css`
              cursor: auto;
              filter: grayscale(100%);
              background-color: #828282;
            `
          : css`
              cursor: pointer;
              &:hover {
                opacity: 80%;
              }
            `}
      `}
      {...props}
      type="button"
    >
      {props.children}
    </button>
  );
};

// 이메일을 담는 컨테이너
export const EmailBox = (props: any) => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        width: 46.88vw;
        gap: 20px;
        align-items: center;
      `}
    >
      {props.children}
    </div>
  );
};

export interface AgreeType {
  src: string;
  text: string;
  onClick: (event: React.MouseEvent<HTMLImageElement | HTMLDivElement>) => void;
  name: string;
  require?: boolean;
}

// 체크박스 컴포넌트
export const Argree = (props: AgreeType) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 46.88vw;
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 14.5px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 14.5px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <img
          alt={props.name}
          onClick={props.onClick}
          src={props.src}
          css={css`
            width: 1.1em;
            cursor: pointer;
          `}
        />
        <span
          css={css`
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 13px;
            }
            @media all and (min-width: 1100px) and (max-width: 2000px) {
              font-size: 14.5px;
            }
            font-family: "Pretendard-Medium";
            letter-spacing: -0.03em;
            margin-left: 0.4em;
            cursor: pointer;
            color: #333d4b;
          `}
          onClick={props.onClick}
          id={props.name}
        >
          {props.text}
          {props.require && <Require></Require>}
        </span>
      </div>
    </div>
  );
};

// 남은 시간 표시
export const Timer = (props: any) => {
  return (
    <span
      css={css`
        position: absolute;
        left: 65%;
      `}
    >
      {props.children}
    </span>
  );
};

const text = `1. 수집하는 개인정보의 항목
\n  [선택항목]
\n 생년월일, 주소, 자기소개서, 학력사항, 사진, 동영상, 자격사항, 경력사항, 포트폴리오(링크포함), 기술스킬, 경력기술서, 지원 분야, 희망연봉, 직전연봉, 추천인, 지원 경로, 기타 본인이 입력하거나 별도로 첨부한 파일을 업로드하여 수집되는 정형 비정형 정보
\n 2. 개인정보처리의 목적
\n  가) 수집 항목 (필수항목)
\n - 성명(국문), 주민등록번호, 주소, 전화번호(자택, 휴대전화), 사진, 이메일, 나이, 재학정보, 병역사항, 외국어 점수, 가족관계, 재산정도, 수상내역, 사회활동, 타 장학금 수혜현황, 요식업 종사 현황 등 지원 신청서에 기재된 정보 또는 신청자가 제공한 정보
\n  나) 수집 및 이용 목적
\n - 하이트진로 장학생 선발 전형 진행
\n - 하이트진로 장학생과의 연락 및 자격확인
\n - 하이트진로 장학생 자원관리
\n  2. 개인정보 보유 및 이용기간
\n  - 수집·이용 동의일로부터 개인정보의 수집·이용목적을 달성할 때까지
\n  3. 동의거부관리
\n  - 귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실 권리가 있습니다. 다만, 귀하가 개인정보의 수집/이용에 동의를 거부하시는 경우에 장학생 선발 과정에 있어 불이익이 발생할 수 있음을 알려드립니다.
`;
