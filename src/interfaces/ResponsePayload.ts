import {AllItems, Dropsource, Item, Order} from "./item";
// for sister and lich
import {Quirk, Weapon, Ephemera} from "./sharedInterfaces";

export default interface ResponsePayload {
    items?: AllItems[];
    dropsources?: Dropsource[];
    item?: Item,
    orders?: Order[];
    quirks?: Quirk[];
    weapons?: Weapon[];
    ephemeras?: Ephemera[];
}