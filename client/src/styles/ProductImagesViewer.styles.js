import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';

const ProductImagesViewerStyles = styled.div`
    display: flex;
    /* max-width: 700px; */
    max-width: 50%;

    img {
        object-fit: contain;
    }

    .productImagesViewer {
        display: flex;
        justify-content: space-between;
    }

    .productImagesViewer--thumbnails {
        display: flex;
        flex-direction: column;
        border: 1px red;
        flex-basis: 16.6667%;
        max-width: 16.6667%;
        margin-right: 6px;
        padding-left: 12px;
    }

    .productImagesViewer--thumbnail {
        margin: 3px 2px 2px 1px;
        border: 1px solid ${lightGray};
        overflow: hidden;
        min-height: 74px;
        max-height: 111.5px;
        height: 7.7vh;
        /* height: 106px; */
        width: 100%;

    }

    .productImagesViewer--mainImage {
        flex: auto;
        margin: 3px 2px 2px 1px;
    }

    .mainImage {
        width: 100%;
    }
`

export default ProductImagesViewerStyles;