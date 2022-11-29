// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ListItemType } from "../../components/list/list-item/types";
import db from "./data/index";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: Array<ListItemType> = db.get("items");
  if (req.method === "GET") {
    res.status(200).json(data);
    return;
  }

  res.status(404).send("Not Found");
}
