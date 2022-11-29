import React, { useState } from "react";
import styles from "../../styles/IconButton.module.scss";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

type Props = {
  icon?: string;
  onClick: Function;
  selected: boolean;
};

const IconButton: React.FunctionComponent<Props> = (props: Props) => {
  const [selected, setSelected] = useState<boolean>(props.selected);
  const onClick = () => {
    setSelected((prevState) => !prevState);
    props.onClick();
  };
  return (
    <div onClick={onClick}>
      <FavoriteOutlinedIcon
        color={selected ? "warning" : "inherit"}
        className={styles.iconButton}
        fontSize="large"
      />
    </div>
  );
};

export default IconButton;
