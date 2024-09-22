import styled from "styled-components";
import Button from "../components/Button.jsx";
import kakaoLogo from "../assets/images/ico-kakao.svg";
import googleLogo from "../assets/images/ico-google.svg";
import KSWIPE_logo from "../assets/images/KSWIPE.svg";
import { useNavigate, Link } from 'react-router-dom'; 
const PageContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20%;
  transform: translateY(-20%);
`;

const MainContainer = styled.div`
  margin-top: 200px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  padding: 13px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: row;
`;

const StyledKakaoButton = styled(StyledButton)`
  border-radius: 10px;
  background: var(--kakao-bg, #fee500);
  color: rgba(0, 0, 0, 0.85);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
`;

const StyledGoogleButton = styled(StyledButton)`
  border-radius: 10px;
  border: 1px solid var(--Gray-Scale-Gray-2, #ddd);
  background: var(--basic-system-color-white, #fff);
`;

const Title = styled.h1`
  color: var(--Text-Gray-800, #30333b);
  text-align: center;

  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const DescContainer = styled.p`
  color: var(--Text-Gray-500, #a2a5ad);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;

  a {
    color: #fe720c;
  }
`;

function Home() {
  const navigate = useNavigate();

    const handleGoogleLogin = () => {
      const clientId = '30706271741-v0gpke7t6kr8q8dlhc1mmf4egmnd7uhm.apps.googleusercontent.com';
      const redirectUri = 'https://web-vital-swipe.vercel.app/main';
      const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
      
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;
      window.location.href = authUrl;
    };
  
    const handleKakaoLogin = () => {
      const clientId = 'ea39e0f0ac092252b3c21fbc95908ab2';
      const redirectUri = 'https://web-vital-swipe.vercel.app/main';
  
      const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}`;
      window.location.href = authUrl;
    };

  return (
    <PageContainer>
      <LogoContainer>
        <img src={KSWIPE_logo} alt="앱 로고" />
      </LogoContainer>
      <MainContainer>
        <Title>K-Swipe와</Title>
        <Title>함께 부산을 SWIPE!</Title>
        <ButtonContainer>
        <StyledKakaoButton onClick={handleKakaoLogin}>
            <img src={kakaoLogo} alt="카카오 로고" />
            카카오로 시작하기
          </StyledKakaoButton>
          <StyledGoogleButton onClick={handleGoogleLogin}>
            <img src={googleLogo} alt="구글 로고" />
            구글로 시작하기
          </StyledGoogleButton>
          <StyledGoogleButton onClick={() => navigate('/login')}>
            <img src={googleLogo} alt="구글 로고" />
            임시 그냥 로그인
          </StyledGoogleButton>
        </ButtonContainer>
        <DescContainer>
          SNS 계정을 통해 K-Swipe에 로그인함으로써 <br />
          <Link to="/info" style={{ color: '#fe720c' }}>개인정보처리방침</Link> 및 <Link to="/agree" style={{ color: '#fe720c' }}>이용약관</Link>에
          동의하는 것으로 간주합니다
        </DescContainer>
      </MainContainer>
    </PageContainer>
  );
}

export default Home;
