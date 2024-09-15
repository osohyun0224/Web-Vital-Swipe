import styled from "styled-components";

const PopularSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PopularLabel = styled.div`
  color: var(--Gray-Scale-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
`;

const DateLabel = styled.div`
  color: var(--Gray-Scale-Gray-500, #A2A5AD);
  font-family: Pretendard;
  font-size: 14px;
  text-align: right;
`;

const KeywordRankList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const KeywordRank = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Rank = styled.span`
  color: var(--primary-secondary-color-secondary, #4C51C6);
  font-family: Pretendard;
  font-size: 16px;
`;

const Keyword = styled.span`
  color: var(--Gray-Scale-Gray-800, #30333B);
  font-family: Pretendard;
  font-size: 16px;
`;

function PopularKeyword({ popularKeywords }) {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${year}.${formattedMonth}.${formattedDay}`;
  };

  return (
    <>
      <PopularSearchContainer>
        <PopularLabel>인기 검색어</PopularLabel>
        <DateLabel>{getCurrentDate()} 기준</DateLabel>
      </PopularSearchContainer>
      <KeywordRankList>
        {popularKeywords.map((keyword, index) => (
          <KeywordRank key={index}>
            <Rank>{index + 1}</Rank>
            <Keyword>{keyword}</Keyword>
          </KeywordRank>
        ))}
      </KeywordRankList>
    </>
  );
}

export default PopularKeyword;

