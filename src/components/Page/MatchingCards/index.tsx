import { Shop, Shops } from "../../../constants/Types/Hotpepper";
import { CardSection } from "../../Templates/CardSection";
import { useEffect, useState } from "react";
import { BackGroundImage } from "../../Organisms/BackGroundImage";
import { generateQuery } from "../../../servises/Hotpepper/generateQuery";
import useSWR, { Fetcher } from "swr";

export type Locations = {
  lat: number;
  lng: number;
};

const fetcher: Fetcher<{ shop: Shops }, string> = (url: string) =>
  fetch(url).then((response) => response.json());

export const MatchingCards = () => {
  const [location, setLocation] = useState<Locations | null>(null);

  const params = location ? generateQuery(location) : null;

  const { data, error } = useSWR(
    params ? `/api/hotpepper/?${params}` : null,
    fetcher
  );

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
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.shop.map((item, index) => (
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
      ))}
    </div>
  );
};
