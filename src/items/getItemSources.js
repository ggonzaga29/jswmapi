const axios = require("axios");
const config = require("../api.config");

/**
 Gets orders for an item based on the item name
 @async
 @function getItemSources
 @param {string} [item] - url_name of an item (required). Example: "Mirage Prime Blueprint" should be "mirage_prime_blueprint"
 @param {string} [language='en'] - Return content translated into the specified language, default: en
 (Available values: en, ru, ko, de, fr, pt, zh-hans, zh-hant, es, it, pl)
 @returns {Promise<Array>} - A Promise that resolves to an array of item objects
 @throws {Error} - If the API request fails or returns an error
 */
const getItemSources = async (item, language = "en") => {
    try {
        const response = await axios.get(config.API_BASE_URL + `/items/${item}/dropsources`, {
            headers: {
                language
            }
        })

        return response.data.payload.dropsources;
    } catch(error) {
        throw error;
    }
}

module.exports = getItemSources;