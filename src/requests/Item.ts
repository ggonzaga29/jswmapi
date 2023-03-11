import makeRequest from "./helpers/makeRequest";
import {AllItems, Dropsource, Item, Order} from "../interfaces/item";
import {RivenItems} from "../interfaces/Riven";

const BASE_ENDPOINT = "/items";

// TODO: fix this shit
const getAll = async (): Promise<AllItems[] | RivenItems[]> => {
    try {
        const {items} = await makeRequest(BASE_ENDPOINT);
        return items;
    } catch (e) {
        throw e;
    }
}

const get = async (itemName: string): Promise<Item> => {
    try {
        const {item} = await makeRequest(`${BASE_ENDPOINT}/${itemName}`);
        return item;
    } catch (e) {
        throw e;
    }
}

const getOrders = async (itemName: string): Promise<Order[]> => {
    try {
        const {orders} = await makeRequest(`${BASE_ENDPOINT}/${itemName}/orders`);
        return orders;
    } catch (e) {
        throw e;
    }
}

const getDropSources = async (itemName: string): Promise<Dropsource[]> => {
    try {
        const {dropsources} = await makeRequest(`${BASE_ENDPOINT}/${itemName}/dropsources`)
        return dropsources;
    } catch (e) {
        throw e;
    }
}

export const item = {
    getAll,
    get,
    getOrders,
    getDropSources
}

