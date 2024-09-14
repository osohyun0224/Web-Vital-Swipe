import styled from "styled-components";
import Subway from "../assets/images/ico-subway.svg";

const MapContainer = styled.div`
  padding: 10px 0px;
`;

const MapInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

const PlaceDetailMap = ({ place }) => (
  <>
    <MapContainer>
      <MapTitleText>지도 및 교통정보</MapTitleText>
      <MapInformation>
        <MapTextContainer>
          <IconImage src={Subway} alt="clock" />
          <MapText>교통정보</MapText>
        </MapTextContainer>
        <MapInnerText>{place.transportationInfo}</MapInnerText>
      </MapInformation>
      <ButtonContainer>카카오맵으로 경로찾기</ButtonContainer>
    </MapContainer>
  </>
);

export default PlaceDetailMap;
