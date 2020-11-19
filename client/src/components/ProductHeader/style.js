import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';

export const Breadcrumbs = styled.div`
    color: ${lightGray};
    font-size: 12px;
    padding: 4px 4px;

    .divider {
        margin: 0 0.2rem;
    }
`;

export const ProductName = styled.h1`
    font-size: 23px;
    line-height: 1.25;
    margin-top: 4px;
    margin-bottom: 4px;
`;