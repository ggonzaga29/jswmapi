// Quirk, Weapon, and Ephemera are all shared interfaces for sister and lich

export interface Quirk {
    url_name: string;
    item_name: string;
    group: string;
    description: string;
    id: string;
}

export interface Weapon {
    url_name: string;
    icon_format: string;
    item_name: string;
    thumb: string;
    icon: string;
    id: string;
}

export interface Ephemera {
    url_name: string;
    icon: string;
    item_name: string;
    id: string;
    icon_format: string;
    animation: string;
    thumb: string;
    element: string;
    animation_format: string;
}


