import { useEffect, useState } from 'react';
import { FetchSearchData } from '../../repositories/fetchData';
import { Shops, MapData } from '../../constants/Types/Hotpepper';

/**
 * 
 * @param mapData 
 */
export const TransrateObj = (mapData: MapData) => {

    const [shop, setShop] = useState(Object);
    useEffect(() => {
        FetchSearchData(mapData).then((res) => {
            try {
                console.log(res);
                const json: string = JSON.stringify(res);
                const obj = JSON.parse(json);
        
                const response: [string, string][] = Object.entries(obj);
                const results: string[] = Object.values(Object.values(response[0][1])[0]);

                console.log(results);
                const [
                    api_version,
                    results_available,
                    results_returned,
                    results_start,
                    shops,
                ] = [
                        results[0],
                        results[1],
                        results[2],
                        results[3],
                        results[4]
                    ];
                console.log(shops);

                const shopsJSON:string[] = Object.values(shops);

                console.log(shopsJSON[0]);

                setShop(shopsJSON);
            } catch (e) {
                throw e;
            }
        });
    })

    return shop;
};
