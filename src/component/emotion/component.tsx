/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import React, { ChangeEvent, useEffect, useState } from 'react'
import banner from '../../images/banner.png';
import loading from '../../images/loading.gif';
import axios from 'axios';
import checkBox from '../images/checkBox.svg';
import checkedBox from '../images/checkedBox.svg';
import { useMemo } from 'react';
import { fadeLeft, fadeUp } from "../../styles/Keyframes";
import { WrapperProps } from "../../App"
import { ImgClickType } from "../admin/detail/Type";
import back from '../../images/back.png';
import oops from '../../images/oops.png';


export const TextAreaBox = (props: TextAreaType) => {
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
        width: 64.28em;
        height: 15em;
        border: solid;
        border-radius: 15px;
        border-color: #707070;
        border-width: 1px;
        font-size: 14px;
        box-sizing: border-box;
        resize: none;

        // 익스플로러, 파이어폭스에서 우측 스크롤 없애기
        -ms-overflow-style: none;
        scrollbar-width: none;

        &:focus {
            outline-color: #ff7828;
        }

        &::placeholder {
            font-family: 'Pretendard-Regular';
            margin-left: 0.4em;
        }

        // 크롬에서 우측 스크롤 없애기
        &::-webkit-scrollbar {
            display: none;
          }

        `} {...props} maxLength={1000} />
    )
}

export const UploadButton = () => {
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

export const InputBox = (props: InputType) => {
    return (
        <input css={css`
        font-family: 'Pretendard-Medium';
        letter-spacing: -0.03em;
        padding: 0;
        padding-left: 1em;
        width: 64.28em;
        height: 3.7em;
        border: solid;
        border-radius: 10px;
        border-color: #707070;
        border-width: 1px;
        font-size: 14px;
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
            font-family: 'Pretendard-Regular';
            margin-left: 0.4em;
        }
        `} {...props} maxLength={props.maxLength} tabIndex={-1} />
    )
}

export interface PositionType {
    name?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    state?: string;
    alt?: string;
}

export const Position = (props: PositionType) => {
    return (
        <button css={css`
            font-family: 'Pretendard-Medium';
            letter-spacing: -0.03em;
            font-size: 14px;
            height: 4em;
            ${props.alt === "모달" && css`height: 3em;`} 
            ${props.alt === "모달" && css`font-size: 12px;`} 
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
            &:focus {
                outline: none;
                border-color: #ff7828;
                color:  #ff7828;
            }
            `}
        `}{...props} tabIndex={-1}>{props.children}</button>
    )
}

export const ModalFrame = ({ children }: WrapperProps) => {
    return (
        <div css={css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 999;
        cursor: pointer;
        `}>
            {children}
        </div>
    )
}

export const Modal = (props: WrapperProps) => {

    var aa = (document.body.scrollTop + (window.innerHeight / 2));

    return (
        <ModalFrame>
            <div css={css`
                position: fixed;
                width: 100%;
                height: 100%;
                border: solid;
                
                display: flex;
                justify-content: center;
                align-items: center;
            `}>
                <div css={css`
                    position: fixed;
                    top: ${(window.screen.height - 480) / 4 + window.scrollY}px;

                    font-family: 'Pretendard-Bold';
                    letter-spacing: -0.03em;
                    border-radius: 20px;
                    background-color: white;
                    font-size: 16px;
                    width: 40em;
                    height: 30em;
                    ${props.alt === "찾기" && css`height: 35em`}
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    animation: ${fadeUp} 1s ease-in-out;
                `}>
                    <div css={css`
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        animation: ${fadeUp} 1.3s ease-in-out;
                    `}>
                        {props.imgSrc &&
                            <img alt="사람" src={props.imgSrc}
                                css={css`
                            width: 9.2em;
                            ${props.alt === "찾기" &&
                                    'width: 7.3em;'
                                    }
                            ${props.alt === "최종제출" &&
                                    'width: 7.5em;'
                                    }
                            ${props.alt === "불러오기" &&
                                    'width: 7.5em;'
                                    }
                            margin-bottom: 2em;
                            animation: ${fadeUp} 1.5s ease-in-out;
                        `} />
                        }
                        <span css={css`
                            animation: ${fadeUp} 1.5s ease-in-out;
                            ${props.alt === "찾기" && css`margin-bottom: -1em;`}
                        `}>
                            {props.text}
                        </span>
                        <ButtonBox>
                            {props.children}
                        </ButtonBox>
                    </div>
                </div>
            </div>
        </ModalFrame>
    )
}

export const ModalInput = (props: InputType) => {
    return (
        <input css={css`
        font-family: 'Pretendard-Medium';
        letter-spacing: -0.03em;
        padding: 0;
        padding-left: 1em;
        width: 22.5em;
        border: solid;
        border-radius: 7px;
        border-color: #707070;
        border-width: 1px;
        font-size: 16px;
        ${props.name === "저장된_학번" && css`font-size: 13px;`}
        ${props.name === "저장된_학번" && css`
        width: 37em;
        height: 3.5em;
        `}
        ${props.name === "저장된_이메일" && css`font-size: 13px;`}
        ${props.name === "저장된_이메일" && css`
        width: 37em;
        height: 3.5em;
        `}
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
            font-family: 'Pretendard-Regular';
            margin-left: 0.4em;
        }
        `}{...props} />
    )
}

export const EndTime = () => {
    return (
        <section css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        `}>
            <div css={css`
                background-color: white;
                width: 30em;
                height: 25em;
                border-radius: 10px;
                border: none;
                font-size: 14px;
                letter-spacing: -0.03em;
                line-height: 1.5em;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                row-gap: 2em;
            `}>
                <img alt="낫 지원기간" src={oops} css={css`
                    width: 8em;
                `} />
                <span css={css`
                    font-size: 15px;
                    letter-spacing: -0.03em;
                    
                    font-family: 'Pretendard-Medium';
                `}>
                    지원이 마감되었습니다<br />결과 발표를 위해 잠시만 기다려주세요
                </span>
            </div>
        </section>
    )
}

