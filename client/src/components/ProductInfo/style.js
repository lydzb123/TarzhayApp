import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';
const starYellow = 'rgb(255, 215, 0)';

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
`;

export const Container = styled.div`
  display: flex;
`;

export const Link = styled.a`
  font-size: 12px;
`;

export const Price = styled.h1`
  ${props => props.sale && `color: ${targetRed}`}
`;

export const SaleText = styled.span`
  color: ${targetRed};
`;

export const Savings = styled.div`
  font-size: 12px;
`;

export const Ratings = styled.div`
  display: flex;

  .icons {
    position: absolute;
  }
  .fa-star {
    color: rgba(0, 255, 255, 0.25);
  }

  .yellowBar {
    position: absolute;
    width: 75%;
    height: 1.5rem;
    background-color: ${starYellow};
    z-index: 0;
  }
`;

export const Stars = styled.div`
    font-size: 16px;

    background: linear-gradient(90deg, ${starYellow} ${props => props.starPercent}%, gray ${props => props.starPercent}%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;