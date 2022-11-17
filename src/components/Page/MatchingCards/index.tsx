import { Shops, MapData } from "../../../constants/Types/Hotpepper";
import { CardSection } from "../../Templates/CardSection";
import { useEffect, useState } from "react";
import { PickApiData } from "../../../servises/Hotpepper/PickShops";
import { BackGroundImage } from "../../Organisms/BackGroundImage";
import { RESPONSE_PARAMS } from "../../../constants/Consts/Hotpepper/ResponseParams";

const mapData: MapData = {
  lat: 34.703261,
  lng: 135.495693,
  range: 5,
};

const initialData: Shops = [];

export const MatchingCards = () => {
  const [shops, setShops] = useState(initialData);

  useEffect(() => {
    const fetchShops = async () => {
      const response: Response = await fetch("/api/hotpepper");
      const data: JSON = await response.json();
      const shops: Shops = PickApiData(data, RESPONSE_PARAMS.SHOPS);

      setShops(shops);
    };
    fetchShops();
  }, []);

  return (
    <div>
      {/* {shops.map((item, index) => {
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
      })} */}
    </div>
  );
};
