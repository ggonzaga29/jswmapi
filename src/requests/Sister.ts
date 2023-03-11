import { quirks, weapons, ephemeras } from "./helpers/sharedEndpoint";
import {Quirk, Weapon, Ephemera} from "../interfaces/sharedInterfaces";

const BASE_ENDPOINT = "/sister";
const getWeapons = async (): Promise<Weapon[]> => {
    return await weapons(BASE_ENDPOINT);
};

const getQuirks = async (): Promise<Quirk[]> => {
    return await quirks(BASE_ENDPOINT);
};

const getEphemeras = async (): Promise<Ephemera[]> => {
    return await ephemeras(BASE_ENDPOINT);
};

export const sister = {
    getWeapons,
    getQuirks,
    getEphemeras
}