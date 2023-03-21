import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
`

export const Hero = styled.img`
    max-height: 104px;
    max-width: 312px;
    @media screen and (min-width: 1440px) {
        display: none;
    }
`
export const HeroDesctop = styled.img`
    display: none;
    @media screen and (min-width: 1440px) {
        display: inline-flex;
        min-height:200px;
        min-width:500px;
    }
`


