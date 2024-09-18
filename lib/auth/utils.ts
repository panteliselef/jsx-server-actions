import { cookies } from "next/headers";

const ONE_MINUTE = 1000 * 60;

export const isSignedIn = () => {
  if (cookies().has("user")) {
    return Number(cookies().get("user")?.value) !== 0;
  }
  return false;
};

export const isSignedOut = () => {
  return !isSignedIn();
};

export const isAssured = () => {
  if (cookies().has("user")) {
    return Date.now() - Number(cookies().get("user")?.value) < ONE_MINUTE;
  }
  return false;
};
