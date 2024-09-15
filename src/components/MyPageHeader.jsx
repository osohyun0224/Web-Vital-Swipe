import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import leftIcon from "../assets/images/ico-left.svg";
import settingIcon from  "../assets/images/ico-setting.svg";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 54px;
  padding: 10px 0px;
  align-items: center;
  flex-shrink: 0;
  background: var(--Gray-Scale-Gray-100, #FFFFFF);
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Title = styled.h1`
color: var(--Gray-Scale-Gray-700, #50535C);
text-align: center;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

const MyPageHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <BackButton onClick={() => navigate(-1)}>
        <img src={leftIcon} alt="뒤로가는 아이콘" />
      </BackButton>
      <Title>{title}</Title>
      <BackButton onClick={() => navigate('/setting')}>
        <img src={settingIcon} alt="뒤로가는 아이콘" />
      </BackButton>
      
    </HeaderContainer>
  );
};

export default MyPageHeader;
