import styled from "styled-components";
import places from "../api/place-api.js";
import Heart from "../assets/images/ico-heart.svg";
import UnHeart from "../assets/images/ico-unheart.svg";
import { useNavigate } from "react-router-dom"; 

const PlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top:10px;
`;

const PlaceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
  cursor: pointer;  // Indicates the item is clickable
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
  align-items: center;
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

const LikedPlace = () => {
  const navigate = useNavigate();
  
  const likedPlaces = places.filter(place => place.isLiked);

  return (
    <PlacesContainer>
      {likedPlaces.map((place) => (
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

export default LikedPlace;
