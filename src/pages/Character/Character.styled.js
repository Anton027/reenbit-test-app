import styled from "styled-components";
export const Image = styled.img`
    max-width:150px;
    margin-left: auto;
    margin-right: auto;
    border: 5px solid #F2F2F7;
    border-radius: 150px;
    margin-bottom:34px;

    @media screen and (min-width: 1440px){
        max-width:300px;
    }
`
export const Title = styled.h1`
    text-align: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;

    color: #081F32;
    @media screen and (min-width: 1440px){
        
        font-style: normal;
        font-size: 48px;
        line-height: 56px;

    /* Basic / Black */

    
    }
`
export const List = styled.ul`
    padding-left: 16px;
    display: block;

    @media screen and (min-width: 1440px) {
        margin-left: auto;
        margin-right: auto;
        max-width: 413px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

`
export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-bottom:34px;
`
export const ListItem = styled.li`
    border-bottom:1px solid rgba(33, 33, 33, 0.08); 
    /* padding: 9px 12px 16px ; */
    padding-top: 9px;
    padding-bottom: 12px;
`
export const Container = styled.section`
    gap: 34px;
    padding-left: 24px;
    padding-right: 24px;
`
export const Info = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #081F32;
`
export const Descript = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    letter-spacing: 0.25px;

    color: #6E798C;

`
export const ListTitle = styled.p`
    font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;

display: flex;
align-items: center;
letter-spacing: 0.15px;

color: #8E8E93;

    @media screen and (min-width: 1440px) {
        display: flex;
        justify-content: center;
    }

`