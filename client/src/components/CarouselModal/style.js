import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';

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
    margin: 4px 4rem;
    height: 85%;
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
`;

export const Thumbnail = styled.img`
    margin: 4px 2px;
    border: ${props => props.selected ? '2px' : '1px'} solid ${lightGray};
    overflow: hidden;
    min-height: 74px;
    max-height: 111.5px;
    height: 7.7vh;
    opacity: ${props => props.selected ? '1' : '0.25'};
`;

export const MainImage = styled.img`
  height: 100%;
  max-width: 80%;
`;

export const MainImageContainer = styled.div`
    flex: auto;
    margin: 3px 2px 2px 1px;
    /* width: 400px:
    height: 300px; */
    position: relative;
`;

