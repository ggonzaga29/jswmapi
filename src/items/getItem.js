const axios = require("axios");
const config = require("../api.config");

/**
 Gets info about an item based on the item name
 @async
 @function getItem
 @param {string} [item] - url_name of an item (required). Example: "Mirage Prime" should be "mirage_prime"
 @param {string} [platform='pc'] - Return content for specified platform, default: pc. Available values : xbox, pc, ps4, switch
 @returns {Promise<Array>} - A Promise that resolves to an array of item objects
 @throws {Error} - If the API request fails or returns an error
 */
const getItem = async (item, platform = "pc") => {
    try {
        const response = await axios.get(config.API_BASE_URL + `/items/${item}`, {
            headers: {
                platform
            }
        })

        return response.data.payload;
    } catch(error) {
        throw error;
    }
}

module.exports = getItem;