import { userBalances } from "../data/users.mjs";
import utils from "../utils.mjs";

export const computeUserBalances = async (id) => {
  const user = userBalances[`user-${id}`];

  let userBtcBalance = 0;
  let userEthBalance = 0;

  if (user.BTC) {
    userBtcBalance = await utils.getUsdBalance(
      "https://www.bitstamp.net/api/v2/ticker/btcusd",
      user.BTC
    );
  }

  if (user.ETH) {
    userEthBalance = await utils.getUsdBalance(
      "https://www.bitstamp.net/api/v2/ticker/ethusd",
      user.ETH
    );
  }

  return userBtcBalance + userEthBalance;
};
