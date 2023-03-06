const axios = require("axios");
const config = require("../api.config");

/**
 Retrieves items from the API based on the specified language
 @async
 @function getItems
 @param {string} [language='en'] - Return content translated into the specified language, default: en
 (Available values: en, ru, ko, de, fr, pt, zh-hans, zh-hant, es, it, pl)
 @returns {Promise<Array>} - A Promise that resolves to an array of item objects
 @throws {Error} - If the API request fails or returns an error
 */
const getItems = async (language = "en") => {
    try {
        const response = await axios.get(config.API_BASE_URL + '/items', {
            headers: {
                language
            }
        })

        return response.data.payload.items;
    } catch(error) {
        throw error;
    }
}

module.exports = getItems;