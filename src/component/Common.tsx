import React, { ChangeEvent } from 'react'
import { ButtonBox, Section, Button, Require, Article, InputTitle, TextAreaBox, InputBox, Banner, WordLength, Modal, Footer } from './emotion/component'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, TestState } from '../app/store';
import { saveCommon, saveIndex, view, saveBackEnd, saveDesign, saveFrontEnd } from '../features/fetcherSlice';
import { useEffect, useMemo } from 'react';
import axios from 'axios';
import tempImg from '../images/temp.png';

export default function Common() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [motiv, setMotiv] = useState<string>('');
    const [hardwork, setHardwork] = useState<string>('');
    const [keyword, setKeyword] = useState<string>('');
    const [mostDeeplyWork, setMostDeeplyyWork] = useState<string>('');
    const [buttonState, setButtonState] = useState<boolean>(false);
    const [submitCount, setSubmitCount] = useState<number>(0);
    const [tempState, setTempState] = useState<boolean>(false);
    const [temp, setTemp] = useState(false);

    const userName = useSelector((state: TestState) => state.fetcher.userName);
    const userID = useSelector((state: TestState) => state.fetcher.userID);
    const userPhone = useSelector((state: TestState) => state.fetcher.userPhone);
    const userEmail = useSelector((state: TestState) => state.fetcher.userEmail);
    const userPosition = useSelector((state: TestState) => state.fetcher.userPosition);
    const userDepartment = useSelector((state: TestState) => state.fetcher.userDepartment);

    const userMotiv = useSelector((state: TestState) => state.fetcher.userMotiv);
    const userHardWork = useSelector((state: TestState) => state.fetcher.userHardWork);
    const userKeyWord = useSelector((state: TestState) => state.fetcher.userKeyWord);
    const userMostDeeplyWork = useSelector((state: TestState) => state.fetcher.userMostDeeplyWork);

    const userWhyFrontend = useSelector((state: TestState) => state.fetcher.userWhyFrontend);
    const userUsingStack = useSelector((state: TestState) => state.fetcher.userUsingStack);
    const userTeamProject = useSelector((state: TestState) => state.fetcher.userTeamProject);
    const userAchieve = useSelector((state: TestState) => state.fetcher.userAchieve);
    const userPortfolioLinkFront = useSelector((state: TestState) => state.fetcher.userPortfolioLinkFront);

    const userWhyDesign = useSelector((state: TestState) => state.fetcher.userWhyDesign);
    const userToolExperience = useSelector((state: TestState) => state.fetcher.userToolExperience);
    const userTeamworkExperience = useSelector((state: TestState) => state.fetcher.userTeamworkExperience);
    const userDesignGrowth = useSelector((state: TestState) => state.fetcher.userDesignGrowth);
    const userPortfolioLinkDesign = useSelector((state: TestState) => state.fetcher.userPortfolioLinkDesign);

    const userDifficultAndOvercoming = useSelector((state: TestState) => state.fetcher.userDifficultAndOvercoming);
    const userStudyFramework = useSelector((state: TestState) => state.fetcher.userStudyFramework);
    const userImportantGroup = useSelector((state: TestState) => state.fetcher.userImportantGroup);
    const userPortfolioLinkBack = useSelector((state: TestState) => state.fetcher.userPortfolioLinkBack);

    useEffect(() => {
        document.body.style.overflow = "unset";
        if (!userName && !userID && !userPhone && !userEmail && !userPosition) {
            navigate('/404')
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

    useMemo(() => {
        if (motiv || hardwork || keyword || mostDeeplyWork) {
            setTempState(false);
        } else {
            setTempState(true);
        }

        if (motiv && hardwork && keyword && mostDeeplyWork) {
            setButtonState(false)
        } else {
            setButtonState(true)
        }

        if (submitCount >= 1) {
            setButtonState(true);
        }
    }, [motiv, hardwork, keyword, mostDeeplyWork, submitCount])


    const Back = () => {
        setSubmitCount((prev) => (prev + 1));
        dispatch(saveCommon({ userMotiv: motiv, userHardWork: hardwork, userKeyword: keyword, userMostDeeplyWork: mostDeeplyWork }));
        navigate('/');
    }

    const PartHistoy = async () => {
        await setSubmitCount((prev) => (prev + 1));
        await dispatch(saveCommon({ userMotiv: motiv, userHardWork: hardwork, userKeyword: keyword, userMostDeeplyWork: mostDeeplyWork }));
        if (userPosition === "프론트엔드") {
            await navigate('/frontend');
        } else if (userPosition === "백엔드") {
            await navigate('/backend')
        } else if (userPosition === "디자인") {
            await navigate('/design')
        } else {
            alert("오류가 발생했습니다, 강남대학교 멋쟁이사자처럼에 문의해주세요!")
            await navigate('/');
        }
    }

    const TempSave = async () => {
        await setSubmitCount((prev) => (prev + 1));
        if (userPosition === "프론트엔드") {
            await axios.post('/frontendApplication', JSON.stringify({
                department: userDepartment,
                whyFrontend: userWhyFrontend,
                email: userEmail,
                hardWork: hardwork,
                usingStack: userUsingStack,
                keyWord: keyword,
                mostDeeplyWork: mostDeeplyWork,
                motive: motiv,
                name: userName,
                passOrNot: true,
                phoneNumber: userPhone,
                portfolioFile: "",
                portfolioLink: userPortfolioLinkFront,
                sid: userID,
                teamProject: userTeamProject,
                achieve: userAchieve,
                submissionStatus: false,
            }),
                {
                    headers: {
                        "Content-type": "application/json",
                    }
                }
            )
                .then(async (res) => {
                    await setTemp(true);
                    document.body.style.overflow = "hidden";
                })
                .catch((error) => {
                    // console.log(error);
                })
        }

        if (userPosition === "백엔드") {
            await axios.post('/backendApplication', JSON.stringify({
                department: userDepartment,
                difficultAndOvercoming: userDifficultAndOvercoming,
                email: userEmail,
                hardWork: hardwork,
                importantGroup: userImportantGroup,
                keyWord: keyword,
                mostDeeplyWork: mostDeeplyWork,
                motive: motiv,
                name: userName,
                passOrNot: true,
                phoneNumber: userPhone,
                portfolioFile: "",
                portfolioLink: userPortfolioLinkBack,
                sid: userID,
                studyFramework: userStudyFramework,
                submissionStatus: false,
            }),
                {
                    headers: {
                        "Content-type": "application/json",
                    }
                }
            )
                .then(async (res) => {
                    await setTemp(!temp);
                    document.body.style.overflow = "hidden";
                })
        }

        if (userPosition === "디자인") {
            await axios.post('/designApplication', JSON.stringify({
                department: userDepartment,
                whyDesign: userWhyDesign,
                email: userEmail,
                hardWork: hardwork,
                toolExperience: userToolExperience,
                keyWord: keyword,
                mostDeeplyWork: mostDeeplyWork,
                motive: motiv,
                name: userName,
                passOrNot: true,
                phoneNumber: userPhone,
                portfolioFile: "",
                portfolioLink: userPortfolioLinkDesign,
                sid: userID,
                teamworkExperience: userTeamworkExperience,
                designGrowth: userDesignGrowth,
                submissionStatus: false,
            }),
                {
                    headers: {
                        "Content-type": "application/json",
                    }
                }
            )
                .then(async (res) => {
                    await setTemp(!temp);
                    document.body.style.overflow = "hidden";
                })
        }
    }

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.name === "최종목표") {
            if (event.target.value.length <= 1000) {
                setMotiv(event.target.value);
            }
        }

        if (event.target.name === "활동") {
            if (event.target.value.length <= 1000) {
                setHardwork(event.target.value);
            }
        }

        if (event.target.name === "키워드") {
            if (event.target.value.length <= 1000) {
                setKeyword(event.target.value);
            }
        }

        if (event.target.name === "감명") {
            if (event.target.value.length <= 1000) {
                setMostDeeplyyWork(event.target.value);
            }
        }
    }

    const TempBack = async () => {
        setTemp(false);
        setSubmitCount(0);
        setTempState(false);
        setButtonState(false);
        document.body.style.overflow = "unset";
    }

    const TempHome = async () => {
        if (userPosition === "프론트엔드") {
            dispatch(saveFrontEnd({
                userWhyFrontend: '',
                userUsingStack: '',
                userAchieve: '',
                userPortfolioLinkFront: '',
                userTeamProject: '',
            }));
            dispatch(saveCommon({
                userMotiv: '',
                userHardWork: '',
                userKeyWord: '',
                userMostDeeplyWork: '',
            }))
            dispatch(saveIndex({
                userName: '',
                userID: '',
                userDepartment: '',
                userEmail: '',
                userPhone: '',
                userPosition: '',
            }))
        }
        if (userPosition === "백엔드") {
            dispatch(saveBackEnd({
                userDifficultAndOvercoming: '',
                userImportantGroup: '',
                userPortfolioLink: '',
                userStudyFramework: '',
            }));
            dispatch(saveCommon({
                userMotiv: '',
                userHardWork: '',
                userKeyWord: '',
                userMostDeeplyWork: '',
            }))
            dispatch(saveIndex({
                userName: '',
                userID: '',
                userDepartment: '',
                userEmail: '',
                userPhone: '',
                userPosition: '',
            }))
        }
        if (userPosition === "디자인") {
            await dispatch(saveDesign({
                userWhyDesign: '',
                userToolExperience: '',
                userTeamworkExperience: '',
                userPortfolioLinkDesign: '',
                userDesignGrowth: '',
            }));
            await dispatch(saveCommon({
                userMotiv: '',
                userHardWork: '',
                userKeyWord: '',
                userMostDeeplyWork: '',
            }))
            await dispatch(saveIndex({
                userName: '',
                userID: '',
                userDepartment: '',
                userEmail: '',
                userPhone: '',
                userPosition: '',
            }))
        }
        await navigate('/');
    }

    return (
        <Section>
            {temp ?
                <Modal text="지원하신 학번으로 지원서가 저장이 되었어요!" imgSrc={tempImg}>
                    <Button name="임시저장" onClick={TempHome}>메인 화면으로 이동</Button>
                    <Button name="제출하기" onClick={TempBack}>이어서 작성하기</Button>
                </Modal>
                : null
            }
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
                <Button name="임시저장" onClick={TempSave} disabled={tempState}>{submitCount >= 1 ? `잠시만 기다려주세요...` : `임시저장`}</Button>
                <Button name="제출하기" onClick={Back}>{submitCount >= 1 ? `잠시만 기다려주세요...` : `뒤로가기`}</Button>
                <Button name="제출하기" onClick={PartHistoy} disabled={buttonState}>{submitCount >= 1 ? `잠시만 기다려주세요...` : `파트별 문항 작성하기`}</Button>
            </ButtonBox>
        </Section>
    )
}
