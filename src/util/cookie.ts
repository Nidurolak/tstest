import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name :string, data :string) => {
  const expires = new Date();
  expires.setHours(expires.getHours() + 1);
  return cookies.set(name, data, {
    expires,
  });
};

export const getCookie = (name :string) => {
  return cookies.get(name);
};

export const removeCookie = (name :string, options :any) => {
  return cookies.remove(name, {
    ...options,
  });
};
