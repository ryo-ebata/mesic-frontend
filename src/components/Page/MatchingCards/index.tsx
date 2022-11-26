import { Shops } from "../../../constants/Types/Hotpepper";
import { CardSection } from "../../Templates/CardSection";
import { useEffect, useState } from "react";
import { BackGroundImage } from "../../Organisms/BackGroundImage";
import { generateQuery } from "../../../servises/Hotpepper/generateQuery";

const initialShop: Shops = [];

export type Locations = {
  lat: number;
  lng: number;
};

export const MatchingCards = () => {
  const [shops, setShops] = useState(initialShop);
  const [location, setLocation] = useState({
    lat: 35.6598003,
    lng: 139.7023894,
  });
  const [isView, setIsView] = useState(false);

  const fetchShops = async (location: Locations) => {
    const params = generateQuery(location);
    const response: Response = await fetch(`/api/hotpepper?${params}`);
    const data = await response.json();
    setShops(data.shop);
  };

  const successCallback = (position: any) => {
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const errorCallback = (error: any) => {
    alert("位置情報を取得できませんでした。");
  };

  useEffect(() => {
    const View = async () => {
      await setIsView(false);
      await navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback
      );

      await fetchShops(location);
    };
    View();
    setIsView(true);
  }, [location]);

  if (!isView) {
    return <div>Loading...</div>;
  }
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
