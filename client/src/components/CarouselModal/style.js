import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';
const superLightGray = 'rgb(244, 244, 244)'

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: white;

  .topRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 4rem;
    height: 88%;
  }

  .fa-times-circle {
    position: fixed;
    top: 3rem;
    right: 4rem;
  }
  .fa-times-circle:hover {
    cursor: pointer;
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

export const Thumbnail = styled.div`
    margin: 0 5px;
    border: ${props => props.selected ? '2px' : '1px'} solid ${lightGray};
    overflow: hidden;
    height: 7.7vh;
    width: 5%;
    opacity: ${props => props.selected ? '1' : '0.25'};
    cursor: ${props => props.selected ? 'default' : 'pointer'};

    background-image: url("${props => props.image}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${props => props.image ? 'transparent' : superLightGray};

    display: flex;
    justify-content: center;
    align-items: center;

    .share-pic-text {
      font-size: 8px;
      font-weight: bold;
      color: black;
    }

`;

export const MainImage = styled.div`
  height: 100%;
  min-width: 40%;
  max-width: 80%;

  background-image: url("${props => props.image}");
  background-color: ${props => props.image ? 'transparent' : superLightGray};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const PhotoUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .photo-upload--text {
    margin: 0 10rem;
  }
  .photo-upload--button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    background-color: white;
    padding: 0.6rem;
    border: 1px solid ${lightGray};
    border-radius: 3px;
    cursor: pointer;
  }
  .photo-upload--button:hover {
    background-color: ${superLightGray};
  }
  .camera-icon {
    margin-right: .6rem;
  }
`;