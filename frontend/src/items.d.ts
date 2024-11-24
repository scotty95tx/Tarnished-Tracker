export interface ItemSearch {
    id: string;
    name: string;
    image: string;
    description: string;
    type: string;
    effect: string;
}

export interface Attack {
    amount: number;
    name: string;
}

export interface WeaponSearch {
    id: string;
    category: string;
    image: string;
    weight: string;
    name: string;
    description: string;
    attack: Array<Attack>;
}