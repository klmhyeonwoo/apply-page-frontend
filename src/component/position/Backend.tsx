import React, { ChangeEvent } from 'react'
import { ButtonBox, Section, Button, Require, Article, InputTitle, TextAreaBox, InputBox, Banner, WordLength } from '../emotion/component'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, TestState } from '../../app/store';
import { saveCommon, saveIndex, view, saveBackEnd } from '../../features/fetcherSlice';
import { useEffect } from 'react';

export default function Backend() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [difficultAndOvercoming, setDifficultAndOvercoming] = useState('');
    const [studyFramework, setStudyFramework] = useState('');
    const [importantGroup, setImportantGroup] = useState('');

    const userName = useSelector((state: TestState) => state.fetcher.userName);
    const userID = useSelector((state: TestState) => state.fetcher.userID);
    const userPhone = useSelector((state: TestState) => state.fetcher.userPhone);
    const userEmail = useSelector((state: TestState) => state.fetcher.userEmail);
    const userPosition = useSelector((state: TestState) => state.fetcher.userPosition);

    const userMotiv = useSelector((state: TestState) => state.fetcher.userMotiv);
    const userHardWork = useSelector((state: TestState) => state.fetcher.userHardWork);
    const userKeyWord = useSelector((state: TestState) => state.fetcher.userKeyWord);
    const userMostDeeplyWork = useSelector((state: TestState) => state.fetcher.userMostDeeplyWork);

    const userDifficultAndOvercoming = useSelector((state: TestState) => state.fetcher.userDifficultAndOvercoming);
    const userStudyFramework = useSelector((state: TestState) => state.fetcher.userStudyFramework);
    const userImportantGroup = useSelector((state: TestState) => state.fetcher.userImportantGroup);

    useEffect(() => {
        if (!userName && !userID && !userPhone && !userEmail && !userPosition) {
            alert('잘못된 접근입니다!');
            navigate('/')
        }

        // 이전 값들을 저장하기 위해서 Redux 사용
        if (userDifficultAndOvercoming) {
            setDifficultAndOvercoming(userDifficultAndOvercoming);
        }

        if (userStudyFramework) {
            setStudyFramework(userStudyFramework);
        }

        if (userImportantGroup) {
            setImportantGroup(userImportantGroup);
        }
    }, [])


    const Back = () => {
        dispatch(saveBackEnd({ userDifficultAndOvercoming: difficultAndOvercoming, userStudyFramework: studyFramework, userImportantGroup: importantGroup }));
        navigate(-1);
    }

    const PartHistoy = () => {
    }

    const handleClick2 = () => {
        dispatch(view());
    }

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.name === "극복") {
            setDifficultAndOvercoming(event.target.value);
        }

        if (event.target.name === "경험") {
            setStudyFramework(event.target.value);
        }

        if (event.target.name === "팀워크") {
            setImportantGroup(event.target.value);
        }
    }

    return (
        <Section>
            <Banner />
            <Article>
                <InputTitle>개발 관련 공부를 하며 개인적으로 힘들었던 경험과 그걸 극복했던 자신만의 방법이 있나요?<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="극복" onChange={handleChange} value={difficultAndOvercoming} />
                <WordLength>{difficultAndOvercoming.length}</WordLength>
            </Article>
            <Article>
                <InputTitle>웹 백앤드 프레임워크를 공부해보신적 있으신가요? 있으시다면 어디까지 공부해보셨나요?<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="경험" onChange={handleChange} value={studyFramework} />
                <WordLength>{studyFramework.length}</WordLength>
            </Article>
            <Article>
                <InputTitle>단체생활에서 가장 중요하다고 생각하는 것은 무엇인가요?<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="팀워크" onChange={handleChange} value={importantGroup} />
                <WordLength>{importantGroup.length}</WordLength>
            </Article>
            <ButtonBox>
                <Button name="임시저장" onClick={PartHistoy}>임시저장</Button>
                <Button name="제출하기" onClick={Back}>뒤로가기</Button>
                <Button name="제출하기" onClick={PartHistoy}>제출하기</Button>
                <Button name="제출하기" onClick={handleClick2}>Redux 확인</Button>
            </ButtonBox>
        </Section>
    )
}
