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
  width: 158px;
  padding: 12px 20px;
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

const districts = ["중구", "서구", "동구", "영도구", "부산진구", "동래구", "남구", "북구", "해운대구", "사하구", "금정구", "강서구", "연제구", "수영구", "사상구", "기장군"];

const TravelList = ({ onDistrictsChange }) => {
  const [selectedDistricts, setSelectedDistricts] = useState([]);

  const handleDistrictClick = (district) => {
    setSelectedDistricts(prev => {
      const newSelection = prev.includes(district) ? prev.filter(d => d !== district) : [...prev, district];
      onDistrictsChange(newSelection); 
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
    {districts.map((district, index) => (
        <DistrictButton
          key={index}
          selected={selectedDistricts.includes(district)}
          onClick={() => handleDistrictClick(district)}
        >
          {district}
        </DistrictButton>
      ))}
    </TravelListContainer>
  );
};

export default TravelList;
