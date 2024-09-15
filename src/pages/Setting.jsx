import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import Right from "../assets/images/ico-right.svg";
import { useNavigate } from 'react-router-dom';

const TopicSection = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: stretch;
`;

const TopicTitle = styled.div`
  color: var(--Text-Gray-500, #a2a5ad);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TopicContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: var(--Text-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const IconImage = styled.img`
  height: 24px;
`;

const Setting = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header title={"설정"} />
      <TopicSection>
        <TopicTitle>서비스 이용</TopicTitle>
        <TopicContent onClick={() => navigate('/lang')}>
          언어 설정
          <IconImage src={Right} alt="language" />
        </TopicContent>
      </TopicSection>
      <TopicSection>
        <TopicTitle>문의 및 알림</TopicTitle>
        <TopicContent onClick={() => navigate('/noti')}>
          공지사항
          <IconImage src={Right} alt="notice" />
        </TopicContent>
        <TopicContent onClick={() => navigate('/cs')}>
          고객센터
          <IconImage src={Right} alt="customer service" />
        </TopicContent>
      </TopicSection>
      <TopicSection>
        <TopicTitle>기타</TopicTitle>
        <TopicContent onClick={() => navigate('/info')}>
          개인정보처리방침
          <IconImage src={Right} alt="privacy policy" />
        </TopicContent>
        <TopicContent onClick={() => navigate('/agree')}>
          이용약관 동의 및 정책
          <IconImage src={Right} alt="terms and conditions" />
        </TopicContent>
      </TopicSection>
      <TopicSection>
        <TopicContent onClick={() => navigate('/login')}>
          로그아웃
        </TopicContent>
        <TopicContent onClick={() => navigate('/quit')}>
          서비스 탈퇴
        </TopicContent>
      </TopicSection>
      <NavigationBar />
    </div>
  );
};

export default Setting;
