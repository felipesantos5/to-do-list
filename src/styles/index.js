import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 22px 24px;

  @media (max-width: 400px) {
    margin: 0;
  }
`;

export const Paper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 500px;
  min-height: 700px;
  padding: 22px;
  margin: auto;
  margin-botton: 20px;

  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (max-width: 400px) {
    padding: 22px 0;
    height: 100vh;
  }
`;

export const Title = styled.h1`
  font-size: 46px;
  margin-bottom: 22px;
  font-weight: 800;
  font-family: "Roboto", sans-serif;

  @media (max-width: 350px) {
    font-size: 38px;
  }

  @media (max-width: 260px) {
    font-size: 32px;
  }
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;

  input {
    width: 224px;
    height: 40px;

    text-align: center;
    font-weight: 700;

    padding: 8px 24px;

    background: #f5f5f5;
    mix-blend-mode: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 10px;
  }

  .button-submit {
    height: 60px;
    width: 124px;

    font-weight: 700;

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

  @media (max-width: 545px) {
    flex-direction: column;
    gap: 16px;

    input {
      width: 100%;
      padding: 0;
      height: 60px;
    }

    .button-submit {
      width: 100%;
    }
  }

  @media (max-width: 260px) {
    input::placeholder {
      font-size: 24px;
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

  background: ${(props) => (props.checked ? "#7066e0" : "#F5F5F5")};
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;

  padding: 22px;

  p {
    max-width: 75%;
    word-wrap: break-word;
    color: ${(props) => (props.checked ? "#FFFFFF" : "#111")};
    text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  }

  @media (max-width: 540px) {
    flex-direction: column;
    gap: 14px;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 18px;

  .button-icon {
    background-color: transparent;
    border: none;
    cursor: pointer;

    width: 36px;
    height: 36px;
  }

  i {
    font-size: 36px;
  }

  @media (max-width: 540px) {
    margin: 0;
  }

  @media (max-width: 150px) {
    .button-icon {
      width: 24px;
      height: 14px;
    }

    i {
      font-size: 24px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
