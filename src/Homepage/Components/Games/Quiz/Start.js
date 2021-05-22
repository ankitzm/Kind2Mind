import React from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';

const Intro = styled.div`
  margin: 20px 0px;
  text-align: center;
  font-size: 20px;
  padding:auto;
`;

const btnCSS = css`
    margin-top: 1.5em;
`;




const head = css`
  margin: 20px 0px;
  text-align: center;
  font-size: 60px;
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <h1 css={head}>
            Take the quiz </h1>
            <Button onClick={startQuiz} css={btnCSS}>Begin</Button>
        </Intro>
    )
}

export default Start
