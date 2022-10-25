import { Config } from "../../../Types/Hotpepper";

const URL: string = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/';
const KEY: string = '92997d822eb26031';

const CNF: Config  = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': "X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept"
    },
    params: {
        key: KEY,
        format: 'json'
    },
}

export {URL, KEY, CNF}
