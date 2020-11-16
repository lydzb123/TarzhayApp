import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';

// const ProductImagesViewerStyles = styled.div`
//     display: flex;
//     /* max-width: 700px; */
//     max-width: 50%;

//     img {
//         object-fit: contain;
//     }

//     .productImagesViewer {
//         display: flex;
//         justify-content: space-between;
//     }

//     .productImagesViewer--thumbnails {
//         display: flex;
//         flex-direction: column;
//         border: 1px red;
//         flex-basis: 16.6667%;
//         max-width: 16.6667%;
//         margin-right: 6px;
//         padding-left: 12px;
//     }

//     .productImagesViewer--thumbnail {
//         margin: 3px 2px 2px 1px;
//         border: 1px solid ${lightGray};
//         overflow: hidden;
//         min-height: 74px;
//         max-height: 111.5px;
//         height: 7.7vh;
//         /* height: 106px; */
//         width: 100%;

//     }

//     .productImagesViewer--mainImage {
//         flex: auto;
//         margin: 3px 2px 2px 1px;
//         /* width: 400px:
//         height: 300px; */
//         position: relative;
//     }

//     .zoomLens {
//         position: absolute;
//         border: 1px solid #d4d4d4;
//         /*set the size of the lens:*/
//         width: 40px;
//         height: 40px;
//     }

//     .mainImage {
//         /* width: 100%;
//         object-fit: contain; */
//         width: 300px;
//         height: 240px;
//         background-image: url(${props => props.imageUrl});
//         background-position: center;
//         background-size: cover;

//         transition: all 0.5s;
//     }
//     /* .mainImage:hover {
//         transform: scale(1.5);
//         cursor: crosshair;
//     } */

//     .zoomImage {
//         border: 1px solid #d4d4d4;
//         /*set the size of the result div:*/
//         width: 300px;
//         height: 300px;
//     }
// `

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Thumbnails = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px red;
    flex-basis: 16.6667%;
    max-width: 16.6667%;
    margin-right: 6px;
    padding-left: 12px;
`;

export const Thumbnail = styled.img`
    margin: 3px 2px 2px 1px;
    border: 1px solid ${lightGray};
    overflow: hidden;
    min-height: 74px;
    max-height: 111.5px;
    height: 7.7vh;
    /* height: 106px; */
    width: 100%;
`;

export const MainImageContainer = styled.div`
    flex: auto;
    margin: 3px 2px 2px 1px;
    /* width: 400px:
    height: 300px; */
    position: relative;
`;

export const ZoomLens = styled.div`
    position: absolute;
    border: 1px solid #d4d4d4;
    /*set the size of the lens:*/
    width: 40px;
    height: 40px;
    &:hover {
        /* transform: scale(1.5); */
        cursor: crosshair;
    }
`;

export const MainImage = styled.img`
    /* width: 100%;
    object-fit: contain; */
    width: 300px;
    height: 240px;


    &:hover {
        /* transform: scale(1.5); */
        cursor: crosshair;
    }
`;

export const ZoomedImage = styled.div`
    /*set the size of the result div:*/
    width: 300px;
    height: 300px;
    background-image: url(${props => props.imageUrl});
    background-position: center;
    background-size: cover;
`;

// export default ProductImagesViewerStyles;