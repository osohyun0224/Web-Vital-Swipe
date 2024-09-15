import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import places from "../api/place-api";
import PlaceItem from "../components/PlaceItem";
import MyPageHeader from "../components/MyPageHeader";

const AiCourseContainer = styled.div`
  margin-top: 20px;
`;

const IntroText = styled.div`
  text-align: center;
  color: var(--Gray-Scale-Gray-800, #30333b);
  top: 40%;
  transform: translateY(-40%);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const IntroTitle = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333b);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const SaveCourse = () => {


  return (
    <div>
      <MyPageHeader title="저장한 AI 코스" />
      <AiCourseContainer>
        <IntroText>새로운 여행의 기준</IntroText>
        <IntroTitle>해운대 AI 여행 코스</IntroTitle>
      </AiCourseContainer>
      <CardsContainer>
        {places.map(place => (
          <PlaceItem key={place.id} place={place} />
        ))}
      </CardsContainer>
      <NavigationBar />
    </div>
  );
};

export default SaveCourse;
