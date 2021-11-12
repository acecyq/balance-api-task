import { computeUserBalances } from "../services/usersService.mjs";

export const getUserBalances = async (req, res) => {
  const { id } = req.params;
  const userBalances = await computeUserBalances(id);
  res.json(userBalances);
};
