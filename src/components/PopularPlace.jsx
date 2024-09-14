import styled from "styled-components";
import places from "../api/place-api.js";
import Heart from "../assets/images/ico-heart.svg";
import UnHeart from "../assets/images/ico-unheart.svg";
import { useNavigate } from "react-router-dom"; 

const PopularSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PopularLabel = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
`;

const PlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PlaceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
`;

const PlaceImage = styled.img`
  width: 90px;
  height: 70px;
  border-radius: 8px;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column; 
  flex-grow: 1;
`;

const PlaceName = styled.span`
  color: var(--Gray-Scale-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
`;

const PlaceLocation = styled.span`
  color: var(--Gray-Scale-Gray-600, #83868E);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
`;

const PlaceRating = styled.span`
  color: var(--Gray-Scale-Gray-600, #83868E);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
`;

const LikeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 좋아요 버튼과 수를 중앙정렬합니다.
`;

const LikeButton = styled.img`
  cursor: pointer;
`;

const LikeCount = styled.span`
  color: var(--primary-secondary-color-primary, #FE720C);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
`;

const PopularPlace = () => {
  const navigate = useNavigate();
  return (
    <PlacesContainer>
      <PopularSearchContainer>
        <PopularLabel>인기있는 부산의 장소들</PopularLabel>
      </PopularSearchContainer>
      {places.map((place) => (
        <PlaceItem key={place.id} onClick={() => navigate(`/detailplace/${place.id}`)}>
          <PlaceImage src={place.placeImages[0]} alt={place.placeName} />
          <PlaceInfo>
            <PlaceName>{place.placeName}</PlaceName>
            <PlaceLocation>{place.placeLocation}</PlaceLocation>
            <PlaceRating>별점: {place.kakaoMapRating}</PlaceRating>
          </PlaceInfo>
          <LikeButtonContainer>
            <LikeButton src={place.isLiked ? Heart : UnHeart} alt={place.isLiked ? "좋아요" : "좋아요 취소"} />
            <LikeCount>{place.amountLiked}</LikeCount>
          </LikeButtonContainer>
        </PlaceItem>
      ))}
    </PlacesContainer>
  );
};

export default PopularPlace;
