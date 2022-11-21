import { Shops } from "../../../constants/Types/Hotpepper";
import { CardSection } from "../../Templates/CardSection";
import { useEffect, useState } from "react";
import { BackGroundImage } from "../../Organisms/BackGroundImage";
import {
  getGeolocation,
  Locations,
} from "../../../servises/Geolocation/getGeolocation";
import { generateQuery } from "../../../servises/Hotpepper/generateQuery";

const initialShop: Shops = [];

export const MatchingCards = () => {
  const [shops, setShops] = useState(initialShop);

  const fetchShops = async (location: Locations) => {
    const params = generateQuery(location);
    const response: Response = await fetch(`/api/hotpepper?${params}`);
    const data = await response.json();
    setShops(data.shop);
    console.log(data.shop);
  };
  useEffect(() => {
    const location: Locations = getGeolocation();
    fetchShops(location);
  }, []);

  return (
    <div>
      {shops.map((item, index) => {
        return (
          <div key={index}>
            <BackGroundImage image={item.photo.pc.l} />
            <CardSection
              image={item.photo.pc.l}
              title={item.name}
              copy={item.catch}
              content={item.genre.name}
              variant="body2"
              color="text.secondary"
              component="p"
            />
          </div>
        );
      })}
    </div>
  );
};
