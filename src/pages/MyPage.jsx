import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import MyPageHeader from "../components/MyPageHeader";
const MyPage = () => {

  return (
      <div>
        <MyPageHeader title={"My Page"}/>
        <NavigationBar/>
      </div>
  )
}

export default MyPage;