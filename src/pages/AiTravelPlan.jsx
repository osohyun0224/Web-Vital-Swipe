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
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [selectedHowManys, setSelectedHowManys] = useState([]);
  const [selectedFavorite, setSelectedFavorite] = useState([]);
  const [selectedReason, setSelectedReason] = useState([]);
  const [selectedThema, setSelectedThema] = useState([]);

  const handleNext = () => {
    if (selectedDistricts.length || selectedHowManys.length > 0) {
      setActiveIndex((prev) => (prev + 1) % 5);
    }
  };

 console.log("구는 뭐선택함",selectedDistricts)
 console.log("얼마나 방문",selectedHowManys)
 console.log("뭐좋아함",selectedFavorite)
 console.log("여행 이유", selectedReason)
 console.log("테마 선택", selectedThema)

  return (
    <div>
      <Header/>
      <HeaderProgressiveBar activeIndex={activeIndex} />
      {activeIndex === 0 && <FirstQuestion onDistrictsChange={setSelectedDistricts} />}
      {activeIndex === 1 && <SecondQuestion
      onHowManyChange={setSelectedHowManys} />}
      {activeIndex === 2 && <ThridQuestion
      onFavoriteChange={setSelectedFavorite} />}
      {activeIndex === 3 && <FourQuestion 
      onReasonChange={setSelectedReason} />}
      {activeIndex === 4 && <FiveQuestion
      onThemaChange={setSelectedThema}  />}
      <ButtonContainer
        onClick={handleNext}
        style={{
          background: selectedDistricts.length > 0 ? 'var(--primary-secondary-color-primary, #fe720c)' : 'var(--Gray-Scale-Gray-200, #F3F3F7)',
          color: selectedDistricts.length > 0 ? '#FFFFFF' : 'var(--Gray-Scale-Gray-700, #50535C)',
          cursor: selectedDistricts.length > 0 ? 'pointer' : 'not-allowed'
        }}
      >
        다음
      </ButtonContainer>
      <NavigationBar />
    </div>
  );
};

export default AiTravelPlan;