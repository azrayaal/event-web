export interface EventListTypes {
  _id: string;
  event_name: string;
  description: string;
  banner: string;
  date: string;
  time: string;
}

export interface TalentTypes {
  _id: string;
  talent_picture: string;
  talent_name: string;
}
export interface QuantityTypes {
  _id: string;
  nama: string;
  quantity: number;
}

export interface CategoryTypes {
  _id: string;
  item: any;
  key: string;
  category_name: string;
  price: number;
  category_qty: number;
  quantity: number;
  // quantity: QuantityTypes;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface RequestTypes {
  event_name: string;
  email: string;
  maps: string;
  location: string;
  agencyName: string;
  description: string;
}

export interface UserTypes {
  email: string;
  name: string;
  username: string;
  avatar: any;
  id: string;
  phoneNumber: string;
  password: string;
}

export interface RequestHistoryTypes {
  thumbnail: string;
  date: string;
  status: string;
  event_name: any;
  _id: string;
  description: string;
  location: string;
  key: string;
  maps: string;
  agencyName: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface TransactionHistoryTypes {
  banner: string;
  date: string;
  status: string;
  event_name: any;
  _id: string;
  id: string;
  description: string;
  location: string;
  key: string;
  maps: string;
  agencyName: string;
  name: string;
  email: string;
  historyTicketCat: any;
  createdAt: string;
}

export interface JWTPayloadsTypes {
  user: UserTypes;
  iat: string;
}
