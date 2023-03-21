import styled from "styled-components";

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

    cursor: pointer;

    @media screen and (min-width: 1440px) {
        min-width:1020px ;
    }
`;
export const InputSearch = styled.input`
    border: none;
`
