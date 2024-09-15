import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import places from "../api/place-api";
import PlaceItem from "../components/PlaceItem";
import UpdateIcon from "../assets/images/ico-update.svg";
import RetryIcon from "../assets/images/ico-retry.svg";
import SaveIcon from "../assets/images/ico-save.svg";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ConfirmModal from "../components/ConfirmModal";
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

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 62px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 26px 32px;
  background: #FFF;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.07);
  z-index: 1000;
`;

const CircleButton = styled.div`
  display: flex;
  width: 78px;
  height: 78px;
  padding: 10px;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 39px;
  background: ${({ bgColor }) => bgColor};
  color: #fff;
`;

const Icon = styled.img`
  height: 24px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);  // Adjust the opacity as needed
  z-index: 1000;  // Ensure it's below the modal but above everything else
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
`;

const CourseResult = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleRetry = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleModalAction = () => {
    navigate('/ai-course');
  };

  return (
    <div>
      <AiCourseContainer>
        <IntroText>유진님을 위한 AI 여행 추천을 준비했어요</IntroText>
        <IntroTitle>새로운 여행의 기준</IntroTitle>
        <IntroTitle>K-SWIPE AI</IntroTitle>
      </AiCourseContainer>
      <CardsContainer>
        {places.map(place => (
          <PlaceItem key={place.id} place={place} />
        ))}
      </CardsContainer>
      <ButtonContainer>
      <CircleButton bgColor="var(--Gray-Scale-Gray-500, #A2A5AD)" onClick={handleRetry}>
          <Icon src={RetryIcon} alt="Retry" />
          다시하기
        </CircleButton>
        <CircleButton bgColor="#FE720C">
          <Icon src={SaveIcon} alt="Save" />
          저장하기
        </CircleButton>
        <CircleButton bgColor="#4C51C6">
          <Icon src={UpdateIcon} alt="update" />
          업데이트
        </CircleButton>
      </ButtonContainer>
      <Overlay isVisible={modalVisible} />
      <ConfirmModal
        isVisible={modalVisible}
        onClose={closeModal}
        onConfirm={handleModalAction}
      />
      <NavigationBar />
    </div>
  );
};

export default CourseResult;
