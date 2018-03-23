export const shortenDescription = string =>
  string.length > 140 ? `${string.slice(0,140)}...` : string;
