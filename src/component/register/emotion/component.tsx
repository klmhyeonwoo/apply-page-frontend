/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WrapperProps } from "../../../App";
import { ButtonType } from "../../emotion/component";

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

export const SummitButton = (props: ButtonType) => {
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
        width: 46.88vw;
        height: 3.5em;
        border: none;
        border-radius: 8px;
        color: white;
        background-color: #4f85e8;
        transition: 0.5s all;

        cursor: pointer;
        &:hover {
          opacity: 80%;
        }
      `}
      {...props}
    >
      {props.children}
    </button>
  );
};

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
        color: #ddd;
        // background-color: #4f85e8;
        transition: 0.5s all;

        cursor: pointer;
        &:hover {
          opacity: 80%;
        }
      `}
      {...props}
    >
      {props.children}
    </button>
  );
};

export const EmailBox = (props:any) =>{
  return <div css={css`display: flex; margin-top: 20px; width: 46.88vw; gap: 20px;`}>{props.children}</div>

}

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
