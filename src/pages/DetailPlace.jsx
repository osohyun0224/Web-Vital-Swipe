import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import places from "../api/place-api.js";
import Header from "../components/Header";
import Dot from "../assets/images/ico-selected-dot.svg";
import NoneDot from "../assets/images/ico-unselected-dot.svg";
import PlaceDetailText from "../components/PlaceDetailText.jsx";
import PlaceDetailTitle from "../components/PlaceDetailTitle.jsx";
import PlaceDetailMap from "../components/PlaceDetailMap.jsx";

const DetailPlaceContainer = styled.div`
  background: var(--Gray-Scale-Gray-100, #fafafa);
`;

const ImageSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  border-radius: 10px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

const DotIcon = styled.img`
  cursor: pointer;
`;

const PlaceDetailContainer = styled.div`
  margin-top: 20px;
  gap: 8px;
  background: var(--Gray-Scale-Gray-100, #ffffff);
`;

const DetailPlace = () => {
  const { id } = useParams();
  const place = places.find((p) => p.id.toString() === id);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <DetailPlaceContainer>
        <Header title={place ? place.placeName : "장소를 찾을 수 없습니다."} />
        {place && (
          <>
            <ImageSliderContainer>
              <SlideImage
                src={place.placeImages[activeIndex]}
                alt={place.placeName}
              />
              <DotsContainer>
                {place.placeImages.map((_, index) => (
                  <DotIcon
                    key={index}
                    src={index === activeIndex ? Dot : NoneDot}
                    alt={index === activeIndex ? "Active dot" : "Inactive dot"}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </DotsContainer>
            </ImageSliderContainer>
            <PlaceDetailContainer>
              <PlaceDetailTitle place={place} />
              <PlaceDetailText place={place} />
              <PlaceDetailMap place={place} />
            </PlaceDetailContainer>
          </>
        )}
      </DetailPlaceContainer>
    </div>
  );
};

export default DetailPlace;
