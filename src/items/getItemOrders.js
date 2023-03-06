const axios = require("axios");
const config = require("../api.config");

/**
 Gets orders for an item based on the item name
 @async
 @function getItemOrders
 @param {string} [item] - url_name of an item (required). Example: "Mirage Prime Blueprint" should be "mirage_prime_blueprint"
 @param {string} [platform='pc'] - Return content for specified platform, default: pc. Available values : xbox, pc, ps4, switch
 @returns {Promise<Array>} - A Promise that resolves to an array of item objects
 @throws {Error} - If the API request fails or returns an error
 */
const getItemOrders = async (item, platform = "PC",) => {
    try {
        const response = await axios.get(config.API_BASE_URL + `/items/${item}/orders`, {
            headers: {
                platform
            }
        })

        return response.data.payload.orders;
    } catch(error) {
        throw error;
    }
}

module.exports = getItemOrders;