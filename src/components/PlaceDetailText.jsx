import styled from "styled-components";
import Program from "../assets/images/ico-program.svg";
import Calendar from "../assets/images/ico-calendar.svg";
import SitPerson from "../assets/images/ico-sitpeople.svg";
import Clock from "../assets/images/ico-clock.svg";
import Web from "../assets/images/ico-web.svg";
import Right from "../assets/images/ico-right.svg";

const GotoHomepage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  gap: 8px;
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  gap: 8px;
`;

const GotoHomepageText = styled.div`
  flex-grow: 1;
  color: var(--Gray-Scale-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TimeInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TimeTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const TimeText = styled.span`
  color: var(--Gray-Scale-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const TimeInnerText = styled.span`
  color: var(--Gray-Scale-Gray-800, #30333B);
  font-family: Pretendard;
  margin-left: 18px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const IconImage = styled.img`
  height: 12px;
`;

const PlaceDetailText = ({ place }) => (
  <>
    <GotoHomepage>
      <IconImage src={Web} alt="website" />
      <GotoHomepageText>홈페이지 바로가기</GotoHomepageText>
      <a href={place.placeWebsite} target="_blank" rel="noopener noreferrer">
        <IconImage src={Right} alt="Go to website" />
      </a>
    </GotoHomepage>
    <Information>
      <IconImage src={Program} alt="program" />
      <GotoHomepageText>프로그램별 상이</GotoHomepageText>
    </Information>
    <Information>
      <IconImage src={Calendar} alt="Calendar" />
      <GotoHomepageText>{place.closedDays}</GotoHomepageText>
    </Information>
    <Information>
      <IconImage src={SitPerson} alt="SitPerson" />
      <GotoHomepageText>{place.disabilitySupport.join(', ')}</GotoHomepageText>
    </Information>
    <TimeInformation>
      <TimeTextContainer>
        <IconImage src={Clock} alt="clock" />
        <TimeText>운영시간</TimeText>
      </TimeTextContainer>
      <TimeInnerText>{place.operatingHours}</TimeInnerText>
    </TimeInformation>
  </>
);

export default PlaceDetailText;
