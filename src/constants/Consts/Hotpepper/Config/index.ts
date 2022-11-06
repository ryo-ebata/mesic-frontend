import { Config } from "../../../Types/Hotpepper";

const HOTPEPPER_API_KEY: string = process.env.HOTPEPPER_API_KEY!;

const HOTPEPPER_SEACH_CONFIG: Config = {
  params: {
    key: HOTPEPPER_API_KEY,
    keyword: "w",
    format: "json",
  },
};

export { HOTPEPPER_API_KEY, HOTPEPPER_SEACH_CONFIG };
