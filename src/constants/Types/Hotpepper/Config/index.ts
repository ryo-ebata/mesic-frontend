export type Config = {
  headers: {
    "Access-Control-Allow-Origin": string;
    "Access-Control-Allow-Headers": string;
  };
  params: {
    [prop: string]: any;
  };
};
