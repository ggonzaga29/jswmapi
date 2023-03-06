const axios = require("axios");
const config = require("../api.config");

/**
 Get a list of lich quirks
 @async
 @function getQuirks
 @param {string} [language='en'] - Asks the server to return content translated into the specified language, default: en.
 Available values : en, ru, ko, de, fr, pt, zh-hans, zh-hant, es, it, pl
 @returns {Promise<Array>} - A Promise that resolves to an array of item objects
 @throws {Error} - If the API request fails or returns an error
 */
const getQuirks = async (language = "en") => {
    try {
        const response = await axios.get(config.API_BASE_URL + `/lich/weapons`, {
            headers: {
                language
            }
        })

        return response.data.payload.item;
    } catch(error) {
        throw error;
    }
}

module.exports = getQuirks;