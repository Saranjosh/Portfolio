import React from "react";
import Typewriter from 'typewriter-effect';
import Image from '../../images/Img.jpg'
import { Bio } from '../../data/constants';
import IntroBgAnimation from '../IntroBgAnimation'
import { IntroContainer, IntroBg, IntroLeftContainer, Img, IntroRightContainer, IntroInnerContainer, TextLoop, Title, Span, SubTitle,ResumeButton } from './IntroStyle'

const Intro = () => {
    return (
        <div id="about">
            <IntroContainer>
                <IntroBg>
                    <IntroBgAnimation />
                </IntroBg>
                <IntroInnerContainer >
                    <IntroLeftContainer id="Left">
                        <Title>Hi👋, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </IntroLeftContainer>

                    <IntroRightContainer id="Right">

                        <Img src={ Image } alt="my-image" />
                    </IntroRightContainer>
                </IntroInnerContainer>

            </IntroContainer>
        </div>
    )
}
export default Intro;