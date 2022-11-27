import { HOTPEPPER_API_KEY } from "../../constants/Consts/Hotpepper/ApiKey";
import { HOTPEPPER_SEACH_QUERY } from "../../constants/Consts/Hotpepper/ApiUrl";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query: {} = req.query;
  const params = new URLSearchParams(query);
  const response: Response = await fetch(
    `${HOTPEPPER_SEACH_QUERY}?key=${HOTPEPPER_API_KEY}&${params}`
  );
  const { results } = await response.json();

  res.status(200).json(results);
}
