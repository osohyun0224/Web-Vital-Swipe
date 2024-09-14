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
  height:66px;
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

const reasons = ["일상에서 벗어나 되돌아 볼 기회를 가지고 싶어요", "요즘 너무 바빠 몸과 마음의 재충전이 필요해요", "새로운 역사 및 문화를 배우고 싶어요/경험하고 싶어요", "특별한 추억을 담아 사진에 남기고 싶어요", "특별한 날을 기념하기 위해 여행을 계획 중이에요"];

const FourQuestion = ({ onReasonChange }) => {
  const [selectedReason, setSelectedReason] = useState(null);

  const handleDistrictClick = (reason) => {
    setSelectedReason(reason);
    onReasonChange(reason);
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
      {reasons.map((reason, index) => (
        <DistrictButton
          key={index}
          selected={selectedReason === reason}
          onClick={() => handleDistrictClick(reason)}
        >
          {reason}
        </DistrictButton>
      ))}
    </TravelListContainer>
  );
};

export default FourQuestion;
