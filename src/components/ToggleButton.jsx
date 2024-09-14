import { useState } from "react";
import styled from "styled-components";

const ToggleButtonContainer = styled.div`
  display: flex;
  width: 130px;
  height: 30px;
  align-items: center;
  border-radius: 30px;
  border: 0.5px solid rgba(238, 238, 238, 0.20);
  background: var(--Opacity-Black-dim-2, rgba(0, 0, 0, 0.70));
  position: relative;
  overflow: hidden;
`;

const ToggleSwitch = styled.div`
  position: absolute;
  width: 65px;
  height: 30px;
  background: #fe720c;
  border-radius: 50px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  transform: ${({ isVideo }) => (isVideo ? "translateX(65px)" : "translateX(0px)")};
`;

const Label = styled.div`
  color: rgba(238, 238, 238, 0.5);
  font-family: Pretendard;
  font-size: 12px;
  text-transform: uppercase;
  position: absolute;
  width: 100%;
  display: flex;
  padding: 13px 14px;
  justify-content: space-between;
  pointer-events: none;
`;

const ToggleButton = (onSelect) => {
  const [isVideo, setIsVideo] = useState(false);

  const toggleSwitch = () => {
    const newState = !isVideo;
    setIsVideo(newState);
    onSelect(newState); // 상위 컴포넌트에 변경된 상태를 전달
  };

  return (
    <ToggleButtonContainer onClick={toggleSwitch}>
      <Label>
        <span>카드</span>
        <span>동영상</span>
      </Label>
      <ToggleSwitch isVideo={isVideo}>
        {isVideo ? "동영상" : "카드"}
      </ToggleSwitch>
    </ToggleButtonContainer>
  );
};

export default ToggleButton;
