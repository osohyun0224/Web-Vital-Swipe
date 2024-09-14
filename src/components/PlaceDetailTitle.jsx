import styled from "styled-components";
import Heart from "../assets/images/ico-heart.svg";
import UnHeart from "../assets/images/ico-unheart.svg";
import Marker from "../assets/images/ico-marker.svg";
import Star from "../assets/images/ico-star.png";

const PlaceNameAndLike = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlaceName = styled.h3`
  color: var(--Gray-Scale-Gray-800, #30333b);
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 700;
`;

const PlaceTitle = styled.span`
  margin-top: 8px;
  color: var(--primary-secondary-color-primary, #fe720c);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
`;

const PlaceSubTitle = styled.span`
  color: var(--primary-secondary-color-primary, #fe720c);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
`;

const PlaceDescription = styled.p`
  margin-top: 8px;
  color: var(--Gray-Scale-Gray-800, #30333b);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
`;

const InfoWithIcon = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--Gray-Scale-Gray-600, #83868e);
  font-family: Pretendard;
  font-size: 12px;
`;

const Icon = styled.img`
  height: 12px;
`;

const PlaceDetailTitle = ({ place }) => (
  <>
    <PlaceNameAndLike>
      <PlaceName>{place.placeName}</PlaceName>
      <img
        src={place.isLiked ? Heart : UnHeart}
        alt={place.isLiked ? "Liked" : "Not liked"}
      />
    </PlaceNameAndLike>
    <PlaceTitle>{place.placeTitle}</PlaceTitle>
    <br/>
    <PlaceSubTitle>{place.placeSubTitle}</PlaceSubTitle>
    <PlaceDescription>{place.placeDescription}</PlaceDescription>
    <InfoWithIcon>
      <Icon src={Marker} alt="Location" />
      {place.placeLocation}
    </InfoWithIcon>
    <InfoWithIcon>
      <Icon src={Star} alt="Rating" />
      Kakao map {place.kakaoMapRating}
    </InfoWithIcon>
  </>
);

export default PlaceDetailTitle;
