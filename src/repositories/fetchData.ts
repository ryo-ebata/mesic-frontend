import axios from 'axios';
import { URL, CNF } from '../constants/Consts/Hotpepper/API';
import { MapData } from '../constants/Types/Hotpepper/MapData';

export const FetchSearchData = async (mapData: MapData) => {

    console.log("パラメータを付与します。");
    [
        CNF.params.lat,
        CNF.params.lng,
        CNF.params.range
    ] = [
        mapData.lat,
        mapData.lng,
        mapData.range
    ];
    
    try {
        console.log('success');
        return await axios.get(URL, CNF);
    } catch (err) {
        console.log(err);
    }
}

