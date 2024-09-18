import { cookies } from "next/headers";

const ASSURANCE_WINDOW = 1000 * 10;

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
    return Date.now() - Number(cookies().get("user")?.value) < ASSURANCE_WINDOW;
  }
  return false;
};
