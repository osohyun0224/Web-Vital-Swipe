import styled from "styled-components";
import { useState } from "react";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IntroText = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333b);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;

const QuestionText = styled.div`
  margin-top:10px;
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
  width: 48%;
  height: 46px;
  padding: 12px 20px;
  gap: 10px;
  flex-shrink: 0;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${({ selected }) => selected ? 'var(--primary-secondary-color-primary, #FE720C)' : 'var(--Gray-Scale-Gray-100, #FAFAFA)'};
  color: ${({ selected }) => selected ? '#FFFFFF' : 'var(--Gray-Scale-Gray-700, #50535C)'};
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  border: none;
`;

const themas = ["쇼핑하기", "테마파크 놀러가기", "역사 유적지 구경", "야외 활동 즐기기", "지역 문화공연 관람", "힐링과 휴식", "지역 축제 참여", "다양한 체험 프로그램", "촬영지 방문하기", "웰니스 여행 즐기기", "SNS 인생샷 남기기", "호캉스 즐기기", "새로운 여행지", "인플루언서 추천코스", "친환경 여행"];

const FiveQuestion = ({ onThemaChange }) => {
  const [selectedThema, setSelectedThema] = useState([]);

  const handleDistrictClick = (thema) => {
    setSelectedThema(prev => {
      const newSelection = prev.includes(thema) ? prev.filter(d => d !== thema) : [...prev, thema];
      onThemaChange(newSelection); 
      return newSelection;
    });
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
    {themas.map((thema, index) => (
        <DistrictButton
          key={index}
          selected={selectedThema.includes(thema)}
          onClick={() => handleDistrictClick(thema)}
        >
          {thema}
        </DistrictButton>
      ))}
    </TravelListContainer>
  );
};

export default FiveQuestion;
