"use client";

import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
`;

const SpinnerStyle = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #a074cf;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const Spinner: React.FC = () => <SpinnerStyle />;

export default Spinner;
