import request from './request';

// https://pixabay.com/api/?key={ 개인 API Key }&q=yellow+flowers&image_type=photo

const BASE_URL = 'https://pixabay.com/api';

const defaultParam = {
    key: process.env.REACT_APP_PIXABAY,
};

const example = {
    q: 'coffee',
};

const getWallPapers = async (paramObj) => {
    const params = new URLSearchParams({
        ...defaultParam,
         ...paramObj,
    }).toString();
    // 'foo=1&bar=2' 형식으로 나타남
    const result = await request(
        // `${BASE_URL}/?key=${process.env.REACT_APP_PIXABAY}`
        `${BASE_URL}/?${params}`
    );
    return result;
};

export default getWallPapers;
