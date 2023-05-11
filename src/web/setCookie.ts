import { addDays } from "../date/addDays";
import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";
import { getCookie } from "./getCookie";

/**
 * Sets a cookie
 * @param {string} name
 * @param {string} value
 * @param {string} path
 * @param {GxDate} expiration
 * @param {string} domain
 * @param {number} secure
 * @return number
 */
export const setCookie = (
  name: string,
  value: string,
  path?: string,
  expiration?: GxDate | GxDatetime,
  domain?: string,
  secure?: number
): number => {
  path = path ? `;path=${path};` : "";

  if (expiration instanceof GxDate) {
    expiration = expiration || addDays(new GxDate(), 1);
  } else if (expiration instanceof GxDatetime) {
    expiration = expiration || addDays(new GxDatetime(), 1);
  } else {
    expiration = addDays(new GxDatetime(), 1);
  }

  document.cookie = `${name}=${escape(
    value
  )};expires=${expiration.toUTCString()}${path}`;
  return getCookie(name) === value ? 1 : 0;
};
