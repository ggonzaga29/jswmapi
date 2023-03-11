import {Attribute, RivenItems} from "../interfaces/Riven";
import makeRequest from "./helpers/makeRequest";
import {AllItems} from "../interfaces/Item";

const BASE_ENDPOINT = "/riven";

const getAttributes = async (): Promise<Attribute[]> => {
    try {
        const { attributes } = await makeRequest(`${BASE_ENDPOINT}/attributes`)
        return attributes;
    } catch (e) {
        throw e;
    }
}

// TODO: fix this shit
const getItems = async (): Promise<AllItems[] | RivenItems[]> => {
    try {
        const { items } = await makeRequest(`${BASE_ENDPOINT}/items`)
        return items;
    } catch (e) {
        throw e;
    }
}

export const riven = {
    getAttributes,
    getItems
}