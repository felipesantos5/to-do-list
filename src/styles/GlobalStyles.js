import styled from "styled-components";

export const Paper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  min-height: 700px;
  padding: 22px;
  margin: auto;

  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 46px;
  margin-bottom: 22px;
  font-weight: 800;
  font-family: "Roboto", sans-serif;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 26px;

  input {
    width: 224px;
    height: 40px;

    text-align: center;

    padding: 8px 24px;

    background: #ffffff;
    mix-blend-mode: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 10px;
  }

  .button-submit {
    height: 60px;
    width: 124px;

    background: #7066e0;
    mix-blend-mode: normal;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    cursor: pointer;

    &:focus {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }
`;

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  color: white;
  margin-bottom: 16px;

  background: ${(props) => (props.checked ? "#7066e0" : "#FFFFFF")};
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;

  padding: 20px;

  p {
    max-width: 320px;
    word-wrap: break-word;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 18px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
