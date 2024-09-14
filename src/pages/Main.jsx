import styled, { css } from "styled-components";
import NavigationBar from "../components/NavigationBar";
import ToggleButton from "../components/ToggleButton";
import { useState } from "react";
import IconSearch from "../assets/images/ico-search.svg";
import { useNavigate } from "react-router-dom";
import places from "../api/place-api";

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const CenterContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const MainContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

const Card = styled.div`
  width: 328px;
  height: 460px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position: absolute;
  will-change: transform;
  transition: transform 0.5s ease-out;
  ${({ index, activeIndex }) => css`
    transform: translateX(${(index - activeIndex) * 340}px);
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  width: 160px;
  height: 50px;
  padding: 10px 55px;
  justify-content: center;
  align-items: center;
  color: #101010;
  border-radius: 100px;
  background: rgba(217, 217, 217, 0.70);
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover, &:focus {
    color: #FAFAFA;
  }

  ${({ isNext }) =>
    isNext && css`
      &:hover, &:focus {
        background-color: #4C51C6;
      }
    `}
  ${({ isLike }) =>
    isLike && css`
      &:hover, &:focus {
        background-color: #FE720C;
      }
    `}
`;

const Main = () => {
  const navigate = useNavigate();
  const [isVideoSelected, setIsVideoSelected] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const swipeCard = () => {
    setActiveIndex(prev => (prev + 1) % places.length);
  };

  return (
    <div>
      <MainHeader>
        <div style={{ width: "32px" }} />
        <CenterContainer>
          <ToggleButton onSelect={setIsVideoSelected} />
        </CenterContainer>
        <SearchButton onClick={() => navigate('/search')}>
          <img src={IconSearch} alt="검색 페이지" />
        </SearchButton>
      </MainHeader>
      <MainContentContainer onClick={swipeCard}>
        {places.map((place, index) => (
          <Card
            key={index}
            index={index}
            activeIndex={activeIndex}
            bgImage={place.placeImages[0]}
          />
        ))}
      </MainContentContainer>
      <ButtonContainer>
        <Button isNext onClick={swipeCard}>NEXT</Button>
        <Button isLike>LIKE</Button>
      </ButtonContainer>
      <NavigationBar />
    </div>
  );
};

export default Main;
