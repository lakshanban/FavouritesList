export type User = {
  name: string;
  imageUrl: string;
};

export type Product = {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  likes: number;
  tags: string;
  isLiked: boolean;
};

export type ListItemType = {
  id: string;
  user: User;
  product: Product;
};
