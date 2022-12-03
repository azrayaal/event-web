export interface EventListTypes {
  _id: string;
  event_name: string;
  description: string;
  banner: string;
}

export interface TalentTypes {
  _id: string;
  talent_picture: string;
  talent_name: string;
}

export interface CategoryTypes {
  _id: string;
  key: string;
  category_name: string;
  price: string;
}

export interface LoginTypes {
  email: string;
  password: string;
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

export interface JWTPayloadsTypes {
  user: UserTypes;
  iat: string;
}
