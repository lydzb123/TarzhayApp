import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';

export const Container = styled.div`
    display: flex;
    /* justify-content: center; */
    border: 1px solid red;
    width: 60%;
`;

export const Thumbnails = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 6px;
    /* padding-left: 12px; */
`;

export const Thumbnail = styled.div`
    margin: 3px 2px 2px 0px;
    border: 1px solid ${lightGray};
    height: 100px;
    width: 100px;

    background-image: url("${props => props.imageURL}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &:hover {
        cursor: pointer;
    }

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
    margin: 3px 2px 2px 1px;
    width: 100%;
    height: 100%;
    position: relative;

    overflow: hidden;
    &:hover {
        border: 1px solid ${darkGray};
    }
`;

export const ZoomLens = styled.div`
    position: absolute;
    /* border: 1px solid #d4d4d4; */
    width: 100px;
    height: 100px;
    &:hover {
        cursor: crosshair;
    }
`;

export const MainImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;
    width: 525px;
    height: 525px;

    &:hover {
        cursor: crosshair;
        opacity: 0;
    }
`;

export const ZoomedImage = styled.div`
    width: 525px;
    height: 525px;
    background-image: url(${props => props.imageUrl});


    &:hover {
        cursor: crosshair;
        opacity: 1;
    }
`;