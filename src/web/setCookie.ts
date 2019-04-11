import { addDays } from "../date/addDays";
import { getCookie } from "./getCookie";

/**
 * Sets a cookie
 * @param {string} name
 * @param {string} value
 * @param {string} path
 * @param {Date} expiration
 * @param {string} domain
 * @param {number} secure
 * @return number
 */
export const setCookie = (
  name: string,
  value: string,
  path?: string,
  expiration?: Date,
  domain?: string,
  secure?: number
): number => {
  path = path ? `;path=${path};` : "";
  expiration = expiration || addDays(new Date(), 1);
  document.cookie = `${name}=${escape(
    value
  )};expires=${expiration.toUTCString()}${path}`;
  return getCookie(name) === value ? 1 : 0;
};
