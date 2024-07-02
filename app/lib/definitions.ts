export type MenuItemImage = {
  id: string;
  type: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
};

// export type MenuItemNoImage = {
//   id: string;
//   type: string;
//   name: string;
//   price: number;
// };

export type FeedBackMessage = {
  id: string;
  name: string;
  contact: string;
  customermessage: string;
  date: string;
};

export type StoreInfo = {
  openinghours: string;
  specials: string;
  phone: string;
  address: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
