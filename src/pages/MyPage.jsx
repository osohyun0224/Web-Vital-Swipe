import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import MyPageHeader from "../components/MyPageHeader";
import ProfileInfo from "../components/ProfileInfo";
import NoneChatbot from '../assets/images/ico-chatbot.svg';
import Chatbot from '../assets/images/ico-selected-chatbot.svg';
import Heart from "../assets/images/ico-heart.svg";
import NoneHeart from "../assets/images/ico-gray-heart.svg";
import { useState } from "react";
import AiCourseSection from "../components/AiCourseSection";
import LikedPlace from "../components/LikedPlace";
const TabBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 28px;
`;

const Tab = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: ${({ isSelected }) => isSelected ? '#FE720C' : '#C9CDD5'};
  border-bottom: 2px solid ${({ isSelected }) => isSelected ? '#FE720C' : '#C9CDD5'};
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const MyPage = () => {
  const [selectedTab, setSelectedTab] = useState('AI Course');

  return (
    <div>
      <MyPageHeader title={"My Page"} />
      <ProfileInfo 
        imagePath="https://avatars.githubusercontent.com/u/53892427?v=4"
        email="osohyun0224@naver.com"
      />
      <TabBarContainer>
        <Tab 
          isSelected={selectedTab === 'AI Course'} 
          onClick={() => setSelectedTab('AI Course')}
        >
          <Icon src={selectedTab === 'AI Course' ? Chatbot : NoneChatbot} alt="AI Course" />
          AI Course
        </Tab>
        <Tab 
          isSelected={selectedTab === 'LIKE'} 
          onClick={() => setSelectedTab('LIKE')}
        >
          <Icon src={selectedTab === 'LIKE' ? Heart : NoneHeart} alt="Like" />
          LIKE
        </Tab>
      </TabBarContainer>
      {selectedTab === 'AI Course' && <AiCourseSection />}
      {selectedTab === 'LIKE' && <LikedPlace />}
      <NavigationBar />
    </div>
  );
};

export default MyPage;
