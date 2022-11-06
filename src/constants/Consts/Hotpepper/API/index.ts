import { Config } from "../../../Types/Hotpepper";

const HOTPEPPER_SEACH_QUERY: string = process.env.HOTPEPPER_SEACH_QUERY!;
const HOTPEPPER_API_KEY: string = process.env.HOTPEPPER_API_KEY!;

// const HOTPEPPER_SEACH_QUERY: string = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
// const HOTPEPPER_API_KEY: string = "92997d822eb26031";

const HOTPEPPER_SEACH_CONFIG: Config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept",
  },
  params: {
    key: HOTPEPPER_API_KEY,
    keyword: "w",
    format: "json",
  },
};

export { HOTPEPPER_SEACH_QUERY, HOTPEPPER_API_KEY, HOTPEPPER_SEACH_CONFIG };
