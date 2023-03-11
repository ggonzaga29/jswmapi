import {AllItems, Dropsource, Item, Order} from "./item";
// for sister and lich
import {Quirk, Weapon, Ephemera} from "./sharedInterfaces";
// misc
import {Mission, Npc, Location} from "./Misc";
// riven
import {Attribute, RivenItems} from "./Riven";

export default interface ResponsePayload {
    // item and riven
    items?: AllItems[] | RivenItems[];
    dropsources?: Dropsource[];
    item?: Item,
    orders?: Order[];
    // sister and lich
    quirks?: Quirk[];
    weapons?: Weapon[];
    ephemeras?: Ephemera[];
    // misc
    missions?: Mission[];
    npc?: Npc[];
    locations?: Location[];
    // riven
    attributes?: Attribute[];
}