import styled from 'styled-components';

export const Section = styled.section`
    height: flex;
    width: 400px;
    background: rgba(255,255,255,.95);
    border-radius: 10px;
    border-right: 10px solid rgb(102 51 153);
    margin-top: 15px;

    @media (max-width: 430px) {
        width: 300px;
    } 
`