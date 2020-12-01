import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';

export const Container = styled.div`
    position: relative;
    display: flex;
    width: 50%;
    margin-top: 1rem;
`;

export const Thumbnails = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 6px;
    /* padding-left: 12px; */
`;

export const Thumbnail = styled.div`
    margin: 0 2px 5px 0;
    border: ${props => {
        if (props.selected) {
            return `1px solid ${lightGray}`;
        } else {
            return 'none';
        }
    }};
    cursor: ${props => props.selected ? 'default' : 'pointer'};
    height: 100px;
    width: 100px;

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
    margin: 0 2px 0 1px;
    position: relative;

    overflow: hidden;
    &:hover {
        border: 1px solid ${darkGray};
    }
`;

export const ZoomLens = styled.div`
    position: absolute;
    border: 1px solid #d4d4d4;
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
    background-color: white;
    width: 525px;
    height: 525px;
    border: 1px solid white;

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
    }
`;

export const HeartIcon = styled.span`
    position: absolute;
    bottom: 2.5rem;
    right: 2.5rem;
    font-size: 1em;

    .fa-heart {
        margin-left: -0.5px;
        margin-top: 1px;
    }
    .gray {
        color: ${darkGray};
    }
    .white {
        color: white;
    }
    .red {
        color: ${targetRed};
    }
`;