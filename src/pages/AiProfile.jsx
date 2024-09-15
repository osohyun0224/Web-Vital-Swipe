import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from 'react-router-dom';

const AiCourseContainer= styled.div`
  margin-top: 240px;
`;


const ButtonContainer = styled.div`
margin-top:40px;
  display: flex;
  padding: 12px 73px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--primary-secondary-color-primary, #fe720c);
  color: var(--basic-system-color-white, #fff);

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const IntroTitle = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333b);
  text-align: center;

  /* H1 */
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const AiProfile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AiCourseContainer>
      <IntroTitle>이제 여행 프로필을</IntroTitle>
      <IntroTitle>함께 만들어볼까요?</IntroTitle>
      <ButtonContainer  onClick={() => navigate('/qna')}>프로필 만들기</ButtonContainer>
      </AiCourseContainer>
      <NavigationBar />
    </div>
  );
};

export default AiProfile;
