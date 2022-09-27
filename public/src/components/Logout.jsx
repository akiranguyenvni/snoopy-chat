import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { BiPowerOff } from "react-icons/bi";

function Logout() {
  const navigate = useNavigate();

  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  border-radius: 0.5rem;
  background-color: #9a86f33;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe77ff;
  }
`;

export default Logout;
