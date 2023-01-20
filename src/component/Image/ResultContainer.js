import styled from 'styled-components';
import React, { Suspend, useEffect, useState } from 'react';
import DummyData from '../../asset/dummyData';
import ImageCard from './ImageCard';
import Pagination from '../Pagination';
import ImageModal from './ImageModal';

import EmptyResult from '../EmptyResult';

// const ImageModal = React.lazy(()=> import('./ImageModal')); //imageModal을 동적으로 가져오기 //React.lazy 사용시 => yarn build 필요

const Container = styled.div`
    max-width: 1830px;
    margin: 8px auto;
    padding-right: 8px;
`;

const ResultsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const ResultContainer = ({ data, page, setPage, numOfPages }) => {
    const [currentImageDetail, setCurrentImageDetail] = useState(null);

    // console.log('current', currentImageDetail);
    return (
        <Container>
            {/* <Suspend> */}
            {/* ImgCard 클릭 시 해당 이미지의 정보로 ImageModal이 나타나야 합니다. */}
            {currentImageDetail && (
                <ImageModal
                    currentImageDetail={currentImageDetail}
                    setCurrentImageDetail={setCurrentImageDetail}
                />
            )}
            {data.hits?.length > 0 && (
                <Pagination
                    page={page}
                    setPage={setPage}
                    numOfPages={numOfPages}
                />
            )}
            {/* </Suspend> */}
            <ResultsWrapper>
                {data.hits?.length > 0 ? (
                    data.hits?.map((imgData) => (
                        <ImageCard
                            key={imgData.id}
                            imgData={imgData}
                            onClick={() => setCurrentImageDetail(imgData)}
                        />
                    ))
                ) : (
                    //{/* 검색 결과가 없을 시 페이지네이션과 ImgCard 목록 대신 EmptyResult가 렌더되어야 합니다. */}
                    // <EmptyResult />
                    <></>
                )}
            </ResultsWrapper>
        </Container>
    );
};

export default ResultContainer;
