import styled from "styled-components";
import { useState } from "react";

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

const DistrictButton = styled.button`
  display: flex;
  padding: 12px 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${({ selected }) => selected ? 'var(--primary-secondary-color-primary, #FE720C)' : 'var(--Gray-Scale-Gray-100, #FAFAFA)'};
  color: ${({ selected }) => selected ? '#FFFFFF' : 'var(--Gray-Scale-Gray-700, #50535C)'};
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  border: none;
`;

const ages = ["10대", "20대", "30대", "40대 이상"];

const FirstQuestion = ({ onAgeChange }) => {
  const [selectedAge, setSelectedAge] = useState(null);

  const handleAgeClick = (age) => {
    setSelectedAge(age);
    onAgeChange(age);
  };

  return (
    <TravelListContainer>
      <IntroContainer>
        <IntroText>나만의 여행 프로필을 만들어볼까요?</IntroText>
        <QuestionText>
          나이를 알려주세요
        </QuestionText>
      </IntroContainer>
      {ages.map((age, index) => (
        <DistrictButton
          key={index}
          selected={selectedAge === age}
          onClick={() => handleAgeClick(age)}
        >
          {age}
        </DistrictButton>
      ))}
    </TravelListContainer>
  );
};

export default FirstQuestion;
