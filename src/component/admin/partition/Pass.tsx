import React from 'react'
import { Content, Header, List, NotData, Section } from '../emotion/component'
import { Position, PositionBox } from '../emotion/component';
import { frontendDummy, backendDummy, designDummy } from './dummy';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { Loading } from '../../emotion/component';
import { userType } from './Type';

export default function Pass() {

    const [position, setPosition] = useState<string>('백엔드');
    const [currentLocation, setCurrentLocation] = useState('');
    const location = useLocation();
    const [frontend, setFrontend] = useState<[]>([]);
    const [backend, setBackend] = useState<[]>([]);
    const [design, setDesign] = useState<[]>([]);
    const [backendState, setBackendState] = useState<boolean | null>(true);
    const [frontendState, setFrontendState] = useState<boolean | null>(true);
    const [designState, setDesignState] = useState<boolean | null>(true);

    useEffect(() => {
        axios.get('/backendApplication/getApplications?bool=true')
            .then((res) => {
                setBackend(res.data);

                if (res.data.length < 1) {
                    setBackendState(false);
                } else {
                    setBackendState(null);
                }
            })

        setCurrentLocation(() => {
            return location.pathname;
        })
    }, [])

    function CheckPosition(event: React.MouseEvent<HTMLButtonElement>): void {
        const name = (event.target as HTMLButtonElement).name;
        setPosition(name);

        if (name === "백엔드") {
            axios.get('/backendApplication/getApplications?bool=true')
                .then((res) => {
                    console.log(res);
                    setBackend(res.data);

                    if (res.data.length < 1) {
                        setBackendState(false);
                    } else {
                        setBackendState(null);
                    }
                })
        }

        if (name === "프론트엔드") {
            axios.get('/frontendApplication/getApplications?bool=true')
                .then((res) => {
                    console.log(res);
                    setFrontend(res.data);

                    if (res.data.length < 1) {
                        setFrontendState(false);
                    } else {
                        setFrontendState(null);
                    }
                })
        }

        if (name === "디자인") {
            axios.get('/designApplication/getApplications?bool=true')
                .then((res) => {
                    console.log(res);
                    setDesign(res.data);

                    if (res.data.length < 1) {
                        setDesignState(false);
                    } else {
                        setDesignState(null);
                    }
                })
        }

    }

    return (
        <>
            <Header path={location.pathname} />
            <Content>
                <PositionBox>
                    <Position name="백엔드" onClick={CheckPosition} state={position}>백엔드</Position>
                    <Position name="프론트엔드" onClick={CheckPosition} state={position}>프론트엔드</Position>
                    <Position name="디자인" onClick={CheckPosition} state={position}>디자인</Position>
                </PositionBox>
                <List name="이름" position="지원분야" department="학과" id="학번" email="이메일" />
                {/* 백엔드 로직 */}
                {position === '백엔드' && backendState && <Loading />}
                {position === '백엔드' && backend.length >= 1 && backend.map((item: userType) => {
                    return (
                        <List name={item.name} position={position} department={item.department} id={item.sid} email={item.email} />
                    )
                })}
                {position === '백엔드' && backendState === false && <NotData />}

                {/* 프론트엔드 로직 */}
                {position === '프론트엔드' && frontendState && <Loading />}
                {position === '프론트엔드' && frontend.length >= 1 && frontend.map((item: userType) => {
                    return (
                        <List name={item.name} position={position} department={item.department} id={item.sid} email={item.email} />
                    )
                })}
                {position === '프론트엔드' && frontendState === false && <NotData />}

                {/* 디자인 로직 */}
                {position === '디자인' && designState && <Loading />}
                {position === '디자인' && design.length >= 1 && design.map((item: userType) => {
                    return (
                        <List name={item.name} position={position} department={item.department} id={item.sid} email={item.email} />
                    )
                })}
                {position === '디자인' && designState === false && <NotData />}
            </Content>
        </>
    )
}
