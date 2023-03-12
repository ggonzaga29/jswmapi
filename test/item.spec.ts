import { assert, expect } from "chai";
import wm from "../main";

function checkIfObjectHasProperties(obj, expectedProperties) {
  expect(obj).to.have.all.keys(expectedProperties);
}

describe("Test Items", () => {
  it("getAll should return an array with all items", async () => {
    const allItems = await wm.item.getAll();
    expect(allItems).to.be.an("array").that.is.not.empty;
  });

  it("Return gara prime blueprint id", async () => {
    const { id } = await wm.item.get("gara_prime_blueprint");
    assert.equal(id, "60ad4a1bf1904300d012c6ff");
  });

  it("Orders should return an array of objects with the expected properties", async () => {
    const orders = await wm.item.getOrders("gara_prime_blueprint");
    expect(orders).to.be.an("array").that.is.not.empty;
    // Check that each object in the array has the expected properties (limited to 20)
    for (let i = 0; i < 20; i++) {
      if (i === 20) break;
      checkIfObjectHasProperties(orders[i], [
        "platinum",
        "order_type",
        "quantity",
        "user",
        "platform",
        "creation_date",
        "last_update",
        "visible",
        "id",
        "region",
      ]);
    }
  });
});
