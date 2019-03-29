import React, { useState, useEffect } from 'react';
import ParticleField from 'react-particles-webgl';
import { config } from '../../core/particlesConfig';
import styled, { keyframes } from 'styled-components';
import { Link } from '../../components/Link/Link';

const floatingLogo = `${process.env.PUBLIC_URL}/floating-logo.svg`;

const floatingTree1 = `${process.env.PUBLIC_URL}/floating-tree1.svg`;
const floatingTree2 = `${process.env.PUBLIC_URL}/floating-tree2.svg`;
const floatingTurtle = `${process.env.PUBLIC_URL}/floating-turtle.svg`;
const floatingRocket = `${process.env.PUBLIC_URL}/floating-rocket.svg`;
const floatingAstronaut = `${process.env.PUBLIC_URL}/floating-astronaut.svg`;
const floatingPlanet = `${process.env.PUBLIC_URL}/floating-planet.svg`;

const floaterList = [
    floatingTree1,
    floatingTree2,
    floatingTurtle,
    floatingRocket,
    floatingAstronaut,
    floatingPlanet
];

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    pointer-events: none;
    flex-direction: column;
`

const LandingBanner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

const BannerContent = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: 'logo bannerstuff';
`
const float = keyframes`
    0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
`

const FloatingLogo = styled.img`
    grid-area: logo;
    margin-right: 5rem;
    width: 30rem;
    animation: ${float} 4s infinite;
`

const BannerTitle = styled.h1`
    pointer-events: auto;
    margin: 0;
    grid-area: title;
    font-size: 9em;
`

const BannerDate = styled.h2`
    pointer-events: auto;
    margin: 0;
    grid-area: date;
    font-size: 4.5em;
`

const BannerLocation = styled.h3`
    pointer-events: auto;
    margin: 0;
    grid-area: location;
    font-size: 3.5em;
`

const BannerActions = styled.div`
    margin-top: 2rem;
    pointer-events: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const Gap = styled.div`
    width: 1rem;
    height: 100%;
`

const Art = styled.img`
    position: absolute;
    width: ${(props: any) => `${props.imgSize}rem`}; 
    height: auto;
    top: ${(props: any) => `${props.top}%`};
    left: ${(props: any) => `${props.left}%`};
    animation: ${float} 4s infinite; 
    animation-delay: ${(props: any) => `-${props.delay}s`};
`

interface BackgroundFloatersProps {
    className: string;
}

function BackgroundFloaters(props: BackgroundFloatersProps) {
    const [floaters, setFloaters] = useState(['']);
    function getRandomFloaters() {
        const shuffled = floaterList.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 3);
        setFloaters(selected);
    }
    useEffect(() => {
        getRandomFloaters();
    }, []);
    return (
        <div className={props.className}>
            <Art src={floaters[0]} delay={2} imgSize={15} top={16} left={84} />
            <Art src={floaters[1]} delay={3} imgSize={12} top={68} left={70} />
            <Art src={floaters[2]} delay={1} imgSize={8} top={30} left={7} />
        </div>
    );
}

const StyledBackgroundFloaters = styled(BackgroundFloaters)`
    overflow: hidden;
    pointer-events: auto;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

const ParticleWrapper = styled.div`
    width: 100%;
    height: 100vh;
`

const BannerStuff = styled.div`
    grid-area: bannerstuff;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

function Index() {
    return (
        <>
            <ParticleWrapper>
                <ParticleField config={config} />
            </ParticleWrapper>
            <StyledBackgroundFloaters />
            <Content>
                <LandingBanner>
                    <BannerContent>
                        <FloatingLogo src={floatingLogo} />
                        <BannerStuff>
                            <BannerTitle>JavaZone 2019</BannerTitle>
                            <BannerDate>September 11th - 12th</BannerDate>
                            <BannerLocation>Oslo Spektrum, Norway</BannerLocation>
                            <BannerActions>
                                <Link color="red" url="/tickets">Get your ticket</Link>
                                <Gap />
                                <Link color="blue" url="/speakers">Call for speakers</Link>
                            </BannerActions>
                        </BannerStuff>
                    </BannerContent>
                </LandingBanner>
            </Content>
        </>
    )
}

export default Index;

