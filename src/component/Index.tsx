/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useState } from 'react'
import { WrapperProps } from '../App'
import banner from '../images/banner.png'
import loading from '../images/loading.gif';
import axios from 'axios';
import checkBox from '../images/checkBox.svg';
import checkedBox from '../images/checkedBox.svg';
import { useMemo } from 'react';
import { css, keyframes } from "@emotion/react";
import { fadeLeft, fadeUp } from '../styles/Keyframes';

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
            row-gap: 1.2em;
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
            animation: ${fadeUp} 2s ease-in-out;
        `}>
            {children}
        </article>
    )
}

interface ButtonType {
    name: string;
    children: React.ReactNode;
    disabled: boolean;
}

const Button = (props: ButtonType) => {
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
            transition: 0.5s all;
            ${props.name === "임시저장" && `background-color : #262626;`}
            ${props.name === "제출하기" && `background-color : #ff7828;`}
            ${props.disabled ?
                css`
                    cursor: auto;
                    filter: grayscale(100%);
                ` :
                css`
                    cursor: pointer;
                    &:hover {
                        opacity: 80%;
                    }
                    `
            }
        `} {...props}>
            {props.children}
        </button>
    )
}

const ButtonBox = ({ children }: WrapperProps) => {
    return (
        <div css={css`
            display: flex;
            column-gap: 1em;
            margin-top: 3em;
            animation: ${fadeUp} 3s ease-in-out;
        `}>
            {children}
        </div>
    )
}

interface InputType {
    type?: string;
    placeholder?: string;
    value?: string | number;
    disabled?: boolean;
    maxlength?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

// const TextAreaBox = (props: InputType) => {
//     return (
//         <textarea css={css`
//         font-family: 'Pretendard-Medium';
//         letter-spacing: -0.03em;
//         line-height: 1.5em;
//         padding: 0;
//         padding-left: 1em;
//         padding-bottom: 1em;
//         padding-right: 1em;
//         padding-top: 1em;
//         width: 62.5em;
//         height: 15em;
//         border: solid;
//         border-radius: 15px;
//         border-color: #707070;
//         border-width: 1px;
//         font-size: 16px;
//         box-sizing: border-box;
//         resize: none;

//         &:focus {
//             outline-color: #ff7828;
//         }

//         &::placeholder {
//             font-family: 'Pretendard-Light';
//             margin-left: 0.4em;
//         }
//         `} maxlength="1000" {...props} />
//     )
// }

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
            margin-left: 0.4em;
        }
        `}{...props} />
    )
}

interface PositionType {
    name: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    state: string;
}

const Position = (props: PositionType) => {
    return (
        <button css={css`
            font-family: 'Pretendard-Medium';
            letter-spacing: -0.03em;
            font-size: 16px;
            height: 3.7em;
            border-radius: 50px;
            border: solid;
            border-width: 1px;
            border-color: #707070;
            transition: 0.5s all;
            cursor: pointer;

            ${props.name === props.state ? css`
            color: white;
            background-color: #ff7828;
            border: none;
            ` : css`
            background-color: white;
            color: #707070;

            &:hover {
                border-color: #ff7828;
                color:  #ff7828;
            }
            `}
        `}{...props}>{props.children}</button>
    )
}

const Precautions = () => {
    return (
        <div css={css`
            font-family: 'Pretendard-Medium';
            letter-spacing: -0.03em;
            display: flex;
            flex-direction: column;
            text-align: left;
            font-size: 16px;
            width: 62.5em;
        `}>
            <InputTitle>주의사항 <Require /> </InputTitle>
            <div css={css`
                display: flex;
                flex-direction: column;
                row-gap: 0.5em;
            `}>
                <span>· 지원서 최종 제출 후 지원서의 수정은 불가하니 이 점 양해부탁드립니다.</span>
                <span>· 지원서의 정보 저장을 위해 제출 전 임시저장을 통해 데이터를 저장해주시기 바랍니다.</span>
                <span>· 지원서 접수 마감일에는 지원자가 몰려 지원이 어려울 수 있으니, 여유있게 미리 제출해주시기바랍니다.</span>
                <span>· 지원서의 내용이 사실과 다를 경우, 합격이 취소되거나 전형 상의 불이익을 받을 수 있습니다.</span>
                <span>· 지원서는 문항별 최대 1000자의 제한을 두고 있으나, 문항을 다 채우실 필요는 없습니다.</span>
                <span>· 문의사항은 <strong>kangnam@likelion.org</strong> 으로 문의해주시면 최대한 빠르게 도와드리겠습니다.</span>
            </div>
        </div >
    )
}

const PositionBox = ({ children }: WrapperProps) => {
    return (
        <div css={css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1em;
    font-size: 16px;
    width: 62.5em;
`}>
            {children}
        </div>
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
        <span css={css`
            margin-left: 0.4em;
            font-family: 'Pretendard-Medium';
            letter-spacing: -0.02em;
            font-size: 15px;
            color: #ff0000;
        `}>* </span>
    )
}

