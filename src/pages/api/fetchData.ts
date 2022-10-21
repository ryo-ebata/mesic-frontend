import axios from 'axios'

const URL = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/';
const KEY = '92997d822eb26031';

const CNF = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': "X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept"
    },
    params: {
        key: KEY,
        large_area: 'Z011',
        format: 'json'
    },
        
}

// axiosのインスタンス作成
// const hotpepper = axios.create ({
//     // baseURL: process.env.HOTPEPPER_ENDPOINT_URL
//     baseURL: 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/'
// })

export const FetchSearchData = async () => {
    try {
        console.log('success');
        return await axios.get(URL, CNF)
    } catch (err) {
        console.log(err);
    }
}
