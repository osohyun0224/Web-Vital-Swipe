import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage.jsx";
import PersonalAgree from "./pages/PersonalAgree.jsx";
import PersonalInfo from "./pages/PersonalInfo.jsx"
import Main from "./pages/Main.jsx";
import AiCourse from "./pages/AiCourse.jsx";
import MyPage from './pages/MyPage.jsx';
import Search from './pages/Search.jsx';
import DetailPlace from './pages/DetailPlace.jsx'
import AiTravelPlan from "./pages/AiTravelPlan.jsx";
import AiProfile from "./pages/AiProfile.jsx";
import AiQuesionProfile from "./pages/AiQuestionProfile.jsx";
import CourseResult from "./pages/CourseResult.jsx";
import Setting from "./pages/Setting.jsx";
import Language from "./pages/Language.jsx";
import Customer from "./pages/Customer.jsx";
import Notice from "./pages/Notice.jsx";
import Quit from "./pages/Quit.jsx";

import "./App.scss";

const StyledApp = styled.div`
  background-color: transparent;
  min-height: auto;
`;

function App() {
  return (
    <StyledApp>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/info" element={<PersonalInfo />} />
          <Route path="/agree" element={<PersonalAgree />} />
          <Route path="/main" element={<Main/>} />
          <Route path="/ai-course" element={<AiCourse />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detailplace/:id" element={<DetailPlace />} />
          <Route path="/plan" element={<AiTravelPlan />} />
          <Route path="/profile" element={<AiProfile />} />
          <Route path="/qna" element={<AiQuesionProfile />} />
          <Route path="/course" element={<CourseResult />} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/noti" element={<Notice />} />
          <Route path="/cs" element={<Customer />} />
          <Route path="/quit" element={<Quit />} />
          <Route path="/lang" element={<Language />} />
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
