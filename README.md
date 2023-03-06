# jswmapi 
(currently only implementing GET requests)

**jswmapi** is a JavaScript API Client for Warframe.Market, which allows you to programmatically access data from Warframe.Market. Warframe.Market is a website that allows Warframe players to buy and sell in-game items with each other.

This API provides an easy-to-use interface for retrieving data from Warframe.Market. With **jswmapi**, you can retrieve information about specific items, retrieve a list of items currently for sale, and more.

## Installation
```bash
npm install jswmapi
```
## Usage
```js
const JSWMapi = require('jswmapi');
const jswmapi = new JSWMapi();
```
Once you have an instance of the JSWMapi class, you can use its methods to retrieve data from Warframe.Market.

## Retrieving item information
To retrieve information about a specific item, use the getItem method:

```js
jswmapi.getItem('Nikana Prime', 'PC')
.then(item => console.log(item))
.catch(err => console.error(err));
```
The getItem method takes two arguments: the name of the item and the platform (either 'PC', 'PS4', or 'XB1').

The getItem method returns a Promise that resolves with an object containing information about the item, including its name, description, and current lowest and highest sale prices.

## Retrieving items for sale
To retrieve a list of items currently for sale, use the getItemsForSale method:

js
Copy code
jswmapi.getItemsForSale('Nikana Prime', 'PC')
.then(items => console.log(items))
.catch(err => console.error(err));
The getItemsForSale method takes two arguments: the name of the item and the platform (either 'PC', 'PS4', or 'XB1').

The getItemsForSale method returns a Promise that resolves with an array of objects, where each object represents an item for sale. Each object contains information about the item, including its price, seller, and the quantity available.

## Contributing
Feel free to contribute!

## Sources
[Warframe Market API Docs](https://warframe.market/api_docs)

[pywmapi](https://github.com/leonardodalinky/pywmapi)