interface AgreeType {
    src: string;
    text: string;
    onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
    name: string;
}

const ArgreeBox = ({ children }: WrapperProps) => {
    return (
        <div css={css`
            display: flex;
            flex-direction: column;
            margin-top: 1.3em;
            row-gap: 0.6em;
        `}>
            {children}
        </div>
    )
}

const Argree = ((props: AgreeType) => {
    return (
        <div css={css`
            display: flex;
            flex-direction: column;
            width: 62.5em;
        `}>
            <div css={css`
                display: flex;
                align-items: center;
            `}>
                <img alt={props.name} onClick={props.onClick} src={props.src} css={css`
                    width: 1.2em;
                    cursor: pointer;
                `} />
                <span css={css`
                    font-size: 16px;
                    font-family: 'Pretendard-Medium';
                    letter-spacing: -0.03em;
                    margin-left: 0.4em;
                `}>{props.text}<Require /></span>
            </div>
        </div>
    )
})

const Banner = () => {
    return (
        <img alt="배너 이미지" src={banner} css={css`
            margin-top: 40px;
            max-width: 1000px;
            border-radius: 12px;
            margin-bottom: 1em;
            animation: ${fadeLeft} 1.8s ease-in-out;
        `} />
    )
}

export default function Index() {

    const [name, setName] = useState<string>('');
    const [id, setID] = useState<number | string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<number | string>('');

    const [position, setPosition] = useState<string>('');
    const [precautions, setPrecautions] = useState<boolean>(false);
    const [privacy, setPrivacy] = useState<boolean>(false);
    const [buttonState, setButtonState] = useState(false);

    function CheckPosition(event: React.MouseEvent<HTMLButtonElement>): void {
        const name = (event.target as HTMLButtonElement).name;
        setPosition(name);
    }

    const checking = (event: React.MouseEvent<HTMLImageElement>): void => {
        const name = (event.target as HTMLImageElement).alt;
        if (name === "주의사항") {
            setPrecautions(!precautions);
        }
        if (name === "개인정보") {
            setPrivacy(!privacy);
        }
    }

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "이름") {
            setName(event.target.value);
        }
        if (event.target.name === "학번") {
            setID(event.target.value);
        }
        if (event.target.name === "이메일") {
            setEmail(event.target.value);
        }
        if (event.target.name === "연락처") {
            setPhone(event.target.value);
        }
    }

    useMemo(() => {
        if (name && id && email && phone && position && precautions && privacy) {
            setButtonState(false)
        } else {
            setButtonState(true)
        }
    }, [name, id, email, phone, position, precautions, privacy])

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
                <InputBox type="text" placeholder="이름을 입력해주세요" name="이름" onChange={changeValue} value={name} />
            </Article>
            <Article>
                <InputTitle>학번 <Require /> </InputTitle>
                <InputBox type="number" placeholder="학번을 입력해주세요" name="학번" onChange={changeValue} value={id} />
            </Article>
            <Article>
                <InputTitle>이메일 <Require /> </InputTitle>
                <InputBox type="text" placeholder="이메일을 입력해주세요" name="이메일" onChange={changeValue} value={email} />
            </Article>
            <Article>
                <InputTitle>연락처 (하이픈을 제외한 숫자만 입력)<Require /> </InputTitle>
                <InputBox type="number" placeholder="연락 가능한 번호를 입력해주세요" name="연락처" onChange={changeValue} value={phone} />
            </Article>
            <Article>
                <InputTitle>지원 포지션 <Require /> </InputTitle>
                <PositionBox>
                    <Position name="백엔드" onClick={CheckPosition} state={position}>백엔드</Position>
                    <Position name="프론트엔드" onClick={CheckPosition} state={position}>프론트엔드</Position>
                    <Position name="디자인" onClick={CheckPosition} state={position}>디자인</Position>
                </PositionBox>
            </Article>
            <Article>
                <Precautions />
            </Article>
            <Article>
                <ArgreeBox>
                    <Argree name="주의사항" src={precautions ? checkedBox : checkBox} text="위의 주의사항을 확인하였습니다" onClick={checking} />
                    <Argree name="개인정보" src={privacy ? checkedBox : checkBox} text="개인 정보 수집 및 이용에 동의합니다 (모집 종료 후 개인정보는 자동으로 파기됩니다)" onClick={checking} />
                </ArgreeBox>
            </Article>
            <ButtonBox>
                <Button name="제출하기" disabled={buttonState}>공통문항 작성하기</Button>
            </ButtonBox>
            {/* <Article>
                <label htmlFor="select1">Label Text</label>
                <select id="select1">
                    <option>백앤드</option>
                    <option>프론트엔드</option>
                    <option>디자인</option>
                </select>
            </Article> */}
            {/*
                <>
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
                </>
        */}
        </Section>
    )
}
