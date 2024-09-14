import styled from "styled-components";
import NoneChatbot from '../assets/images/ico-chatbot.svg';
import Chatbot from '../assets/images/ico-selected-chatbot.svg';
import NoneHome from '../assets/images/ico-home.svg';
import Home from '../assets/images/ico-selected-home.svg';
import NoneMy from '../assets/images/ico-my.svg';
import My from '../assets/images/ico-selected-my.svg';

import { useNavigate, useLocation } from 'react-router-dom';

const NavigationBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 62px;
  position: fixed;
  bottom: 0;
  margin-left:-16px;
  width: 100%;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); 
  z-index: 10;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const NavText = styled.div`
  color: ${({ isActive }) => (isActive ? '#FE720C' : '#A2A5AD')};
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <NavigationBarContainer>
      <NavItem onClick={() => navigate('/ai-course')}>
        <img src={isActive('/ai-course') ? Chatbot : NoneChatbot} alt="AI 코스 추천" />
        <NavText isActive={isActive('/ai-course')}>AI 코스 추천</NavText>
      </NavItem>
      <NavItem onClick={() => navigate('/main')}>
        <img src={isActive('/main') ? Home : NoneHome} alt="홈" />
        <NavText isActive={isActive('/main')}>홈</NavText>
      </NavItem>
      <NavItem onClick={() => navigate('/my')}>
        <img src={isActive('/my') ? My : NoneMy} alt="마이 페이지" />
        <NavText isActive={isActive('/my')}>마이 페이지</NavText>
      </NavItem>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