export const Precautions = () => {
    return (
        <div css={css`
            font-family: 'Pretendard-Medium';
            letter-spacing: -0.03em;
            display: flex;
            flex-direction: column;
            text-align: left;
            font-size: 14px;
            width: 64.28em;
        `}>
            <InputTitle>주의사항 <Require /> </InputTitle>
            <div css={css`
                display: flex;
                flex-direction: column;
                row-gap: 0.5em;
            `}>
                <span>· 지원서 최종 제출 후에는 지원서의 수정이 불가능합니다.</span>
                <span>· 작성 중인 지원서는 임시저장 버튼을 통해 실시간으로 저장이 가능합니다.</span>
                <span>· 지원서 접수 마감일에는 지원자가 몰려 지원이 어려울 수 있으니, 여유있게 미리 제출해주시기바랍니다.</span>
                <span>· 문항에 따른 올바른 입력을 해주셔야 지원서의 다음 단계로 이동하실 수 있습니다.</span>
                <span>· 지원서의 내용이 사실과 다를 경우, 합격이 취소되거나 전형 상의 불이익을 받을 수 있습니다.</span>
                <span>· 지원서는 문항별 최대 1000자의 제한을 두고 있으나, 문항을 다 채우실 필요는 없습니다.</span>
                <span>· 문의사항은 우측 하단 채널 톡으로 문의해주시면 최대한 빠르게 도와드리겠습니다.</span>
            </div>
        </div >
    )
}

