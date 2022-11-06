import { Shop, Shops } from "../../constants/Types/Hotpepper";

/**
 * Hotpepper APIから取得したデータを必要なものだけ抜き出す。
 *
 * @param data JSON
 * @param param number
 * @returns Shops
 */
export const PickApiData = (data: JSON, param: number): Shops => {
  const response: [string, Shop][] = Object.entries(data);
  const results: Shops[] = Object.values(Object.values(response[0][1])[0]);

  return results[param];
};
