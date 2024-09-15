import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import NoneChecked from "../assets/images/ico-none-check.svg";
import Checked from "../assets/images/ico-checked.svg";
import { useState } from "react";
import LanguageModal from "../components/LanguageModal";

const InfoText = styled.div`
  margin-top: 60px;
  color: var(--Text-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CheckList = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Pretendard;
  font-size: 16px;
  color: var(--Gray-Scale-Gray-700, #50535c);
  cursor: pointer;
`;

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Korean");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [languageToChange, setLanguageToChange] = useState(null);

  const handleLanguageChange = (language) => {
    if (language !== selectedLanguage) {
      setLanguageToChange(language);
      setIsModalVisible(true);
    }
  };

  const confirmLanguageChange = () => {
    setSelectedLanguage(languageToChange);
    setIsModalVisible(false);
  };

  return (
    <div>
      <Header title="언어 설정"/>
      <InfoText>
        앱에서 보여질 언어를 선택해주세요
      </InfoText>
      <CheckList onClick={() => handleLanguageChange("English")}>
        <img src={selectedLanguage === "English" ? Checked : NoneChecked} alt="체크" />
        English
      </CheckList>
      <CheckList onClick={() => handleLanguageChange("Korean")}>
        <img src={selectedLanguage === "Korean" ? Checked : NoneChecked} alt="체크" />
        Korean
      </CheckList>
      <LanguageModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmLanguageChange}
      />
      <NavigationBar />
    </div>
  );
};

export default Language;