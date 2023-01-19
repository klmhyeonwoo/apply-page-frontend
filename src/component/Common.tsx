import React from 'react'
import { ButtonBox, Section, Button } from './emotion/component'
import { useNavigate } from 'react-router-dom'

export default function Common() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <Section>
            <ButtonBox>
                <Button name="제출하기" onClick={handleClick}>뒤로가기</Button>
            </ButtonBox>
        </Section>
    )
}
