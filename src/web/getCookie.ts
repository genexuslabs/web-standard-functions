/**
 * Returns a string with the cookie’s value
 * @param {string } name The name of the cookie
 * @return {string} The cookie's valie
 */
export const getCookie = (name: string): string => {
  const searchName = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].replace(/^ +/g, "");
    if (cookie.indexOf(searchName) === 0) {
      return cookie.substring(searchName.length, cookie.length);
    }
  }
  return null;
};
