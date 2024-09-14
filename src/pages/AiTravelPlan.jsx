import styled from "styled-components";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import HeaderProgressiveBar from "../components/HeaderProgressiveBar";
import FirstQuestion from "../components/FirstQuestion";
import SecondQuestion from "../components/SecondQuestion";
import ThridQuestion from "../components/ThridQuestion";
import FourQuestion from "../components/FourQuestion";
import FiveQuestion from "../components/FiveQuestion";

const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  padding: 12px 73px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--primary-secondary-color-primary, #fe720c);
  color: var(--basic-system-color-white, #fff);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const AiTravelPlan = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % 5);
  };

  return (
    <div>
      <Header/>
      <HeaderProgressiveBar activeIndex={activeIndex} />
      {activeIndex === 0 && <FirstQuestion />}
      {activeIndex === 1 && <SecondQuestion />}
      {activeIndex === 2 && <ThridQuestion/>}
      {activeIndex === 3 && <FourQuestion />}
      {activeIndex === 4 && <FiveQuestion />}
      <ButtonContainer onClick={handleNext}>
        다음
      </ButtonContainer>
      <NavigationBar />
    </div>
  );
};

export default AiTravelPlan;
