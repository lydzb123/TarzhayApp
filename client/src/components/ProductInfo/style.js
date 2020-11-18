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

export const Button = styled.a`
  font-size: 12px;
`;

export const Price = styled.h1`
  ${props => props.sale && `color: ${targetRed}`}
`;

export const SaleText = styled.span`
  color: ${targetRed};

  .sale {
    font-size: 23px;
  }
  .date {
    font-size: 14px;
  }
`;

export const Savings = styled.div`
  font-size: 12px;
  color: ${lightGray};
`;

export const Ratings = styled.div`
  display: flex;
  font-size: 12px;
  color: ${lightGray};

  .total-ratings {
    text-decoration: underline;
    color: ${lightGray};
  }
  .total-ratings:hover {
    text-decoration: none;
  }

  .ratings-button {
    position: relative;
    display: flex;
    background-color: white;
    border: none;
    cursor: pointer;
  }

  .icons {
    position: absolute;
  }
  .fa-star {
    color: ${starYellow};
  }

  i {
    display: flex;
    align-items: center;
    vertical-align: middle;
  }

  .fa-stack {
    font-size: 0.75em;
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
    display: flex;
    background: linear-gradient(90deg, ${starYellow} ${props => props.starPercent}%, gray ${props => props.starPercent}%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14px;
`;

export const QuantitySelect = styled.select`
  &:hover {
    background: lightGray;
  }
`;