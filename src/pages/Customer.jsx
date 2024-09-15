import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";

const InfoText = styled.div`
  color: var(--Gray-Scale-Gray-700, #50535c);

  /* Text1 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Customer = () => {
  return (
    <div>
      <Header title="고객 센터" />
      <br /><br />
      <InfoText>문의 사항이 있으신가요?</InfoText>
      <br /><br />
      <InfoText>
        고객님의 소중한 의견을 기다리고 있습니다. <br />
        아래 이메일로 문의해 주시면, 빠르고 정확하게 <br />
        답변 드리겠습니다. 언제든지 편하게 연락해 주세요!
      </InfoText>
      <br /><br />
      <InfoText>이메일: [kswipe@gmail.com]</InfoText>
      <NavigationBar />
    </div>
  );
};

export default Customer;
