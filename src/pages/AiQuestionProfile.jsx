import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import HeaderProgressiveBar from "../components/HeaderProgressiveBar";
import FirstQuestion from "../components/ProfileQuestion/FirstQuestion";
import SecondQuestion from "../components/ProfileQuestion/SecondQuestion";
import ThirdQuestion from "../components/ProfileQuestion/ThridQuestion";
import FourQuestion from "../components/ProfileQuestion/FourQuestion";

const QuestionContainer = styled.div`
  height:500px;
`;


const ButtonContainer = styled.div`
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
  box-sizing: border-box;
`;

const AiQuesionProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedHowManys, setSelectedHowManys] = useState([]);

  const [selectedRange, setSelectedRange] = useState([]);
  const [selectedTraffice, setSelecedTraffice] = useState([]);


  const navigate = useNavigate();

  const handleNext = () => {
    if (activeIndex === 3) {
      navigate('/course');
    } else if (selectedAges.length || selectedHowManys.length > 0) {
      setActiveIndex((prev) => (prev + 1) % 4);
    }
  };

  console.log("나이 뭐선택함",selectedAges)
  console.log("얼마나 방문",selectedHowManys)
  console.log("뭐좋아함",selectedRange)
  console.log("교통", selectedTraffice)

  return (
    <div>
      <HeaderProgressiveBar activeIndex={activeIndex} />
      <Header/>
      <QuestionContainer>
      {activeIndex === 0 && <FirstQuestion onAgeChange={setSelectedAges} />}
      {activeIndex === 1 && <SecondQuestion onHowManyChange={setSelectedHowManys} />}
      {activeIndex === 2 && <ThirdQuestion onRangeChange={setSelectedRange} />}
      {activeIndex === 3 && <FourQuestion onReasonChange={setSelecedTraffice} />}
      </QuestionContainer>
      <ButtonContainer
        onClick={handleNext}
        style={{
          background: selectedAges.length > 0 ? 'var(--primary-secondary-color-primary, #fe720c)' : 'var(--Gray-Scale-Gray-200, #F3F3F7)',
          color: selectedAges.length > 0 ? '#FFFFFF' : 'var(--Gray-Scale-Gray-700, #50535C)',
          cursor: selectedAges.length > 0 ? 'pointer' : 'not-allowed'
        }}
      >
        {activeIndex === 3 ? "AI 추천 코스 보러가기" : "다음"}
      </ButtonContainer>
      <NavigationBar />
    </div>
  );
};

export default AiQuesionProfile;
