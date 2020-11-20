import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';

export const Container = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  top: 25px;
  left: -100%;

  overflow: visible;
  padding: 1rem 0.75rem;

  border: 1px solid ${darkGray};
  border-radius: 3px;
  background-color: white;
  color: ${lightGray};

  width: ${props => props.width}px;
  height: ${props => props.height}px;

  .header {
    margin-bottom: 0.5em;
  }

  .reviews-link {
    margin-top: 2em;
  }

  .pointer {
    position: absolute;
    top: -1.6rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-top: 1px solid ${darkGray};
    border-left: 1px solid ${darkGray};
    height: 1rem;
    width: 1rem;
    background-color: white;
    transform: rotate(45deg);
  }
`;

export const Row = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 2em;

  .avg-rating {
    margin-right: 0.5rem;
  }

`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
`;

export const StarBar = styled(Row)`
  width: ${props => props.width}px;
  align-items: center;
  margin-bottom: 0.2rem;

  span:hover {
    text-decoration: underline;
  }

  .left,
  .right {
    text-align: left;
  }

  .left {
    width: 12%;
  }

  .gray-bar {
    background-color: rgb(247, 247, 247);
    width: 70%;
    height: 6px;
    border-radius: 20px;
    margin: 0 1rem 0 0;
  }
  .green-bar {
    background-color: ${darkGreen};
    width: ${props => props.percent}%;
    height: 100%;
    border-radius: 20px;
  }
`;