export const PositionBox = (props: WrapperProps) => {
    return (
        <div css={css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 2em;
            font-size: 16px;
            width: 56.25em;
            ${props.alt === "모달" && css`width: 30em;`} 
        `}>
            {props.children}
        </div>
    )
}

// 로딩중을 표시하는 컴포넌트
export const Loading = () => {
    return (
        <img alt="로딩 이미지" src={loading} css={css`
            width: 12em;
        `} />
    )
}

// 뒤로가기 및 취소
export const Quit = (props: ImgClickType) => {
    return (
        <img alt="뒤로가기" onClick={props.onClick} src={back} css={css`
            width: 1em;
            transition: 0.4s all;
            margin-top: 2em;
            margin-bottom: 1em;
            cursor: pointer;

            ${props.alt === "찾기" && css`
                position: absolute;
                margin-top: -17em;
                margin-left: 35.5em;
            `}

            &:hover {
                opacity: 60%;
            }
        `} />
    )
}

export const WordLength = ({ children }: WrapperProps) => {
    return (
        <div css={css`
            width: 10em;
            position: absolute;
            text-align:center;
            font-family: 'Pretendard-Medium';
            letter-spacing: -0.03em;
            font-size: 13px;
            color: #ff7828;
            margin-top: 16em;
            margin-left: 59em;

            display:flex;
            justify-content: center;
            align-items: center;
        `}>
            <div css={css`
                width: 2.5em;
                border-box: box-sizing;
            `}>
                {children}
            </div>
            <span css={css`
                margin-right: 0.3em;
            `}>/</span>
            <span css={css`
            `}>1000</span>
        </div>
    )
}

export const Require = () => {
    return (
        <span css={css`
            margin-left: 0.4em;
            font-family: 'Pretendard-Medium';
            letter-spacing: -0.02em;
            font-size: 14px;
            color: #ff0000;
        `}>* </span>
    )
}

export const ArgreeBox = ({ children }: WrapperProps) => {
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

export interface AgreeType {
    src: string;
    text: string;
    onClick: (event: React.MouseEvent<HTMLImageElement | HTMLDivElement>) => void;
    name: string;
}

export const Argree = ((props: AgreeType) => {
    return (
        <div css={css`
            display: flex;
            flex-direction: column;
            width: 64.28em;
            font-size: 14px;
        `}>
            <div css={css`
                display: flex;
                align-items: center;
            `}>
                <img alt={props.name} onClick={props.onClick} src={props.src} css={css`
                    width: 1.1em;
                    cursor: pointer;
                `} />
                <span css={css`
                    font-size: 14px;
                    font-family: 'Pretendard-Medium';
                    letter-spacing: -0.03em;
                    margin-left: 0.4em;
                    cursor: pointer;
                `} onClick={props.onClick} id={props.name} >{props.text}<Require /></span>
            </div>
        </div>
    )
})

export const Banner = () => {

    return (
        <img alt="배너 이미지" src={banner} css={css`
            margin-top: 40px;
            max-width: 900px;
            border-radius: 12px;
            height: auto;
            margin-bottom: 1em;
            // animation: ${fadeLeft} 1.8s ease-in-out;
        `} loading="lazy" />
    )
}

export const Section = ({ children }: WrapperProps) => {
    return (
        <section css={css`
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            max-width: 73em;
            width: 100%;
            background-color: white;

            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 5em;
            row-gap: 1.5em;
        `}>
            {children}
        </section>
    )
}

export const InputTitle = ({ children }: WrapperProps) => {
    return (
        <p css={css`
            font-family: 'Pretendard-Bold';
            letter-spacing: -0.03em;
            font-size: 14px;

            display: flex;
            align-items: center;
        `}>
            {children}
        </p>
    )
}

export const SearchDepartment = ({ children }: WrapperProps) => {
    return (
        <div css={css`
            font-family: 'Pretendard-Regular';
            letter-spacing: -0.03em;
            background-color: white;
            border: none;
            border-radius: 10px;
            font-size: 13px;
            padding: 1em;
            row-gap: 0.5em;
            box-shadow:2px 3px 5px 0px #707070;
            display: flex;
            flex-direction: column;
            height: 5em;
        `}>
            {children}
        </div>
    )
}

export const Article = ({ children }: WrapperProps) => {
    return (
        <article css={css`
            display: flex;
            flex-direction: column;
            text-align: left;
            justify-content: center;
            // animation: ${fadeUp} 2s ease-in-out;
        `}>
            {children}
        </article>
    )
}

export const ErrorDescription = ({ children }: WrapperProps) => {
    return (
        <span css={css`
            position: absolute;
            font-family: 'Pretendard-Regular';
            letter-spacing: -0.03em;
            font-size: 12.5px;
            margin-top: 10em;
            color: red;
        `}>
            {children}
        </span>
    )
}

export const CollectDescription = ({ children }: WrapperProps) => {
    return (
        <span css={css`
            position: absolute;
            font-family: 'Pretendard-Regular';
            letter-spacing: -0.03em;
            font-size: 12.5px;
            margin-top: 10em;
            color: #11BD7E;
        `}>
            {children}
        </span>
    )
}

export interface ButtonType {
    name?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    alt?: string;
}

export const Button = (props: ButtonType) => {
    return (
        <button css={css`
            font-family: 'Pretendard-Bold';
            letter-spacing: -0.03em;
            font-size: 14px;
            width: 15em;
            height: 3.5em;
            ${props.alt === "불러오기" && css`
                width: 40em;
                font-size: 12px;
                height: 3.8em;
            `}
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
        `} {...props} tabIndex={-1}>
            {props.children}
        </button>
    )
}

export const ButtonBox = (props: WrapperProps) => {
    return (
        <div css={css`
            display: flex;
            column-gap: 1em;
            margin-top: 3em;
            animation: ${fadeUp} 2s ease-in-out;
            ${props.alt === "임시저장_모달" && css`margin-top: 0em;`}
        `}>
            {props.children}
        </div>
    )
}

export interface InputType {
    type?: string;
    placeholder?: string;
    value?: string | number;
    disabled?: boolean;
    maxLength?: number;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface TextAreaType {
    type?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    maxLength?: number;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
