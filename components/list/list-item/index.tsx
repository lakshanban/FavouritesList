import React from "react";
import addRemoveFromFavourites from "../../../services/add-remove-favourties";
import styles from "../../../styles/ListItem.module.scss";
import IconButton from "../../icon-button";
import { ListItemType } from "./types";
import FavoriteIcon from "@mui/icons-material/Favorite";

type ListItemProp = {
  item: ListItemType;
};

const ListItem: React.FunctionComponent<ListItemProp> = (
  props: ListItemProp
) => {
  const { user, product, id } = props.item;
  const onClickHandler = () => {
    addRemoveFromFavourites(id);
  };
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <div className={styles.imageContainer}>
          <img src={user.imageUrl} />
        </div>
        <div className={styles.nameContainer}>
          <p>{user.name}</p>
        </div>
      </div>

      <div className={styles.productContainer}>
        <div className={styles.productImageContainer}>
          <img src={product.imageUrl} />
          <div className={styles.contentOnImage}>
            <div className={styles.textOnImage}>
              <p>{product.name}</p>
              <h3>AED ${product.price}</h3>
            </div>
            <div className={styles.buttonOnImage}>
              <IconButton selected={product.isLiked} onClick={onClickHandler} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.likesContainer}>
          <span>
            <FavoriteIcon fontSize="inherit" /> {product.likes} likes
          </span>
        </div>
        <div className={styles.textDescContainer}>{product.description}</div>
        <div className={styles.tagsContainer}>{product.tags}</div>
        <div className={styles.commentsContainer}>view 12 comments</div>
      </div>

      <hr />
    </div>
  );
};

export default ListItem;
