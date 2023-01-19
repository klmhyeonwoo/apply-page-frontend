import React, { ChangeEvent } from 'react'
import { ButtonBox, Section, Button, Require, Article, InputTitle, TextAreaBox, InputBox, Banner, WordLength } from '../emotion/component'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, TestState } from '../../app/store';
import { saveCommon, saveIndex, view, saveFrontEnd } from '../../features/fetcherSlice';
import { useEffect } from 'react';

export default function Frontend() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [whyFrontend, setWhyFrontend] = useState('');
    const [usingStack, setUsingStack] = useState('');
    const [teamProject, setTeamProject] = useState('');
    const [achieve, setAchieve] = useState('');

    const userName = useSelector((state: TestState) => state.fetcher.userName);
    const userID = useSelector((state: TestState) => state.fetcher.userID);
    const userPhone = useSelector((state: TestState) => state.fetcher.userPhone);
    const userEmail = useSelector((state: TestState) => state.fetcher.userEmail);
    const userPosition = useSelector((state: TestState) => state.fetcher.userPosition);

    const userMotiv = useSelector((state: TestState) => state.fetcher.userMotiv);
    const userHardWork = useSelector((state: TestState) => state.fetcher.userHardWork);
    const userKeyWord = useSelector((state: TestState) => state.fetcher.userKeyWord);
    const userMostDeeplyWork = useSelector((state: TestState) => state.fetcher.userMostDeeplyWork);

    const userWhyFrontend = useSelector((state: TestState) => state.fetcher.userWhyFrontend);
    const userUsingStack = useSelector((state: TestState) => state.fetcher.userUsingStack);
    const userTeamProject = useSelector((state: TestState) => state.fetcher.userTeamProject);
    const userAchieve = useSelector((state: TestState) => state.fetcher.userAchieve);

    useEffect(() => {

        if (!userName && !userID && !userPhone && !userEmail && !userPosition) {
            alert('잘못된 접근입니다!');
            navigate('/')
        }

        // 이전 값들을 저장하기 위해서 Redux 사용

        if (userWhyFrontend) {
            setWhyFrontend(userWhyFrontend)
        }
        if (userUsingStack) {
            setUsingStack(userUsingStack)
        }
        if (userTeamProject) {
            setTeamProject(userTeamProject)
        }
        if (userAchieve) {
            setAchieve(userAchieve)
        }
    }, [])


    const Back = () => {
        dispatch(saveFrontEnd({ userWhyFrontend: whyFrontend, userUsingStack: usingStack, userTeamProject: teamProject, userAchieve: achieve }));
        navigate('/common');
    }

    const PartHistoy = () => {
    }

    const handleClick2 = () => {
        dispatch(view());
    }

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.name === "동기") {
            setWhyFrontend(event.target.value);
        }

        if (event.target.name === "프레임워크") {
            setUsingStack(event.target.value);
        }

        if (event.target.name === "경험") {
            setTeamProject(event.target.value);
        }

        if (event.target.name === "성장") {
            setAchieve(event.target.value);
        }
    }

    return (
        <Section>
            <Banner />
            <Article>
                <InputTitle>프론트엔드 트랙을 선택하게 된 이유를 구체적으로 서술해주세요<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="동기" onChange={handleChange} value={whyFrontend} />
                <WordLength>{whyFrontend.length}</WordLength>
            </Article>
            <Article>
                <InputTitle>프론트엔드 개발과 관련된 프레임워크나 html, css, js 등의 언어를 사용해 보신 적 있으신가요? 있으시다면 어디까지 사용해 보셨는지 구체적으로 적어주세요.<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="프레임워크" onChange={handleChange} value={usingStack} />
                <WordLength>{usingStack.length}</WordLength>
            </Article>
            <Article>
                <InputTitle>팀 활동이나 프로젝트를 경험해본 내용과 이를 통해 자신의 성장 경험에 대해서 서술해주세요<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="경험" onChange={handleChange} value={teamProject} />
                <WordLength>{teamProject.length}</WordLength>
            </Article>
            <Article>
                <InputTitle>멋사 프론트엔드 아기사자로 활동하면서 얻어 가고 싶은 것은 무엇인가요?<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="성장" onChange={handleChange} value={achieve} />
                <WordLength>{achieve.length}</WordLength>
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