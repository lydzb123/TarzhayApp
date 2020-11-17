import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';

export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: white;
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

