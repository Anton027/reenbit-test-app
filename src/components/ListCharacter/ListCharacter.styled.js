import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    @media screen and (min-width: 1440px) {
        max-width: 1020px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 24px;
    }
`;

export const Image = styled.img`
    min-width: 312px;
    /* @media screen and (max-width: 767px) {
       
    } */
    @media screen and (min-width: 1440px) {
        min-width:240px ;
        max-width: 240px;
    }
`

export const ListItem = styled.li`
    min-width: 312px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    &:hover,:focus{
        scale: 1.04;
    }
    @media screen and (min-width: 1440px) {
        min-width:240px;
    }
` 
export const DescriptionWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 16px;
    gap: 10px;
`

export const Name = styled.p`
    color: rgba(0, 0, 0, 0.87);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.15px;
`

export const Species = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.25px;
`
