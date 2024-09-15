import styled from "styled-components";

const ProfileSection = styled.div`
  padding: 36px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  background: url(${({ imagePath }) => imagePath}) lightgray 50% / cover no-repeat;
`;

const ProfileEmail = styled.div`
  color: var(--Text-Gray-500, #a2a5ad);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ProfileInfo = ({ imagePath, email }) => {
  return (
    <ProfileSection>
      <ProfileImage src={imagePath} alt="Profile" />
      <ProfileEmail>{email}</ProfileEmail>
    </ProfileSection>
  );
};

export default ProfileInfo;
