export interface Mission {
    icon: string;
    id: string;
    url_name: string;
    thumb: string;
    name: string;
}

export interface Npc {
    thumb: string;
    url_name: string;
    name: string;
    id: string;
    icon: string;
}

export interface Location {
    node_name: string;
    max_level: number;
    thumb: string;
    icon: string;
    id: string;
    min_level: number;
    system_name: string;
    url_name: string;
}