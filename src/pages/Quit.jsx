import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import NoneChecked from "../assets/images/ico-none-check.svg";
import Checked from "../assets/images/ico-checked.svg";
import { useState } from "react";

const InfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  height: 380px;
  padding: 16px;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  background: var(--Gray-Scale-Gray-100, #fafafa);
`;

const InfoText = styled.div`
  color: var(--Gray-Scale-Gray-700, #50535c);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const QuitButton = styled.button`
  display: flex;
  width: 100%;
  margin-top:20px;
  padding: 12px 73px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background: ${({ isActive }) =>
    isActive ? "#F33D3D" : "var(--Gray-Scale-Gray-200, #F3F3F7)"};
  color: ${({ isActive }) => (isActive ? "#FFF" : "#50535C")};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const CheckList = styled.div`
  margin-top:20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Pretendard;
  font-size: 16px;
  color: var(--Gray-Scale-Gray-700, #50535c);
  cursor: pointer;
`;

const Quit = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const toggleAgreement = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <div>
      <Header title="회원탈퇴" />
      <InfoContainer>
        <InfoText>회원님께서 탈퇴를 진행하시면,</InfoText>
        <InfoText>
          다음과 같은 정보들이 영구적으로 삭제되며 <br />한 번 삭제된 정보는
          복구가 불가능합니다.
        </InfoText>
        <InfoText>
          신중하게 결정해 주시기 바랍니다. <br />
        </InfoText>
        <InfoText>
          1. 계정 및 프로필 정보 삭제: 회원님의 계정 정보와 프로필에 저장된 모든
          개인 정보가 삭제됩니다. <br />
          2. 여행 코스 삭제: 회원님이 저장한 모든 여행 코스 및 일정이
          삭제됩니다. <br />
          3. 캐시 삭제: 적립된 모든 캐시가 삭제되며, 이후에는 이를 복구하거나
          사용할 수 없습니다. <br />
          4. 내 여행 및 장소 저장 정보 삭제: 회원님이 저장한 여행 기록 및 관심
          장소 정보가 삭제됩니다. <br />
        </InfoText>
        <br />
        <InfoText>
          회원탈퇴를 완료하면 모든 정보가 즉시 삭제되며, 이는 되돌릴 수 없으니
          충분히 고려한 후에 진행해 주시기 바랍니다.
        </InfoText>
      </InfoContainer>
      <CheckList onClick={toggleAgreement}>
        <img src={isAgreed ? Checked : NoneChecked} alt="체크" />
        탈퇴 정책에 동의합니다.
      </CheckList>
      <QuitButton isActive={isAgreed}>탈퇴하기</QuitButton>
      <NavigationBar />
    </div>
  );
};

export default Quit;
