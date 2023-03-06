const axios = require("axios");
require('dotenv').config()

/**
 Gets info about an item based on the item name
 @async
 @function getItem
 @param {string} [url_name] - url_name of an item (required). Example: "Mirage Prime" should be "mirage_prime"
 @param {string} [platform='pc'] - Return content for specified platform, default: pc. Available values : xbox, pc, ps4, switch
 @returns {Promise<Array>} - A Promise that resolves to an array of item objects
 @throws {Error} - If the API request fails or returns an error
 */
const getItem = async (item, platform = "pc") => {
    const response = axios.get()
}

module.exports = getItem;