export interface Attribute {
    positive_is_negative: boolean;
    prefix: string;
    negative_only: boolean;
    exclusive_to?: (string)[] | null;
    effect: string;
    id: string;
    suffix: string;
    units: string;
    search_only: boolean;
    url_name: string;
    group: string;
}

export interface RivenItems {
    url_name: string;
    riven_type: string;
    icon: string;
    mastery_level: number;
    id: string;
    item_name: string;
    icon_format: string;
    thumb: string;
    group: string;
}