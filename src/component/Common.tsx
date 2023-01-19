import React, { ChangeEvent } from 'react'
import { ButtonBox, Section, Button, Require, Article, InputTitle, TextAreaBox, InputBox, Banner, WordLength } from './emotion/component'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, TestState } from '../app/store';
import { saveCommon, saveIndex, view } from '../features/fetcherSlice';
import { useEffect } from 'react';

export default function Common() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [motiv, setMotiv] = useState('');
    const [hardwork, setHardwork] = useState('');
    const [keyword, setKeyword] = useState('');
    const [mostDeeplyWork, setMostDeeplyyWork] = useState('');

    const userName = useSelector((state: TestState) => state.fetcher.userName);
    const userID = useSelector((state: TestState) => state.fetcher.userID);
    const userPhone = useSelector((state: TestState) => state.fetcher.userPhone);
    const userEmail = useSelector((state: TestState) => state.fetcher.userEmail);
    const userPosition = useSelector((state: TestState) => state.fetcher.userPosition);

    const userMotiv = useSelector((state: TestState) => state.fetcher.userMotiv);
    const userHardWork = useSelector((state: TestState) => state.fetcher.userHardWork);
    const userKeyWord = useSelector((state: TestState) => state.fetcher.userKeyWord);
    const userMostDeeplyWork = useSelector((state: TestState) => state.fetcher.userMostDeeplyWork);

    useEffect(() => {

        if (!userName && !userID && !userPhone && !userEmail && !userPosition) {
            alert('잘못된 접근입니다!');
            navigate('/')
        }

        // 이전 값들을 저장하기 위해서 Redux 사용
        if (userMotiv) {
            setMotiv(userMotiv)
        }
        if (userHardWork) {
            setHardwork(userHardWork)
        }
        if (userKeyWord) {
            setKeyword(userKeyWord)
        }
        if (userMostDeeplyWork) {
            setMostDeeplyyWork(userMostDeeplyWork)
        }
    }, [])


    const Back = () => {
        navigate('/');
    }

    const PartHistoy = () => {
        dispatch(saveCommon({ userMotiv: motiv, userHardWork: hardwork, userKeyword: keyword, userMostDeeplyWork: mostDeeplyWork }));
        if (userPosition === "프론트엔드") {
            navigate('/frontend');
        } else if (userPosition === "백엔드") {
            navigate('/backend')
        } else if (userPosition === "디자인") {
            navigate('/design')
        } else {
            alert("오류가 발생했습니다, 강남대학교 멋쟁이사자처럼에 문의해주세요!")
            navigate('/');
        }
    }

    const handleClick2 = () => {
        dispatch(view());
    }

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.name === "최종목표") {
            setMotiv(event.target.value);
        }

        if (event.target.name === "활동") {
            setHardwork(event.target.value);
        }

        if (event.target.name === "키워드") {
            setKeyword(event.target.value);
        }

        if (event.target.name === "감명") {
            setMostDeeplyyWork(event.target.value);
        }
    }

    return (
        <Section>
            <Banner />
            <Article>
                <InputTitle>지원자분의 인생의 최종 목표는 무엇인가요?<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="최종목표" onChange={handleChange} value={motiv} />
                <WordLength>{motiv.length}</WordLength>
            </Article>
            <Article>
                <InputTitle>학교 공부를 제외하고 본인의 인생에 있어서 가장 열심히 했던 활동은 무엇인가요?<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="활동" onChange={handleChange} value={hardwork} />
                <WordLength>{hardwork.length}</WordLength>
            </Article>
            <Article>
                <InputTitle>자신을 설명할 수 있는 키워드 3개와 그 이유에 대하여 설명해주세요<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="키워드" onChange={handleChange} value={keyword} />
                <WordLength>{keyword.length}</WordLength>
            </Article>
            <Article>
                <InputTitle>최근에 가장 감명 깊었던 책 · 영화 · 노래가 있다면 하나를 선택해주시고, 그 이유에 대하여 설명해주세요<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="감명" onChange={handleChange} value={mostDeeplyWork} />
                <WordLength>{mostDeeplyWork.length}</WordLength>
            </Article>
            <ButtonBox>
                <Button name="임시저장" onClick={PartHistoy}>임시저장</Button>
                <Button name="제출하기" onClick={Back}>뒤로가기</Button>
                <Button name="제출하기" onClick={PartHistoy}>파트별 문항 작성하기</Button>
                <Button name="제출하기" onClick={handleClick2}>Redux 확인</Button>
            </ButtonBox>
        </Section>
    )
}
