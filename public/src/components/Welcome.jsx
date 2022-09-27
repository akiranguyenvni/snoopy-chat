import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import "react-toastify/dist/ReactToastify.css";

function Welcome({ currentUser }) {
  return (
    <>
      <Container>
        <div className="title-container">
          <img src={Robot} alt="Robot"></img>
          <h1>
            Welcome, <span>{currentUser.username}!</span>
          </h1>
          <h3>Please select a chat to Start Messaging.</h3>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #4e00ff;
  }
`;

export default Welcome;
