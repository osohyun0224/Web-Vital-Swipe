import styled from "styled-components";
import { useState } from "react";
import IconMinus from "../../assets/images/ico-minus.svg";
import IconPlus from "../../assets/images/ico-plus.svg";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;
`;

const IntroText = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333b);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;

const QuestionText = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
  color: var(--Gray-Scale-Gray-800, #30333b);
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
`;

const TravelListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const ChoiceHowMany = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NumberDisplay = styled.div`
  color: var(--Text-Gray-800, #30333B);
  text-align: center;
  font-family: Pretendard;
  font-size: 80px;
  font-weight: 600;
  line-height: normal;
  margin: 0 20px; // Adjust spacing around the number as needed
`;

const IconButton = styled.img`
  cursor: pointer;
`;

const SecondQuestion = ({ onHowManyChange }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
      onHowManyChange(count + 1);
    } else {
      alert("최대 인원은 5명이예요");
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      onHowManyChange(count - 1);
    }
  };

  return (
    <TravelListContainer>
      <IntroContainer>
        <IntroText>나만의 여행 프로필을 만들어볼까요?</IntroText>
        <QuestionText>여행 인원을 알려주세요</QuestionText>
      </IntroContainer>
      <ChoiceHowMany>
        <IconButton src={IconMinus} alt="Minus" onClick={handleDecrement} />
        <NumberDisplay>{count}</NumberDisplay>
        <IconButton src={IconPlus} alt="Plus" onClick={handleIncrement} />
      </ChoiceHowMany>
    </TravelListContainer>
  );
};

export default SecondQuestion;
