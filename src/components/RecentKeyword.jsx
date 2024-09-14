import styled from "styled-components";
import IconXButton from "../assets/images/ico-xbutton.svg";

const RecentSearches = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const RecentLabel = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
`;

const ClearAll = styled.div`
  color: var(--Gray-Scale-Gray-500, #A2A5AD);
  font-family: Pretendard;
  font-size: 14px;
  cursor: pointer;
`;

const KeywordList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Keyword = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--Gray-Scale-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 16px;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const RecentKeywords = ({ keywords, handleKeywordDelete, clearAllKeywords }) => {
  return (
    <>
      <RecentSearches>
        <RecentLabel>최근 검색 내역</RecentLabel>
        <ClearAll onClick={clearAllKeywords}>전체 삭제</ClearAll>
      </RecentSearches>
      <KeywordList>
        {keywords.map((keyword, index) => (
          <Keyword key={index}>
            <span>{keyword}</span>
            <SearchButton onClick={() => handleKeywordDelete(keyword)}>
              <img src={IconXButton} alt="Delete" />
            </SearchButton>
          </Keyword>
        ))}
      </KeywordList>
    </>
  );
};

export default RecentKeywords;
