import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';
const superLightGray = 'rgb(244, 244, 244)';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 22%;
  max-width: 25%;
  margin-top: 2rem;
`;

export const DeliveryCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: .75rem 1rem;

  margin-bottom: 0.5rem;

  width: 100%;
  max-height: 30%;
  background-color: ${superLightGray};

  .top-half {
    margin-bottom: 0.5rem;
    height: 50%;
  }

  .green {
    color: ${darkGreen};
  }

  .local-area,
  .edit-location {
    text-decoration: underline;
  }

  .title {
    align-items: flex-end;
  }

  .at-to {
    margin: 0 0.25rem;
  }
  .edit-location {
    margin-top: 0.5rem;
  }

  .main-text {
    font-size: 13px;
    margin-bottom: 0.7rem;
  }
  .edit-location,
  .sub-text {
    font-size: 11px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  .option,
  .local-area {
    font-weight: bold;
  }

  .left {
    max-width: 50%;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;

  .title {

  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 14px;

  height: 2rem;
  width: 45%;
  background-color: ${targetRed};

  margin-left: 0.75rem;
`;

export const Title = styled(Row)`
`;