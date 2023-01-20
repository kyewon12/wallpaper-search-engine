import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ToggleThemeButton from './component/ToggleThemeButton';
import Hero from './component/Hero';
import ResultContainer from './component/Image/ResultContainer';
import Footer from './component/Footer';
import './App.css';
import getWallPapers from './api/getWallPapers';
import EmptyResult from './component/EmptyResult';
import Title from './component/Title';
import Search from './component/Search/Search';

const Container = styled.div`
    position: relative;
    background-color: var(--primary);
    min-height: 100vh;
`;

const Header = styled.div`
    position: relative;
    width: 100%;
    background-color: var(--secondary);

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 120px 32px 16px 32px;
`;

function App() {
    const [data, setData] = useState({ total: 0, totalHits: 0, hits: [] }); //{} : 객체 / []:배열 //타입 정해주기
    const [query, setQuery] = useState(''); //쿼리스트링은 항상 문자열
    const [orientation, setOrientation] = useState('vertical');
    const [order, setOrder] = useState('popular');
    const [page, setPage] = useState(1); //현재페이지값
    const [perPage, setPerPage] = useState(20); //한페이지당 몇개를 보여줄지
    const target = useRef(null);
    // const data = DummyData;

    //총 페이지 수 구하기
    const numOfPages = data.totalHits ? Math.ceil(data.totalHits / perPage) : 0;

    useEffect(() => {
        const fetch = async () => {
            const data = await getWallPapers({
                //pixabay api parameter
                q: query, //검색키워드
                orientation: orientation, //option - 이미지의 방향(가/세로) 필터링 : all(기본값),horizontal, vertical
                order: order, //결과가 어떤기준으로 정렬되는지 : popular(기본값),latest
                page: page, //현재페이지값
                per_page: perPage, //한페이지당 몇개를 보여줄지
            }); //함수안에 바로 .json()로 변환
            // setData(data); //페이지네이션 할때 사용
            if (page === 1) {
                setData(data); //새로가져온 데이터로 갈아끼우기
            } else {
                setData((prevData) => ({
                    ...prevData,
                    hits: [...prevData.hits, ...data.hits],
                })); //기존값이 누적 - 무한스크롤 구현
                //무한스크롤을 통해서 추가페이지 불러오기 : 누적
            }
        };
        fetch();
    }, [query, orientation, order, page, perPage]);
    //query(검색어) 업데이트마다 api실행
    console.log(data);

    //observer 콜백함수
    const callback = ([entries]) => {
        //두개의 매개변수를 받는다. 정의되어있음. (entries,observer)
        if (entries.isIntersecting) {
            //page + 1
            setPage((prev) => prev + 1);
        }
    };
    //무한스크롤 IntersectionObserver API 함수
    useEffect(() => {
        if (!target.current) return;
        const observer = new IntersectionObserver(callback, { threshold: 1 }); //threshold : 1 - viewport의 100%에 들어왔을때 콜백함수 실행
        observer.observe(target.current);
    }, []);

    //요것을 하지않으면, 검색어가 누적이되어 보여진다.
    useEffect(() => {
        setPage(1);
    }, [query, orientation, order, page, perPage]);

    //1. 검색결과 없을때 - 로딩중x/검색결과가 없습니다.o
    //2. 모두 다 검색되었을때 - 로딩중x/검색결과가 없습니다.x
    return (
        <>
            <Container>
                <Header>
                    <Title />
                    <Search
                        setQuery={setQuery}
                        setOrientation={setOrientation}
                        setOrder={setOrder}
                        setPerPage={setPerPage}
                    />
                </Header>
                {/* <Hero
                    setQuery={setQuery}
                    setOrientation={setOrientation}
                    setOrder={setOrder}
                    setPerPage={setPerPage}
                /> */}
                <ResultContainer
                    data={data}
                    page={page}
                    setPage={setPage}
                    numOfPages={numOfPages}
                />
                {/* 현재페이지가 총페이지(숫자)와 같지 않을때만 보이게/같으면 보이지않게  ? 왜냐면, 2.*/}
                {page !== numOfPages && (
                    <div ref={target}>
                        <EmptyResult isLoading={data.totalHits} />{' '}
                        {/*data.totalHits ===0 => false*/}
                    </div>
                )}
                <Footer />
                <ToggleThemeButton />
            </Container>
        </>
    );
}

export default App;
