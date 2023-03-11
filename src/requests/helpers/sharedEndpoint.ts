import { Quirk, Weapon, Ephemera } from "../../interfaces/sharedInterfaces";
import makeRequest from "../makeRequest";

export const quirks = async (endpoint: string): Promise<Quirk[]> => {
    try {
        const { quirks } = await makeRequest(`${endpoint}/quirks`);
        return quirks;
    } catch (e) {
        throw e;
    }
};

export const weapons = async (endpoint: string): Promise<Weapon[]> => {
    try {
        const { weapons } = await makeRequest(`${endpoint}/weapons`);
        return weapons;
    } catch (e) {
        throw e;
    }
};

export const ephemeras = async (endpoint: string): Promise<Ephemera[]> => {
    try {
        const { ephemeras } = await makeRequest(`${endpoint}/ephemeras`);
        return ephemeras;
    } catch (e) {
        throw e;
    }
};