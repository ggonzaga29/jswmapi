import * as wm from "./src";

// wm.item.getItem("mirage_prime_blueprint").then(item => console.log(item.id));
// wm.item.getItemOrders("mirage_prime_blueprint").then(item => console.log(item));

(async () => {
    // wm.item.getItems().then(item => console.log(item));
    // wm.item.getItem("mirage_prime_blueprint").then(item => console.log(item));
    // wm.item.getItemOrders("mirage_prime_blueprint").then(orders => console.log(orders));
    // wm.item.getItemSources("mirage_prime_blueprint").then(sources => console.log(sources))

    // const weapons = await wm.liches.getWeapons();
    // const ephemeras = await wm.liches.getEphemeras();
    // const quirks = await wm.liches.getQuirks();

    // const weapons = await wm.sister.getWeapons();
    // const ephemeras = await wm.sister.getEphemeras();
    // const quirks = await wm.sister.getQuirks();
    //
    // console.log(weapons.length, ephemeras.length, quirks.length);

    const allItems = await wm.item.getAll();

    const miragePrimeDropSources = await wm.item.getDropSources("mirage_prime_blueprint");
    miragePrimeDropSources.forEach(dropsource => {
        console.log(dropsource);
    })

    // const miragePrimeBP = await wm.item.get("mirage_prime_blueprint");
    // console.log(miragePrimeBP)
    // miragePrimeBP.items_in_set.forEach(item => {
    //     console.log(item.en);
    // })

    // const orders = await wm.item.getOrders("mirage_prime_blueprint")

    // console.log(allItems)
    // const rivenItems = await wm.riven.getItems();
    // const rivenAttributes = await wm.riven.getAttributes();
    // console.log(rivenItems.length, rivenAttributes.length)
})()

