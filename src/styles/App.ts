import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  input {
    width: 100%;
    padding: 8px 16px;
    border-radius: 4px;
    border: 2px solid #242424;
    background-color: #3B3138;
    color: #FFB400;
  }

  a {
    background-color: #FFB400;
    padding: 8px 32px;
    border-radius: 4px;
    color: #242424;
    text-decoration: none;
    transition: 300ms;

    &:hover {
      filter: brightness(0.8);
    }
  }
`