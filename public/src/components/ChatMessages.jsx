import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Picker from "emoji-picker-react";

function Messages({ handleSendMsg }) {
  const navigate = useNavigate();

  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Container>
      <div className="button-container">Messages here...</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  border-radius: 0.5rem;
  background-color: #9a86f33;
  border: none;
  cursor: pointer;
  color: white;
`;

export default Messages;
