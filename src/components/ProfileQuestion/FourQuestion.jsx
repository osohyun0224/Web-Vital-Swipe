import styled from "styled-components";
import { useState } from "react";
import CarIcon from "../../assets/images/ico-active-car.png";
import BusIcon from "../../assets/images/ico-active-subway.svg";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;
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
  margin-bottom: 20px;
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

const FavoriteButton = styled.button`
  width: 100%;
  height: 160px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fafafa;
  color: var(--Gray-Scale-Gray-800, #30333b);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: relative;
  border: ${({ isSelected }) => (isSelected ? "4px solid var(--primary-secondary-color-primary, #FE720C)" : "none")};
  opacity: ${({ isSelected, selectedFavorite }) => (selectedFavorite !== null && !isSelected ? 0.5 : 1)};
`;

const IconImage = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 5px;
`;

const FourQuestion = ({ onTrafficChange }) => {
  const [selectedFavorite, setSelectedFavorite] = useState(null);

  const handleFavoriteSelect = (favorite) => {
    setSelectedFavorite(favorite);
    onTrafficChange(favorite);
  };

  return (
    <TravelListContainer>
      <IntroContainer>
        <IntroText>나만의 여행 프로필을 만들어볼까요?</IntroText>
        <QuestionText>이동수단을 알려주세요</QuestionText>
      </IntroContainer>
      <FavoriteButton
        isSelected={selectedFavorite === "car"}
        selectedFavorite={selectedFavorite}
        onClick={() => handleFavoriteSelect("car")}
      >
        <IconImage src={CarIcon} alt="Car" /><br/>
        차를 타고 이동해요
      </FavoriteButton>
      <FavoriteButton
        isSelected={selectedFavorite === "bus"}
        selectedFavorite={selectedFavorite}
        onClick={() => handleFavoriteSelect("bus")}
      >
        <IconImage src={BusIcon} alt="Bus" /><br/>
        대중교통을 이용해요
      </FavoriteButton>
    </TravelListContainer>
  );
};

export default FourQuestion;
