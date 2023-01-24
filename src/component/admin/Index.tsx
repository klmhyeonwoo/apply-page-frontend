import React from 'react'
import { Button, Img, Input, LoginBox, Section } from './emotion/component'
import person from '../../images/admin.png';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../emotion/component';

export default function Index() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/admin/main');
    }

    return (
        <Section>
            <LoginBox>
                <Img src={person} />
                <Input placeholder='아이디를 입력해주세요' />
                <Input placeholder='비밀번호를 입력해주세요' />
                <Button onClick={handleClick}>관리자 로그인</Button>
            </LoginBox>
            <Loading />
        </Section>
    )
}
