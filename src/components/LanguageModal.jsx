import styled from "styled-components";
import XButton from "../assets/images/ico-black-x-button.svg";

const ModalContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
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
  background: #fff;
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
  color: var(--Text-Gray-800, #30333b);
  text-align: center;

  /* H1 */
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px;
`;

const ModalDescription = styled.div`
  color: var(--Text-Gray-800, #30333b);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ModalButton = styled.button`
  width: 100%;
  border: none;
  padding: 12px;
  justify-content: center;
  border-radius: 10px;
  background: var(--primary-secondary-color-primary, #fe720c);
  color: var(--basic-system-color-white, #fff);
  font-family: Pretendard;
  font-size: 18px;
  cursor: pointer;
`;

const BackButton = styled.button`
  border: none;
  padding: 12px;
  margin-top:-40px;
  justify-content: center;
  border-radius: 10px;
  color: var(--Text-Gray-500, #a2a5ad);
background: #ffffff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LanguageModal = ({ isVisible, onClose, onConfirm }) => {
  return (
    <ModalContainer isVisible={isVisible}>
      <CloseButton src={XButton} onClick={onClose} />
      <ModalTitle>
        언어를 재설정
        <br />
        하시겠어요?
      </ModalTitle>
      <ModalDescription>
        언어를 변경하려면 앱을 재시작 해야해요.
      </ModalDescription>
      <ModalButton onClick={onConfirm}>언어 변경하기</ModalButton>
      <BackButton onClick={onClose}>돌아가기</BackButton>
    </ModalContainer>
  );
};

export default LanguageModal;
