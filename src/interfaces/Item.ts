export interface AllItems extends Array<Object> {
    "url_name": string,
    "item_name": string,
    id: string,
    thumb: string
}

export interface Dropsource {
    type: string,
    item: string,
    relic: string,
    rates: {
        intact: number,
        exceptional: number,
        flawless: number,
        radiant: number
    },
    rarity: string,
    id: string
}

interface LanguageTranslation {
    item_name: string,
    description: string,
    wiki_link: string,
    drop: Array<any>
}

interface ItemsInSet extends Array<Object> {
    url_name: string,
    id: string,
    ducats?: number,
    thumb?: string,
    icon?: string,
    mastery_level?: number,
    set_root?: boolean,
    sub_icon?: string,
    quantity_for_set?: number,
    tags?: Array<string>,
    icon_format?: string,
    trading_tax?: number,
    en?: LanguageTranslation,
    ru: LanguageTranslation,
    ko: LanguageTranslation,
    fr: LanguageTranslation,
    sv: LanguageTranslation,
    de: LanguageTranslation,
    "zh-hant": LanguageTranslation,
    "zh-hans": LanguageTranslation,
    pt: LanguageTranslation,
    es: LanguageTranslation,
    pl: LanguageTranslation,
    cs: LanguageTranslation,
    uk: LanguageTranslation
}

export interface Item {
    id: string,
    items_in_set?: ItemsInSet[];
}

interface User {
    reputation: number;
    locale: string;
    last_seen: Date;
    ingame_name: string;
    id: string;
    region: string;
    avatar?: any;
    status: string;
}

export interface Order {
    platinum: number;
    order_type: string;
    quantity: number;
    user: User;
    platform: string;
    creation_date: Date;
    last_update: Date;
    visible: boolean;
    id: string;
    region: string;
}
