import { useState } from "react";
import Header from "../components/Header";
import NoneChecked from "../assets/images/ico-none-check.svg";
import Checked from "../assets/images/ico-checked.svg";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Title = styled.h1`
  margin-top: 50px;
  color: var(--Text-Gray-800, #30333b);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
`;

const CheckContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 10px;
`;

const CheckList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Pretendard;
  font-size: 16px;
  color: var(--Gray-Scale-Gray-700, #50535c);
`;

const SpecialCheckList = styled(CheckList)`
font-size: 18px;
  margin-top: 40px;
`;

const StartButton = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 71px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${({ isActive }) => (isActive ? '#FE720C' : '#F3F3F7')};
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#50535c')};
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [checks, setChecks] = useState({
    terms: false,
    privacy: false,
    age: false,
    marketing: false,
    allAgree: false,
  });

  const handleCheck = (field) => {
    if (field === 'allAgree') {
      const newState = Object.keys(checks).reduce((acc, key) => {
        acc[key] = !checks.allAgree;
        return acc;
      }, {});
      setChecks(newState);
    } else {
      setChecks((prev) => {
        const updatedChecks = { ...prev, [field]: !prev[field] };
        const allChecked = Object.keys(updatedChecks).every((key) =>
          key === 'allAgree' ? true : updatedChecks[key],
        );
        return { ...updatedChecks, allAgree: allChecked };
      });
    }
  };

  const allRequiredAgreed = checks.terms && checks.privacy && checks.age;

  const handleStartClick = () => {
    if (allRequiredAgreed) {
      navigate('/main'); // 조건 충족 시 /main 페이지로 이동
    }
  };

  return (
    <div>
      <Header title="서비스 이용약관" />
      <Title>K-Swipe와<br />함께 부산을 어쩌고<br />함께해요.</Title>
      <CheckContainer>
        <CheckList onClick={() => handleCheck('terms')}>
          <img src={checks.terms ? Checked : NoneChecked} alt="체크" />
          서비스 이용약관 동의(필수)
        </CheckList>
        <CheckList onClick={() => handleCheck('privacy')}>
          <img src={checks.privacy ? Checked : NoneChecked} alt="체크" />
          개인정보 수집 및 이용동의(필수)
        </CheckList>
        <CheckList onClick={() => handleCheck('age')}>
          <img src={checks.age ? Checked : NoneChecked} alt="체크" />
          만 14세 이상입니다. (필수)
        </CheckList>
        <CheckList onClick={() => handleCheck('marketing')}>
          <img src={checks.marketing ? Checked : NoneChecked} alt="체크" />
          마케팅 정보 수신 동의 (선택)
        </CheckList>
        <SpecialCheckList onClick={() => handleCheck('allAgree')}>
          <img src={checks.allAgree ? Checked : NoneChecked} alt="체크" />
          전체 동의
        </SpecialCheckList>
        <StartButton onClick={handleStartClick} isActive={allRequiredAgreed}>
          K-Swipe 시작하기
        </StartButton>
      </CheckContainer>
    </div>
  );
};

export default LoginPage;