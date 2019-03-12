export const charAt = (s: string, n: number): string => {
  let chars = Array.from(s);
  return ( n < 1 || n > chars.length) ? "" : chars[n-1] ;
}
