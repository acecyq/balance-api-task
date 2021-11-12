import chai from "chai";
import sinon from "sinon";
import { computeUserBalances } from "./services/usersService.mjs";
import utils from "./utils.mjs";

const { expect } = chai;

describe("Compute User Balances", () => {
  before(() => {
    sinon
      .stub(utils, "getUsdBalance")
      .resolves(1000);
  });

  after(() => {
    utils.getUsdBalance.restore();
  })

  it("should compute user balances successfully", async () => {
    const actualUserBalance = await computeUserBalances(1);
    expect(actualUserBalance).to.equal(2000);
  });
});
