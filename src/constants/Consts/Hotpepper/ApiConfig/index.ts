import { Config } from "../../../Types/Hotpepper";
import { HOTPEPPER_API_KEY } from "../ApiKey";

const HOTPEPPER_SEACH_CONFIG: Config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept",
  },
  params: {
    keyword: "w",
    format: "json",
  },
};

export { HOTPEPPER_SEACH_CONFIG };
