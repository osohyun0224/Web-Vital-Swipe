import styled from "styled-components";

const HeaderProgressiveBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between; /* 바 사이에 균등한 간격을 만들기 위해 수정 */
`;

const Bar = styled.div`
  height: 2px;
  background: ${({ isActive }) => isActive ? '#FE720C' : '#F3F3F7'};
  flex: 1;
  margin: 0 6px;
`;

const HeaderProgressiveBar = ({ activeIndex }) => {
  return (
    <HeaderProgressiveBarContainer>
      {[...Array(5)].map((_, index) => (
        <Bar key={index} isActive={index === activeIndex} />
      ))}
    </HeaderProgressiveBarContainer>
  );
};

export default HeaderProgressiveBar;
