import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;
export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-left: 24px;
    padding-right: 24px;
`
export const Image = styled.img`
    @media screen and (max-width: 767px) {
        max-width: 312px;
    }
`
export const Hero = styled.img`
    max-height: 104px;
    max-width: 312px;
`
export const ListItem = styled.div`
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
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

export const LabelSearch = styled.label`
    margin-left: auto;
    margin-right: auto;

    /* @media screen and (max-width: 767px) {
        max-width: 312px;
    } */
    min-width: 312px;
    display: inline-flex;
    align-items: center;
    padding: 16px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
`;
export const InputSearch = styled.input`
    border: none;
`