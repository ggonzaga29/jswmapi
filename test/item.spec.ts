import { assert } from "chai";
import wm from "../main";

describe("Test Items", () => {
    it("getAll should return an array with all items", async () => {
        const allItems = await wm.item.getAll();
        const check = Array.isArray(allItems) && allItems.length > 0;
        assert.equal(check, true);
    });

    it("return gara prime blueprint id", async () => {
        const { id } = await wm.item.get("gara_prime_blueprint");
        assert.equal(id, "60ad4a1bf1904300d012c6ff")
    })
});