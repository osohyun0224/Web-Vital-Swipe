import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";


const AiCourseContainer= styled.div`
  margin-top: 240px;
`;


const ButtonContainer = styled.div`
margin-top:40px;
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
`;

const IntroText = styled.div`
  text-align: center;
  color: var(--Gray-Scale-Gray-800, #30333b);
  top: 40%;
  transform: translateY(-40%);
  /* Sub 2 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const IntroTitle = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333b);
  text-align: center;

  /* H1 */
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const AiCourse = () => {
  return (
    <div>
      <AiCourseContainer>
      <IntroText>유진님을 위한 AI 여행 추천을 준비했어요</IntroText>
      <IntroTitle>새로운 여행의 기준</IntroTitle>
      <IntroTitle>K-SWIPE AI</IntroTitle>
      <ButtonContainer>AI와 여행 계획 세워보기</ButtonContainer>
      </AiCourseContainer>
      <NavigationBar />
    </div>
  );
};

export default AiCourse;
