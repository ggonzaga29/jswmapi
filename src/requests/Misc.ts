import {Mission, Npc, Location} from "../interfaces/Misc";
import makeRequest from "./helpers/makeRequest";

const BASE_ENDPOINT = "";

const getMissions = async (): Promise<Mission[]> => {
    try {
        const { missions } = await makeRequest(`${BASE_ENDPOINT}/missions`)
        return missions;
    } catch (e) {
        throw e;
    }
}

const getNpc = async (): Promise<Npc[]> => {
    try {
        const { npc } = await makeRequest(`${BASE_ENDPOINT}/npc`)
        return npc;
    } catch (e) {
        throw e;
    }
}

const getLocations = async (): Promise<Location[]> => {
    try {
        const { locations } = await makeRequest(`${BASE_ENDPOINT}/locations`)
        return locations;
    } catch (e) {
        throw e;
    }
}

export const misc = {
    getMissions,
    getNpc,
    getLocations
}