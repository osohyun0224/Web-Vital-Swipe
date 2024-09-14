import styled from "styled-components";
import { useState } from "react";
import Bg_Nature from "../assets/images/bg-nature.svg";
import Bg_City from  "../assets/images/bg-city.svg";

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

const FavoriteButton = styled.button`
  width: 100%;
  height: 160px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ type }) => type === 'city' ? `url(${Bg_City})` : `url(${Bg_Nature})`} 50% / cover no-repeat;
  color: var(--Gray-Scale-Gray-100, #FAFAFA);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  position: relative;
  border:none;
  opacity: ${({ isSelected }) => isSelected ? 1 : 0.5};
`;

const ThirdQuestion = ({ onFavoriteChange }) => {
  const [selectedFavorite, setSelectedFavorite] = useState(null);

  const handleFavoriteSelect = (favorite) => {
    setSelectedFavorite(favorite);
    onFavoriteChange(favorite);
  };

  return (
    <TravelListContainer>
      <IntroContainer>
        <IntroText>어떤 여행 계획을 세워볼까요?</IntroText>
        <QuestionText>
          선호하는 여행 스타일은?<br />
          도시 VS 자연
        </QuestionText>
      </IntroContainer>
      <FavoriteButton
        type="city"
        isSelected={selectedFavorite === 'city'}
        onClick={() => handleFavoriteSelect('city')}
      >
        도시가 좋아요
      </FavoriteButton>
      <FavoriteButton
        type="nature"
        isSelected={selectedFavorite === 'nature'}
        onClick={() => handleFavoriteSelect('nature')}
      >
        자연이 좋아요
      </FavoriteButton>
    </TravelListContainer>
  );
};

export default ThirdQuestion;
