import { ListItemType } from "../../../components/list/list-item/types";
import { Database } from "simpl.db";

const db = new Database({
  dataFile: "./pages/api/data/data.json",
  autoSave: true,
});

const data: Array<ListItemType> = db.get("items");

export default db;
