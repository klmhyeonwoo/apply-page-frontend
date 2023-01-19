/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useState } from 'react'
import axios from 'axios';
import checkBox from '../images/checkBox.svg';
import checkedBox from '../images/checkedBox.svg';
import { useMemo } from 'react';
import { css, keyframes } from "@emotion/react";
import { fadeLeft, fadeUp } from '../styles/Keyframes';
import { Section, Banner, Article, InputTitle, InputBox, PositionBox, Position, Require, Precautions, ArgreeBox, Argree, ButtonBox, Button } from './emotion/component';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, TestState } from '../app/store';
import { view, saveIndex } from '../features/fetcherSlice';
import { useEffect } from 'react';

export default function Index() {
    const [name, setName] = useState<string>('');
    const [id, setID] = useState<number | string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<number | string>('');

    const [position, setPosition] = useState<string>('');
    const [precautions, setPrecautions] = useState<boolean>(false);
    const [privacy, setPrivacy] = useState<boolean>(false);
    const [buttonState, setButtonState] = useState(false);

    const userName = useSelector((state: TestState) => state.fetcher.userName);
    const userID = useSelector((state: TestState) => state.fetcher.userID);
    const userPhone = useSelector((state: TestState) => state.fetcher.userPhone);
    const userEmail = useSelector((state: TestState) => state.fetcher.userEmail);
    const userPosition = useSelector((state: TestState) => state.fetcher.userPosition);


    useEffect(() => {
        // 이전 값들을 저장하기 위해서 Redux 사용
        if (userName && userID && userPhone && userEmail && userPosition) {
            setName(userName)
            setID(userID)
            setEmail(userEmail)
            setPhone(userPhone)
            setPosition(userPosition)
        }
    }, [])


    useMemo(() => {
        if (name && id && email && phone && position && precautions && privacy) {
            setButtonState(false)
        } else {
            setButtonState(true)
        }
    }, [name, id, email, phone, position, precautions, privacy])

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(saveIndex({ userName: name, userID: id, userPhone: phone, userEmail: email, userPosition: position }));
        navigate('/common');
    }

    const handleClick2 = () => {
        dispatch(view());
    }

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
                <Button name="제출하기" disabled={buttonState} onClick={handleClick}>공통문항 작성하기</Button>
                <Button name="제출하기" disabled={buttonState} onClick={handleClick2}>Redux 확인</Button>
            </ButtonBox>
        </Section>
    )
}
