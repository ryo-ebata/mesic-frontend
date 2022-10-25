import type { NextApiRequest, NextApiResponse } from 'next'
import { URL, CNF } from '../../constants/Consts/Hotpepper/API'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const params = new URLSearchParams(CNF.params); 
    const response = await fetch(`${URL}?${params}`)
    const shops = await response.json()

    res.status(200).json({ shops })
}
