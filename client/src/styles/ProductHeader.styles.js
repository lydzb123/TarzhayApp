import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';

const ProductHeaderStyles = styled.div`
    .productHeader--breadcrumbs {
        color: ${lightGray};
        font-size: 12px;
        padding: 4px 4px;
    }

    .productHeader--crumb:hover {
        text-decoration: none;
    }

    .productHeader--productName {
        font-size: 23px;
        line-height: 1.25;
        margin-bottom: 4px;
    }

    .productHeader--brandLink:hover {
        text-decoration: none;
    }
`;

export default ProductHeaderStyles;