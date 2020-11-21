import styled from "styled-components";

const targetRed = 'rgb(204, 0, 0)';
const lightGray = 'rgb(102, 102, 102)';
const darkGray = 'rgb(51, 51, 51)';
const darkGreen = 'rgb(0, 102, 1)';
const warningOrange = 'rgb(184, 83, 0)';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 70px;

  color: white;
  background-color: ${targetRed};

  .nav-links {
    margin-right: 1rem;
    padding-top: 3px;
  }


  .icon {
    fill: white;
  }
  .icon:hover {
    cursor: pointer;
  }

  .logo {
    margin: 0.8rem 1rem;
  }

  .sign-in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sign-in:hover {
    cursor: pointer;
  }

  .left-group,
  .right-group {
    display: flex;
    align-items: center;
  }
  .left-group {
    font-weight: bold;
    font-size: 16px;
  }
  .right-group {
    font-size: 12px;
  }
  .right {
    margin-right: 1.5rem;
  }
`;

export const NavLinks = styled.div`
  margin-right: 1rem;
  padding-top: 3px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .fa-chevron-down {
    font-size: 12px;
    margin-left: 0.5rem;
  }
`;

export const SearchBar = styled.div`
  position: relative;

  .search-bar--input {
    width: 30rem;
    border: none;
    border-radius: 30px;
    height: 2.2rem;
    padding: 10px 72px 10px 16px;
    color: ${darkGray};
  }

  .search-bar--button {
    position: absolute;
    right: 0;
    border: none;
    border-radius: 0 30px 30px 0;
    height: 2.2rem;
    padding: 10px 12px 10px 10px;
  }
`;