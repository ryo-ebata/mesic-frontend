import { Shop } from "../../constants/Types/Hotpepper";

/**
 * Hotpepper APIから取得したデータを必要なものだけ抜き出す。
 * paramは、
 * 0 = api_version,
 * 1 = results_available,
 * 2 = results_returned,
 * 3 = results_start,
 * 4 = shops,
 * 
 * @param data JSON
 * @param param number
 * @returns Shops
 */
export const PickApiData = (data: JSON, param: 0 | 1 | 2 | 3 | 4) => {
    const response: [string, string][] = Object.entries(data);
    const results: string[] = Object.values(Object.values(response[0][1])[0]);

    return results[param];
    
}
