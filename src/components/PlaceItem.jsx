import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Heart from "../assets/images/ico-heart.svg";
import UnHeart from "../assets/images/ico-unheart.svg";

const PlaceCard = styled.div`
  display: flex;
  width: 100%;
  padding: 8px;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid var(--Gray-Scale-Gray-300, #E2E4E9);
  background: var(--basic-system-color-white, #FFF);
  cursor: pointer;
`;

const PlaceImage = styled.div`
  width: 100%;
  height: 130px;
  border-radius: 10px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const PlaceNameAndLike = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlaceName = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
`;

const PlaceTitle = styled.div`
  color: var(--primary-secondary-color-primary, #FE720C);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
`;

const PlaceDescription = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

const PlaceItem = ({ place }) => {
  const navigate = useNavigate();

  return (
    <PlaceCard onClick={() => navigate(`/detailplace/${place.id}`)}>
      <PlaceImage src={place.placeImages[0]} />
      <PlaceNameAndLike>
      <PlaceName>{place.placeName}</PlaceName>
      <img
        src={place.isLiked ? Heart : UnHeart}
        alt={place.isLiked ? "Liked" : "Not liked"}
      />
    </PlaceNameAndLike>
      <PlaceTitle>{place.placeTitle}</PlaceTitle>
      <PlaceDescription title={place.placeDescription}>
        {place.placeDescription.length > 20 ? `${place.placeDescription.substring(0, 20)}...` : place.placeDescription}
      </PlaceDescription>
    </PlaceCard>
  );
};

export default PlaceItem;
