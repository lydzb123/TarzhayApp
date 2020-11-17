import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';

export const Container = styled.div`
    display: flex;
    /* justify-content: space-between; */
    border: 1px solid red;
`;

export const Thumbnails = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    flex-basis: 16.6667%;
    max-width: 16.6667%;
    margin-right: 6px;
    padding-left: 12px;
`;

export const Thumbnail = styled.div`
    margin: 3px 2px 2px 1px;
    border: 1px solid ${lightGray};
    overflow: hidden;
    min-height: 74px;
    max-height: 111.5px;
    height: 7.7vh;
    /* height: 106px; */
    width: 100%;

    background-image: url("${props => props.imageURL}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    .shadowOverlay {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
    }
`;

export const DarkWrapper = styled.div`
    background-color: black;
    opacity: 0.4;
    color: white;
    align-items: center;
    justify-content: center;
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