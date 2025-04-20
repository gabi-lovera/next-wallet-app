import { createStore } from "zustand/vanilla";

export type User = {
  login: {
    uuid: string;
  };
  email: string;
  name: {
    first: string;
    last: string;
  };
  phone: string;
  location: {
    city: string;
    state: string;
    street: {
      number: number;
      name: string;
    };
  };
  picture: {
    thumbnail: string;
  };
  dob: { date: string; age: number };
};

export type UserState = {
  userInfo?: User;
};

export type UserStore = UserState;

export const defaultInitState: UserState = {};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()(() => ({
    ...initState,
  }));
};
