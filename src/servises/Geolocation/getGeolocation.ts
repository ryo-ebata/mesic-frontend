const optionObj = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 5000,
};

export type Locations = {
  lat: string;
  lng: string;
};

export const getGeolocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position: any) => {
      console.log("成功");
      const location: Locations = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      return location;
    },
    (error: any) => {
      console.log("失敗");
      alert("原因不明のエラーが発生しました…。");

      return location;
    },
    optionObj
  );

  if (!location) {
    const location: Locations = {
      lat: "35.6598003",
      lng: "139.7023894",
    };
  }

  return location;
};
