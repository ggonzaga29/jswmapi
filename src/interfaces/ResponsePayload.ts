import {AllItems, Dropsource, Item, Order} from "./item";

export default interface ResponsePayload {
    items?: AllItems[];
    dropsources?: Dropsource[];
    item: Item,
    orders: Order[];
}