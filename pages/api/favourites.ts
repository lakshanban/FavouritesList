// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ListItemType } from "../../components/list/list-item/types";
import db from "./data/index";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: Array<ListItemType> = db.get("items");

  if (req.method === "GET") {
    const favourites = data.filter((item) => item.product.isLiked);
    res.status(200).json(favourites);
  }

  if (req.method === "POST") {
    const itemId = req.body.itemId;
    const itemIndex = data.findIndex((item) => item.id == itemId);

    if (itemIndex > -1) {
      data[itemIndex].product.isLiked = !data[itemIndex].product.isLiked;
    }
    db.set("items", data);
    db.save();
    res.status(200).send("Added to favs");
  }
}
