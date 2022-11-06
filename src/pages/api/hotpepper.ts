import type { NextApiRequest, NextApiResponse } from "next";
import { HOTPEPPER_SEACH_CONFIG } from "../../constants/Consts/Hotpepper/Config";
import { HOTPEPPER_SEACH_QUERY } from "../../constants/Consts/Hotpepper/API";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = new URLSearchParams(HOTPEPPER_SEACH_CONFIG.params);
  const response = await fetch(`${HOTPEPPER_SEACH_QUERY}?${params}`);
  const shops = await response.json();

  res.status(200).json({ shops });
}
