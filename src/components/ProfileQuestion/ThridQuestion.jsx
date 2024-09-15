import styled from "styled-components";
import { Range, getTrackBackground } from "react-range";
import { useState } from "react";
import BarButton from "../../assets/images/ico-barbutton.svg";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;
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

const RangeText = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333b);
  text-align: center;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const RangeContainer = styled.div`
  width: 250px;
  padding: 0;
  margin: 20px auto;
`;

const PricePoints = [0, 150000, 300000, 500000, 700000];

const ThridQuestion = ({ onRangeChange }) => {
  const [values, setValues] = useState([0, 4]);

  const step = 1;
  const min = 0;
  const max = 4;

  return (
    <div>
      <IntroContainer>
        <IntroText>나만의 여행 프로필을 만들어볼까요?</IntroText>
        <QuestionText>여행 경비를 알려주세요</QuestionText>
      </IntroContainer>
      <RangeContainer>
        <RangeText>{`${PricePoints[values[0]]}원 ~ ${
          PricePoints[values[1]]
        }원`}</RangeText>
        <Range
          values={values}
          step={step}
          min={min}
          max={max}
          onChange={(values) => {
            setValues(values);
            onRangeChange([PricePoints[values[0]], PricePoints[values[1]]]);
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "8px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values,
                    colors: ["#ccc", "#FE720C", "#ccc"],
                    min,
                    max,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "24px",
                width: "24px",
                borderRadius: "50%",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `url(${BarButton}) no-repeat center center`,
                backgroundSize: "cover",
              }}
            />
          )}
        />
      </RangeContainer>
    </div>
  );
};

export default ThridQuestion;
