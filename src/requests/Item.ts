import makeRequest from "./makeRequest";
import {AllItems, Dropsource, Item, Order} from "../interfaces/item";

const BASE_ENDPOINT = "/items";

export const getAll = async (): Promise<AllItems[]> => {
    try {
        const {items} = await makeRequest(BASE_ENDPOINT);
        return items;
    } catch (e) {
        throw e;
    }
}

export const get = async (itemName: string): Promise<Item> => {
    try {
        const {item} = await makeRequest(`${BASE_ENDPOINT}/${itemName}`);
        return item;
    } catch (e) {
        throw e;
    }
}

export const getOrders = async (itemName: string): Promise<Order> => {
    try {
        const {orders} = await makeRequest(`${BASE_ENDPOINT}/${itemName}/orders`);
        return orders;
    } catch (e) {
        throw e;
    }
}

export const getDropSources = async (itemName: string): Promise<Dropsource[]> => {
    try {
        const {dropsources} = await makeRequest(`${BASE_ENDPOINT}/${itemName}/dropsources`)
        return dropsources;
    } catch (e) {
        throw e;
    }
}

