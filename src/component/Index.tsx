/** @jsxImportSource @emotion/react */
import React from 'react'
import { WrapperProps } from '../App'
import { css } from '@emotion/react'
import banner from '../images/banner.png'
import loading from '../images/loading.gif';

const Section = ({ children }: WrapperProps) => {
    return (
        <section css={css`
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            max-width: 75em;
            width: 100%;
            background-color: white;

            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 5em;
            row-gap: 1.1em;
        `}>
            {children}
        </section>
    )
}

const InputTitle = ({ children }: WrapperProps) => {
    return (
        <p css={css`
            font-family: 'Pretendard-Bold';
            letter-spacing: -0.03em;
            font-size: 16px;

            display: flex;
            align-items: center;
        `}>
            {children}
        </p>
    )
}

const Article = ({ children }: WrapperProps) => {
    return (
        <article css={css`
            display: flex;
            flex-direction: column;
            text-align: left;
            justify-content: center;
        `}>
            {children}
        </article>
    )
}

const Button = (props: WrapperProps) => {
    return (
        <button css={css`
            font-family: 'Pretendard-Bold';
            letter-spacing: -0.03em;
            font-size: 16px;
            width: 15em;
            height: 3.5em;
            border: none;
            border-radius: 7px;
            color: white;
            cursor: pointer;
            transition: 0.5s all;
            ${props.name === "임시저장" && `background-color : #262626;`}
            ${props.name === "제출하기" && `background-color : #ff7828;`}

            &:hover {
                opacity: 80%;
            }
        `}{...props}>
            {props.children}
        </button>
    )
}

const ButtonBox = () => {
    return (
        <div css={css`
            display: flex;
            column-gap: 1em;
            margin-top: 3em;
        `}>
            <Button name="임시저장">임시저장</Button>
            <Button name="제출하기">제출하기</Button>
        </div>
    )
}

interface InputType {
    type?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    maxlength?: string;
}

const TextAreaBox = (props: InputType) => {
    return (
        <textarea css={css`
        font-family: 'Pretendard-Medium';
        letter-spacing: -0.03em;
        line-height: 1.5em;
        padding: 0;
        padding-left: 1em;
        padding-bottom: 1em;
        padding-right: 1em;
        padding-top: 1em;
        width: 62.5em;
        height: 15em;
        border: solid;
        border-radius: 15px;
        border-color: #707070;
        border-width: 1px;
        font-size: 16px;
        box-sizing: border-box;
        resize: none;
        
        &:focus {
            outline-color: #ff7828;
        }

        &::placeholder {
            font-family: 'Pretendard-Light';
        }
        `} maxlength="1000" {...props} />
    )
}

const UploadButton = () => {
    return (
        <div css={css`
            position: absolute;
            font-family: 'Pretendard-Bold';
            letter-spacing: -0.03em;
            font-size: 15px;
            border: none;
            border-radius: 7px;
            width: 5.8em;
            height: 2em;       
            background-color: #ff7828;     
            margin-left: 59em;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
            transition: 0.5s all;

            &:hover {
                opacity: 80%;
            }
        `}>
            <span css={css`
                color: white;
            `}>업로드</span>
        </div>
    )
}

const InputBox = (props: InputType) => {
    return (
        <input css={css`
        font-family: 'Pretendard-Medium';
        letter-spacing: -0.03em;
        padding: 0;
        padding-left: 1em;
        width: 62.5em;
        height: 3.7em;
        border: solid;
        border-radius: 15px;
        border-color: #707070;
        border-width: 1px;
        font-size: 16px;
        box-sizing: border-box;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &:focus {
            outline-color: #ff7828;
        }

        &::placeholder {
            font-family: 'Pretendard-Light';
        }
        `}{...props} />
    )
}

// 로딩중을 표시하는 컴포넌트
const Loading = () => {
    return (
        <img alt="로딩 이미지" src={loading} css={css`
            width: 12em;
        `} />
    )
}

const Require = () => {
    return (
        <div css={css`
            margin-left: 0.4em;
        `}>
            <span css={css`
                font-family: 'Pretendard-Medium';
                letter-spacing: -0.03em;
                font-size: 15px;
                color: #ff0000;
            `}>* </span>
        </div>
    )
}

const Banner = () => {
    return (
        <img alt="배너 이미지" src={banner} css={css`
            margin-top: 40px;
            max-width: 1000px;
        `} />
    )
}

export default function index() {
    return (
        <Section>
            <Banner />
            {/* <Article>
                <InputTitle>멋쟁이사자처럼 강남대학교 구성원 모집의 기본이 되는 정보이므로 정확하게 입력해 주시기 바랍니다.</InputTitle>
                <InputTitle>서류접수 제출 이전에는 자유롭게 지원서 수정 및 접수 취소가 가능합니다.</InputTitle>
                <InputTitle>서류접수 마감 이후에는 지원서 수정 및 접수 취소가 불가능합니다.</InputTitle>
                <InputTitle>서류접수 마감 직전에는 지원서 접수가 원활하지 않을 수 있으므로 여유롭게 제출 부탁 드립니다.</InputTitle>
            </Article> */}
            <Article>
                <InputTitle>이름 <Require /> </InputTitle>
                <InputBox type="text" placeholder="이름을 입력해주세요" />
            </Article>
            <Article>
                <InputTitle>학번 <Require /> </InputTitle>
                <InputBox type="number" placeholder="학번을 입력해주세요" />
            </Article>
            <Article>
                <InputTitle>이메일 <Require /> </InputTitle>
                <InputBox type="text" placeholder="이메일을 입력해주세요" />
            </Article>
            <Article>
                <InputTitle>연락처 <Require /> </InputTitle>
                <InputBox type="number" placeholder="연락 가능한 번호를 입력해주세요" />
            </Article>
            <Article>
                <InputTitle>멋쟁이사자처럼에 지원을 하게 된 동기를 알려주세요 (최대 1000자)<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" />
            </Article>
            <Article>
                <InputTitle>본인의 장단점은 무엇이고 이 장단점이 어떻게 활동될 수 있는지 서술해주세요 (최대 1000자)<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" />
            </Article>
            <Article>
                <InputTitle>가장 열정적으로 했었던 일과 이를 통해서 이룬 것에 대해 느낀점 중심으로 서술해주세요 (최대 1000자)<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" />
            </Article>
            <Article>
                <InputTitle>갈등이 발생했던 구체적인 상황과 이를 극복하기 위해 노력했던 사례를 느낀 점 중심으로 서술해주세요 (최대 1000자)<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" />
            </Article>
            <Article>
                <InputTitle>자신이 멋쟁이사자처럼에 들어와 실현시키고 싶은 IT 서비스에 대해서 설명을 해주세요 (최대 1000자)<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" />
            </Article>
            <Article>
                <InputTitle>포트폴리오 링크 첨부</InputTitle>
                <InputBox type="text" placeholder="포트폴리오 링크를 첨부해주세요" />
            </Article>
            <Article>
                <InputTitle>포트폴리오 파일 첨부</InputTitle>
                <Article>
                    <InputBox type="text" placeholder="파일형식 : JPG, PNG, PDF, PPT, PPTX, HWP, HWPX" value="" disabled={true} />
                    <UploadButton />
                </Article>
            </Article>
            <ButtonBox />
        </Section>
    )
}
