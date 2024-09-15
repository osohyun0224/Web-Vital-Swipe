import styled from "styled-components";
import { useState } from "react";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
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

const howmanys = ["부산은 처음 방문해요", "부산을 인터넷으로는 몇 번 봤어요", "부산에 가본 적은 있지만 꽤 오래전이에요", "부산의 유명한 곳들은 거의 가봤어요", "부산은 저에게 제 2의 고향이에요."];

const SecondQuestion = ({ onHowManyChange }) => {
  const [selectedHowMany, setSelectedHowMany] = useState(null);

  const handleDistrictClick = (howmany) => {
    setSelectedHowMany(howmany);
    onHowManyChange(howmany);
  };

  return (
    <TravelListContainer>
      <IntroContainer>
        <IntroText>어떤 여행 계획을 세워볼까요?</IntroText>
        <QuestionText>
          부산에서 어떤 곳을 <br />
          여행가고 싶으신가요?
        </QuestionText>
      </IntroContainer>
      {howmanys.map((howmany, index) => (
        <DistrictButton
          key={index}
          selected={selectedHowMany === howmany}
          onClick={() => handleDistrictClick(howmany)}
        >
          {howmany}
        </DistrictButton>
      ))}
    </TravelListContainer>
  );
};

export default SecondQuestion;
