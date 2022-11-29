import ListItem from "./list-item";
import { ListItemType } from "./list-item/types";
import styles from "../../styles/List.module.scss";
import React from "react";

type ListProps = {
  data: Array<ListItemType>;
};

const List: React.FunctionComponent<ListProps> = (props: ListProps) => {
  return (
    <div className={styles.listContainer}>
      {props.data.map((item: ListItemType) => (
        <ListItem item={item} key={item.id} />
      ))}
    </div>
  );
};
export default List;
