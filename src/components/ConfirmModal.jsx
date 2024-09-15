import styled from "styled-components";
import XButton from "../assets/images/ico-black-x-button.svg";

const ModalContainer = styled.div`
  display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 340px;
  padding: 17px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.07);
  z-index: 1500;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 17px;
  right: 17px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  margin-top: 50px;
  color: var(--Text-Gray-800, #30333B);
  text-align: center;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ModalDescription = styled.div`
  color: var(--Text-Gray-800, #30333B);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ModalButton = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 73px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background: var(--primary-secondary-color-primary, #FE720C);
  color: var(--basic-system-color-white, #FFF);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const ConfirmModal = ({ isVisible, onClose, onConfirm }) => {
  return (
    <ModalContainer isVisible={isVisible}>
      <CloseButton src={XButton} onClick={onClose} />
      <ModalTitle>더 나은 여행을 위해 <br/> 취향을 재설정해볼까요?</ModalTitle>
      <ModalDescription>취향 설정을 수정하여<br/> 새로운 장소를 추천받아보세요</ModalDescription>
      <ModalButton onClick={onConfirm}>취향 다시 선택하기</ModalButton>
    </ModalContainer>
  );
};

export default ConfirmModal;