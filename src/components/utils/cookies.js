import { Cookies } from "react-cookie";

const cookies = new Cookies();
const EXPIRE_TIME = 1000 * 60 * 60 * 5;

export const setCookie = (name, value) => {
  return cookies.set(name, value, {
    path: "/",
    httponly: true,
    expires: new Date(Date.now() + EXPIRE_TIME),
  });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name, options = {}) => {
  return cookies.remove(name, options);
};
