import styled from "styled-components";
import Subway from "../assets/images/ico-subway.svg";
import { useEffect, useRef } from 'react';

const MapContainer = styled.div`
  padding: 16px 0px;
`;

const MapInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
`;

const MapTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MapTitleText = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333b);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

const MapText = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333b);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MapInnerText = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333b);
  font-family: Pretendard;
  margin-left: 22px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const IconImage = styled.img`
  height: 12px;
`;

const ButtonContainer = styled.div`
margin-top: 10px;
  display: flex;
  padding: 12px 73px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--Colors-Yellow, #fc0);
  color: var(--Gray-Scale-Gray-800, #30333b);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PlaceDetailMap = ({ place }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current) {
        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(35.0974, 129.0106),
          level: 3
        };
        const map = new window.kakao.maps.Map(container, options);
      }
    };

    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(initMap);
    }
  }, []);

  return (
    <>
      <MapContainer>
        <MapTitleText>지도 및 교통정보</MapTitleText>
        <MapInformation>
          <MapTextContainer>
            <IconImage src={Subway} alt="Subway" />
            <MapText>교통정보</MapText>
          </MapTextContainer>
          <MapInnerText>{place.transportationInfo}</MapInnerText>
        </MapInformation>
        <div ref={mapRef} style={{ width: '100%', height: '180px' }} />
        <ButtonContainer>카카오맵으로 경로찾기</ButtonContainer>
      </MapContainer>
    </>
  );
};

export default PlaceDetailMap;
