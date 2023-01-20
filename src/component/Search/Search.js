import { useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../asset/search.svg';
import SearchTag from './SearchTag';
import SearchOption from './SearchOption';
import { useEffect } from 'react';

const SearchTagContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
    justify-content: center;
`;

const SearchBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
    padding: 4px 16px;
    width: 100%;
    align-items: center;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const SearchInputContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

const SearchInput = styled.input`
    background: transparent;
    font-size: 16px;
    outline: none;
    color: #5e5e5e;
    border: none;
    flex: auto;
    margin-left: 8px;
`;

const SearchOptionButton = styled.p`
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
    color: #5e5e5e;
`;

const Search = ({ setQuery, setOrientation, setOrder, setPerPage }) => {
    const savedSearchTags = localStorage.getItem('searchTags'); //key값으로 조회
    console.log('savedSearchTags', savedSearchTags);
    const initialSearchTags = savedSearchTags
        ? JSON.parse(savedSearchTags) //객체
        : []; //배열형태

    const [searchOption, setSearchOption] = useState(false);
    const [inputState, setInputState] = useState();
    const [searchTags, setSearchTags] = useState(initialSearchTags); //(최근검색어)검색이 일어날때 실행이됨 => onSearch / 배열형태
    //비제어 컴포넌트
    const inputRef = useRef(null);

    const toggleSearchOption = () => {
        setSearchOption((prev) => !prev);
    };

    //검색값 input값 변경함수
    const updateSearchInput = (value) => {
        inputRef.current.value = value;
    };

    const onSearch = (e) => {
        if (e.key === 'Enter') {
            const currentValue = e.target.value; //검색어
            setQuery(currentValue);
            updateSearchInput(''); // 검색뒤에 검색input 빈칸
            setSearchTags((prev) => [...prev, currentValue]);
        }
    };

    //searchTags가 업데이트될때마다 스토리지에 값이 할당됨
    useEffect(() => {
        localStorage.setItem('searchTags', JSON.stringify(searchTags));
        //localStroage 값을 할당할때는 객체형태가 아니라 json으로
    }, [searchTags]);

    const searchTag = (tag) => {
        // //1. 현재 클릭 된 최근검색어로 검색 실행
        // setQuery(tag);
        // //2. 검색 창 input값 update
        // updateSearchInput(tag);
        console.log('hi');
    };

    //searchTag값 삭제함수 : index로
    const deleteTag = (idx) => {
        const newSearchTags = [...searchTags]; //1.복사
        newSearchTags.splice(idx, 1);
        setSearchTags(newSearchTags);
    };
    const onclickHandler = (e) => alert(e.target.value);
    return (
        <>
            <SearchBoxContainer>
                <SearchInputContainer>
                    <SearchIcon width="24" fill="#5e5e5e" />
                    <SearchInput
                        placeholder="검색어 입력 후 ENTER"
                        onKeyDown={onSearch}
                        ref={inputRef}
                        // 첫번째방식, 제어컴포넌트 (규정이나 옵션이 많으면, 제어로 관리)
                        // value={inputState}
                        // onChange={(e)=>setInputState(e.target.value)}
                    ></SearchInput>
                    <SearchOptionButton onClick={toggleSearchOption}>
                        검색 옵션 {searchOption ? '닫기' : '열기'}
                    </SearchOptionButton>
                    {/* <button name={'aa'} value={'bb'} onClick={onclickHandler}>butttttton</button> */}
                </SearchInputContainer>
                {searchOption && (
                    <SearchOption
                        setOrientation={setOrientation}
                        setOrder={setOrder}
                        setPerPage={setPerPage}
                    />
                )}
            </SearchBoxContainer>
            <SearchTagContainer>
                {searchTags.map((tag, idx) => (
                    <SearchTag
                        key={tag + idx}
                        tag={tag}
                        searchTag={() => {
                            searchTag(tag);
                        }}
                        deleteTag={() => deleteTag(idx)}
                    />
                ))}
            </SearchTagContainer>
        </>
    );
};

export default Search;
