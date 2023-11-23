import styled from "styled-components";

export const SingUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;  
`;
export const SingUpBox = styled.div`
  width: 30rem;
  border: 1px solid #ccc;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff; 
`;
export const Title = styled.h1`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const SingUpForm = styled.form`
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;


export const Input = styled.input`
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border: 1px solid #333;
  }
`;

export const Button = styled.button`
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${(props) => props.theme['gold-500']};
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme['yellow-500']};
    color: #fcfbfb;
  }
  &:focus {
    outline: none;
  }
`;

export const CancelButton = styled.button`
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #333333;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #ca3030;
    color: #fcfbfb;
  }
  &:focus {
    outline: none;
  }
  
`;