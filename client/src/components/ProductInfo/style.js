import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const superLightGray = 'rgb(244, 244, 244)'
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';
const starYellow = 'rgb(255, 215, 0)';

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2rem;
`;

export const Container = styled.div`
  display: flex;
`;

export const Button = styled.a`
  font-size: 12px;
`;

export const Price = styled.span`
  ${props => props.sale && `color: ${targetRed}`};
  font-size: 29px;
  font-weight: bold;
  margin: 0;
`;

export const SaleText = styled.span`
  color: ${targetRed};
  /* display: flex; */
  /* align-items: flex-end; */
  /* line-height: 1rem; */

  .sale {
    font-size: 23px;
    margin-left: 0.2rem;
  }
  .date {
    font-size: 14px;
    margin-left: 0.1rem;
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
  margin-bottom: 1rem;

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

  .questions-link {
    border-left: 1px solid ${lightGray};
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

export const Select = styled.div`
  position: relative;
  width: 30%;

  .quantity-select {
    padding: 0.75rem 0.5rem;
    width: 100%;
  }
  .quantity-select:hover {
    background-color: ${superLightGray}
  }
`;

export const SelectLabel = styled.h4`
  position: absolute;
  font-size: 14px;
  text-align: center;
  top: -7px;
  left: 50%;
  transform: translate(-50%, -10%);

  background-color: white;
`;