import styled from "styled-components";
import Chatbot from "../assets/images/ico-course-chatbot.svg";
import Bookmark from "../assets/images/ico-course-bookmark.svg";
import { useNavigate } from 'react-router-dom';

const AiCourseSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const IntroSection = styled.div`
  display: flex;
  height: 100px;
  padding: 23px 19px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: var(--Gray-Scale-Gray-200, #f3f3f7);
`;

const IntroDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const IntroTitle = styled.div`
  color: var(--Text-Gray-800, #30333b);
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--basic-system-color-white, #fff);
  width: 100%;
`;

const CourseTitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CourseTitle = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333b);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CourseNumber = styled.div`
  color: var(--Text-Gray-500, #a2a5ad);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
`;

const CourseList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  background: var(--basic-system-color-white, #fff);
  padding: 20px 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.12);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AiCourseSection = () => {
  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate('/save');
  };

  return (
    <AiCourseSectionContainer>
      <IntroSection>
        <IntroDesc>유진 님을 위한 AI 여행 추천 모음집</IntroDesc>
        <IntroTitle>새로운 여행의 기준, K-SWIPE AI</IntroTitle>
      </IntroSection>
      <CourseContainer>
        <CourseTitleSection>
          <CourseTitle>저장한 AI 코스</CourseTitle>
          <CourseNumber>1</CourseNumber>
        </CourseTitleSection>
        <CourseList onClick={handleCourseClick}>
          <LeftContent>
            <img src={Chatbot} alt="챗봇 이미지" />
            해운대 AI 여행 코스
          </LeftContent>
          <img src={Bookmark} alt="북마크" />
        </CourseList>
      </CourseContainer>
    </AiCourseSectionContainer>
  );
};

export default AiCourseSection;
