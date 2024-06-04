import styled from "styled-components";

export const EditStyle = styled.div`
  h1 {
    text-align: center;
    font-size: 35px;
    color: black;
  }
`;

export const FormContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 600px;
  margin: 30px auto 0;
  padding: 20px;
  border-radius: 5px;
`;

export const StyledInput = styled.input`
  width: 96%;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 20px;
  font-size: 15px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: white;
  color: black;

  &:focus {
    border: 2px solid #7d92f9;
    outline: none;
  }
`;

const FileInput = styled.input`
  position: relative;
`;

export const FileSelectorButton = styled.span`
  width: 136px;
  color: transparent;
`;

export const StyledFileInput = styled(FileInput)`
  width: 96%;
  
  &::before {
    position: absolute;
    pointer-events: none;
    top: 10px;
    left: 16px;
    height: 20px;
    width: 20px;
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230964B0'%3E%3Cpath d='M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z'/%3E%3C/svg%3E");
  }

  &::after {
    position: absolute;
    pointer-events: none;
    top: 14px;
    left: 40px;
    color: #0964b0;
    content: "Upload File";
  }

  &::file-selector-button {
    border-radius: 4px;
    padding: 0 27px;
    height: 40px;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.16);
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
    margin-right: 16px;
    transition: background-color 200ms;

    &:hover {
      background-color: #f3f4f6;
    }

    &:active {
      background-color: #e5e7eb;
    }
  }
`;

export const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
