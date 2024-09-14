import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import IconSearch from "../assets/images/ico-search.svg";
import { useState } from "react";
import RecentKeywords from "../components/RecentKeyword";
import PopularKeyword from "../components/PopularKeyword";
import PopularPlace from "../components/PopularPlace";
const SearchContainer = styled.div`
  display: flex;
  height: 48px;
  padding: 11px 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 24px;
  background: var(--Gray-Scale-Gray-100, #fafafa);
  border: ${({ isActive }) => (isActive ? "1px solid #D3D3D3" : "none")};
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 8px;
  font-family: Pretendard;
  font-size: 16px;
  color: var(--Text-Gray-500, #a2a5ad);

  &::placeholder {
    color: currentColor;
  }

  &:focus {
    color: var(--Text-Gray-800, #30333b);
    outline: none;
  }
`;

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [keywords, setKeywords] = useState(["부산 해운대", "감천 문화 마을"]);

  const popularKeywords = ["부산 광안리", "국밥", "떡볶이", "해운대", "감천 문화 마을"];

  return (
    <div>
      <Header title="검색" />
      <SearchContainer isActive={isActive}>
        <SearchInputContainer>
          <SearchInput
            placeholder="찾고 있는 부산의 여행지가 있나요?"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setIsActive(true);
            }}
            onBlur={() => setIsActive(false)}
          />
          <SearchButton>
            <img src={IconSearch} alt="Search" />
          </SearchButton>
        </SearchInputContainer>
      </SearchContainer>
      {isActive ? (
        <RecentKeywords
          keywords={keywords}
        />
      ) : (
        <>
          <PopularKeyword popularKeywords={popularKeywords} />
          <PopularPlace/>
        </>
      )}
      <NavigationBar />
    </div>
  );
};

export default Search;
