import fetch from "node-fetch";

const getUsdBalance = async (url, currency) => {
  const response = await fetch(url);
  const ticker = await response.json();
  return ticker.ask * currency;
};

export default { getUsdBalance };
